'use client'

import { useState } from "react"
import type { Car } from "../../data/cars"
import Advertisement from "../advertisment/Advertisement"

export default function CarGallery({ car }: { car: Car }) {
    const [selected, setSelected] = useState(0)
    const carSrc = `/${car.image}`

    return (
        //Big-Pictures
        <div className="flex flex-col gap-[24px]">
            {selected === 0 ? (
                //3 is a type of advertisement
                <Advertisement number={3} carSrc={carSrc} />
            ) : (
                <img
                    src={car.gallery[selected - 1]}
                    alt=""
                    className="w-[492px] h-[360px] rounded-[8px] object-cover"
                />
            )}

            {/* Pic-Buttons */}
            <div className="flex gap-[24px]">
                {/* 1. Первая миниатюра (Превью баннера) */}
                <button
                    type="button"
                    aria-label="View car banner"
                    aria-current={selected === 0}
                    onClick={() => setSelected(0)}
                    className={`gallery-thumb ${selected === 0 ? "gallery-thumb-active" : ""}`}
                >
                    <div className="w-full h-full rounded-[10px] flex items-center justify-center bg-[url('/car-gallery/bg.svg')] bg-cover bg-center">
                        <img src={carSrc} alt="" className="w-[78%] h-auto object-contain" />
                    </div>
                </button>

                {/* 2. Фотографии из галереи (чистый .map без двойных массивов) */}
                {car.gallery.map((photo, index) => {
                    const slideIndex = index + 1;
                    const isActive = selected === slideIndex;

                    return (
                        <button
                            key={photo}
                            type="button"
                            aria-label={`View car photo ${slideIndex}`}
                            aria-current={isActive}
                            onClick={() => setSelected(slideIndex)}
                            className={`gallery-thumb ${isActive ? "gallery-thumb-active" : ""}`}
                        >
                            <img
                                src={photo}
                                alt=""
                                className="w-full h-full rounded-[10px] object-cover"
                            />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}