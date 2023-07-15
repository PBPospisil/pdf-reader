import { DocumentPickerResponse } from "react-native-document-picker";
import { FileCache } from "../types";

export function convertToFileCache(responses?: DocumentPickerResponse[]): FileCache[]
{
    if(responses !== undefined) {
        return responses.map(mapDocumentPickerToFileCache)
    }
    return []
}

function mapDocumentPickerToFileCache(response: DocumentPickerResponse): FileCache
{
    return { path: response.uri, name: response.name, type: response.type } as FileCache
}