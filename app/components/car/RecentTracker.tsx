'use client'

import { useEffect } from "react"
import { saveRecentCar } from "../../lib/recent"

export default function RecentTracker({ carId }: { carId: string }) {
    useEffect(() => {
        saveRecentCar(carId)
    }, [carId])

    return null
}