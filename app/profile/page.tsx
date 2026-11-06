import CarCategorySection from "../../components/car/CarCategorySection"
import ProfileCard from "../../components/profile/ProfileCard"
import SignOutButton from "../../components/profile/SignOutButton"
import { Suspense } from "react"
import FavoriteCars from "../../components/profile/FavoriteCars"
import RecentCars from "../../components/profile/RecentCars"

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-[32px] w-[1312px] m-auto my-[32px]">
            <Suspense fallback={<div className="h-[279px] skeleton rounded-[10px]"></div>}>
                <ProfileCard />
            </Suspense>
            

            <section className="flex flex-col gap-[20px]">
                <CarCategorySection title="Favorite Cars" action={{ buttonLabel: "View All", href: "/favorites" }} />
                <Suspense fallback={<div className="h-[388px] skeleton rounded-[10px]"></div>}>
                    <FavoriteCars />
                </Suspense>
            </section> 

            <section className="flex flex-col gap-[20px]">
                <CarCategorySection title="Recent Cars" action={{ buttonLabel: "View All", href: "/category" }} />
                <Suspense fallback={<div className="h-[388px] skeleton rounded-[10px]"></div>}>
                    <RecentCars />
                </Suspense>
            </section>
            <SignOutButton/>
        </div>
    )
}



