import Image from 'next/image';

export function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <a href="/" className="logo">MORENT</a>
        <form className="search" role="search">
          <Image src="/icons/search-normal.svg" alt="" width={24} height={24} />
          <input type="search" placeholder="Search something here" aria-label="Search" />
          <button type="button" className="search__filter" aria-label="Filter">
            <Image src="/icons/filter.svg" alt="" width={24} height={24} />
          </button>
        </form>
      </div>

      <div className="header__right">
        <button type="button" className="icon-btn" aria-label="Favorites">
          <Image src="/icons/like.svg" alt="" width={20} height={20} />
        </button>
        <button type="button" className="icon-btn icon-btn--badge" aria-label="Notifications">
          <Image src="/icons/notification.svg" alt="" width={20} height={20} />
        </button>
        <button type="button" className="icon-btn" aria-label="Settings">
          <Image src="/icons/setting.svg" alt="" width={20} height={20} />
        </button>
        <Image className="avatar" src="/icons/profile.svg" alt="User avatar" width={44} height={44} />
      </div>
    </header>
  );
}
