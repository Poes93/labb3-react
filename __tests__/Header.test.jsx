import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders navigation links', () => {
  render(<Header />);
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
  expect(screen.getByText('Contact')).toBeInTheDocument();
});
