import React, { useState } from 'react';

const Filter = ({ onFilter }) => {
    const [genre, setGenre] = useState('');
    const [year, setYear] = useState('');
    const [rating, setRating] = useState('');

    const handleFilter = (e) => {
        e.preventDefault();
        // Ensure inputs are properly handled
        onFilter({
            genre: genre || null,  // Use null if no genre is selected
            year: year ? parseInt(year, 10) : null,  // Convert to number or null
            rating: rating ? parseFloat(rating) : null,  // Convert to number or null
        });
    };

    return (
        <form className="filter-form" onSubmit={handleFilter} aria-label="Filter movies">
            <div className="filter-group">
                <label htmlFor="genre">Genre:</label>
                <select
                    id="genre"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    aria-label="Select genre"
                >
                    <option value="">All</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>

            <div className="filter-group">
                <label htmlFor="year">Year:</label>
                <input
                    type="number"
                    id="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="e.g. 2020"
                    aria-label="Enter year"
                />
            </div>

            <div className="filter-group">
                <label htmlFor="rating">Rating:</label>
                <input
                    type="number"
                    id="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    placeholder="e.g. 8.5"
                    step="0.1"
                    min="0"
                    max="10"
                    aria-label="Enter rating"
                />
            </div>

            <button type="submit" className="filter-button">Filter</button>

            <style jsx>{`
                .filter-form {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 1rem;
                    background-color: #f9f9f9;
                    border-radius: 8px;
                }
                .filter-group {
                    display: flex;
                    flex-direction: column;
                }
                .filter-group label {
                    margin-bottom: 0.5rem;
                    font-weight: bold;
                }
                .filter-group select,
                .filter-group input {
                    padding: 0.5rem;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                .filter-button {
                    background-color: #007bff;
                    color: white;
                    padding: 0.5rem;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }
                .filter-button:hover {
                    background-color: #0056b3;
                }
                @media (max-width: 768px) {
                    .filter-form {
                        padding: 0.5rem;
                    }
                }
            `}</style>
        </form>
    );
};

export default Filter;
