import CarCard from "./CarCard"
import { getCars } from "../../lib/api"

interface CarCardsListProps {
    category: "popular" | "recommended";
}

export default async function CarCardsList({ category }: CarCardsListProps) {
    const cars = await getCars(category, category === "popular" ? 4 : 8)

    return (
        <div className="car-cards-container">
            {cars.map((car) => <CarCard key={car.id} car={car} />)}
        </div>
    )
}
