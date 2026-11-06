import type { Metadata } from "next"
import Link from "next/link"
import type { Car } from "../../../data/cars"
import CarCardsGrid from "../../../components/car/CarCardsGrid"
import StatusMessage from "../../../components/ui/StatusMessage"
import { getFavoriteCars } from "../../../lib/actions"
import { Suspense } from "react"

export const metadata: Metadata = { title: "Favorite Cars" }

export default function FavoritesPage() {
    return (
        <div className="flex flex-col gap-[32px] w-[1312px] m-auto my-[32px]"> 
            <Suspense fallback={<div className="h-[400px] skeleton rounded-[10px] mt-[32px]"></div>}>
                <AllFavoritesCarsSection />
            </Suspense>
        </div>
        
        
    )
}

async function AllFavoritesCarsSection() {
    const cars: Car[] = await getFavoriteCars()

    if (cars.length === 0) {
        return (
            <StatusMessage title="No favorites yet" text="Tap the heart on any car and it will appear here.">
                <Link href="/category" className="btn bg-primary-500 w-[140px] h-[44px] text-s-8 font-semibold text-white">
                    Browse cars
                </Link>
            </StatusMessage>
        )
    }

    return (
        <>
            <div className="cars-category-container">
                <h2 className="text-s-8 text-secondary-300">Favorite Car</h2>
                <p className="text-s-9 font-medium text-secondary-300">
                    {cars.length} {cars.length === 1 ? "Car" : "Cars"}
                </p>
            </div>
            <CarCardsGrid cars={cars} className="car-cards-container-wide" />
            
        </>
    )
}