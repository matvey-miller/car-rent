export default function Stars({ rating }: { rating: number }) {
    return (
        <div 
            role="img"
            aria-label={`Rating: ${rating} out of 5 stars`}
            className={`flex gap-[2px]`}
        >
            {/*обрисовка рейтинга машин*/}
            {[1, 2, 3, 4, 5].map((n) => (
                <img
                    key={n}
                    src={n <= rating ? "/buttons/star-filled.svg" : "/buttons/star-empty.svg"}
                    alt=""
                    aria-hidden="true"
                    className="w-[20px] h-[20px]"
                />
            ))}
        </div>
    )
}
