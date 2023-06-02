import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TrackedNavBar from '../Components/TrackedNavBar';

describe('TrackedNavBar', () => {
  test('renders navigation links', () => {
    render(
      <Router>
        <TrackedNavBar />
      </Router>
    );

    // Assert that the navigation links are rendered
    expect(screen.getByText('HOME')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('LIBRARY')).toBeInTheDocument();
    expect(screen.getByText('MY ACCOUNT')).toBeInTheDocument();
    expect(screen.getByText('LOG OUT')).toBeInTheDocument();
  });

  test('handles logout correctly', () => {
    render(
      <Router>
        <TrackedNavBar />
      </Router>
    );

    // Simulate a click on the "LOG OUT" link
    fireEvent.click(screen.getByText('LOG OUT'));

    // Assert that the log out message is displayed
    waitFor (() => {
        expect(screen.getByText('You have successfully logged out')).toBeInTheDocument();
    });
  });
});
