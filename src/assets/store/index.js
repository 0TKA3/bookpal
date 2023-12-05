import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import itemsSlice from './itemsSlice'
import currentBookSlice from "./currentBookSlice";


const store = configureStore({
    reducer: {
        search: searchSlice,
        items: itemsSlice,
        currentBook: currentBookSlice,
    },
})

export default store