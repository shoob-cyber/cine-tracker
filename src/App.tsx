import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { useWatchlistStore } from "./store/watchlistStore";

export default function App() {
  const { watchlist } = useWatchlistStore();

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-900">
        {/* Navbar */}
        <nav className="bg-zinc-800 px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-white text-xl font-bold">🎬 CineTrack</Link>
          <Link
            to="/watchlist"
            className="text-zinc-300 hover:text-white text-sm flex items-center gap-2"
          >
            Watchlist
            {watchlist.length > 0 && (
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                {watchlist.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}