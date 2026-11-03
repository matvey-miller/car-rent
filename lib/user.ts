'use server'
import { getServerSession } from "next-auth";
import { API_URL } from "./utils";
import { authOptions } from "../app/api/auth/[...nextauth]/route";

interface UserData {
    id: string;
    name: string
    email: string
    phone: string
    address: string
    favorites: string[]
    recentCars: string[]
    image: string | null
}


export async function getUserData() : Promise<UserData | null> {
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