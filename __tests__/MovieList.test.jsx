import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieList from '../components/MovieList';

const movies = [
  { id: 1, title: 'Inception', overview: 'A mind-bending thriller' },
  { id: 2, title: 'Interstellar', overview: 'A journey beyond the stars' },
];

test('renders a list of movies', () => {
  render(<MovieList movies={movies} />);
  expect(screen.getByText('Inception')).toBeInTheDocument();
  expect(screen.getByText('Interstellar')).toBeInTheDocument();
});
