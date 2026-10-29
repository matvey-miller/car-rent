// Импортируем саму библиотеку
import NextAuth from "next-auth"
// Импортируем провайдер Гугла (NextAuth поддерживает десятки провайдеров: GitHub, Apple, VK и тд)
import GoogleProvider from "next-auth/providers/google"

// Создаем "обработчик" всех запросов к нашей авторизации
const handler = NextAuth({
  // Указываем, какие способы входа мы поддерживаем
  providers: [
    GoogleProvider({
      // Эти ключи библиотека возьмет из нашего .env.local файла
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
})

// В Next.js (App Router) мы обязаны экспортировать обработчики для методов GET и POST
// Экспортируем наш handler под этими именами
export { handler as GET, handler as POST }