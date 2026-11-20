'use client'
import { useSearchParams } from "next/navigation"

export default function LoginErrorMessage() {
    const searchParams = useSearchParams()
    const error = searchParams.get("error")
    

    return (
        <div>
            {!error ? <div></div> : <div className="text-red-500 mb-[20px]">Somehing went wrong.<p>Please try again</p></div>}
        </div>
        
    )
}