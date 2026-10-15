export function categoryUrl(params: URLSearchParams): string {
    const query = params.toString()
    return query ? `/category?${query}` : "/category"
}