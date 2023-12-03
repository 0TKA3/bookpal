import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setSearch } from '../store/searchSlice'
import { setItems } from '../store/itemsSlice'
import { useEffect, useState } from 'react'



const Search = () => {

    const [sortingBy, setSortingBy] = useState('relevance');
    const [countOfBooks, setCountOfBooks] = useState('15');

    function changeSortingHandler(event){
        setSortingBy(event.target.value);
    }
    function changeCountHandler(event){
        setCountOfBooks(event.target.value)
    }

    const dispatch = useDispatch()

    const searchValue = useSelector((state)=>state.search.value)

    function getTitle(event) {
        dispatch(setSearch(event.target.value))
    }
    
    async function getBooks() {
        let linkTitile = searchValue.split(' ')
        linkTitile = linkTitile.join('&')

        const apiKey = 'AIzaSyBZfqQnlQ-NZTLMtsSliTeoQ3wvZEegVEU'

        let link = `https://www.googleapis.com/books/v1/volumes?q=intitle:${linkTitile}&inauthor:${linkTitile}&key=${apiKey}&maxResults=${countOfBooks}&orderBy=${sortingBy}`

        await axios
            .get(link)
            .then(data=>{
                dispatch(setItems(data.data.items))
                console.log(data.data.items)
            })
    }

    useEffect(() => {
        getBooks();
    }, [sortingBy]);
    useEffect(() => {
        getBooks();
    }, [countOfBooks]);

    return (
        <div className='search'>
            <div className="search-container">
                <h1>Search for books!</h1>
                <div className="search-input">
                    <input type="text" placeholder='Book title or author' onInput={getTitle}/>
                    <button type='button' onClick={getBooks} >Search</button>
                </div>
                <div className="sorting">
                    <div className="categories">
                        <h3>Count</h3>
                        <select value={countOfBooks} onChange={changeCountHandler}>
                            <option value='5' >5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20</option>
                            <option value='25'>25</option>
                            <option value='30'>30</option>
                            <option value='40'>40</option>
                        </select>
                    </div>
                    <div className="sorting-by">
                    <h3>Sorting by</h3>
                        <select value={sortingBy} onChange={changeSortingHandler}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Search;