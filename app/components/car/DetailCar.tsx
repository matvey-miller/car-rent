'use client'

import { useState } from "react";
import type { Car } from "../../data/cars";

const stars = [true, true, true, true, false];

interface DetailCarProps {
    car: Car;
}

export default function DetailCar({ car }: DetailCarProps) {
    const [isFavorite, setIsFavorite] = useState(car.isFavorite);

    return (
        <div className="detail-car">
            <button onClick={() => setIsFavorite(!isFavorite)} className="absolute top-[24px] right-[24px] w-[24px] h-[24px]">
                <img src={isFavorite ? "/buttons/like.svg" : "/buttons/unlike.svg"} alt="Favorite" className="w-[24px] h-[24px] cursor-pointer" />
            </button>

            <div className="flex flex-col gap-[8px]">
                <h2 className="text-s-4 font-bold leading-[40px] tracking-[-0.96px] text-secondary-500">{car.name}</h2>

                <div className="flex items-center gap-[8px] h-[24px]">
                    <div className="flex gap-[2px]">
                        {stars.map((filled, index) => (
                            <img
                                key={index}
                                src={filled ? "/buttons/star-filled.svg" : "/buttons/star-empty.svg"}
                                alt=""
                                className="w-[20px] h-[20px]"
                            />
                        ))}
                    </div>
                    <span className="text-s-9 font-medium leading-[17.64px] tracking-[0.28px] text-secondary-400">440+ Reviewer</span>
                </div>
            </div>

            <p className="mt-[32px] text-s-6 leading-[40px] tracking-[-0.4px] text-secondary-400">
                NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".
            </p>

            <div className="mt-[32px] flex gap-[44px]">
                <div className="flex flex-col gap-[16px] w-[200px]">
                    <div className="detail-car-spec">
                    <span className="detail-car-spec-label">{car.type}</span>
                        <span className="detail-car-spec-value">{car.transmission}</span>
                    </div>
                    <div className="detail-car-spec">
                        <span className="detail-car-spec-label">Steering</span>
                        <span className="detail-car-spec-value">Manual</span>
                    </div>
                </div>

                <div className="flex flex-col gap-[16px] w-[200px]">
                    <div className="detail-car-spec">
                        <span className="detail-car-spec-label">Capacity</span>
                        <span className="detail-car-spec-value">{car.capacity}</span>
                    </div>
                    <div className="detail-car-spec">
                        <span className="detail-car-spec-label">Gasoline</span>
                        <span className="detail-car-spec-value">{car.fuelCapacity}</span>
                    </div>
                </div>
            </div>

            <div className="mt-[68px] flex justify-between items-center h-[56px]">
                <div className="flex flex-col">
                    <h3 className="text-[28px] font-bold leading-auto text-secondary-500">
                        ${car.pricePerDay.toFixed(2)}/ <span className="text-s-8 font-bold text-secondary-300">days</span>
                    </h3>
                    {car.oldPricePerDay && (
                        <span className="text-s-8 font-bold leading-[18px] text-secondary-300 line-through">
                            ${car.oldPricePerDay.toFixed(2)}
                        </span>
                    )}
                </div>

                <button className="btn w-[140px] h-[56px] px-[20px] bg-primary-500 text-s-8 font-bold tracking-[-0.32px] text-white">
                    Rent Now
                </button>
            </div>
        </div>
    );
}