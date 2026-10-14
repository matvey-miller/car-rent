export default function Stars({ rating }: { rating: number }) {
    return (
        <div className="flex gap-[2px]">
            {[1, 2, 3, 4, 5].map((n) => (
                <img
                    key={n}
                    src={n <= rating ? "/buttons/star-filled.svg" : "/buttons/star-empty.svg"}
                    alt=""
                    className="w-[20px] h-[20px]"
                />
            ))}
        </div>
    )
}
