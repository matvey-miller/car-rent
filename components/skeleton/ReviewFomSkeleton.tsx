export default function ReviewFormSkeleton() {
    return (
        <div className="flex flex-col gap-[24px]" aria-hidden="true">
            {/* заголовок "Leave a review" */}
            <div className="skeleton h-[30px] w-[150px]" />

            {/* рейтинг: подпись + 5 звёзд */}
            <div className="flex items-center gap-[12px]">
                <div className="skeleton h-[20px] w-[48px]" />
                <div className="skeleton h-[20px] w-[108px]" />
            </div>

            {/* textarea */}
            <div className="skeleton h-[120px] w-full" />

            {/* кнопка Send review */}
            <div className="skeleton h-[44px] w-[140px] rounded-[4px]" />
        </div>
    )
}