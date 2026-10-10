import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

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
        {children}
      </body>
    </html>
  );
}