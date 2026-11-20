import CarCardsGrid from "../car/CarCardsGrid"
import { getRecentCars } from "../../lib/actions"
import { PROFILE_CARDS_LIMIT } from "../../lib/api"


export default async function RecentCars() {
    const recent = await getRecentCars(PROFILE_CARDS_LIMIT)

    if (recent.length === 0) {
        return <p className="text-secondary-300 mx-auto">No recent cars yet.</p>
    }
    
    return (
        <CarCardsGrid cars={recent} className="car-cards-container-wide"/>
    )
}