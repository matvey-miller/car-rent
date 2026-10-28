import Link from "next/link"

export default function Header() {
    return (
        <header className="h-[124px] w-full flex items-center bg-white border border-secondary-200 box-border">

            <div className='h-[44px] ml-[60px] mr-[32px] flex justify-between w-full gap-[64px] items-center'>

                <Link className="logo" href="/">MORENT</Link>

                <SearchBar/>

                <ButtonsPannel/>
                
            </div>
            
        </header>
    )
}

function SearchBar() {
    return (
        <form className="flex w-[492px] h-[44px] items-center justify-between rounded-[70px] border border-secondary-200 px-[20px]">
            <div className="flex items-center gap-[20px] flex-1 mr-[20px]">
                <img src="/header/search-normal.svg" alt="" className="w-[24px] h-[24px]" />

                <input type="text" placeholder="Search something here" className='outline-none flex-1 text-s-9 tracking-[-0.02em] text-secondary-400' />
            </div>

            <img src="/header/filter.svg" alt="" className="w-[24px] h-[24px]" />
        </form>
    )
}

function ButtonsPannel() {
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

            <Link href="/profile" aria-label="Profile" className="w-[44px] h-[44px]">
                <img src="/header/Profil.svg" alt="" aria-hidden="true" className="w-full h-full rounded-full" />
            </Link>
        </div>
    )
}