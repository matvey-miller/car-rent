import { Suspense } from "react"
import GoogleLoginButton from "../../components/profile/googleLoginButton"
import Link from "next/link"
import LoginErrorMessage from "../../components/auth/LoginErrorMessage"

export default function LoginPage() {
    return (
        <div className="min-h-[600px] flex items-center justify-center px-[32px] py-[64px]">
            <section className="w-[440px] rounded-[10px] bg-white p-[40px] flex flex-col items-center text-center">
                <Link className="logo !mr-0" href="/">MORENT</Link>

                <h1 className="mt-[32px] text-s-5 font-bold leading-[150%] tracking-[-0.03em] text-secondary-500">
                    Sign in to your account
                </h1>
                <p className="mt-[8px] max-w-[320px] text-s-9 font-medium leading-[150%] tracking-[-0.02em] text-secondary-300">
                    Save your favorite cars and keep track of the ones you viewed.
                </p>

                <div className="h-px w-full bg-secondary-100 my-[32px]" />

                <Suspense>
                    <LoginErrorMessage/>
                </Suspense>
                

                <Suspense>
                    <GoogleLoginButton/>
                </Suspense>
                

                <p className="mt-[24px] text-s-10 font-medium leading-[150%] tracking-[-0.02em] text-secondary-300">
                    By continuing you agree to our Terms & Condition and Privacy & Policy.
                </p>
            </section>
        </div>
    )
}


