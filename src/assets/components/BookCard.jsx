import noimage from '../images/noimage.png'

const BookCard = ({book}) => {


    const bookItem = {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        id: book.id,
        img: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : noimage,
    }


    return (
    <div className="book__card">
        <img className="book__card__preview-image" src={bookItem.img} alt="thumbnail" />
    </div>
    );
}
 
export default BookCard;