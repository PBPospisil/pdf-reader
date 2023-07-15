import { DEFAULT_ERROR_MESSAGE, NO_ERROR } from "../strings"

export enum ErrorCode {
    Generic,
    NoError
}

export const GenericError = {
    code: ErrorCode.Generic,
    message: DEFAULT_ERROR_MESSAGE
}

export const NoError = {
    code: ErrorCode.NoError,
    message: NO_ERROR
}