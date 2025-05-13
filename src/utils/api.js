const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';

export async function fetchPopularBooks() {
  const url = `${BASE_URL}?q=subject:fiction&orderBy=relevance&maxResults=12`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch popular books');
  const data = await res.json();
  // Return an array directly, not the entire response object
  return data.items || [];
}


export async function searchBooks(query) {
  const encodedQuery = encodeURIComponent(`intitle:${query} OR inauthor:${query}`);
  const url = `${BASE_URL}?q=${encodedQuery}&maxResults=20`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Search failed');
  }

  const data = await response.json();
  return data.items || [];
}



export async function fetchBookById(id) {
  const url = `${BASE_URL}/${id}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Could not load book details');
  }
  
  return response.json();
}


