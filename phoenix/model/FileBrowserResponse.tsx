import { DocumentPickerResponse } from "react-native-document-picker"
import { isEmpty } from "../services/ArrayService"

export type FileBrowserResponse = {
    response?: DocumentPickerResponse[],
    error?: unknown
    isCancelled?: Boolean
}

export function isSuccess(res: FileBrowserResponse): Boolean
{
    if(res.error !== undefined) {
        return false
    }
    if(Array.isArray(res.response) && !isEmpty(res.response)) {
        return true
    }
    return false
}

export function isFailure(res: FileBrowserResponse): Boolean
{
    return !isSuccess(res)
}