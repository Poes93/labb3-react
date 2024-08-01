import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders footer text', () => {
  render(<Footer />);
  expect(screen.getByText('© 2023 Movie Database. All rights reserved.')).toBeInTheDocument();
});
