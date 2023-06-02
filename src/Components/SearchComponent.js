
// Importing relevant modules
const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

// Handles the search request
router.post('/', async (req, res) => {
  try {
    const searchTerm = req.body.search;
    const books = await fetchBooks(searchTerm);
    const selfHelpBooks = filterSelfHelpBooks(books);
    res.json(selfHelpBooks);
  } catch (error) {
    console.error('An error occurred during the search request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// Function to fetch books from the Google Books API
const fetchBooks = async (searchTerm) => {
  try {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}+categories:self-help`);
    if (response.ok) {
      const data = await response.json();
      return data.items || []; // Extract the book items from the response or return an empty array
    } else {
      throw new Error('Request failed');
    }
  } catch (error) {
    console.error('An error occurred during the API request:', error);
    return [];
  }
};

// Function to filter self-help books
const filterSelfHelpBooks = (books) => {
  return books.filter((book) => {
    const genres = book.volumeInfo.categories;
    return genres && genres.includes('Self-Help');
  });
};


// Export the router for use in other files
module.exports = router;
