'use client';

import { useQuery } from '@tanstack/react-query';
import PopularBooks from '@/components/BookCard';
import { fetchPopularBooks } from '@/utils/api';
import Loading from '@/components/Loading';


export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['popularBooks'],
    queryFn: fetchPopularBooks,
  });

  if (isLoading) return <Loading/>;
  if (error)    return <p className="text-center text-red-600 mt-10">Something went wrong!</p>;

  return (
    <section className="px-6 py-10 max-w-7xl mx-auto ">
      <h2 className="text-2xl font-bold mb-6">Popular Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center sm:justify-items-stretch">
        {data.map(book => (
          <PopularBooks key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}
