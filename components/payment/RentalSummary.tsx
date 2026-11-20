import type {Car} from "../../data/cars"

export default async function RentalSummary({ car }: { car: Car }) {

    // заглушки: реальный подсчёт (дни аренды, налог) — твоя логика
    const rows = [
        { label: "Subtotal", value: `$${car.pricePerDay.toFixed(2)}` },
        { label: "Tax", value: "$0.00" },
    ]

    return (
        <aside className="w-[492px] rounded-[10px] bg-white p-[32px] flex flex-col gap-[24px] fade-in">
            <div className="flex flex-col gap-[4px]">
                <h2 className="text-s-6 font-bold leading-[30px] tracking-[-0.02em] text-secondary-500">Rental Summary</h2>
                <p className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">
                    Prices may change depending on the length of the rental and the price of your rental car.
                </p>
            </div>

            <div className="flex items-center gap-[16px]">
                <div className="w-[132px] h-[108px] shrink-0 rounded-[10px] flex items-center justify-center bg-[url('/car-gallery/bg.svg')] bg-cover bg-center">
                    <img src={`/${car.image}`} alt={car.name} className="w-[78%] h-auto object-contain" />
                </div>

                <div className="flex flex-col gap-[4px]">
                    <h3 className="text-s-4 font-bold leading-[40px] tracking-[-0.96px] text-secondary-500">{car.name}</h3>
                    <span className="text-s-9 font-medium leading-[21px] tracking-[-0.02em] text-secondary-300">{car.type}</span>
                </div>
            </div>

            <div className="h-px w-full bg-secondary-100" />

            <div className="flex flex-col gap-[24px]">
                {rows.map((row) => (
                    <div key={row.label} className="flex justify-between">
                        <span className="text-s-8 font-medium tracking-[-0.02em] text-secondary-300">{row.label}</span>
                        <span className="text-s-8 font-bold tracking-[-0.02em] text-secondary-500">{row.value}</span>
                    </div>
                ))}
            </div>

            <div className="flex gap-[16px]">
                <input type="text" name="promoCode" placeholder="Apply promo code" className="payment-field" />
                <button type="button" className="btn shrink-0 h-[56px] px-[24px] text-s-8 font-bold tracking-[-0.02em] text-secondary-500">
                    Apply now
                </button>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[4px]">
                    <span className="text-s-8 font-bold tracking-[-0.02em] text-secondary-500">Total Rental Price</span>
                    <span className="text-s-9 font-medium tracking-[-0.02em] text-secondary-300">Overall price and includes rental discount</span>
                </div>
                <span className="text-s-4 font-bold tracking-[-0.96px] text-secondary-500">${car.pricePerDay.toFixed(2)}</span>
            </div>
        </aside>
    )
}