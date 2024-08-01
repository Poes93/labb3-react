import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import MovieDetail from '../../components/MovieDetail'
import CastList from '../../components/CastList'
import SimilarMovies from '../../components/SimilarMovies'

export default function MoviePage({ movie, cast, similarMovies }) {
    const router = useRouter()

    // Show a loading message if the page is being generated or if router is in fallback mode
    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div className="movie-page">
            <MovieDetail movie={movie} />
            <CastList cast={cast} />
            <SimilarMovies movies={similarMovies} />
            <style jsx>{`
        .movie-page {
          padding: 1rem;
        }
      `}</style>
        </div>
    )
}

MoviePage.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        overview: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
    }).isRequired,
    cast: PropTypes.arrayOf(
        PropTypes.shape({
            cast_id: PropTypes.number.isRequired,
            character: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    similarMovies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            overview: PropTypes.string.isRequired,
            release_date: PropTypes.string.isRequired,
            vote_average: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export async function getServerSideProps() {
    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    if (!apiKey) {
        console.error('API key is missing');
        return {
            props: {
                movies: [],
                error: 'API key is missing',
            },
        };
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);

        if (!res.ok) {
            throw new Error(`Error! status: ${res.status}`);
        }

        const data = await res.json();
        return {
            props: {
                movies: data.results,
            },
        };
    } catch (error) {
        console.error('Failed to fetch popular movies:', error);
        return {
            props: {
                movies: [],
                error: error.message,
            },
        };
    }
}
