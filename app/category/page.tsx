import { Suspense } from "react"
import FilterSidebar from "../../components/filter/FilterSideBar"
import RentalDetailsSection from "../../components/rental-details/RentalDetailsSection"
import CarCardsGrid from "../../components/car/CarCardsGrid"
import ShowMoreSection from "../../components/ui/ShowMoreSection"
import { getCarsPage, CARS_PER_PAGE } from "../../lib/api"
import { categoryUrl } from "../../lib/utils"
import CarCardsGridSkeleton from "../../components/skeleton/CarCardsGridSkeleton"
import FilterSidebarSkeleton from "../../components/skeleton/FilterSidebarSkeleton"

interface CategoryPageProps {
    searchParams: Promise<{
        limit?: string;
        type?: string | string[];
        capacity?: string | string[];
        maxPrice?: string;
        category?: string;
        id?: string | string[];
        q?: string;
    }>;
}

function toArray(value?: string | string[]): string[] {
    return Array.isArray(value) ? value : value ? [value] : []
}

export default function CategoryPage({ searchParams }: CategoryPageProps) {
    return (
        <div className="flex">
            <Suspense fallback={<FilterSidebarSkeleton />}>
                <FilterSidebar />
            </Suspense>

            <div className="flex-1 flex flex-col gap-[36px] p-[32px]">
                <RentalDetailsSection compact />

                <Suspense fallback={
                    <>
                        <CarCardsGridSkeleton count={CARS_PER_PAGE} />
                        <div className="h-[44px] my-[32px]" />
                    </>
                }>
                    <CategoryCars searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    )
}

async function CategoryCars({ searchParams }: CategoryPageProps) {
    const rawParams = await searchParams
    const { limit, type, capacity, maxPrice: maxPriceParam, category: categoryParam, id, q} = rawParams

    const count = Math.max(Number(limit) || CARS_PER_PAGE, CARS_PER_PAGE)
    const types = toArray(type)
    const capacities = toArray(capacity)
    const maxPrice = Number(maxPriceParam) > 0 ? Number(maxPriceParam) : undefined
    const category = categoryParam === "popular" || categoryParam === "recommended" ? categoryParam : undefined
    const ids = toArray(id)
    const searchQuery = typeof q === 'string' ? q : Array.isArray(q) ? q[0] : undefined

    const { cars, total } = await getCarsPage(count, { types, capacities, maxPrice, category, ids, q: searchQuery})

    // Автоматически переносим все текущие параметры из URL и обновляем только limit
    const nextParams = new URLSearchParams()
    for (const [key, value] of Object.entries(rawParams)) {
        toArray(value).forEach((v) => nextParams.append(key, v))
    }
    nextParams.set("limit", String(count + CARS_PER_PAGE))

    return (
        <>
            {cars.length > 0 ? (
                <CarCardsGrid cars={cars} />
            ) : (
                <p className="text-s-8 font-medium text-secondary-300">No cars found</p>
            )}

            <ShowMoreSection
                href={cars.length < total ? categoryUrl(nextParams) : undefined}
                total={total}
            />
        </>
    )
}