import type { Car } from "../../data/cars"
import CarCard from "./CarCard"

interface CarCarsGridProps {
    cars: Car[];
    className?: string
}
export default function CarCardsGrid({ cars, className=''}: CarCarsGridProps) {
    return (
        <div className={`car-cards-container fade-in ${className}`}>
            {cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
    )
}