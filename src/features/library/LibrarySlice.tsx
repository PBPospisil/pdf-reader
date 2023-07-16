import { createSlice } from "@reduxjs/toolkit"
import { Book } from "../../types"
import { convertToBooks } from "../../services/ConversionService";

interface LibraryState {
    books: Book[];
}

const initialState: LibraryState = { books: [] }

const librarySlice = createSlice({
    name: "library/book",
    initialState,
    reducers: {
        consume(state, { payload }) {
            state.books = [...state.books, ...convertToBooks(payload)]
            state.books.push(payload)
        }
    }
})

export const { consume } = librarySlice.actions;
export default librarySlice.reducer;