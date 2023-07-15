import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"

const addBookToLibrary = createAsyncThunk(
    Routes.AddBook,
    async (_, { dispatch }) => {
        dispatch({ type: Routes.FetchFile })


    }
)