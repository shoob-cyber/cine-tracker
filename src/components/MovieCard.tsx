import type { Movie } from "../types/movie";
import { IMG_BASE } from "../api/tmdb";
import { useWatchlistStore } from "../store/watchlistStore";


interface Props {
  movie: Movie;
}

export default function MovieCard({ movie }: Props) {
  const { add, remove, isInWatchlist } = useWatchlistStore();
  const saved = isInWatchlist(movie.id);

  return (
    <div className="bg-zinc-800 rounded-xl overflow-hidden flex flex-col">
      {movie.poster_path ? (
        <img
          src={`${IMG_BASE}${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
      ) : (
        <div className="w-full h-64 bg-zinc-700 flex items-center justify-center text-zinc-400">
          No Image
        </div>
      )}

      <div className="p-3 flex flex-col gap-2 flex-1">
        <h2 className="text-white font-semibold text-sm line-clamp-2">{movie.title}</h2>
        <p className="text-zinc-400 text-xs">{movie.release_date?.slice(0, 4)} · ⭐ {movie.vote_average.toFixed(1)}</p>

        <button
          onClick={() => saved ? remove(movie.id) : add(movie)}
          className={`mt-auto w-full py-2 rounded-lg text-sm font-medium transition-colors ${
            saved
              ? "bg-red-600 hover:bg-red-700 text-white"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {saved ? "Remove" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}