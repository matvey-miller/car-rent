import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { API_URL } from "../../../../lib/utils"
import { NextAuthOptions } from "next-auth"

// Создаем "обработчик" всех запросов к нашей авторизации
export const authOptions: NextAuthOptions = ({
  // какие способы входа мы поддерживаем
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login"
  },
  //ЕСЛИ ПОЛЬЗОВАТЕЛЯ В БД НЕТ, ТО СОЗДАЕМ НОВЫЙ ОБЪЕКТ
  callbacks: {
    async signIn ({user}) {

      try {
        const res = await fetch(`${API_URL}/users?email=${user.email}`)
        const existingUsers = await res.json()
        
        if (existingUsers.length === 0) {
          await fetch(`${API_URL}/users`,{ 
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
              name: user.name,
              email: user.email,
              phone: "",
              address: "",
              image: user.image,
              favorites: [],
              recentCars: []
            }
          )}
          )
        }

        return true 
      
      //Если ошибка во время регистриации
      } catch (error) {
        return "/login?error=DatabaseError"
      }
    },
    jwt: async({token, user}) => {
      if (user) {
        const res = await fetch(`${API_URL}/users?email=${user.email}`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)

        const existingUsers = await res.json()
        if (existingUsers.length > 0) {
          token.dbId = existingUsers[0].id
        }
        
      }
      return token
    },
    session: async ({session, token}) => {
      if (token?.dbId) {
        //так как кастомное свойство нужно as any
        (session.user as any).id = token.dbId
      }
      return session
    }
  }
})
//authOptions для серверной работы с сессией
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }