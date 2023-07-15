import { isEmpty } from "./ArrayService"
import { FileBrowserResponse } from "../types"

export function isSuccess(res: FileBrowserResponse): Boolean
{
    if(res.error !== undefined) {
        return false
    }
    if(Array.isArray(res.documents) && !isEmpty(res.documents)) {
        return true
    }
    return false
}

export function isFailure(res: FileBrowserResponse): Boolean
{
    return !isSuccess(res)
}