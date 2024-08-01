// __tests__/SearchBar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';

test('calls onSearch with the correct query', () => {
  const mockOnSearch = jest.fn();
  render(<SearchBar onSearch={mockOnSearch} />);

  const input = screen.getByPlaceholderText('Search movies...');
  fireEvent.change(input, { target: { value: 'Inception' } });
  fireEvent.submit(screen.getByTestId('search-form'));

  expect(mockOnSearch).toHaveBeenCalledWith('Inception');
});
