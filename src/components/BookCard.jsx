'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookmarkIcon as OutlineBookmark,
  BookmarkIcon as SolidBookmark,
} from '@heroicons/react/24/solid';

import { isFavorite, toggleFavorite } from '@/utils/favorites';

export default function BookCard({ book }) {
  const info = book.volumeInfo || {};
  const [isFav, setIsFav] = useState(false);

  // Initialize favorite status on mount
  useEffect(() => {
    setIsFav(isFavorite(book.id));
  }, [book.id]);

  // Handle toggle
  const handleToggle = (e) => {
    e.stopPropagation(); // prevent link click
    e.preventDefault(); // prevent navigation
    toggleFavorite(book.id);
    setIsFav(prev => !prev);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 w-[200px]">
      {/* Favorite Toggle */}
      <button
        onClick={handleToggle}
        className="absolute top-2 right-2 p-1 rounded-full bg-white shadow-md hover:bg-gray-100"
        aria-label="Toggle Favorite"
      >
        {isFav ? (
          <SolidBookmark className="h-6 w-6 text-red-500" />
        ) : (
          <OutlineBookmark className="h-6 w-6 text-gray-400" />
        )}
      </button>

      {/* Card content  */}
      <Link href={`/details/${book.id}`} className="block p-3">
        <img
          src={info.imageLinks?.thumbnail || '/no-cover.png'}
          alt={info.title}
          className="w-full h-48 object-contain mb-2"
        />
        <h3 className="text-sm font-semibold truncate text-orange-800">{info.title}</h3>
        <p className="text-xs text-gray-500 truncate">{info.authors?.join(', ')}</p>
      </Link>
    </div>
  );
}
