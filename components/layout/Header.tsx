"use client"
import Link from "next/link"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export default function Header() {
    return (
        <header className="h-[124px] w-full flex items-center bg-white border border-secondary-200 box-border">

            <div className='h-[44px] ml-[60px] mr-[32px] flex justify-between w-full gap-[64px] items-center'>

                <Link className="logo" href="/">MORENT</Link>
                
                <Suspense>
                    <SearchBar/>
                </Suspense>
                

                <ButtonsPannel/>
                
            </div>
            
        </header>
    )
}

function SearchBar() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const defaultValue = searchParams.get("q") || ""

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const query = String(formData.get("query") || "").trim()

        if (!query) {
            router.push("/category")
        } else {
            const params = new URLSearchParams(searchParams.toString())
            params.set("q", query)
            router.push(`/category?${params.toString()}`)
        }

        
    }

    return (
        <form onSubmit={handleSubmit} className="flex w-[492px] h-[44px] items-center justify-between rounded-[70px] border border-secondary-200 px-[20px]">
            <div className="flex items-center gap-[20px] flex-1 mr-[20px]">
                <img src="/header/search-normal.svg" alt="" className="w-[24px] h-[24px]" />

                <input name='query' defaultValue={defaultValue} type="text" placeholder="Search something here" className='outline-none flex-1 text-s-9 tracking-[-0.02em] text-secondary-400' />
            </div>

            <img src="/header/filter.svg" alt="" className="w-[24px] h-[24px]" />
        </form>
    )
}

function ButtonsPannel() {
    const account = useSession()
    const router = useRouter()
    return (
        <div className="ml-auto flex items-center gap-[20px]">
            <Link href="/favorites" aria-label="Favorites" className="w-[44px] h-[44px]">
                <img src="/header/Like.svg" alt="" aria-hidden="true" className="w-full h-full" />
            </Link>

            <button type="button" aria-label="Notifications" className="w-[44px] h-[44px] cursor-pointer">
                <img src="/header/Notification.svg" alt="" aria-hidden="true" className="w-full h-full" />
            </button>

            <button type="button" aria-label="Settings" className="w-[44px] h-[44px] cursor-pointer">
                <img src="/header/Settings.svg" alt="" aria-hidden="true" className="w-full h-full" />
            </button>

            <button type='button' onClick={() => {account.status === "authenticated" ? router.push("/profile") : router.push("/login")}} aria-label="Profile" className="w-[44px] h-[44px] cursor-pointer">
                <img src={account.status === "authenticated" ? account.data?.user?.image : "/users/default.svg"} alt="" aria-hidden="true" className="w-full h-full rounded-full" />
            </button>
        </div>
    )
}