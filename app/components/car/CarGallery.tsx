'use client'

import { useState } from "react"
import type { Car } from "../../data/cars"
import Advertisement from "../advertisment/Advertisement"

interface CarGalleryProps {
    car: Car;
}

export default function CarGallery({ car }: CarGalleryProps) {
    const [selected, setSelected] = useState(0)
    const carSrc = `/${car.image}`

    return (
        <div className="flex flex-col gap-[24px]">
            {selected === 0 ? (
                <Advertisement number={3} carSrc={carSrc} />
            ) : (
                <img
                    src={car.gallery[selected - 1]}
                    alt=""
                    className="w-[492px] h-[360px] rounded-[8px] object-cover"
                />
            )}

            <div className="flex gap-[24px]">
                {[0, 1, 2].map((index) => (
                    <button
                        key={index}
                        type="button"
                        onClick={() => setSelected(index)}
                        className={`gallery-thumb ${index === selected ? "gallery-thumb-active" : ""}`}
                    >
                        {index === 0 ? (
                            <div className="w-full h-full rounded-[10px] flex items-center justify-center bg-[url('/car-gallery/image-1-bg.svg')] bg-cover bg-center">
                                <img src={carSrc} alt={car.name} className="w-[116px] h-[36px] object-contain" />
                            </div>
                        ) : (
                            <img
                                src={car.gallery[index - 1]}
                                alt=""
                                className="w-full h-full rounded-[10px] object-cover"
                            />
                        )}
                    </button>
                ))}
            </div>
        </div>
    )
}