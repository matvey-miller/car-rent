'use server'
import {getServerSession} from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import type { NewReview } from "../data/reviews"
import {fetchOk, API_URL} from "./utils"
import {getUserData} from "./user"
import { getCarsByIds } from "./api";
import type {Car} from "../data/cars.ts"
import { redirect } from "next/navigation";

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
