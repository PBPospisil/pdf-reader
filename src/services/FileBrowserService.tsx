import { isEmpty } from "./ArrayService"
import { File, FileBrowserResponse } from "../types"
import { pickDocument, isCancelled } from './DocumentPickerService'
import { NO_ERROR } from "../strings"
import { GenericError, NoError } from "../error/errors"

export type UNEXPECTED_EXECUTION_FLOW_ERROR = {}

export const browseFile = async (): Promise<FileBrowserResponse> =>
{
    const promise = new Promise<FileBrowserResponse>(async (resolve, reject) => {
        await pickDocument()
            .then(function (success) {
                resolve({ documents: success, error: NoError, isCancelled: false } as FileBrowserResponse)
            })
            .catch(function (error) {
                if(!isCancelled(error)) {
                    // TODO: TOAST GENERIC ERROR MESSAGE
                    reject({ documents: [], error: GenericError, isCancelled: false } as FileBrowserResponse)
                }
            })
    })
    return promise
}

export function isSuccess(res: FileBrowserResponse): Boolean
{
    if(isFailure(res)) { return false }
    if(Array.isArray(res.documents) && !isEmpty(res.documents)) {
        return true
    }
    return false
}

export function isFailure(res: FileBrowserResponse): Boolean
{
    return res.error === GenericError || (res.documents === undefined && res.error === undefined)
}