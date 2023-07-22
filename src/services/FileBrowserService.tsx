import { isEmpty } from "./ArrayService"
import { FileBrowserResponse } from "../types"
import { pickDocument, isCancelled } from './DocumentPickerService'
import { CopyError, GenericError, NoError } from "../error/errors"
import { DocumentPickerResponse } from "react-native-document-picker"

export type UNEXPECTED_EXECUTION_FLOW_ERROR = {}

export const browseFile = async (): Promise<FileBrowserResponse> =>
{
    const promise = new Promise<FileBrowserResponse>(async (resolve, reject) => {
        await pickDocument()
            .then(function (success) {
                if(!encounteredCopyError(success as DocumentPickerResponse[])) {
                    resolve({ documents: success, error: NoError, isCancelled: false } as FileBrowserResponse)
                } else {
                    reject({ documents: [], error: CopyError, isCancelled: false } as FileBrowserResponse)
                }
            })
            .catch(function (error) {
                if(!isCancelled(error)) {
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

export function encounteredCopyError(documentPickerResponses: DocumentPickerResponse[]): Boolean
{
    let copyError: Boolean = false
    documentPickerResponses.forEach(response => {
        copyError = hasCopyError(response)
    })
    return copyError
}

function hasCopyError(documentPickerResponse: DocumentPickerResponse): Boolean
{
    if(documentPickerResponse.copyError !== undefined && documentPickerResponse.copyError !== '') {
        return true
    }
    return false
}