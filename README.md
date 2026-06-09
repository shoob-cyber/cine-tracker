# 🎬 CineTrack

A modern, responsive movie discovery and watchlist management application built with React, TypeScript, and Vite. Discover movies, search by title, and maintain a personalized watchlist with persistent storage.

## ✨ Features

- **Movie Search**: Search for movies in real-time using the TMDB API
- **Movie Discovery**: Browse movie details including title, release date, rating, and overview
- **Personal Watchlist**: Add and remove movies from your personalized watchlist
- **Persistent Storage**: Watchlist data is automatically saved to browser localStorage
- **Responsive Design**: Beautiful UI that works seamlessly on desktop and mobile devices
- **Type-Safe**: Full TypeScript support for enhanced code quality and developer experience
- **Performance**: Optimized with React Query and Zustand for efficient state management

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript 6
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS 3
- **State Management**: Zustand 5 (with localStorage persistence)
- **Routing**: React Router DOM 7
- **Data Fetching**: TanStack React Query 5
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint + TypeScript ESLint
- **Styling Tools**: PostCSS + Autoprefixer

## 📁 Project Structure

```
cinetrack/
├── src/
│   ├── api/                 # TMDB API integration
│   │   └── tmdb.ts         # Movie search and API utilities
│   ├── components/          # Reusable React components
│   │   ├── MovieCard.tsx    # Movie card display component
│   │   └── SearchBar.tsx    # Search input component
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Main search and discovery page
│   │   └── Watchlist.tsx    # Watchlist management page
│   ├── store/               # State management
│   │   └── watchlistStore.ts # Zustand store with localStorage persistence
│   ├── types/               # TypeScript type definitions
│   │   └── movie.ts         # Movie and API response types
│   ├── __tests__/           # Test files
│   │   └── watchlistStore.test.ts
│   ├── App.tsx              # Main app component with routing
│   ├── main.tsx             # React entry point
│   ├── App.css              # App styles
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
└── eslint.config.js         # ESLint configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable):
```bash
git clone <repository-url>
cd cinetrack
```

2. **Install dependencies**:
```bash
npm install
```

3. **Set up environment variables**:
Create a `.env.local` file in the root directory:
```env
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

Get your TMDB API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)

### Development

Start the development server with hot module replacement:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create an optimized production build:
```bash
npm run build
```

### Preview

Preview the production build locally:
```bash
npm run preview
```

### Lint

Run ESLint to check code quality:
```bash
npm run lint
```

## 🎯 Usage

### Searching for Movies

1. Navigate to the Home page
2. Use the search bar to enter a movie title
3. Browse the search results displayed as interactive cards
4. Click "Add to Watchlist" on any movie card to save it

### Managing Your Watchlist

1. Click the "Watchlist" button in the navigation bar (shows count of saved movies)
2. View all movies you've added to your watchlist
3. Remove movies by clicking the "Remove" button on any card
4. Your watchlist is automatically saved and persists across browser sessions

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.6 | UI library |
| react-router-dom | ^7.17.0 | Client-side routing |
| zustand | ^5.0.14 | State management |
| @tanstack/react-query | ^5.101.0 | Server state management |
| tailwindcss | ^3.4.19 | Utility-first CSS framework |
| typescript | ~6.0.2 | Type safety |
| vite | ^8.0.12 | Build tool |

## 🧪 Testing

Run tests with:
```bash
npm run test
```

The project includes tests for the watchlist store to ensure data persistence and state management work correctly.

## 🎨 Styling

This project uses Tailwind CSS for styling with a modern dark theme (zinc-900/zinc-800 background). The design is fully responsive and optimized for all screen sizes.

Custom styles can be added to:
- `src/App.css` - App-specific styles
- `src/index.css` - Global styles
- Tailwind CSS classes directly in components

## 🔑 Environment Variables

| Variable | Description |
|----------|-------------|
| `VITE_TMDB_API_KEY` | Your TMDB API key for movie data access |

## 📝 API Integration

The application integrates with [The Movie Database (TMDB) API](https://www.themoviedb.org/settings/api):

- **Base URL**: `https://api.themoviedb.org/3`
- **Search Endpoint**: `/search/movie`
- **Image Base**: `https://image.tmdb.org/t/p/w500`

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements or bug fixes.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie API
- [React](https://react.dev/) for the UI framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling solution
- [Vite](https://vitejs.dev/) for the modern build tool

---

**Happy watching! 🍿**
