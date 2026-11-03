'use server'
import { API_URL } from "./utils"
import {getServerSession} from "next-auth"
import { authOptions } from "../app/api/auth/[...nextauth]/route"

export async function updateFavorites(newFavorites: string[]) {
    const session = await getServerSession(authOptions)
    const userId = (session as any)?.user?.id

    if (!userId) {
        throw new Error("Unauthenticated")
    } else {
        const res = await fetch(`${API_URL}/users/${userId}`, {
                method: "PATCH",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    'favorites': newFavorites,
                }),
            })

        if (!res.ok) throw new Error(`HTTP ${res.status}`)
    }
    

    
    
}
