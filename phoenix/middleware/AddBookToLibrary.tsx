import { createAsyncThunk } from "@reduxjs/toolkit"
import { browseFile, UNEXPECTED_EXECUTION_FLOW_ERROR } from "../services/FileBrowser"
import { FileBrowserResponse, isSuccess } from "../model/FileBrowserResponse";

const ADD_BOOK = 'library/book/add'

const addBookToLibrary = createAsyncThunk(
    ADD_BOOK,
    async (_, { dispatch }) => {
        let response: FileBrowserResponse = await browseFile()

        if(isSuccess(response)) {
            
        }
    }
)


// add_book 
// |_browseFile
//     |_consumeFile