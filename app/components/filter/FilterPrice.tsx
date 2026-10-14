'use client'

import { useState, CSSProperties } from "react"

// подобрано так, чтобы значение 100 совпадало с макетом (маркер на 220px)
const MAX_PRICE = 131.43;

export default function FilterPrice() {
    const [price, setPrice] = useState(100);

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
                    className="filter-range"
                    style={{ "--fill": `${fill}px` } as CSSProperties}
                />
                <p className="filter-text h-[24px] flex items-center">Max. ${price}.00</p>
            </div>
        </section>
    )
}