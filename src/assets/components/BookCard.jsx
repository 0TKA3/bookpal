import React from 'react';
import noimage from '../images/noimage.png';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  const bookItem = {
    title: book.volumeInfo.title,
    author: book.volumeInfo.authors,
    id: book.id,
    img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noimage,
  };

  return (
    <Link to={`/bookpal/book/${bookItem.id}`}>
      <div className="book__card">
        <img className="book__card__preview-image" src={bookItem.img} alt="thumbnail" />
        <div className="book__card__information">
          <h1 className="book__card__information__title">{bookItem.title}</h1>
          <h2 className="book__card__information__author">{bookItem.author}</h2>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
