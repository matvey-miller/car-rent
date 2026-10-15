import CarCard from "./CarCard"
import { getCars } from "../../lib/api"
import type { Car } from "../../data/cars"

interface CarCardsListProps {
    category: Car["category"];
    limit: number;
    className?: string;
}

export default async function CarCardsList({ category, limit, className }: CarCardsListProps) {
    const cars = await getCars(category, limit)

    return (
        <div className={`car-cards-container ${className || ""}`}>
            {cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
    )
}