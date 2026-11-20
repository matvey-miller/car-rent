import CarCardsGrid from "../car/CarCardsGrid"
import { getFavoriteCars } from "../../lib/actions"
import { PROFILE_CARDS_LIMIT } from "../../lib/api"

export default async function FavoriteCars() {
    const favorites = await getFavoriteCars(PROFILE_CARDS_LIMIT)

    if (favorites.length === 0) {
        return <p className="text-secondary-300">No favorite cars yet.</p>
    }
    
    return (
        <CarCardsGrid cars={favorites} className="car-cards-container-wide"/>
    )
}