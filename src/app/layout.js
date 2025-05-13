import Head from 'next/head';
import './globals.css';
import { Providers } from '@/providers';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Book Explorer',
  description: 'Browse and search books using Google Books API',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-base-100 text-base-content h-full">
        <Header></Header>
        <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}
