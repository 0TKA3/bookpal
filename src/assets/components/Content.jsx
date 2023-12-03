import { useSelector } from 'react-redux'
import BookCard from './BookCard';

const Content = () => {

    const books = useSelector((state)=>state.items.value)

    return (
        <div className="content">
            {books.map((book)=>{
                return <BookCard book={book} key={book.id}></BookCard>
            })}
        </div>
    );
}
 
export default Content;