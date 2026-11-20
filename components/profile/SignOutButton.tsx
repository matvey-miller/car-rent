'use client'
import { signOut } from "next-auth/react"

export default function SignOutButton() {
    return (
        <div className="m-auto">
            <button
            type="button"
            className="text-red-500 min-w-[150px] cursor-pointer"
            onClick={() => signOut()}>
                Sign out
            </button>
        </div>
    )
}