import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"
import { convertToFileCache, isSuccess } from "../services/FileBrowserService"
import { browseFile } from "../services/FileBrowser"
import { useSelector } from "react-redux"
import { FileBrowserResponse } from '../types'
import { RootState } from "../../app/store"

let importBuffer = useSelector((state: RootState) => state.fileBrowser.importBuffer)

const fetchFile = createAsyncThunk(
    Routes.FetchFile,
    async (_, { dispatch }) => {
        let response: FileBrowserResponse = await browseFile()

        if(isSuccess(response)) {
            convertToFileCache(response)
            dispatch({ type: 'library/file/addToBuffer', payload: { path: '', name: '', type: '' } })
        }
    }
)