import { FileBrowserResponse } from "../types"
import { pickDocument, isCancelled } from './DocumentPickerService'

export type UNEXPECTED_EXECUTION_FLOW_ERROR = {}

export async function browseFile(): Promise<FileBrowserResponse>
{
    pickDocument()
        .then(function (success) {
            return { response: success, error: '', isCancelled: false } as FileBrowserResponse
        })
        .catch(function (error) {
            if(!isCancelled(error)) {
                // TODO: TOAST GENERIC ERROR MESSAGE
                return { response: [], error: error, isCancelled: false } as FileBrowserResponse
            }
        })
    return { response: [], error: Error as UNEXPECTED_EXECUTION_FLOW_ERROR, isCancelled: false } as FileBrowserResponse
}