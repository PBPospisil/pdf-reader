import { DocumentPickerResponse } from "react-native-document-picker"

export type FileCache = {
    path: string,
    name?: string,
    type: File
}

export type FileBrowserResponse = {
    documents?: DocumentPickerResponse[],
    error?: unknown
    isCancelled?: Boolean
}

export enum File {
    epub = 'book/epub'
}

export type Book = {
    title: string;
    cover?: string;
    author?: string;
    publicationDate?: Date;
    path: string;
    fileType?: string;
}