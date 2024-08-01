import React from 'react'
import PropTypes from 'prop-types'
import MovieListItem from './MovieListItem'

export default function MovieList({ movies }) {
  if (!movies || movies.length === 0) {
    return <p>No movies to display</p>
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
      <style jsx>{`
        .movie-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
      `}</style>
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      overview: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired
}
