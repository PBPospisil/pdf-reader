import 'react-native';
import { jest } from "@jest/globals"
import { expect, test } from '@jest/globals';
import { isSuccess, isFailure, encounteredCopyError, browseFile } from '../src/services/FileBrowserService';
import { FileBrowserResponse } from "../src/types"
import DocumentPicker, { DocumentPickerResponse } from 'react-native-document-picker';
import { CopyError, GenericError, NoError } from '../src/error/errors';

jest.mock("react-native-document-picker")

test('true on valid response', () => {
    const pickerResponse = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const browserResponse = { documents: pickerResponse, error: undefined, isCancelled: undefined } as FileBrowserResponse
    const res = isSuccess(browserResponse)
    const expected = true

    expect(res).toBe(expected)
})

test('true on valid responses', () => {
    const pickerResponse = [{
        uri: 'test/directory/1',
        name: 'test-file-1',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/2',
        name: 'test-file-2',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/3',
        name: 'test-file-3',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const browserResponse = { documents: pickerResponse, error: undefined, isCancelled: undefined } as FileBrowserResponse
    const res = isSuccess(browserResponse)
    const expected = true

    expect(res).toBe(expected)
})

test('false on no response', () => {
    const browserResponse = { documents: undefined, error: undefined, isCancelled: undefined } as FileBrowserResponse
    const res = isSuccess(browserResponse)
    const expected = false

    expect(res).toBe(expected)
})

test('fails due to error', () => {
    const pickerResponse = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const browserResponse = { documents: pickerResponse, error: GenericError, isCancelled: undefined } as FileBrowserResponse
    const res = isSuccess(browserResponse)
    const expected = false

    expect(res).toBe(expected)
})

test('true due to error present', () => {
    const pickerResponse = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const browserResponse = { documents: pickerResponse, error: GenericError, isCancelled: undefined } as FileBrowserResponse
    const res = isFailure(browserResponse)
    const expected = true

    expect(res).toBe(expected)
})

test('true on error only', () => {
    const browserResponse = { documents: undefined, error: undefined, isCancelled: undefined } as FileBrowserResponse
    const res = isFailure(browserResponse)
    const expected = true

    expect(res).toBe(expected)
})

test('encounter no copy error', () => {
    const pickerResponses = [{
        uri: 'test/directory/1',
        name: 'test-file-1',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/2',
        name: 'test-file-2',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/3',
        name: 'test-file-3',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const res = encounteredCopyError(pickerResponses)
    const expected = false

    expect(res).toBe(expected)
})

test('encounter single copy error', () => {
    const pickerResponses = [{
        uri: 'test/directory/1',
        name: 'test-file-1',
        copyError: Error(),
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/2',
        name: 'test-file-2',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/3',
        name: 'test-file-3',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const res = encounteredCopyError(pickerResponses)
    const expected = true

    expect(res).toBe(expected)
})

test('encounter no copy error', () => {
    const pickerResponses = [{
        uri: 'test/directory/1',
        name: 'test-file-1',
        copyError: Error(),
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/2',
        name: 'test-file-2',
        copyError: 'Error',
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/3',
        name: 'test-file-3',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    const res = encounteredCopyError(pickerResponses)
    const expected = true

    expect(res).toBe(expected)
})

test('browse single file successfully', () => {
    const pickerResponses = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    jest.mocked(DocumentPicker).pick.mockResolvedValue(pickerResponses)
    const expected = { documents: pickerResponses, error: NoError, isCancelled: false } as FileBrowserResponse

    browseFile().then(res => {
        expect(res).toEqual(expected)
    })    
})

test('browse multiple files successfully', () => {
    const pickerResponses = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/2',
        name: 'test-file-2',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    jest.mocked(DocumentPicker).pick.mockResolvedValue(pickerResponses)
    const expected = { documents: pickerResponses, error: NoError, isCancelled: false } as FileBrowserResponse

    browseFile().then(res => {
        expect(res).toEqual(expected)
    })    
})

test('browse multiple files - copy error encountered', () => {
    const pickerResponses = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    },
    {
        uri: 'test/directory/2',
        name: 'test-file-2',
        copyError: Error(),
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    jest.mocked(DocumentPicker).pick.mockResolvedValue(pickerResponses)
    const expected = { documents: [], error: CopyError, isCancelled: false } as FileBrowserResponse

    browseFile().catch(res => {
        expect(res).toEqual(expected)
    })    
})

test('browse single generic error encountered within document picker service', () => {
    const pickerResponses = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    jest.mocked(DocumentPicker).pick.mockRejectedValue(pickerResponses)
    const expected = { documents: [], error: GenericError, isCancelled: false } as FileBrowserResponse

    browseFile().catch(res => {
        expect(res).toEqual(expected)
    })    
})