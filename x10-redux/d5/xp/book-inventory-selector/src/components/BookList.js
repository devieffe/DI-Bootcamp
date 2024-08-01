import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../redux/selectors';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  const getBooksByGenre = () => {
    switch (genre) {
      case 'Horror':
        return horrorBooks;
      case 'Fantasy':
        return fantasyBooks;
      case 'Science Fiction':
        return scienceFictionBooks;
      default:
        return [...horrorBooks, ...fantasyBooks, ...scienceFictionBooks];
    }
  };

  return (
    <div>
      <h1>Book Inventory</h1>
      <div>
        <button onClick={() => setGenre('All')}>All</button>
        <button onClick={() => setGenre('Horror')}>Horror</button>
        <button onClick={() => setGenre('Fantasy')}>Fantasy</button>
        <button onClick={() => setGenre('Science Fiction')}>Science Fiction</button>
      </div>
      <ul>
        {getBooksByGenre().map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
