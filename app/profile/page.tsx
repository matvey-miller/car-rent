import CarCategorySection from "../../components/car/CarCategorySection"
import ProfileCard from "../../components/profile/ProfileCard"
import PlaceholderGrid from "../../components/profile/PlaceHolderGrid"
import SignOutButton from "../../components/profile/SignOutButton"
import { Suspense } from "react"

export default function ProfilePage() {
    return (
        <div className="flex flex-col gap-[32px] w-[1312px] m-auto my-[32px]">
            <Suspense>
                <ProfileCard />
            </Suspense>
            

            <section className="flex flex-col gap-[20px]">
                <CarCategorySection title="Favorite Cars" action={{ buttonLabel: "View All", href: "/favorites" }} />
                <PlaceholderGrid label="Favorite" />
            </section>

            <section className="flex flex-col gap-[20px]">
                <CarCategorySection title="Recent Cars" action={{ buttonLabel: "View All", href: "/category" }} />
                <PlaceholderGrid label="Recent" />
            </section>
            <SignOutButton/>
        </div>
    )
}



