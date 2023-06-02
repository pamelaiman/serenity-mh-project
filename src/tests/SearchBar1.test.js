import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';


// test for placeholder of search bar
test('checking search term is updated correctly', async () => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  );
  const input = screen.getByPlaceholderText('Search');

  fireEvent.change(input, { target: { value: 'searchComplete' } });

  // Wait for the element to appear
  await waitFor(() => {
    expect(input.value).toBe('searchComplete');
  });
});

