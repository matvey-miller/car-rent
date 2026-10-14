import { notFound } from "next/navigation"
import FilterSidebar from "../../components/filter/FilterSideBar"
import DetailCar from "../../components/car/DetailCar"
import CarGallery from "../../components/car/CarGallery"
import { popularCars, recommendedCars } from "../../data/cars"
import { Suspense } from "react"

export default function CarDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    return (
        <Suspense>
            <CarDetails params={params} />
        </Suspense>
    )
}

const allCars = [...popularCars, ...recommendedCars]

async function CarDetails({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const selectedCar = allCars.find((car) => car.id === id)

    if (!selectedCar) notFound()

    return (
        <div className="flex">
            <FilterSidebar />

            <main className="flex-1 flex flex-col gap-[32px] p-[32px]">
                <div className="flex gap-[32px]">
                    <CarGallery key={`gallery-${selectedCar.id}`} car={selectedCar} />
                    <DetailCar key={`detail-${selectedCar.id}`} car={selectedCar} />
                </div>
            </main>
        </div>
    )
}