'use client'
import { useId } from "react";

interface RentalDetailItemProps {
    headline: string;
    selectedItem: string;
}

export default function RentalDetailItem({ headline, selectedItem }: RentalDetailItemProps) {
    const id = useId();

    return (
        <div className="flex-1 min-w-0">
            <label htmlFor={id} className="block text-s-8 font-semibold tracking-[-0.02em] leading-[150%] text-secondary-500">
                {headline}
            </label>

            <div className="flex items-center mt-[8px]">
                <select
                    id={id}
                    defaultValue=""
                    className="flex-1 min-w-0 h-[16px] appearance-none outline-none text-s-10 font-medium tracking-[-0.02em] text-secondary-300"
                >
                    <option value="" disabled>Select your {selectedItem}</option>
                </select>
                <img src="/rental-details/arrow-down.svg" alt="" className="w-[16px] h-[16px]" />
            </div>
        </div>
    )
}