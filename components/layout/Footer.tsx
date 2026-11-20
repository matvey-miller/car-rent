import Link from "next/link"

const columns = [
    { title: "About", links: ["How it works", "Featured", "Partnership", "Bussiness Relation"] },
    { title: "Community", links: ["Events", "Blog", "Podcast", "Invite a friend"] },
    { title: "Socials", links: ["Discord", "Instagram", "Twitter", "Facebook"] },
]

export default function Footer() {
    return (
        <footer className="footer px-[60px] pt-[80px]">

            <FooterTop/>
            <div className="h-px w-full bg-[#131313]/[0.16] mt-[46px]" />
            <FooterBottom/>
            
        </footer>
    )
}



function FooterTop () {
    return (
        <div className="flex justify-between">

            <div className="w-[292px] flex flex-col gap-[16px]">
                <div className="h-[44px] flex items-center">
                    <Link className="logo" href="/">MORENT</Link>
                </div>
                <p className="text-s-8 font-medium leading-[24px] tracking-[-0.02em] text-[#131313]/60">
                    Our vision is to provide convenience and help increase your sales business.
                </p>
            </div>

            <div className="flex gap-[60px]">
                {columns.map((column) => (
                    <div key={column.title} className="w-[152px]">
                        <p className="text-s-6 font-semibold leading-[30px] tracking-[-0.02em] text-secondary-500 mb-[36px]">
                            {column.title}
                        </p>
                        <ul className="flex flex-col gap-[24px]">
                            {column.links.map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-s-8 font-medium leading-[24px] tracking-[-0.02em] text-[#131313]/60">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

        </div>
    )
}


function FooterBottom() {
    return (
        <div className="flex justify-between items-center mt-[35px]">
            <p className="footer-bottom-text">©2026 MORENT. All rights reserved</p>
            <div className="flex gap-[60px]">
                <Link href="#" className="footer-bottom-text">Privacy & Policy</Link>
                <Link href="#" className="footer-bottom-text w-[144px] text-right">Terms & Condition</Link>
            </div>
        </div>
    )
}