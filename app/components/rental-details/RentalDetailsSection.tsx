'use client'

import Image from "next/image"
import RentalDetailsForm from "./RentalDetailsForm"

export default function RentalDetailsSection({ compact }: { compact?: boolean }) {
    return (
        <form className={`relative w-full h-[132px] flex items-center ${compact ? "r-details-compact justify-between" : "justify-center gap-[44px]"}`}>
            <RentalDetailsForm title="Pick - Up" number={1} />

            <div className={compact ? "absolute left-1/2 -translate-x-1/2 z-20" : "relative"}>
                <button type='button'aria-label='swap Pick-Up and Drop-Off' className="w-[60px] h-[60px] flex items-center justify-center rounded-[10px] bg-primary-500 shrink-0 relative z-10">
                    <Image
                    src="/rental-details/swap.svg"
                    alt="swap"
                    width={24}
                    height={24}
                    />
                </button>
                <div className="w-[60px] h-[42px] absolute rounded-[10px] bg-primary-500 shrink-0 blur-[20px] opacity-[40%] z-0 bottom-0 bg-[#103293]"></div>
            </div>
            
            <RentalDetailsForm title="Drop - Off" number={2} />
        </form>
    )
}