import React, { useState } from 'react';
import LibraryBar from './LibraryBar';
import LibraryBook from './LibraryBook';
import Footer from './Footer';
import '../App.css';
import SearchBar from './SearchBar';
import { useNavigate } from 'react-router-dom';

function Library() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);

  const navigate = useNavigate();

  const handleSearchResults = (results) => {
    if (results.length === 0) {
      handleSearchError("Oops! It seems the self-help book you're after is unavailable.");
    } else {
      setSearchResults(results);
      setError('');
      setSearched(true);
    }
  };

  const handleSearchError = (errorMessage) => {
    setError(errorMessage);
    setSearchResults([]);
    setSearched(true);
  };

  const handleGoBack = () => {
    navigate('/library')
    window.location.reload();
  };

  return (
    <section className="page">
      <LibraryBar />
      <h2>{searchResults.length > 0 ? 'RESULTS FOUND' : 'OUR CATALOGUE'}</h2>
      <SearchBar
        onSearchResults={handleSearchResults}
        onSearchError={handleSearchError}
      />
        {searchResults.length > 0 ? (
        null
      ) : searched ? (
        <div className="error-container">
          <p className="error-message1">{error}</p>
          <button className="back-to-search" onClick={handleGoBack}>Back to Search</button>
        </div>
      ) : (
      <>
        <div className="border-section">
        <p>Trending books</p>
        </div>
          <LibraryBook isbn="0735211299" /> 
          <LibraryBook isbn="1529108675" />
          <LibraryBook isbn="180129237X" />
          <LibraryBook isbn="1529054303" />
          <LibraryBook isbn="1786854953" />
       

      <div className="border-section">
      <p>Self Help</p>
      </div>
          <LibraryBook isbn="1035005182" />
          <LibraryBook isbn="1950968774" />
          <LibraryBook isbn="0241529719" />
          <LibraryBook isbn="1949759229" />
          <LibraryBook isbn="1788171829" />
      
      <div className="border-section">
      <p>Motivational books</p>
      </div>
          <LibraryBook isbn="1473668948" />
          <LibraryBook isbn="1509881832" />
          <LibraryBook isbn="0718188861" />
          <LibraryBook isbn="0008386420" />
          <LibraryBook isbn="1529087848" />
    
      <div className="border-section">
      <p>Education and therapies</p>
      </div>
          <LibraryBook isbn="1787755568" />
          <LibraryBook isbn="0349433208" />
          <LibraryBook isbn="1647801443" />
          <LibraryBook isbn="1444124056" />
          <LibraryBook isbn="8640288605" />
      
      <div className="border-section">
      <p>Stress management</p>
      </div>
          <LibraryBook isbn="1526610205" />
          <LibraryBook isbn="178504222X" />
          <LibraryBook isbn="1998991105" />
          <LibraryBook isbn="164152569X" />
          <LibraryBook isbn="0241317940" />
      
      <div className="border-section">
      <p>Yoga & Mindfulness</p>
      </div>
          <LibraryBook isbn="1601660553" />
          <LibraryBook isbn="074995308X" />
          <LibraryBook isbn="0241302072" />
          <LibraryBook isbn="024133697X" />
          <LibraryBook isbn="1856753530" />
      </>
    )}
      <Footer />
    </section>
  );
}

export default Library;