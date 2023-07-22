import { COPY_ERROR, DEFAULT_ERROR_MESSAGE, NO_ERROR } from "../strings"

export enum ErrorCode {
    Generic,
    Copy,
    NoError
}

export const GenericError = {
    code: ErrorCode.Generic,
    message: DEFAULT_ERROR_MESSAGE
}

export const CopyError = {
    code: ErrorCode.Copy,
    message: COPY_ERROR
}

export const NoError = {
    code: ErrorCode.NoError,
    message: NO_ERROR
}