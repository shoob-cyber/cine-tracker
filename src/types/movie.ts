export interface Movie {
  id: number;
  title: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  overview: string;
}

export interface TMDBResponse {
  results: Movie[];
  total_results: number;
  total_pages: number;
}