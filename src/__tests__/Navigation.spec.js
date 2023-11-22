// Navigation.test.js
import React from 'react';
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';

import '@testing-library/jest-dom';

test('renders navigation links', () => {
  render(
    <MemoryRouter>
      <Navigation />
    </MemoryRouter>,
  );

  const homeLink = screen.getByText(/Home Page/i);
  const counterLink = screen.getByText(/Counter Page/i);
  const queryLink = screen.getByText(/Query Page/i);
  const mutationLink = screen.getByText(/Mutation Page/i);

  expect(homeLink).toBeInTheDocument();
  expect(counterLink).toBeInTheDocument();
  expect(queryLink).toBeInTheDocument();
  expect(mutationLink).toBeInTheDocument();
});
