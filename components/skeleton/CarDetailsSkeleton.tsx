import FilterSidebarSkeleton from "./FilterSidebarSkeleton"
import CarCardsGridSkeleton from "./CarCardsGridSkeleton"

export default function CarDetailSkeleton() {
    return (
        <div className="flex" aria-hidden="true">
            {/* Скелетон левого сайдбара (уже есть у тебя) */}
            <FilterSidebarSkeleton />

            <div className="flex-1 flex flex-col gap-[32px] p-[32px]">
                {/* Верхний блок: Галерея + Детали машины */}
                <div className="flex gap-[32px]">
                    
                    {/* 1. Скелетон CarGallery */}
                    <div className="flex flex-col gap-[24px]">
                        <div className="skeleton w-[492px] h-[360px] rounded-[10px]" />
                        <div className="flex gap-[24px]">
                            {[0, 1, 2].map((i) => (
                                <div key={i} className="gallery-thumb skeleton rounded-[10px]" />
                            ))}
                        </div>
                    </div>

                    {/* 2. Скелетон DetailCar (используем твой класс .detail-car) */}
                    <div className="detail-car relative">
                        {/* Иконка лайка */}
                        <div className="skeleton absolute top-[24px] right-[24px] w-[24px] h-[24px] rounded-full" />

                        {/* Заголовок + рейтинг */}
                        <div className="flex flex-col gap-[8px]">
                            <div className="skeleton h-[40px] w-[220px]" />
                            <div className="skeleton h-[24px] w-[180px]" />
                        </div>

                        {/* Описание (3 строки под высоту текста) */}
                        <div className="mt-[32px] flex flex-col gap-[12px]">
                            <div className="skeleton h-[24px] w-full" />
                            <div className="skeleton h-[24px] w-full" />
                            <div className="skeleton h-[24px] w-[70%]" />
                        </div>

                        {/* Характеристики (сетка 2x2) */}
                        <div className="mt-[32px] grid grid-cols-2 gap-x-[44px] gap-y-[16px] max-w-[444px]">
                            {[0, 1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center h-[28px]">
                                    <div className="skeleton h-[20px] w-[80px]" />
                                    <div className="skeleton h-[20px] w-[80px]" />
                                </div>
                            ))}
                        </div>

                        {/* Цена + кнопка Rent Now */}
                        <div className="mt-[68px] flex justify-between items-center h-[56px]">
                            <div className="flex flex-col gap-[8px]">
                                <div className="skeleton h-[28px] w-[140px]" />
                                <div className="skeleton h-[18px] w-[80px]" />
                            </div>
                            <div className="skeleton w-[140px] h-[56px] rounded-[4px]" />
                        </div>
                    </div>
                </div>

                {/* 3. Скелетон блока отзывов (ReviewsSection) */}
                <div className="bg-white rounded-[10px] p-[24px] flex flex-col gap-[24px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="skeleton h-[28px] w-[100px]" />
                        <div className="skeleton h-[28px] w-[44px] rounded-[4px]" />
                    </div>

                    {[0, 1].map((i) => (
                        <div key={i} className="flex flex-col gap-[16px]">
                            <div className="flex justify-between items-start">
                                <div className="flex items-center gap-[16px]">
                                    <div className="skeleton w-[56px] h-[56px] rounded-full" />
                                    <div className="flex flex-col gap-[8px]">
                                        <div className="skeleton h-[20px] w-[120px]" />
                                        <div className="skeleton h-[16px] w-[80px]" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-[8px]">
                                    <div className="skeleton h-[16px] w-[90px]" />
                                    <div className="skeleton h-[20px] w-[108px]" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-[8px] pl-[72px]">
                                <div className="skeleton h-[20px] w-full" />
                                <div className="skeleton h-[20px] w-[80%]" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* 4. Скелетоны секций Recent и Recommendation (используем твой CarCardsGridSkeleton) */}
                {[0, 1].map((section) => (
                    <div key={section} className="flex flex-col gap-[20px]">
                        <div className="cars-category-container">
                            <div className="skeleton h-[24px] w-[140px]" />
                            <div className="skeleton h-[20px] w-[64px]" />
                        </div>
                        <CarCardsGridSkeleton count={3} />
                    </div>
                ))}
            </div>
        </div>
    )
}