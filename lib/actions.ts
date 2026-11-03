'use server'
import {getServerSession} from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import type { NewReview } from "../data/reviews"
import {fetchOk, API_URL} from "./utils"

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
