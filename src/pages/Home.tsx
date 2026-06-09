import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { searchMovies } from "../api/tmdb";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import type { TMDBResponse } from "../types/movie";





export default function Home() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);  // waits 300ms after user stops typing

  const { data, isLoading, isError } = useQuery<TMDBResponse>({
    queryKey: ["movies", debouncedQuery],       // re-fetches whenever query changes
    queryFn: () => searchMovies(debouncedQuery),
    enabled: debouncedQuery.length > 2,         // only fetch after 3 chars
    staleTime: 1000 * 60 * 5,          // cache results for 5 mins
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-6">🎬 CineTrack</h1>
      <SearchBar value={query} onChange={setQuery} />

      <div className="mt-8">
        {query.length <= 2 && (
          <p className="text-zinc-400 text-center mt-20">Type at least 3 characters to search</p>
        )}
        {isLoading && (
          <p className="text-zinc-400 text-center mt-20">Loading...</p>
        )}
        {isError && (
          <p className="text-red-400 text-center mt-20">Something went wrong. Check your API key.</p>
        )}
        {data?.results.length === 0 && (
          <p className="text-zinc-400 text-center mt-20">No results found.</p>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data?.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}