'use client'

import {  useState, CSSProperties } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { categoryUrl } from "../../lib/utils"

const MAX_PRICE = 131.43;
const DEFAULT_PRICE = 100;

export default function FilterPrice() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const urlPrice = Number(searchParams.get("maxPrice")) || DEFAULT_PRICE
    
    function applyPrice(price: number) {
        if (price === urlPrice) return

        const params = new URLSearchParams(searchParams.toString())
        if (price === DEFAULT_PRICE) {
            params.delete("maxPrice")
        } else {
            params.set("maxPrice", String(price))
        }
        params.delete("limit")

        router.push(categoryUrl(params), { scroll: false })
    }

    return (
        // из-зи key обновляется слайдер даже если пользователь вернется на страницу назад
        <PriceSlider key={urlPrice} initialPrice={urlPrice} onApply={applyPrice}/>
    )
}

function PriceSlider({ initialPrice, onApply }: { initialPrice: number, onApply: (price: number) => void }) {
    const [price, setPrice] = useState(initialPrice)

    // центр маркера: 10px (радиус) + путь по треку 296 - 20 = 276px
    const fill = 10 + (price / MAX_PRICE) * 276;
    
    return (
        <section className="flex flex-col gap-[28px]">
            <h3 className="filter-title">P R I C E</h3>

            <div className="flex flex-col gap-[12px]">
                <input
                    type="range"
                    min={0}
                    max={MAX_PRICE}
                    step={1}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    onPointerUp={() => onApply(price)}
                    onKeyUp={() => onApply(price)}
                    className="filter-range"
                    style={{ "--fill": `${fill}px` } as CSSProperties}
                    aria-label="Maximum price per day"
                />
                <p className="filter-text h-[24px] flex items-center">Max. ${price}.00</p>
            </div>
        </section>
    )
}