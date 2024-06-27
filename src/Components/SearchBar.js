/* eslint-disable no-unused-vars */
// importing relevant libraries
// importing css styling
import React, { useState } from "react";
import "./SearchBar.css";
import "./SearchResults.css";
import { useNavigate } from "react-router-dom";

// function called search bar to se the search term, returned book, search status
const SearchBar = ({ onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const navigate = useNavigate();

  // performing an API request to search for books
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          searchTerm
        )}&categories:self-help&orderBy=relevance&lang=en`
      );

      // extract JSON data from the response and return the below information
      if (response.ok) {
        const data = await response.json();
        const bookItems = data.items
          .filter((item) => item.volumeInfo.categories?.includes("Self-Help"))
          .map((item) => ({
            id: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            cover: item.volumeInfo.imageLinks?.thumbnail,
            description:
              item.volumeInfo.description || "No description available",
          }));
        setBooks(bookItems);
        setError("");
        setSearched(true);
        onSearchResults(bookItems);
      } else {
        setError("An error occurred during the API request.");
        setBooks([]);
        setSearched(true);
      }
    } catch (error) {
      setError("An error occurred during the API request.");
      setBooks([]);
      setSearched(true);
    }
  };

  // Function to open the book in a pop-up window set the selected book
  const openBookPopUp = (book) => {
    setSelectedBook(book);
  };

  // Function to close the book in the pop-up window
  const closeBookPopUp = () => {
    setSelectedBook(null);
  };

  // Function to add to my list
  // const handleAddToList = (book) => {
  //   onAddBook(book);
  // };

  return (
    <div>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          &#x1F50D;
        </button>
      </div>
      <div className="space"></div>

      {/* Search result to bring back the book cover, title and author */}
      {books.length > 0 && (
        <div className="search-results">
          {books.map((book) => (
            <div className="book-item" key={book.id}>
              {book.cover && (
                // Once a book has been selected, a pop-up window is to appear to provide the book description
                <div className="book-cover-container">
                  <img
                    className="book-cover"
                    src={book.cover}
                    alt="Book Cover"
                    onClick={() => openBookPopUp(book)}
                  />
                  <p className="click-me">
                    Click the cover
                    <br />
                    to find out more
                  </p>
                </div>
              )}
              <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-authors">Author: {book.authors}</p>
              </div>
              <div className="add-button-container">
                <button
                  className="add-button" /*  onClick={() => handleAddToList(book)} */
                >
                  Add to my list
                </button>
              </div>
              <hr />
              <hr />
            </div>
          ))}
        </div>
      )}
      {/* once a book has been selected the pop up window styling is listed below */}
      {selectedBook && (
        <div className="book-pop-up">
          <div className="book-pop-up-content">
            <div className="pop-up-header">
              {selectedBook.cover && (
                <div className="pop-up-book-cover-container">
                  <img
                    className="pop-up-book-cover"
                    src={selectedBook.cover}
                    alt="Book Cover"
                  />
                </div>
              )}
              <div className="pop-up-book-details">
                <h2 className="pop-up-book-title">{selectedBook.title}</h2>
                <p className="pop-up-book-authors">
                  Author: {selectedBook.authors}
                </p>
              </div>
            </div>
            <p className="pop-up-book-description">
              {selectedBook.description}
            </p>
            <button className="close-button" onClick={closeBookPopUp}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
