import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage', () => {
  render(<App />);
  const homePage = screen.getByTestId("homepage");
  expect(homePage).toBeInTheDocument();
});
