import { useWatchlistStore } from "../store/watchlistStore";
import MovieCard from "../components/MovieCard";

export default function Watchlist() {
  const { watchlist } = useWatchlistStore();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-white text-3xl font-bold mb-6">My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-zinc-400 text-center mt-20">No movies saved yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {watchlist.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}