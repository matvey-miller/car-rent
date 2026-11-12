'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useSession } from "next-auth/react"
import { useRef } from "react"
import { updateFavorites } from "../../lib/favorites"
import { getUserData } from "../../lib/user"
import { useRouter } from "next/navigation"

interface FavoritesContextProps {
    favorites: string[]
    toggleFavorite: (carId: string) => void
}

// Для работы с переменными в любой части проекта
//не можем заполнить нужные поля, потому что они еще даже не запросились. Это просто инициализация поэтому нужен налл.
const FavoritesContext = createContext<FavoritesContextProps | null>(null)
const TIMER_INTERVAL = 500;


export default function FavoritesProvider({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { data: session } = useSession()
    const userEmail = session?.user?.email

    const [favorites, setFavorites] = useState<string[]>([])
    //Debounce таймер воизбежание миллионов кликов -> в следствии запросов в бд
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const favoritesRef = useRef<string[]>([]);

    // 2. При входе юзера на сайт — один раз делаем GET запрос
    useEffect(() => {
        if (!userEmail) return;

        async function fetchFavorites() {
            const user = await getUserData()
            //актуализируем данные если пользователь есть в бд
            if (user) {
                setFavorites(user.favorites || [])
                favoritesRef.current = user.favorites || []
            }
            
        }

        fetchFavorites()
    }, [userEmail])

    //Обновляем favorites по клику c задержкой 500ms
    async function toggleFavorite(carId: string) {
        if (!userEmail) {
            router.push("/login")
            return
        }

        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        const currentFavs = favoritesRef.current
        const newFavorites = currentFavs.includes(carId)
            ? currentFavs.filter((id) => id !== carId)
            : [carId, ...currentFavs]

        const prevFavorites = favorites
        // Мгновенно обновляем стейт, чтобы сердечки перекрасились сразу!
        setFavorites(newFavorites) //для ui чтобы рендерились сердечки по новой
        favoritesRef.current = newFavorites // для логики и чтобы не было потери данных при быстрых кликах на разные машины
        
        timerRef.current = setTimeout(async () => {
            try {
                await updateFavorites(favoritesRef.current)
            } catch {
                //откат ui если запрос дпропнулся
                setFavorites(prevFavorites)
                favoritesRef.current = prevFavorites
            }
        }, TIMER_INTERVAL)
        
        
    }

    // Раздаем данные всем детям внутри коробки
    return (
        <FavoritesContext.Provider value={{favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )

}

// Тот самый кастомный хук
//UseContext говорит как бы "достань данные с "
export function useFavorite() {
    const context = useContext(FavoritesContext)

    if (context === null) {
        throw new Error("Somthing went wrong. Try to sign in again")
    }

    return context


}