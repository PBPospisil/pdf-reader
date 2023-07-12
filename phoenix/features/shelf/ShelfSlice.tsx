import { createSlice } from "@reduxjs/toolkit"
import { Book } from "../book/BookView"

interface ShelfState {
    contents: Array<Book>
}

const initialState: ShelfState = { contents: [] }

const shelfSlice = createSlice({
    name: "shelf",
    initialState,
    reducers: {
        addBook(state, action){
            state.contents.push(action.payload)
        }
    }
})

export const { addBook } = shelfSlice.actions;
export default shelfSlice.reducer;