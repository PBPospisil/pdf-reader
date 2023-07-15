import { DocumentPickerResponse } from "react-native-document-picker"

export type FileCache = {
    path: string,
    name?: string,
    type: File
}

export type FileBrowserResponse = {
    response?: DocumentPickerResponse[],
    error?: unknown
    isCancelled?: Boolean
}

export enum File {
    epub = 'book/epub'
}