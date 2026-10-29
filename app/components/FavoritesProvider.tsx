'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useSession } from "next-auth/react"

interface FavoritesContextProps {
    favorites: string[]
    toggleFavorite: (carId: string) => void
}

// Для работы с переменными в любой части проекта
//не можем заполнить нужные поля, потому что они еще даже не запросились. Это просто инициализация поэтому нужен налл.
const FavoritesContext = createContext<FavoritesContextProps | null>(null)

export default function FavoritesProvider({ children }: { children: ReactNode }) {
    const { data: session } = useSession()
    const userEmail = session?.user?.email

    // Глобальное состояние лайков
    const [favorites, setFavorites] = useState<string[]>([])
    // Сохраняем ID юзера, чтобы потом делать PATCH
    const [userId, setUserId] = useState<string | null>(null)

    // 2. При входе юзера на сайт — один раз делаем GET запрос
    useEffect(() => {
        if (!userEmail) return;

        async function fetchFavorites() {
            const response = await fetch(`http://localhost:4000/users?email=${userEmail}`)
            const userData = await response.json()
            //если в нашей бд нет еще такого юзера
            if (userData.length > 0) {
                setUserId(userData[0].id)
                setFavorites(userData[0].favorites || [])
            }
        }

        fetchFavorites()
    }, [userEmail])

    //Обновляем favorites-array по клику
    async function toggleFavorite(carId: string) {
        if (!userId) return; // Гостям лайкать нельзя

        const newFavorites = favorites.includes(carId)
            ? favorites.filter((id) => id !== carId)
            : [...favorites, carId]

        // Мгновенно обновляем стейт, чтобы сердечки перекрасились сразу!
        setFavorites(newFavorites)

        await fetch(`http://localhost:4000/users/${userId}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'favorites': newFavorites,
            }),
        })
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