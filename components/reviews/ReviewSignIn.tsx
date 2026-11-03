import Link from "next/link"

export default function ReviewSignIn() {
    return (
        <div className="flex flex-col items-center gap-[16px]">
                <p className="text-s-9 font-medium leading-[150%] tracking-[-0.02em] text-secondary-300">
                    To leave a review, you need to sign in to your account.
                </p>
                <Link href="/login" className="btn w-[100px] h-[33px] border-primary-200 border-[2px] text-s-8 font-semibold tracking-[-0.02em] ">
                    Sign in
                </Link>
            </div>
    )
}