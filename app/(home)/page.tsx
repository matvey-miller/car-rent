"use client"
import Image from "next/image"

import Header from "../components/Header"
import Advertisment from "../components/Advertisment"
import RentalDetailsFrom from "../components/RentalDetailsForm"
import CarCard from "../components/CarCard"
import Footer from "../components/Footer"

export default function Home() {
    return(
        <div className="flex flex-col gap-[32px]">
            <Header/>
            <div className="flex flex-col gap-[32px] w-[1312px] m-auto">

                <div className="w-full h-[360px] flex justify-center gap-[32px]">
                    <Advertisment number={1}/>
                    <Advertisment number={2}/>
                </div>

                <div className="w-full h-[132px] flex justify-center items-center gap-[44px]">
                    <RentalDetailsFrom/>
                    <button className="w-[60px] h-[60px] flex items-center justify-center rounded-[10px] bg-primary-500 shrink-0">
                        <Image
                        src="/swap.svg"
                        alt="swap"
                        width={24}
                        height={24}
                        />
                    </button>
                    <RentalDetailsFrom/>
                </div>


                <div className="cars-category-container">
                    <h2 className="text-s-8 text-secondary-300">Popular Car</h2>
                    <button className="text-primary-500">View all</button>
                </div>

                <div className="car-cards-container">
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>

                </div>

                <div className="cars-category-container">
                    <h2 className="text-s-8 text-secondary-300">Recommendation Car</h2>
                </div>

                <div className="car-cards-container">
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>
                    <CarCard/>

                </div>

                <div className="flex justify-center items-center w-100% h-[44px] my-[32px]">
                    <button className="btn bg-primary-500 w-[156px] h-[44px] text-s-8 text-semibold text-white">
                        Show more car
                    </button>
                </div>
                
            </div>
            
            <Footer/>
            
        </div>
    )
}