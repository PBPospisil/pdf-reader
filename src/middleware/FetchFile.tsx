import { createAsyncThunk } from "@reduxjs/toolkit"
import { Routes } from "./routes"
import { FileBrowserResponse, isSuccess } from "../model/FileBrowserResponse"
import { browseFile } from "../services/FileBrowser"

const fetchFile = createAsyncThunk(
    Routes.FetchFile,
    async (_, { dispatch }) => {
        let response: FileBrowserResponse = await browseFile()

        if(isSuccess(response)) {
            
        }
    }
)