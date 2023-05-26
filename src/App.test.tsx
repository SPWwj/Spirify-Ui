import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders Spirify link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Spirify/i);
  expect(linkElement).toBeInTheDocument();
});
