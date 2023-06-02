import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../App.css';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [books, setBooks] = useState([]);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchBooks = async () => {
      //Array of 3 ISBNS for our 3 top picks.
      const picksISBNS = ['1856753530', '1786852802', '0374275637'];
      const promises = picksISBNS.map((isbn) =>
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
          .then((response) => response.json())
          .then((data) => (data.items && data.items.length > 0) ? data.items[0] : null)
          );
    
      const fetchedBooks = await Promise.all(promises);
      setBooks(fetchedBooks.filter((book) => book !== null));
        };
    
        fetchBooks();
      }, []);

  return ( 
      <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
        <h2>TOP PICKS</h2>
    
        {books.map((book, i) => (
          <Carousel.Item key={i}>
            <div className="carousel-item-content">
              <img
                className="d-block w-100"
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title}
              />
              <div className="book-summary">
                <h3>{book.volumeInfo.title}</h3>
                <p>{book.volumeInfo.authors.join(', ')}</p>
                <p>{book.volumeInfo.description}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
 }
    

export default ControlledCarousel;