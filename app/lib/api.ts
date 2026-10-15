import type { Car } from "../data/cars"
import type { Review, NewReview } from "../data/reviews"

export interface CarFilters {
    types: string[];
    capacities: string[];
    maxPrice?: number;
}

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

export const CARS_PER_PAGE = 9


// "8" в фильтре = "8 or More"; в базе вместимость хранится строкой "2 People"
function capacityPattern(capacities: string[]): string {
    const parts = capacities.map((value) => (value === "8" ? "[89]|\\d{2,}" : value))
    return `^(${parts.join("|")}) People$`
}

export async function getCarsPage(limit: number, filters: CarFilters): Promise<{ cars: Car[]; total: number }> {
    const query = new URLSearchParams({ _limit: String(limit) })

    filters.types.forEach((type) => query.append("type", type))

    // в регулярку попадают только цифры, чтобы из адреса нельзя было подсунуть свой паттерн
    const capacities = filters.capacities.filter((value) => /^\d+$/.test(value))
    if (capacities.length > 0) {
        query.set("capacity_like", capacityPattern(capacities))
    }
    if (filters.maxPrice) {
        query.set("pricePerDay_lte", String(filters.maxPrice))
    }

    const res = await fetch(`${API_URL}/cars?${query}`, { cache: "no-store" })
    return {
        cars: await res.json(),
        total: Number(res.headers.get("X-Total-Count")),
    }
}

export async function getCarsCount(): Promise<number> {
    const res = await fetch(`${API_URL}/cars?_limit=1`, { cache: "force-cache" })
    return Number(res.headers.get("X-Total-Count"))
}
