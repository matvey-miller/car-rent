'use client'

import Image from "next/image"
import RentalDetailsFrom from "./RentalDetailsForm"

export default function RentalDetailsSection() {
    return (
        <div className="w-full h-[132px] flex justify-center items-center gap-[44px]">
            <RentalDetailsFrom title="Pick - Up" number={1} />
            <div className='relative'>
                <button className="w-[60px] h-[60px] flex items-center justify-center rounded-[10px] bg-primary-500 shrink-0 relative z-10">
                    <Image
                    src="/rental-details/swap.svg"
                    alt="swap"
                    width={24}
                    height={24}
                    />
                </button>
            <div className="w-[60px] h-[42px] absolute rounded-[10px] bg-primary-500 shrink-0 blur-[20px] opacity-[40%] z-0 bottom-0 bg-[#103293]"></div>
            
            </div>
            
            <RentalDetailsFrom title="Drop - Off" number={2} />
        </div>
    )
}