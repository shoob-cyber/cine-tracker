import { describe, it, expect, beforeEach } from "vitest";
import { useWatchlistStore } from "../store/watchlistStore";

const mockMovie = {
  id: 1,
  title: "Inception",
  poster_path: "/inception.jpg",
  release_date: "2010-07-16",
  vote_average: 8.8,
  overview: "A mind-bending thriller",
};

beforeEach(() => {
  useWatchlistStore.setState({ watchlist: [] });
});

describe("Watchlist Store", () => {
  it("adds a movie to the watchlist", () => {
    useWatchlistStore.getState().add(mockMovie);
    expect(useWatchlistStore.getState().watchlist).toHaveLength(1);
  });

  it("removes a movie from the watchlist", () => {
    useWatchlistStore.getState().add(mockMovie);
    useWatchlistStore.getState().remove(mockMovie.id);
    expect(useWatchlistStore.getState().watchlist).toHaveLength(0);
  });

  it("correctly checks if a movie is in the watchlist", () => {
    useWatchlistStore.getState().add(mockMovie);
    expect(useWatchlistStore.getState().isInWatchlist(1)).toBe(true);
    expect(useWatchlistStore.getState().isInWatchlist(99)).toBe(false);
  });
});