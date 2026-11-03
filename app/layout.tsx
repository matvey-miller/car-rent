import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";
import AuthProvider from "../components/providers/AuthProvider";
import FavoritesProvider from "../components/providers/FavoritesProvider";

// 2. Экспортируем объект с метаданными
export const metadata: Metadata = {
  title: {
    default: "MORENT - Car Rental Platform",
    template: "%s | MORENT", // Это позволит на странице деталей машины делать красивый заголовок, например "Nissan GT-R | MORENT"
  },
  description: "The best platform for car rental. Safe, reliable and low price.",
  icons: {
    icon: "/buttons/like.svg", // путь к твоей иконке
  },
};

import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function RootLayout({ children, }: { children: ReactNode; }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-bg-color min-h-screen flex flex-col`}>
        <AuthProvider>
          <FavoritesProvider>
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
          </FavoritesProvider>
        </AuthProvider>
      </ body>

    </html>
  );
}