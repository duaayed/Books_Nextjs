export function getFavorites() {
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export function isFavorite(bookId) {
  return getFavorites().includes(bookId);
}

export function toggleFavorite(bookId) {
  const current = getFavorites();
  let updated;
  if (current.includes(bookId)) {
    updated = current.filter(id => id !== bookId);
  } else {
    updated = [...current, bookId];
  }
  localStorage.setItem('favorites', JSON.stringify(updated));
}
