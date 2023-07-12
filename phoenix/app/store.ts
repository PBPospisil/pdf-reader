import { configureStore, combineReducers } from "@reduxjs/toolkit"
import ShelfReducer from "../features/shelf/ShelfSlice"

export const store = configureStore({
    reducer: {
        shelf: ShelfReducer
    }    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch