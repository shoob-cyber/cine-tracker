const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
export const IMG_BASE = "https://image.tmdb.org/t/p/w500";

export async function searchMovies(query: string) {
  if (!query) return { results: [] };
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  if (!res.ok) throw new Error("Failed to fetch movies");
  return res.json();
}