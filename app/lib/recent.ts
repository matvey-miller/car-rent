export const RECENT_COOKIE = "recentCars"
export const RECENT_LIMIT = 5

export function parseRecent(value?: string): string[] {
    //Возвращает массив айдишек (фильтер против пустых значений)
    return value ? value.split("_").filter(Boolean) : []
}

// 👇 Добавляем функцию записи прямо в утилиты:
export function saveRecentCar(carId: string) {
    if (typeof document === "undefined") return;

    //строки типа 'user=alex; recentCars=1_2_3_4_5; car=BMW;'
    const saved = document.cookie
        .split("; ")
        .find((row) => row.startsWith(`${RECENT_COOKIE}=`))
        //достаем лишь "1_2_3_4_5"
        ?.split("=")[1]

    //вставляем айди машины, которую только открыли и чистим прошлый список, чтобы небыло дубликаттов одной машины
    //сокращаем змассив по лимиту
    const ids = [carId, ...parseRecent(saved).filter((id) => id !== carId)].slice(0, RECENT_LIMIT + 1)

    //join клеит эл. массива в строку через _
    //path=/ куки для всех страниц
    //samesite - зашита от атак
    document.cookie = `${RECENT_COOKIE}=${ids.join("_")}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`
}