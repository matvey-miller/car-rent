import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

import Footer from "./components/Footer"
import Header from "./components/Header"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} bg-bg-color`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}