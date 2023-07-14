import { createSlice } from "@reduxjs/toolkit"
import { Book } from "./BookView";

interface BookState {
    books: Array<Book>;
}

const initialState: BookState = { books: [] }

const bookSlice = createSlice({
    name: 'library/book',
    initialState,
    reducers: {
        consume(state, { payload }) {
            state.books.push(payload)
        }
    }
})