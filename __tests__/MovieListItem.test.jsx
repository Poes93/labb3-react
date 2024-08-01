import React from 'react';
import { render, screen } from '@testing-library/react';
import MovieListItem from '../components/MovieListItem';

const movie = { id: 1, title: 'Inception', overview: 'A mind-bending thriller' };

test('renders movie title and overview', () => {
  render(<MovieListItem movie={movie} />);
  expect(screen.getByText('Inception')).toBeInTheDocument();
  expect(screen.getByText('A mind-bending thriller')).toBeInTheDocument();
});
