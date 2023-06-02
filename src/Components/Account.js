import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles.css';
import SearchBar from './SearchBar';
import NavBar from './TrackedNavBar';
import Footer from './Footer';
import MyBook from './MyBook';

const API_BaseURL = 'http://127.0.0.1:5000';
const API_AccountURL = `${API_BaseURL}/account`;

function AccountPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');
  const [searched, setSearched] = useState(false);
  // eslint-disable-next-line
  const [books, setBooks] = useState([]);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch(`${API_AccountURL}?email=${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          const data = await response.json();
          setBooks(data.Books);
          setEmail(data.Email);
        } else {
          console.log('Failed to find account details');
        }
      } catch (error) {
        console.error('Failed to find account details', error);
      }
    };

    fetchAccount();
  }, [email]);

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
    navigate('/account')
    window.location.reload();
  };

  
  return (
    <section className='page' id="accountPage">
     <NavBar/>
      <span className='text'>
          <h2>MY ACCOUNT</h2>
          {/* <br></br> */}
          <p>
            Welcome to your account! Here you can click on your saved books to add notes and give them a rating.
            <br/>
            If you can't find your book, use the search bar below.
            <br/>
            Happy reading!
          </p>
        </span>
        <div className="search-bar">
        <SearchBar
          onSearchResults={handleSearchResults}
          onSearchError={handleSearchError}
        />
        {searched ? (
          searchResults.length > 0 ? (
            <div className="error-container">
              <p className="error-message2">{error}</p>
              <button className="back-to-search" onClick={handleGoBack}>
                Back to Search
              </button>
            </div>
          ) : null
        ) : (
          <section className='mybooks'>
            <MyBook />
            <MyBook />
            <MyBook />
            <MyBook />
            <MyBook />
            <MyBook />
          </section>
        )}
      </div>
      <Footer />
    </section>
  );
} 

export default AccountPage;