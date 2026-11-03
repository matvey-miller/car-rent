'use server'
import { getServerSession } from "next-auth";
import { API_URL } from "./utils";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

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

interface UpdatedUserData {
    name: string
    phone: string
    address: string
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

export async function updateUserData(updatedData: UpdatedUserData) {
    const session = await getServerSession(authOptions)
    // тут должна быить проверка ксть ли сессия
    const userId = (session as any)?.user?.id

    if (!userId) {
        throw new Error("Unauthenticated")
    }
    try {
        await fetch(`${API_URL}/users/${userId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: updatedData.name,
                phone: updatedData.phone,
                address: updatedData.address
            })
        })
    } catch {
        throw new Error("HTTP 500")
    }
    

}