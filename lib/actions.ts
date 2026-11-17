'use server'
import {getServerSession} from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import type { NewReview } from "../data/reviews"
import {fetchOk, API_URL} from "./utils"
import {getUserData} from "./user"
import { getCarsByIds } from "./api";
import type {Car} from "../data/cars.ts"
import { redirect } from "next/navigation";
import { getCar } from "./api";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function postReview(carId: string, rating: number, comment: string): Promise<void> {
    const session = await getServerSession(authOptions)
    const userName = session?.user?.name 
    const userAvatar = session?.user?.image 
    const userRol = "Verified Customer"
    
    if (!userName || !userAvatar) {
        throw new Error("Unauthenticated")
    }

    const review: NewReview = {
        carId,
        user: { name: userName, avatar: userAvatar, role: userRol },
        rating,
        comment,
        date: new Date().toISOString().slice(0, 10),
    }

    await fetchOk(`${API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
    })
}

export async function saveRecentCar(carId: string): Promise<void> {
    const userData = await getUserData()
    if (!userData) return

    const currentRecent: string[] = userData.recentCars
    const newRecent = [carId, ...currentRecent.filter((id) => id !== carId)].slice(0, 10)
    

    await fetchOk(`${API_URL}/users/${userData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ recentCars: newRecent }),
    })
   
}

export async function getFavoriteCars(count?: number): Promise<Car[]>{
    const userData = await getUserData()
    if (!userData) {
        redirect("/login")
    }
    
    const ids = userData?.favorites || []
    
    const favoritesIds = count ? ids.slice(0, count) : ids
    
    const favorites = await getCarsByIds(favoritesIds)

    return favorites || []
}


export async function getRecentCars(count?: number): Promise<Car[]>{
    const userData = await getUserData()
    if (!userData) {
        redirect("/login")
    }
    
    const ids = userData?.recentCars || []
    
    const recentIds = count ? ids.slice(0, count) : ids
    
    const recent = await getCarsByIds(recentIds)

    return recent
}

export async function rentCar(carId: string, intentId: string) {

    const currentPaymentIntent = await stripe.paymentIntents.retrieve(intentId)
    
    if (currentPaymentIntent.status !== 'succeeded' || currentPaymentIntent.metadata.carId !== carId) {
        throw new Error("Payment was declined")
    }

    


    const car = await getCar(carId)

    if (!car) {
        throw new Error("Car is not found")
    }

    const amountInCents: number = car.pricePerDay * 100

    if (currentPaymentIntent.amount !== amountInCents) {
        throw new Error ("Payment was declined")
    }


    const session = await getServerSession(authOptions);
    const userId = (session as any)?.user?.id

     if (!userId) {
        redirect("/login")
    }

    const rentObject = {
        userId: userId,
        carId: carId,
        date: new Date().toISOString().slice(0, 10) //UTC date
    }

    await fetchOk(`${API_URL}/rentals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rentObject),
    })

    redirect("/profile")
}   


export async function createPaymentIntent(carId: string) {

    const car = await getCar(carId)

    if (!car) {
        throw new Error("Car is not found")
    }

    const amountInCents = car.pricePerDay * 100

    const paymentIntent = await stripe.paymentIntents.create({
        amount: amountInCents,
        currency: "usd",
        metadata: {
            carId: carId,
        }
    });

    //возвращаем ключ для фронтенда, чтобы страйп принимал транзакции без моего участия. (напрямую, я данных карточки не вижу)
    return paymentIntent.client_secret
}