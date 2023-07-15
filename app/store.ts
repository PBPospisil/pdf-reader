import { configureStore, combineReducers } from "@reduxjs/toolkit"
import ShelfReducer from "../src/features/shelf/ShelfSlice"
import FileBrowserSlice from "../src/features/files/FileBrowserSlice"

const store = configureStore({
    reducer: {
        shelf: ShelfReducer,
        fileBrowser: FileBrowserSlice
    }    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store