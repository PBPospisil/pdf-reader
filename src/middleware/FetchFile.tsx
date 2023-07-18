import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"
import { browseFile, isSuccess } from "../services/FileBrowserService"
import { FileBrowserResponse } from '../types'
import { convertToFileCache } from "../services/ConversionService"

export const fetchFile = createAsyncThunk(
    Routes.FetchFile,
    async (_, { dispatch }) => {
        browseFile()
            .then(function (success) {
                let response = success as FileBrowserResponse
                if (isSuccess(response)) {
                    dispatch({ type: 'library/book/consume', payload: convertToFileCache(response.documents) })
                }
            })
            .catch(function (error) {
                console.log("Error occurred in response to browseFile" + error)
            })
    }
)