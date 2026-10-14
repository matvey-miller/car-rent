const columns = [
    { title: "About", links: ["How it works", "Featured", "Partnership", "Bussiness Relation"] },
    { title: "Community", links: ["Events", "Blog", "Podcast", "Invite a friend"] },
    { title: "Socials", links: ["Discord", "Instagram", "Twitter", "Facebook"] },
]

export default function Footer() {
    return (
        <footer className="footer px-[60px] pt-[80px]">

            <div className="flex justify-between">

                <div className="w-[292px] flex flex-col gap-[16px]">
                    <div className="h-[44px] flex items-center">
                        <a className="logo" href="/">MORENT</a>
                    </div>
                    <p className="text-s-8 font-medium leading-[24px] tracking-[-0.02em] text-[#131313]/60">
                        Our vision is to provide convenience and help increase your sales business.
                    </p>
                </div>

                <div className="flex gap-[60px]">
                    {columns.map((column) => (
                        <div key={column.title} className="w-[152px]">
                            <h3 className="text-s-6 font-semibold leading-[30px] tracking-[-0.02em] text-secondary-500 mb-[36px]">
                                {column.title}
                            </h3>
                            <ul className="flex flex-col gap-[24px]">
                                {column.links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-s-8 font-medium leading-[24px] tracking-[-0.02em] text-[#131313]/60">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

            </div>

            <div className="h-px w-full bg-[#131313]/[0.16] mt-[46px]" />

            <div className="flex justify-between items-center mt-[35px]">
                <p className="footer-bottom-text">©2022 MORENT. All rights reserved</p>
                <div className="flex gap-[60px]">
                    <a href="#" className="footer-bottom-text">Privacy & Policy</a>
                    <a href="#" className="footer-bottom-text w-[144px] text-right">Terms & Condition</a>
                </div>
            </div>

        </footer>
    )
}