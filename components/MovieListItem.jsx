import React from 'react'
import PropTypes from 'prop-types'

export default function MovieListItem({ movie }) {
  return (
    <div className="movie-list-item">
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <style jsx>{`
        .movie-list-item {
          margin-bottom: 1rem;
          padding: 1rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #f9f9f9;
        }
        .movie-list-item h3 {
          margin: 0 0 0.5rem 0;
        }
        .movie-list-item p {
          margin: 0;
        }
      `}</style>
    </div>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired
}
