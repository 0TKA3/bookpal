import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import noimage from '../images/noimage.png';
import { useSelector } from 'react-redux'

const Book = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const filterBookValue = useSelector((state)=>state.currentBook.value)

  const apiKey = 'AIzaSyBZfqQnlQ-NZTLMtsSliTeoQ3wvZEegVEU';

  useEffect(() => {
    let link = `https://www.googleapis.com/books/v1/volumes/${id}`
  

    async function getBook() {
      try {
        const response = await axios.get(link);
        let responseData = response.data
        // console.log(response)
        // console.log(responseData)
        setBook(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book:', error);
        setLoading(false);
      }
    }

    getBook();
  }, [id]);

  if (loading) {
    return <div className='loading__container'>
      <span className="loader"></span>
    </div>;
  }

  if (!book || !book.volumeInfo) {
    return <div>Книга не найдена</div>;
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
      <Link to='/bookpal' className="return_backward">Back</Link>
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
          <p className="book__information__caregories">Category: {bookItem.categories}</p>
          <p className='book__information__subtitle' >{bookItem.subtitle}</p>
          <p className='book__information__subtitle' >{bookItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
