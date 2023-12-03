import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { setSearch } from '../store/searchSlice'
import { setItems } from '../store/itemsSlice'
import { useEffect, useState } from 'react'



const Search = () => {

    const [sortingBy, setSortingBy] = useState('relevance');

    function changeSortingHandler(event){
        setSortingBy(event.target.value);
    }

    const dispatch = useDispatch()

    const searchValue = useSelector((state)=>state.search.value)

    function getTitle(event) {
        dispatch(setSearch(event.target.value))
        console.log(searchValue)
    }
    
    async function getBooks() {
        let linkTitile = searchValue.split(' ')
        linkTitile = linkTitile.join('&')

        const apiKey = 'AIzaSyBZfqQnlQ-NZTLMtsSliTeoQ3wvZEegVEU'

        let link = `https://www.googleapis.com/books/v1/volumes?q=intitle:${linkTitile}&key=${apiKey}&maxResults=15&orderBy=${sortingBy}`

        await axios
            .get(link)
            .then(data=>{
                dispatch(setItems(data.data.items))
                console.log(data.data.items)
            })
    }

    useEffect(() => {
        // Функция, вызываемая при изменении sortingBy
        getBooks();
    }, [sortingBy]);

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
                        <h3>Categories</h3>
                        <select>
                            <option>all</option>
                            <option>art</option>
                            <option>biography</option>
                            <option>computers</option>
                            <option>history</option>
                            <option>medical</option>
                            <option>poetry</option>
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