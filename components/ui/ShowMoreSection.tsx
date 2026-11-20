import Link from "next/link"

interface ShowMoreSectionProps {
    href?: string;
    total: number;
}

export default function ShowMoreSection({ href, total }: ShowMoreSectionProps) {
    return (
        <div className="relative flex justify-center items-center w-full h-[44px] my-[32px]">
            {href && (
                <Link href={href} scroll={false} className="btn bg-primary-500 w-[156px] h-[44px] text-s-8 font-semibold text-white">
                    Show more cars
                </Link>
            )}
            <p className="absolute right-0 text-s-9 font-medium text-secondary-300">{total} {total === 1 ? "Car" : "Cars"}</p>
        </div>
    )
}