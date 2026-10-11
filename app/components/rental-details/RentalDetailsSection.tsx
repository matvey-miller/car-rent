'use client'

import Image from "next/image"
import RentalDetailsFrom from "./RentalDetailsForm"

export default function RentalDetailsSection() {
    return (
        <div className="w-full h-[132px] flex justify-center items-center gap-[44px]">
            <RentalDetailsFrom/>
            <button className="w-[60px] h-[60px] flex items-center justify-center rounded-[10px] bg-primary-500 shrink-0">
                <Image
                src="/swap.svg"
                alt="swap"
                width={24}
                height={24}
                />
            </button>
            <RentalDetailsFrom/>
        </div>
    )
}