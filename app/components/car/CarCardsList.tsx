import { recommendedCars, popularCars } from "../../data/cars"
import CarCard from "./CarCard"

interface CarCategorySectionProps {
    category: "popular" | "recommended";
}

export default function CarCardsList({ category }: CarCategorySectionProps) {
    return (
        <div className="car-cards-container">
            {category === "popular" ? popularCars.slice(0, 4).map((car) => <CarCard key={car.id} car={car} />)
             : recommendedCars.slice(0, 8).map((car) => <CarCard key={car.id} car={car}/>)}
        </div>
    )
}