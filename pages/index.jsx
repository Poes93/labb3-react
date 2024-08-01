import React from 'react'
import { useState } from 'react'
import MovieList from '../components/MovieList'
import SearchBar from '../components/SearchBar'
import LoadingSpinner from '../components/LoadingSpinner'

export default function Home({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies || [])
  const [loading, setLoading] = useState(!initialMovies?.length) // Updated line

  const handleSearch = async (query) => {
    if (!query) return
    setLoading(true)
    try {
      const res = await fetch(`/api/search?query=${query}`)
      const data = await res.json()
      setMovies(data.results || [])
    } catch (error) {
      console.error('Failed to fetch search results:', error)
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Movie Database</h1>
      <SearchBar onSearch={handleSearch} />
      {loading ? <LoadingSpinner /> : <MovieList movies={movies} />}
    </div>
  )
}

export async function getServerSideProps() {
  const apiKey = process.env.TMDB_API_KEY
  let initialMovies = []

  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    const data = await res.json()

    if (data && data.results) {
      initialMovies = data.results
    }
  } catch (error) {
    console.error('Failed to fetch popular movies:', error)
  }

  return {
    props: {
      initialMovies: initialMovies || [] // Ensure it's an array
    }
  }
}
