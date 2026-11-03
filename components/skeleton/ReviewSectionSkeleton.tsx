import ReviewFormSkeleton from "./ReviewFomSkeleton"
// Скелетон всей секции: те же размеры и отступы, что у ReviewsSection
export default function ReviewsSectionSkeleton() {
    return (
        <section className="w-[1016px] rounded-[10px] bg-white p-[24px] flex flex-col gap-[32px]" aria-hidden="true">
            {/* заголовок "Reviews" + счётчик */}
            <div className="flex items-center gap-[12px] h-[30px]">
                <div className="skeleton h-[24px] w-[90px]" />
                <div className="skeleton h-[28px] w-[44px] rounded-[4px]" />
            </div>

            {/* два отзыва-заглушки */}
            <div className="flex flex-col gap-[32px]">
                {[0, 1].map((i) => (
                    <div key={i} className="flex flex-col gap-4">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center gap-4">
                                <div className="skeleton w-14 h-14 rounded-full" />
                                <div className="flex flex-col gap-1">
                                    <div className="skeleton h-[25px] w-[120px]" />
                                    <div className="skeleton h-[21px] w-[80px]" />
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                                <div className="skeleton h-[21px] w-[110px]" />
                                <div className="skeleton h-[20px] w-[108px]" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="skeleton h-[20px] w-full" />
                            <div className="skeleton h-[20px] w-[70%]" />
                        </div>
                    </div>
                ))}
            </div>

            <div className="h-px w-full bg-secondary-100" />

            <ReviewFormSkeleton />
        </section>
    )
}