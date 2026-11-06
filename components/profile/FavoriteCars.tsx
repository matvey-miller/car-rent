import CarCardsGrid from "../car/CarCardsGrid"
import { getUserData } from "../../lib/user"
import { redirect } from "next/navigation"
import { getCarsByIds } from "../../lib/api"

export default async function FavoriteCars() {
    const userData = await getUserData()
    if (!userData) {
        redirect("/login")
    }
    const favoritesIds = userData?.favorites.slice(0, 4) || []
    const favorites = await getCarsByIds(favoritesIds)

    if (favorites.length === 0) {
        return <p className="text-secondary-300">No favorite cars yet.</p>
    }
    
    return (
        <CarCardsGrid cars={favorites} className="car-cards-container-wide"/>
    )
}