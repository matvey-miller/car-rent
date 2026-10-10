import type { Metadata } from 'next';
import '@fontsource-variable/plus-jakarta-sans';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'MORENT - Car Rental',
  description: 'The best platform for car rental',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}