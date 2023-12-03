import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import itemsSlice from './itemsSlice'


const store = configureStore({
    reducer: {
        search: searchSlice,
        items: itemsSlice,
    },
})

export default store