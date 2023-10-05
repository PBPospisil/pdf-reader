import { DocumentPickerResponse } from "react-native-document-picker"
import { Book, File, FileType } from "../types"
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

export function convertStringToFileType(type: String): FileType
{
    if(type.includes("epub")) {
        return FileType.epub
    } else if (type.includes("pdf")) {
        return FileType.pdf
    } else {
        return FileType.unknown
    }
}