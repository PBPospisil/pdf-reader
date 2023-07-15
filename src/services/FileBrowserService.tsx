import { isEmpty } from "./ArrayService"
import { FileBrowserResponse, FileCache } from "../types"

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

export function convertToFileCache(res: FileBrowserResponse): FileCache[]
{


    return []
}


