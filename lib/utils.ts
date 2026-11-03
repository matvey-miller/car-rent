export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

export function categoryUrl(params: URLSearchParams): string {
    const query = params.toString()
    return query ? `/category?${query}` : "/category"
}

export async function fetchOk(url: string, init?: RequestInit): Promise<Response> {
    const res = await fetch(url, init)
    //если ответ не положительный -> выброс ошибки для покза error.tsx
    if (!res.ok) throw new Error(`Request failed: ${res.status} ${url}`)
    return res
}