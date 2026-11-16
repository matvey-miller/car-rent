'use client'

import { useTransition } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import StatusMessage from "../components/ui/StatusMessage"

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()


    function retry() {
        startTransition(() => {
            router.refresh() //Попытка получить данные вновь
            reset() //Перезагрузка страницы
        })
    }

    return (
        <StatusMessage
            title="Something went wrong"
            text="We couldn't load this page. Check your connection and try again."
        >
            <button
                onClick={retry}
                disabled={isPending}
                className="btn bg-primary-500 w-[140px] h-[44px] text-s-8 font-semibold text-white disabled:opacity-60"
            >
                {isPending ? "Trying..." : "Try again"}
            </button>
            <Link href="/" className="btn w-[140px] h-[44px] text-s-8 font-semibold text-primary-500 border border-primary-500">
                Go home
            </Link>
        </StatusMessage>
    )
}