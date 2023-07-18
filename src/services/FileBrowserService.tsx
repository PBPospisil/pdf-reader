import { isEmpty } from "./ArrayService"
import { FileBrowserResponse } from "../types"
import { pickDocument, isCancelled } from './DocumentPickerService'

export type UNEXPECTED_EXECUTION_FLOW_ERROR = {}

export const browseFile = async () =>
{
    const promise = new Promise(async (resolve, reject) => {
        await pickDocument()
            .then(function (success) {
                resolve({ response: success, error: '', isCancelled: false } as FileBrowserResponse)
            })
            .catch(function (error) {
                if(!isCancelled(error)) {
                    // TODO: TOAST GENERIC ERROR MESSAGE
                    reject({ response: [], error: error, isCancelled: false } as FileBrowserResponse)
                }
            })
    })
    return promise
}

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