'use client'

import { useEffect } from "react"
import { saveRecentCar } from "../../lib/actions"

export default function RecentTracker({ carId }: { carId: string }) {
    useEffect(() => {
        saveRecentCar(carId).catch(() => {
            //Если ошибка ну и хуй с ней
        })


    }, [carId])

    return null
}
