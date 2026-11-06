import CarCardsGrid from "../car/CarCardsGrid"
import { getUserData } from "../../lib/user"
import { redirect } from "next/navigation"
import { getCarsByIds } from "../../lib/api"

export default async function RecentCars() {
    const userData = await getUserData()
    if (!userData) {
        redirect("/login")
    }
    const recentIds = userData?.recentCars.slice(0, 4) || []
    const recent = await getCarsByIds(recentIds)

    if (recent.length === 0) {
        return <p className="text-secondary-300 mx-auto">No recent cars yet.</p>
    }
    
    return (
        <CarCardsGrid cars={recent} className="car-cards-container-wide"/>
    )
}