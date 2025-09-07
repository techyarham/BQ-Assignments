import React, { useState, useEffect } from "react";
import "./MovieSearch.css";

const API_KEY = "fbb2993643f58fed4620bfcc81e43608";

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const fetchMovies = async (searchQuery) => {
    const url = searchQuery
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=1`
      : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("API DATA:", data); 
      setMovies(data.results || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <div className="movie-search">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="🔍 Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <div className="movies-grid">
        {movies.length === 0 ? (
          <p>No movies found</p>
        ) : (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                    : "https://via.placeholder.com/300x450?text=No+Image"
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.release_date}</p>
              <p className="overview">{movie.overview}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
