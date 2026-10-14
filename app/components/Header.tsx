export default function Header() {
    return (
        <header className="h-[124px] w-full flex items-center bg-white border-[1px] border-[#C3D4E9] box-border">

            <div className='h-[44px] ml-[60px] mr-[32px] flex justify-between w-full gap-[64px] items-center'>

                <a className="logo" href="/">MORENT</a>

                <form className="flex w-[492px] h-[44px] items-center justify-between rounded-[70px] border border-secondary-200 px-[20px]">
                    <div className="flex items-center gap-[20px] flex-1 mr-[20px]">
                        <img src="/header/search-normal.svg" alt="" className="w-[24px] h-[24px]" />

                        <input type="text" placeholder="Search something here" className='outline-none flex-1 text-s-9 tracking-[-0.02em] text-secondary-400' />
                    </div>

                    <img src="/header/filter.svg" alt="" className="w-[24px] h-[24px]" />
                </form>

                <div className="ml-auto flex items-center gap-[20px]">
                    <img src="/header/Like.svg" alt="Favorites" className="w-[44px] h-[44px]" />
                    <img src="/header/Notification.svg" alt="Notifications" className="w-[44px] h-[44px]" />
                    <img src="/header/Settings.svg" alt="Settings" className="w-[44px] h-[44px]" />
                    <img src="/header/Profil.svg" alt="Profile" className="w-[44px] h-[44px]" />
                </div>


            </div>
            
        </header>
    )
}