import { DocumentPickerResponse } from "react-native-document-picker"

export type File = {
    path: string,
    name?: string,
    type: string
}

export type FileBrowserResponse = {
    documents?: DocumentPickerResponse[],
    error?: unknown
    isCancelled?: Boolean
}

export enum FileType {
    epub = 'ebook/epub',
    pdf = 'ebook/pdf',
    unknown = 'unknown'
}

export type Book = {
    title: string;
    cover?: string;
    author?: string;
    publicationDate?: Date;
    path: string;
    fileType?: FileType;
}

export enum UTType {
    epub = 'org.idpf.epub-container'
}

export enum MimeType {
    epub = 'application/epub+zip'
}

export type RootStackParamList = {
    Library: undefined;
    Reader: { book: Book };
};