import type { Car } from "../../data/cars"
import CarCard from "./CarCard"

export default function CarCardsGrid({ cars }: { cars: Car[] }) {
    return (
        <div className="car-cards-container car-cards-container-3">
            {cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
    )
}