import { createSlice } from "@reduxjs/toolkit";

const currentBookSlice= createSlice({
    name: "currentBook",
    initialState: {
        value: {}
    },
    reducers: {
        setCurrentBook: (state, action) => {
            state.value = action.payload
        }
    },
})

export const { setCurrentBook } = currentBookSlice.actions
export default currentBookSlice.reducer