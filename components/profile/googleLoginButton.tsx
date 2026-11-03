'use client'
import { signIn } from "next-auth/react"
import { useSearchParams } from "next/navigation"

export default function GoogleLoginButton() {
    const searchParams = useSearchParams()
    const callbackUrl = searchParams.get("callbackUrl") || "/"

    return (
        <button
            type="button"
            onClick={() => signIn('google', {callbackUrl : callbackUrl})}
            className="btn gap-[12px] w-full h-[56px] rounded-[10px] border border-secondary-200 bg-white text-s-8 font-semibold tracking-[-0.02em] text-secondary-500 cursor-pointer"
        >
            <GoogleIcon />
            Continue with Google
        </button>
    )
}

// Логотип Google: 4 цвета бренда, поэтому цвета заданы прямо в SVG, а не через токены
function GoogleIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#4285F4" d="M23.5 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.46a5.52 5.52 0 0 1-2.4 3.62v3h3.88c2.27-2.09 3.56-5.17 3.56-8.81z" />
            <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.88-3c-1.08.72-2.45 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.94H1.28v3.1A12 12 0 0 0 12 24z" />
            <path fill="#FBBC05" d="M5.29 14.3a7.2 7.2 0 0 1 0-4.6v-3.1H1.28a12 12 0 0 0 0 10.8l4.01-3.1z" />
            <path fill="#EA4335" d="M12 4.76c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.19 15.23 0 12 0A12 12 0 0 0 1.28 6.6l4.01 3.1C6.23 6.87 8.88 4.76 12 4.76z" />
        </svg>
    )
}