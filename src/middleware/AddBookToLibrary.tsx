import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"
import { fetchFile } from "./FetchFile"

export const addBookToLibrary = createAsyncThunk(
    Routes.AddBook,
    async (_, { dispatch }) => {
        await dispatch(fetchFile())
    }
)