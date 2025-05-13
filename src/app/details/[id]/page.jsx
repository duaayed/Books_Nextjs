'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { fetchBookById } from '@/utils/api';
import { isFavorite, toggleFavorite } from '@/utils/favorites';
import { BookmarkIcon as OutlineBookmark } from '@heroicons/react/24/outline';
import { BookmarkIcon as SolidBookmark } from '@heroicons/react/24/solid';
import Loading from '@/components/Loading';

export default function BookDetailPage() {
  const { id } = useParams();
  const [isFav, setIsFav] = useState(false);

  const { data: book, isLoading, error } = useQuery({
    queryKey: ['book', id],
    queryFn: () => fetchBookById(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (id) {
      setIsFav(isFavorite(id));
    }
  }, [id]);

  const handleToggleFavorite = () => {
    toggleFavorite(id);
    setIsFav(prev => !prev);
  };

  if (isLoading) return <Loading/>;
  if (error) return <p className="text-red-500">Failed to load book.</p>;

  const info = book.volumeInfo || {};

  return (
    <main className="p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-start mb-4">
        <h1 className="text-2xl font-bold">{info.title}</h1>
        <button onClick={handleToggleFavorite} className="p-1" aria-label="Toggle Favorite">
          {isFav
            ? <SolidBookmark className="h-6 w-6 text-orange-800 cursor-pointer" />
            : <OutlineBookmark className="h-6 w-6 text-gray-400 cursor-pointer" />
          }
        </button>
      </div>
      <img
        src={info.imageLinks?.thumbnail || '/no-cover.png'}
        alt={info.title}
        className="mx-auto mb-4"
      />
      <p className="mb-2"><strong>Authors:</strong> {info.authors?.join(', ')}</p>
      <p className="mb-4"><div
  className="mb-4 prose prose-sm sm:prose-base"
  dangerouslySetInnerHTML={{ __html: info.description }}
/></p>
    </main>
  );
}
