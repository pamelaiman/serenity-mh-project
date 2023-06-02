import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from '../Components/SearchBar';
import { MemoryRouter } from 'react-router-dom';


// test to render searchbar placeholder text and search button
describe('SearchBar', () => {
  test('render search input', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    
    const searchInput = screen.getByPlaceholderText('Search');

    expect(searchInput).toBeInTheDocument();
  });
});

  test('render search button', () => {
    render(
      <MemoryRouter>
        <SearchBar />
      </MemoryRouter>
    );
    const searchButton = screen.getByRole('button', { name: '🔍' });

    expect(searchButton).toBeInTheDocument();
  });