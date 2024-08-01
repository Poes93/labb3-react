export default function MovieCard({ movie }) {
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    )
  }
  