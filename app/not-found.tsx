import Link from "next/link"
import StatusMessage from "../components/ui/StatusMessage"

export default function NotFound() {
    return (
        <StatusMessage
            title="Page not found"
            text="The page you are looking for doesn't exist or the car was removed."
        >
            <Link href="/" className="btn bg-primary-500 w-[140px] h-[44px] text-s-8 font-semibold text-white">
                Go home
            </Link>
        </StatusMessage>
    )
}