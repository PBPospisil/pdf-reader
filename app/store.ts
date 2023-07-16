import { configureStore, ThunkDispatch, Action } from "@reduxjs/toolkit"
import LibraryReducer from "../src/features/library/LibrarySlice"
import FileBrowserReducer from "../src/features/files/FileBrowserSlice"
import { addBookToLibrary } from "../src/middleware/AddBookToLibrary"
import { fetchFile } from "../src/middleware/FetchFile"

const store = configureStore({
    reducer: {
        library: LibraryReducer,
        fileBrowser: FileBrowserReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: { addBookToLibrary, fetchFile },
      },
      serializableCheck: false,
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, void, Action>;

export default store