

import AdvertisementSection from "../components/advertisment/AdvertisementSection"
import RentalDetailsSection from "../components/rental-details/RentalDetailsSection"
import CarsCategorySection from "../components/car/CarCategorySection"
import SpecificCarCardsList from "../components/car/SpecificCarCardsList"
import ShowMoreSection from "../components/ShowMoreSection"
import { getCarsCount } from "../lib/api"
import { Suspense } from "react"
import CarCardsGridSkeleton from "../components/skeleton/CarCardsGridSkeleton"

async function WaitingForTotalInfo() {
    const total = await getCarsCount()
    return <ShowMoreSection href="/category" total={total}/>
}


export default function Home() {
    return(
        <div className="flex flex-col gap-[32px] my-[32px]">
            <div className="flex flex-col gap-[32px] w-[1312px] m-auto">

                <AdvertisementSection/>
                <RentalDetailsSection/>
                <CarsCategorySection title="Popular Car" action={{buttonLabel: "View All", href: "/category?category=popular"}}  className="mt-[4px]"/>

                <Suspense fallback={<CarCardsGridSkeleton count={4} columns={4} />}>
                    <SpecificCarCardsList category="popular" limit={4} className="car-cards-container-wide"/>
                </Suspense>

                <CarsCategorySection title="Recommended Car"/>

                <Suspense fallback={<CarCardsGridSkeleton count={8} columns={4} />}>
                    <SpecificCarCardsList category="recommended" limit={8} className="car-cards-container-wide"/>
                </Suspense>
                
                <Suspense fallback={<div className='h-[44px] w-full my-[32px]'/>}>
                    <WaitingForTotalInfo/>
                </Suspense>
                    
                
            </div>
        </div>
    )
}