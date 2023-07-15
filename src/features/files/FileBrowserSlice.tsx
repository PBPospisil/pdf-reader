import { createSlice } from "@reduxjs/toolkit";
import { ErrorCode, NoError } from "../../error/errors";
import { FileCache } from "../../types";

enum BrowsingStatus {
    Pending,
    Fulfilled,
    Idle
}

interface FileBrowsingState {
    importBuffer: FileCache[]
    status: BrowsingStatus
    error: { code: ErrorCode, message: string }
}

const initialState: FileBrowsingState = { importBuffer: [], status: BrowsingStatus.Idle, error: NoError }

const fileBrowserSlice = createSlice({
    name: 'library/file',
    initialState,
    reducers: {
        addToBuffer(state, { payload }) {
            state.importBuffer = [...state.importBuffer, ...payload]
        }
    }
})

export default fileBrowserSlice.reducer