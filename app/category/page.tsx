import { Suspense } from "react"
import FilterSidebar from "../components/filter/FilterSideBar"
import RentalDetailsSection from "../components/rental-details/RentalDetailsSection"
import CarCardsGrid from "../components/car/CarCardsGrid"
import ShowMoreSection from "../components/ShowMoreSection"
import { getCarsPage, CARS_PER_PAGE } from "../lib/api"

interface CategoryPageProps {
    searchParams: Promise<{
        limit?: string;
        type?: string | string[];
        capacity?: string | string[];
        maxPrice?: string;
    }>;
}


function toArray(value?: string | string[]): string[] {
    return Array.isArray(value) ? value : value ? [value] : []
}

export default function CategoryPage({ searchParams }: CategoryPageProps) {
    return (
        <div className="flex">
            <Suspense fallback={<aside className="w-[360px] bg-white" />}>
                <FilterSidebar />
            </Suspense>

            <main className="flex-1 flex flex-col gap-[36px] p-[32px]">
                <RentalDetailsSection compact />

                <Suspense fallback={<p className="text-s-3 font-medium text-secondary-300 min-h-[500px]">Loading cars...</p>}>
                    <CategoryCars searchParams={searchParams} />
                </Suspense>
            </main>
        </div>
    )
}

async function CategoryCars({ searchParams }: CategoryPageProps) {
    const { limit, type, capacity, maxPrice: maxPriceParam } = await searchParams

    const count = Math.max(Number(limit) || CARS_PER_PAGE, CARS_PER_PAGE)
    const types = toArray(type)
    const capacities = toArray(capacity)
    const maxPrice = Number(maxPriceParam) || undefined

    const { cars, total } = await getCarsPage(count, { types, capacities, maxPrice })

    const nextParams = new URLSearchParams()
    types.forEach((value) => nextParams.append("type", value))
    capacities.forEach((value) => nextParams.append("capacity", value))
    if (maxPrice) nextParams.set("maxPrice", String(maxPrice))
    nextParams.set("limit", String(count + CARS_PER_PAGE))

    return (
        <>
            {cars.length > 0 ? (
                <CarCardsGrid cars={cars} />
            ) : (
                <p className="text-s-8 font-medium text-secondary-300">No cars found</p>
            )}

            <ShowMoreSection
                href={cars.length < total ? `/category?${nextParams}` : undefined}
                total={total}
            />
        </>
    )
}