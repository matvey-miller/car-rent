"use client"

import Header from "../components/Header"
import AdvertismentSection from "../components/advertisment/AdvertisementSection"
import RentalDetailsSection from "../components/rental-details/RentalDetailsSection"
import CarsCategorySection from "../components/car/CarCategorySection"
import CarCardsList from "../components/car/CarCardsList"
import ShowMoreSection from "../components/ShowMoreSection"
import Footer from "../components/Footer"


export default function Home() {
    return(
        <div className="flex flex-col gap-[32px]">
            <Header/>
            <div className="flex flex-col gap-[32px] w-[1312px] m-auto">

                <AdvertismentSection/>
                <RentalDetailsSection/>
                <CarsCategorySection title="Popular Car" buttonLabel="View All" className="mt-[4px]"/>
                <CarCardsList category="popular"/>
                <CarsCategorySection title="Recommended Car"/>
                <CarCardsList category="recommended"/>
                <ShowMoreSection/>
                
            </div>
            <Footer/>
        </div>
    )
}