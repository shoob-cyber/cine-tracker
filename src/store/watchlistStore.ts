import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "../types/movie";

interface WatchlistState {
  watchlist: Movie[];
  add: (movie: Movie) => void;
  remove: (id: number) => void;
  isInWatchlist: (id: number) => boolean;
}

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      watchlist: [],
      add: (movie) =>
        set((state) => ({ watchlist: [...state.watchlist, movie] })),
      remove: (id) =>
        set((state) => ({
          watchlist: state.watchlist.filter((m) => m.id !== id),
        })),
      isInWatchlist: (id) => get().watchlist.some((m) => m.id === id),
    }),
    { name: "watchlist-storage" } // persists to localStorage automatically
  )
);