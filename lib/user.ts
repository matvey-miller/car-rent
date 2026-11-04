'use server'
import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import {revalidatePath} from "next/cache"
import {fetchOk, API_URL} from "./utils"

interface FullUserData {
    id: string;
    name: string
    email: string
    phone: string
    address: string
    favorites: string[]
    recentCars: string[]
    image: string | null
}

export interface UpdateUserDTO {
    name: string;
    phone?: string;
    address?: string;
}


export async function getUserData() : Promise<FullUserData | null> {
    const session = await getServerSession(authOptions)
    const email = session?.user?.email
    
    if (!email) return null 

    const res = await fetch(`${API_URL}/users?email=${email}`, {cache: 'no-store'})
    if (!res.ok) throw new Error (`HTTP ${res.status}`)
    const existingUsers = await res.json()

    if (existingUsers.length > 0) {
        return existingUsers[0]
    }

    return null
    
}


export async function updateUserData(data: UpdateUserDTO): Promise<void> {
    const session = await getServerSession(authOptions)
    const userId = (session as any)?.user?.id

    if (!userId) {
        throw new Error("Unauthenticated")
    }

    try {
        await fetchOk(`${API_URL}/users/${userId}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        revalidatePath("/profile")
    } catch {
        throw new Error("HTTP 500")
    }
    
}