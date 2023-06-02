import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../Components/SearchResults';


// testing the error message response
describe('SearchResults', () => {
  it('error message is shown when the searched book array is empty', () => {
    const props = {
      searched: true,
      books: [],
    };

    // shows the search result component 
    const { getByText } = render(<SearchResults {...props} />);

    // finding the error message
    const errorMessage = getByText("Oops! It seems the self-help book you're after is unavailable.");

    expect(errorMessage).toBeInTheDocument();
  });

  it('does not show error message when search is false', () => {
    const props = {
      searched: false,
      books: [],
    };

    const { queryByText } = render(<SearchResults {...props} />);
    const errorMessage = queryByText("Oops! It seems the self-help book you're after is unavailable.");

    expect(errorMessage).not.toBeInTheDocument();
  });

  it('does not render error message when books array is not empty', () => {
    const props = {
      searched: true,
      books: ['Book 1', 'Book 2'],
    };

    const { queryByText } = render(<SearchResults {...props} />);
    const errorMessage = queryByText("Oops! It seems the self-help book you're after is unavailable.");

    expect(errorMessage).not.toBeInTheDocument();
  });
});
