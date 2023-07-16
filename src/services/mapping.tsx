import { DocumentPickerResponse } from "react-native-document-picker";
import { Book, FileCache } from "../types";

export function mapDocumentPickerToFileCache(response: DocumentPickerResponse): FileCache
{
    return { path: response.uri, name: response.name, type: response.type } as FileCache
}

export function mapFileCacheToBook(cache: FileCache): Book
{
    return { title: cache.name ? cache.name : '', path: cache.path, fileType: cache.type }
}