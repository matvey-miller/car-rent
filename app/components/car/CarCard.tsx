'use client'

import { useState } from "react"
import type { Car } from "../../data/cars"
import { useRouter } from "next/navigation"

interface CarCardProps {
    car: Car;
}

export default function CarCard({ car }: CarCardProps) {
    const [isFavorite, setIsFavorite] = useState(car.isFavorite);
    const router = useRouter();

    return (
        <div className="car-card cursor-pointer" onClick={() => router.push(`/car-details/${car.id}`)}>

            <div className="flex justify-between h-[48px]">
                <div className="flex flex-col gap-[4px]">
                    <h3 className="h-[24px] text-s-6 font-bold leading-[24px] tracking-[-0.03em] text-secondary-500">{car.name}</h3>
                    <span className="h-[20px] text-s-9 font-bold leading-[21px] tracking-[-0.02em] text-secondary-300">{car.type}</span>
                </div>
                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsFavorite(!isFavorite)
                    }} className="self-start">
                    <img
                        src={isFavorite ? "/buttons/like.svg" : "/buttons/unlike.svg"}
                        alt="Favorite"
                        className="car-card-icon"
                    />
                </button>
            </div>

            <div className="h-[200px] flex justify-center items-center">
                <img
                    src={`/${car.image}`}
                    alt={car.name}
                    style={{ width: car.imageWidth, height: car.imageHeight }}
                    className="max-w-none shrink-0"
                />
            </div>

            <div className="flex gap-[16px] h-[24px]">
                <div className="car-card-spec">
                    <img src="/car-card/gas-station.svg" alt="" className="car-card-icon" />
                    <span>{car.fuelCapacity}</span>
                </div>
                <div className="car-card-spec car-card-spec-transmission">
                    <img src="/car-card/wheel.svg" alt="" className="car-card-icon" />
                    <span>{car.transmission}</span>
                </div>
                <div className="car-card-spec">
                    <img src="/car-card/people.svg" alt="" className="car-card-icon" />
                    <span>{car.capacity}</span>
                </div>
            </div>

            <div className="flex justify-between items-center h-[44px] mt-[24px]">
                <div className="h-[44px] flex flex-col justify-center gap-[4px]">
                    <p className="text-s-6 font-bold leading-[25.2px] text-secondary-500">
                        ${car.pricePerDay.toFixed(2)}/ <span className="text-s-9 font-medium text-secondary-300">day</span>
                    </p>
                    {car.oldPricePerDay && (
                        <p className="text-s-9 font-bold leading-[15px] text-secondary-300 line-through">
                            ${car.oldPricePerDay.toFixed(2)}
                        </p>
                    )}
                </div>
                <button className="btn bg-primary-500 w-[116px] h-[44px] px-[20px] text-s-8 font-semibold tracking-[-0.02em] text-white">
                    Rent Now
                </button>
            </div>

        </div>
    )
}