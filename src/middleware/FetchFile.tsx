import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"
import { browseFile, isSuccess } from "../services/FileBrowserService"
import { FileBrowserResponse } from '../types'
import { convertToFileCache } from "../services/ConversionService"
import { useSelector } from "react-redux"
import { useAppSelector } from "../hooks/hooks"

export const fetchFile = createAsyncThunk(
    Routes.FetchFile,
    async (_, { dispatch }) => {
        const response: FileBrowserResponse = await browseFile()

        if(isSuccess(response)) {
            dispatch({ type: 'library/book/consume', payload: convertToFileCache(response.documents) })
        }
    }
)