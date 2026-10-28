import { Suspense } from "react"
import { notFound } from "next/navigation"
import FilterSidebar from "../../components/filter/FilterSideBar"
import DetailCar from "../../components/car/DetailCar"
import CarGallery from "../../components/car/CarGallery"
import ReviewsSection from "../../components/reviews/ReviewsSection"
import { getCar, getReviews, getCars, getCarsByIds } from "../../lib/api"
import CarCategorySection from "../../components/car/CarCategorySection"
import { cookies } from "next/headers"
import CarCardsGrid from "../../components/car/CarCardsGrid"
import RecentTracker from "../../components/car/RecentTracker"
import { RECENT_COOKIE, RECENT_LIMIT, parseRecent } from "../../lib/recent"
import CarDetailsSkeleton from "../../components/skeleton/CarDetailsSkeleton"

export default function CarDetailsPage({params}: {params: Promise<{ id: string }>}) {
    return (
        <Suspense fallback={<CarDetailsSkeleton />}>
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

    const cookieStore = await cookies()
    const recentIds = parseRecent(cookieStore.get(RECENT_COOKIE)?.value)
        .filter((recentId) => recentId !== id)
        .slice(0, RECENT_LIMIT)

    const [recentCars, recommendedCars] = await Promise.all([
        getCarsByIds(recentIds.slice(0, 3)),
        getCars("recommended", 4),
    ])

    const recentParams = new URLSearchParams(recentIds.map((recentId) => ["id", recentId]))

    return (
        <div className="flex fade-in">
            <FilterSidebar />

            <div className="flex-1 flex flex-col gap-[32px] p-[32px]">
                <RecentTracker carId={id} />

                <div className="flex gap-[32px]">
                    <CarGallery car={car} />
                    <DetailCar car={car} rating={rating} reviewsCount={reviews.length} />
                </div>

                <ReviewsSection carId={id} reviews={reviews} />

                {recentCars.length > 0 && (
                    <section className="flex flex-col gap-[20px]">
                        <CarCategorySection title="Recent Car" action={{buttonLabel: "View All", href: `/category?${recentParams}`}} />
                        <CarCardsGrid cars={recentCars} />
                    </section>
                )}

                <section className="flex flex-col gap-[20px]">
                    <CarCategorySection title="Recommendation Car" action={{buttonLabel: "View All", href: "/category?category=recommended"}} />
                    <CarCardsGrid cars={recommendedCars.filter((c) => c.id !== id).slice(0, 3)} />
                </section>
            </div>
        </div>
    )
}