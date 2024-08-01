import Link from 'next/link'
import PropTypes from 'prop-types'

export default function MovieDetail({ movie }) {
  return (
    <div className="movie-detail">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <Link href="/">
        <a className="back-link">Back to home</a>
      </Link>
      <style jsx>{`
        .movie-detail {
          padding: 1rem;
        }
        .back-link {
          display: inline-block;
          margin-top: 1rem;
          color: blue;
          text-decoration: underline;
        }
        .back-link:hover {
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

MovieDetail.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired
  }).isRequired
}
