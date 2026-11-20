import CarCategorySection from "../../components/car/CarCategorySection"
import ProfileCard from "../../components/profile/ProfileCard"
import SignOutButton from "../../components/profile/SignOutButton"
import { Suspense } from "react"
import FavoriteCars from "../../components/profile/FavoriteCars"
import RecentCars from "../../components/profile/RecentCars"
import CarCardsGridSkeleton from "../../components/skeleton/CarCardsGridSkeleton"

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-[32px] w-[1312px] m-auto my-[32px]">
            <Suspense fallback={<div className="h-[279px] skeleton rounded-[10px]"></div>}>
                <ProfileCard />
            </Suspense>
            

            <section className="flex flex-col gap-[20px]">
                <CarCategorySection title="Favorite Cars" action={{ buttonLabel: "View All", href: "/profile/favorites" }} />
                <Suspense fallback={<CarCardsGridSkeleton count={4} columns={4} />}>
                    <FavoriteCars />
                </Suspense>
            </section> 

            <section className="flex flex-col gap-[20px]">
                <CarCategorySection title="Recent Cars" action={{ buttonLabel: "View All", href: "/profile/recent" }} />
                <Suspense fallback={<CarCardsGridSkeleton count={4} columns={4} />}>
                    <RecentCars />
                </Suspense>
            </section>
            <SignOutButton/>
        </div>
    )
}



