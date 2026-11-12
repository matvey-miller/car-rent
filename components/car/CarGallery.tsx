'use client'

import { useState } from "react"
import Image from "next/image"
import type { Car } from "../../data/cars"
import Advertisement from "../advertisment/Advertisement"

export default function CarGallery({ car }: { car: Car }) {
    const [selected, setSelected] = useState(0)
    const carSrc = `/${car.image}`

    return (
        <div className="flex flex-col gap-[24px]">
            {selected === 0 ? (
                <Advertisement number={3} carSrc={carSrc} />
            ) : (
                <Image
                    src={car.gallery[selected - 1]}
                    alt=""
                    width={492}
                    height={360}
                    priority
                    // Вернули жесткие размеры в CSS, чтобы перебить height: auto
                    className="w-[492px] h-[360px] rounded-[8px] object-cover"
                />
            )}

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
                        <Image 
                            src={carSrc} 
                            alt="" 
                            width={115} 
                            height={36}
                            className="w-[78%] h-auto object-contain" 
                        />
                    </div>
                </button>

                {/* 2. Фотографии из галереи */}
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
                            // Убрали relative отсюда
                            className={`gallery-thumb ${isActive ? "gallery-thumb-active" : ""}`}
                        >
                            {/* Добавили div-обертку, которая будет сжиматься от padding'а кнопки */}
                            <div className="relative w-full h-full rounded-[10px] overflow-hidden">
                                <Image
                                    src={photo}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}