import React, { useState } from 'react';
import Filter from '../components/Filter';
import MovieList from '../components/MovieList';
import NoResults from '../components/NoResults';

const FilterResultsPage = () => {
    const [movies, setMovies] = useState([]);

    const handleFilter = async (filterParams) => {
        // Perform filter logic here, then update movies state
        // For demonstration, let's assume we fetch results and update state
        // const filteredMovies = await fetchFilteredMovies(filterParams);
        // setMovies(filteredMovies);
        
        // Mock empty result for demonstration
        setMovies([]);
    };

    return (
        <div>
            <Filter onFilter={handleFilter} />
            {movies.length === 0 ? (
                <NoResults message="No movies found for the selected filters." />
            ) : (
                <MovieList movies={movies} />
            )}
        </div>
    );
};

export default FilterResultsPage;
