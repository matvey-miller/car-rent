

import type { Car } from "../data/cars"
import type { Review } from "../data/reviews"
import { fetchOk, API_URL } from "./utils"

export interface CarFilters {
    types: string[];
    capacities: string[];
    maxPrice?: number;
    category?: Car["category"];
    ids?: string[];
}

export const CARS_PER_PAGE = 9


//force-cache -> данные меняются редко,кешируй и если завтра другой пользователь зайдет,выдавай их, а не долби бд
export async function getCars(category: Car["category"], limit: number): Promise<Car[]> {
    const res = await fetchOk(`${API_URL}/cars?category=${category}&_limit=${limit}`, { cache: "force-cache" })
    return res.json()
}

export async function getCar(id: string): Promise<Car | null> {
    const res = await fetch(`${API_URL}/cars/${id}`, { cache: "no-store" })
    return res.ok ? res.json() : null
}

export async function getReviews(id: string) : Promise<Review[]> {
    const res = await fetchOk(`${API_URL}/reviews?carId=${id}&_sort=date&_order=desc`, {cache: "no-store"})
    return res.json();
}




// "8" в фильтре = "8 or More"; в базе вместимость хранится строкой "2 People"
function capacityPattern(capacities: string[]): string {
    const parts = capacities.map((value) => (value === "8" ? "[89]|\\d{2,}" : value))
    return `^(${parts.join("|")}) People$`
}

export async function getCarsPage(limit: number, filters: CarFilters): Promise<{ cars: Car[]; total: number }>
{
    const query = new URLSearchParams({_limit: String(limit)})

    filters.types.forEach((type) => query.append('type', type));

    filters.ids?.forEach((id) => query.append("id", id));

    const capacities = filters.capacities.filter((value) => /^\d+$/.test(value))
    if (capacities.length > 0) {
        query.set("capacity_like", capacityPattern(capacities))
    }

    if (filters.maxPrice) {
        query.set("pricePerDay_lte", String(filters.maxPrice))
    }

    if (filters.category) {
        query.set("category", filters.category)
    }

    const res = await fetchOk(`${API_URL}/cars?${query}`, {cache: "no-store"})

    return {
        cars: await res.json(),
        total: Number(res.headers.get("X-Total-Count"))

    }
    
}

export async function getCarsByIds(ids: string[]): Promise<Car[]> {
    if (ids.length === 0) return []

    const query = new URLSearchParams()
    ids.forEach((id) => query.append("id", id))

    const res = await fetchOk(`${API_URL}/cars?${query}`, { cache: "no-store" })
    const cars: Car[] = await res.json()

    // json-server отдаёт машины в порядке базы, а нужен порядок просмотра;
    // flatMap заодно выкидывает id, которых уже нет в базе
    return ids.flatMap((id) => cars.filter((car) => car.id === id))
}

export async function getCarsCount(): Promise<number> {
    //мы делаем вызов в базу для одной машины, чтобы не делать реальный сложный запрос
    //а затем вытаскиваем total для написания Car Count
    const res = await fetchOk(`${API_URL}/cars?_limit=1`, { cache: "force-cache" })
    return Number(res.headers.get("X-Total-Count"))
}