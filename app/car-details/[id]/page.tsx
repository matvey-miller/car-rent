import { Suspense } from "react"
import { notFound } from "next/navigation"
import FilterSidebar from "../../components/filter/FilterSideBar"
import DetailCar from "../../components/car/DetailCar"
import CarGallery from "../../components/car/CarGallery"
import ReviewsSection from "../../components/reviews/ReviewsSection"
import { getCar, getReviews } from "../../lib/api"
import CarCategorySection from "../../components/car/CarCategorySection"
import CarCardsList from "../../components/car/CarCardsList"

export default function CarDetailsPage({params}: {params: Promise<{ id: string }>}) {
    return (
        <Suspense fallback={<p className="text-s-3 font-medium text-secondary-300 min-h-[500px]">Loading car details...</p>}>
            <CarDetailsContent params={params} />
        </Suspense>
    )
}

async function CarDetailsContent({params}: {params: Promise<{ id: string }>}) {
    const { id } = await params

    const car = await getCar(id)
    if (!car) notFound()

    const reviews = await getReviews(id)
    
    const rating = reviews.length
        ? Math.round(
              reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
          )
        : 0

    return (
        <div className="flex">
            <FilterSidebar />

            <main className="flex-1 flex flex-col gap-[32px] p-[32px]">
                <div className="flex gap-[32px]">
                    <CarGallery car={car} />
                    <DetailCar
                        car={car}
                        rating={rating}
                        reviewsCount={reviews.length}
                    />
                </div>

                <ReviewsSection carId={id} reviews={reviews} />

                <CarCategorySection title="Recent Car" buttonLabel="View All" />
                <CarCardsList category="recent" limit={3}  />

                <CarCategorySection title="Recommendation Car" buttonLabel="View All" />
                <CarCardsList category="recommended" limit={3} />
            </main>
        </div>
    )
}