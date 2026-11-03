// Пустые карточки на месте будущих CarCard (та же сетка, та же высота 388px)
export default function PlaceholderGrid({ label }: { label: string }) {
    return (
        <div className="car-cards-container car-cards-container-wide">
            {[1, 2, 3, 4].map((n) => (
                <div key={n} className="h-[388px] rounded-[10px] bg-white flex items-center justify-center text-s-8 font-semibold text-secondary-300">
                    {label} {n}
                </div>
            ))}
        </div>
    )
}