'use client'

import { useState } from "react";
import type { Car } from "../../data/cars";
import Stars from "../Stars";

interface DetailCarProps {
    car: Car;
    rating: number;
    reviewsCount: number;
}

export default function DetailCar({ car, rating, reviewsCount }: DetailCarProps) {
    const [isFavorite, setIsFavorite] = useState(car.isFavorite);

    // Массив характеристик — чистый и удобный
    const specs = [
        { label: "Type Car", value: car.type },
        { label: "Capacity", value: car.capacity },
        { label: "Steering", value: car.transmission },
        { label: "Gasoline", value: car.fuelCapacity },
    ];

    return (
        <article className="detail-car">
            {/*like-burron*/}
            <button type="button" aria-label="Toggle favorite" aria-pressed={isFavorite} onClick={() => setIsFavorite(!isFavorite)} className="absolute top-[24px] right-[24px] w-[24px] h-[24px]">
                <img src={isFavorite ? "/buttons/like.svg" : "/buttons/unlike.svg"} alt="Favorite" className="w-[24px] h-[24px]" />
            </button>

            {/*titel + rating*/}
            <div className="flex flex-col gap-[8px]">
                <h1 className="text-s-4 font-bold leading-[40px] tracking-[-0.96px] text-secondary-500">{car.name}</h1>

                <div className="flex items-center gap-[8px] h-[24px]">
                    <Stars rating={rating} />
                    <span className="text-s-9 font-medium leading-[17.64px] tracking-[0.28px] text-secondary-400">{reviewsCount} {reviewsCount === 1 ? "Reviewer" : "Reviewers"}</span>
                </div>
            </div>

            {/*discription*/}
            <p className="mt-[32px] text-s-6 leading-[40px] tracking-[-0.4px] text-secondary-400">
                {car.description}
            </p>

            {/*characteristics*/}
            <div className="mt-[32px] grid grid-cols-2 gap-x-[44px] gap-y-[16px] max-w-[444px]">
                {specs.map((spec) => (
                    <div key={spec.label} className="detail-car-spec">
                        <span className="detail-car-spec-label">{spec.label}</span>
                        <span className="detail-car-spec-value">{spec.value}</span>
                    </div>
                ))}
            </div>

            {/*Price + button*/}
            <div className="mt-[68px] flex justify-between items-center h-[56px]">
                <div className="flex flex-col">
                    <p className="text-[28px] font-bold leading-auto text-secondary-500">
                        ${car.pricePerDay.toFixed(2)}/ <span className="text-s-8 font-bold text-secondary-300">day</span>
                    </p>
                    {car.oldPricePerDay && (
                        <span className="text-s-8 font-bold leading-[18px] text-secondary-300 line-through">${car.oldPricePerDay.toFixed(2)}</span>
                    )}
                </div>

                <button className="btn w-[140px] h-[56px] px-[20px] bg-primary-500 text-s-8 font-bold tracking-[-0.32px] text-white">
                    Rent Now
                </button>
            </div>
        </article>
    );
}
