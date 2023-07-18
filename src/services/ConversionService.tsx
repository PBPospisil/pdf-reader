import { DocumentPickerResponse } from "react-native-document-picker"
import { Book, File } from "../types"
import { mapDocumentPickerToFileCache, mapFileCacheToBook } from "./mapping"

export function convertToFileCache(responses?: DocumentPickerResponse[]): File[]
{
    if(responses !== undefined) {
        return responses.map(mapDocumentPickerToFileCache)
    }
    return []
}

export function convertToBooks(cache: File[]): Book[]
{
    return cache.map(mapFileCacheToBook)
}