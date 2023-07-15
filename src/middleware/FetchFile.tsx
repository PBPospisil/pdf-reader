import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"
import { browseFile, isSuccess } from "../services/FileBrowserService"
import { useSelector } from "react-redux"
import { FileBrowserResponse } from '../types'
import { RootState } from "../../app/store"
import { convertToFileCache } from "../services/mapping"

let importBuffer = useSelector((state: RootState) => state.fileBrowser.importBuffer)

const fetchFile = createAsyncThunk(
    Routes.FetchFile,
    async (_, { dispatch }) => {
        let response: FileBrowserResponse = await browseFile()

        if(isSuccess(response)) {
            dispatch({ type: 'library/file/addToBuffer', payload: convertToFileCache(response.documents) })
        }
    }
)