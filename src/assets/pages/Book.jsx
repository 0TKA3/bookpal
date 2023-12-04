import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import noimage from '../images/noimage.png';

const Book = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.items.value);
  const book = books.find((item) => item.id === id);

  if (!book || !book.volumeInfo) {
    return <div>Загрузка...</div>;
  }

  const bookItem = {
    author: book.volumeInfo.authors,
    title: book.volumeInfo.title,
    subtitle: book.volumeInfo.subtitle,
    categories: book.volumeInfo.categories,
    img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noimage,
    pageCount: book.volumeInfo.pageCount,
    id: book.id,
    pdf: book.accessInfo.pdf,
    webReader: book.accessInfo.webReaderLink,
    buyLink: book.saleInfo.buyLink,
    description: book.volumeInfo.description
  };

  return (
    <div className='book__page'>
      <div className="book__information">
        <div className="book__information__image-side">
          <img className='book__information__image' src={bookItem.img} alt="book image" onClick={()=>console.log(book)}/>
          <div className="book__information__links">
            {bookItem.pdf.isAvailable ? <a href={bookItem.pdf.acsTokenLink} alt='download in pdf' target="_blank">PDF</a> : <></>}
            <a href={bookItem.webReader} alt='web reader'>WEB</a>
            {bookItem.buyLink ? <a href={bookItem.buyLink} alt='buy book'>BUY</a> : <></>}
          </div>
        </div>
        <div className='book__information__text'>
          <h1 className="book__information__title">{bookItem.title} <span className='book__information__title__page-count'>pages:{bookItem.pageCount}</span></h1>
          <h2 className="book__information__author">{bookItem.author}</h2>
          <p className='book__information__subtitle' >{bookItem.subtitle}</p>
          <p className='book__information__subtitle' >{bookItem.description}</p>
          <p className="book__information__caregories">{bookItem.categories}</p>
        </div>
      </div>

    </div>
  );
};

export default Book;
