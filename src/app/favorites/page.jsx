'use client';

import { useState, useEffect } from 'react';
import BookCard from '@/components/BookCard';
import { getFavorites } from '@/utils/favorites';
import { fetchBookById } from '@/utils/api';

export default function FavoritesPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const favIds = getFavorites();
    Promise.all(favIds.map(id => fetchBookById(id)))
      .then(results => setBooks(results))
      .catch(console.error);
  }, []);

  if (books.length === 0) {
    return <p className="p-4">You have no favorites yet.</p>;
  }

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
