import 'react-native';
import { expect, test } from '@jest/globals';
import { isSuccess, isFailure } from '../src/services/FileBrowserService';
import { FileBrowserResponse } from "../src/types"
import { DocumentPickerResponse } from 'react-native-document-picker';

function test_isSuccess_validSingleResponse()
{
    let pickerResponse = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    let browserResponse = { response: pickerResponse, error: undefined, isCancelled: undefined } as FileBrowserResponse
    let res = isSuccess(browserResponse)
    let expected = true

    test('true on valid response', () => {
        expect(res).toBe(expected)
    })
}

function test_isSuccess_validMultitpleResponse()
{
    let pickerResponse = [{
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

    let browserResponse = { response: pickerResponse, error: undefined, isCancelled: undefined } as FileBrowserResponse
    let res = isSuccess(browserResponse)
    let expected = true

    test('true on valid responses', () => {
        expect(res).toBe(expected)
    })
}

function test_isSuccess_allUndefined()
{
    let browserResponse = { response: undefined, error: undefined, isCancelled: undefined } as FileBrowserResponse
    let res = isSuccess(browserResponse)
    let expected = false

    test('false on no response', () => {
        expect(res).toBe(expected)
    })
}

function test_isSuccess_errorAndResponse()
{
    let pickerResponse = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    let browserResponse = { response: pickerResponse, error: Error('TEST ERROR'), isCancelled: undefined } as FileBrowserResponse
    let res = isSuccess(browserResponse)
    let expected = false

    test('fails due to error', () => {
        expect(res).toBe(expected)
    })
}

function test_isFailure_errorAndResponse()
{
    let pickerResponse = [{
        uri: 'test/directory',
        name: 'test-file',
        copyError: undefined,
        fileCopyUri: '',
        type: 'test',
        size: 1,
    }] as DocumentPickerResponse[]

    let browserResponse = { response: pickerResponse, error: Error('TEST ERROR'), isCancelled: undefined } as FileBrowserResponse
    let res = isFailure(browserResponse)
    let expected = true

    test('true due to error present', () => {
        expect(res).toBe(expected)
    })
}

function test_isFailure_errorOnly()
{
    let browserResponse = { response: undefined, error: undefined, isCancelled: undefined } as FileBrowserResponse
    let res = isFailure(browserResponse)
    let expected = true

    test('true on error only', () => {
        expect(res).toBe(expected)
    })
}

test_isSuccess_validSingleResponse()
test_isSuccess_validMultitpleResponse()
test_isSuccess_allUndefined()
test_isSuccess_errorAndResponse()
test_isFailure_errorAndResponse()
test_isFailure_errorOnly()