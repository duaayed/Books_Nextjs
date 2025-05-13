'use client';

import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import BookCard from '@/components/BookCard';
import { searchBooks } from '@/utils/api';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Loading from '@/components/Loading';

export default function SearchPage() {
  const [term, setTerm] = useState('');
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['search', term],
    queryFn: () => searchBooks(term),
    enabled: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    refetch();
  };

  return (
    <main className="p-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by title or author"
          className="input input-bordered flex-grow"
          value={term}
          onChange={e => setTerm(e.target.value)}
        />
        <button type="submit" className="btn bg-orange-800 hover:bg-orange-700">
          <MagnifyingGlassIcon className="h-5 w-5 mr-1" /> Search
        </button>
      </form>

      {isLoading && <Loading/>}
      {error && <p className="text-red-500">Search failed.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {data?.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
