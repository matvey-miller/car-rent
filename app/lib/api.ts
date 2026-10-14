import type { Car } from "../data/cars"
import type { Review, NewReview } from "../data/reviews"

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export async function getCars(category: Car["category"], limit: number): Promise<Car[]> {
    const res = await fetch(`${API_URL}/cars?category=${category}&_limit=${limit}`, { cache: "force-cache" })
    return res.json()
}

export async function getCar(id: string): Promise<Car | null> {
    const res = await fetch(`${API_URL}/cars/${id}`, { cache: "no-store" })
    return res.ok ? res.json() : null
}

export async function getReviews(carId: string): Promise<Review[]> {
    const res = await fetch(`${API_URL}/reviews?carId=${carId}&_sort=date&_order=desc`, { cache: "no-store" })
    return res.json()
}

export async function postReview(review: NewReview): Promise<void> {
    const res = await fetch(`${API_URL}/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(review),
    })
    if (!res.ok) throw new Error("Failed to send review")
}
