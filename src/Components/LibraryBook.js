import '../App.css';
import { useState, useEffect } from 'react';

const API_BaseURL = 'http://127.0.0.1:5000';

function LibraryBook({ isbn }) {
  const [bookData, setBookData] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  const fetchUserEmail = async () => {
    try {
      const response = await fetch(`${API_BaseURL}/account` , {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.ok) {
        const data = await response.json();
          setUserEmail(data.Email);
        } else {
          console.log('Failed to retrieve user email');
        }
      } catch (error) {
          console.log('Failed to retrieve user email', error);
        }
      };


  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
        );
        const data = await response.json();
        if (data.items && data.items.length > 0) {
          const book = data.items[0].volumeInfo;
          setBookData({
            cover: book.imageLinks?.thumbnail,
            summary: book.description,
            title: book.title,
            pages: book.pageCount,
          });
        }
      } catch (error) {
        console.log('Cannot find book info...', error);
      }
    };

    fetchBookData();
    fetchUserEmail();
  }, [isbn]);

  const handleAddToList = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          title: bookData.title,
          pages: bookData.pages,
        }),
      });

      if (response.ok) {
        console.log('Book added to list');
      } else {
        console.log('Failed to add book to list');
      }
    } catch (error) {
      console.error('Failed to add book to list', error);
    }
  };


  if (!bookData) {
    return null; 
  }

  return (
    <section className="book">
      <img
        className="column"
        id="cover"
        src={bookData.cover}
        alt="book cover"
      />
      <p className="column" id="description">
        <p id="synopses">Synopsis: </p>
        {bookData.summary}
      </p>
      <section className="column">
        <button id="addBttn" onClick={handleAddToList}>ADD TO LIST</button>
      </section>
    </section>
  );
}


export default LibraryBook;