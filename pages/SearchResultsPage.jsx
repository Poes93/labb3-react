import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import NoResults from '../components/NoResults';

const SearchResultsPage = () => {
    const [movies, setMovies] = useState([]);

    const handleSearch = async (query) => {
        // Perform search logic here, then update movies state
        // For demonstration, let's assume we fetch results and update state
        // const results = await fetchMovies(query);
        // setMovies(results);
        
        // Mock empty result for demonstration
        setMovies([]);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            {movies.length === 0 ? (
                <NoResults message="No movies found. Try a different search." />
            ) : (
                <MovieList movies={movies} />
            )}
        </div>
    );
};

export default SearchResultsPage;
