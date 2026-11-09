import { Suspense } from "react"
import { notFound } from "next/navigation"
import FilterSidebar from "../../../components/filter/FilterSideBar"
import DetailCar from "../../../components/car/DetailCar"
import CarGallery from "../../../components/car/CarGallery"
import ReviewsSection from "../../../components/reviews/ReviewsSection"
import { getCar, getReviews, getCars } from "../../../lib/api"
import CarCategorySection from "../../../components/car/CarCategorySection"
import CarCardsGrid from "../../../components/car/CarCardsGrid"
import RecentTracker from "../../../components/car/RecentTracker"
import CarDetailsSkeleton from "../../../components/skeleton/CarDetailsSkeleton"
import ReviewsSectionSkeleton from "../../../components/skeleton/ReviewSectionSkeleton"
import { getRecentCars } from "../../../lib/actions"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const id = (await params).id
  const carData = await getCar(id)
  if (!carData) {
    return {title: "Not found"}
  }

  return {title: carData.name}

}


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


    const userData = await getUserData()
    
    // 1. Берем историю юзера (или [] для гостей), убираем текущую машину, берем 3 штуки
    const recentIdsList = (userData?.recentCars || [])
        .filter((recentId) => recentId !== id)
        .slice(0, 3)

    // 2. Делаем два запроса в базу ПАРАЛЛЕЛЬНО (ускоряет загрузку в 2 раза)
    const [recentCars, recommendedCars] = await Promise.all([
        getCarsByIds(recentIdsList),
        getCars("recommended", 4),
    ])

    const recentParams = new URLSearchParams(recentIdsList.map((recentId) => ["id", recentId]))

        


    return (
        <div className="flex fade-in">
            <FilterSidebar />

            <div className="flex-1 flex flex-col gap-[32px] p-[32px]">
                <RecentTracker carId={id} />

                <div className="flex gap-[32px]">
                    <CarGallery car={car} />
                    <DetailCar car={car} rating={rating} reviewsCount={reviews.length} />
                </div>

                <Suspense fallback={<ReviewsSectionSkeleton />}>
                    <ReviewsSection carId={id} reviews={reviews} />
                </Suspense>

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

function getCarsByIds(recentIdsList: any): any {
    throw new Error("Function not implemented.")
}

function getCarsByIds(recentIdsList: any): any {
    throw new Error("Function not implemented.")
}

