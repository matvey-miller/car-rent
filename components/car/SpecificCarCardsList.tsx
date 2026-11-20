import { getCars } from "../../lib/api"
import type { Car } from "../../data/cars"
import CarCardsGrid from "./CarCardsGrid"

interface SpecificCarCardsListProps {
    category: Car["category"];
    limit: number;
    className?: string;
}

export default async function SpecificCarCardsList({ category, limit, className }: SpecificCarCardsListProps) {
    const cars = await getCars(category, limit)

    return (
        <CarCardsGrid cars={cars} className={className} />
    )
}