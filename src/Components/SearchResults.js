// importing relevant libraries
import React from 'react';
import './SearchResults.css'

// function holding variables searched, books
const SearchResults = ({
  searched,
  books,
  }) => {
    return (
      <>
        {searched && books.length === 0 && (
          <div className="error-container">
            <p className="error-message">
              Oops! It seems the self-help book you're after is unavailable.
            </p>
          </div>
        )}
      </>
  );
};

export default SearchResults;