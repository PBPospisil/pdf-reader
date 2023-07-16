import { DocumentPickerResponse } from "react-native-document-picker"
import { Book, FileCache } from "../types"
import { mapDocumentPickerToFileCache, mapFileCacheToBook } from "./mapping"

export function convertToFileCache(responses?: DocumentPickerResponse[]): FileCache[]
{
    if(responses !== undefined) {
        return responses.map(mapDocumentPickerToFileCache)
    }
    return []
}

export function convertToBooks(cache: FileCache[]): Book[]
{
    return cache.map(mapFileCacheToBook)
}