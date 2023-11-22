import React from 'react';
import App from '../App';

import { Provider } from 'react-redux';
import { store } from '../store';

import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';

describe('Testing the App component', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  test('renders app component content without errors', () => {
    const appComponent = screen.getByTestId('app-component');
    const pageTitle = screen.getByText(
      /This is a Custom React Redux Toolkit Project/i,
    );

    expect(appComponent).toHaveClass('app');
    expect(pageTitle).toBeInTheDocument();
  });
});
