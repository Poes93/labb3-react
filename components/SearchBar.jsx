import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} data-testid="search-form">
      <input
        type="text"
        placeholder="Search movies..."
        aria-label="Search movies"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}
