import { expect, test } from "@jest/globals"
import { convertToBooks, convertToFileCache } from "../src/services/ConversionService"
import { Book, File } from "../src/types"
import { DocumentPickerResponse } from "react-native-document-picker"

test('undefined input responses array', async () => {
    const responses = undefined
    const expected: File[] = []

    expect(convertToFileCache(responses)).toStrictEqual(expected)
})

test('empty array input', async () => {
    const response: DocumentPickerResponse[] = []
    const expected: File[] = []

    expect(convertToFileCache(response)).toStrictEqual(expected)
})

test('map single response to file cache', async () => {
    const responses = [{
        uri: 'test/uri',
        name: 'test',
        copyError: undefined,
        fileCopyUri: 'file/copy/test/uri',
        type: 'test/file',
        size: 0
    }]
    const expected: File[] = [{ path: 'file/copy/test/uri', name: 'test', type: 'test/file' }]

    expect(convertToFileCache(responses)).toStrictEqual(expected)
})

test('empty file array', async () => {
    const files: File[] = []
    const expected: Book[] = []

    expect(convertToBooks(files)).toStrictEqual(expected)
})

test('map single file to book', async () => {
    const files = [
        {
            path: 'file/copy/test/uri',
            name: 'test',
            type: 'test/file'
        }
    ]
    const expected = [
        { 
            title: 'test',
            path: 'file/copy/test/uri',
            fileType: 'test/file'
        }
    ]


    expect(convertToBooks(files)).toStrictEqual(expected)
})

test('map multiple files to books', async () => {
    const files = [
        {
            path: 'file/copy/test/uri',
            name: 'test',
            type: 'test/file'
        },
        { 
            path: 'file/copy/test/uri/1',
            name: 'test',
            type: 'test/file-1'
        }
    ]
    const expected = [
        { 
            title: 'test',
            path: 'file/copy/test/uri',
            fileType: 'test/file'
        },
        {
            title: 'test',
            path: 'file/copy/test/uri/1',
            fileType: 'test/file-1'
        }
    ]


    expect(convertToBooks(files)).toStrictEqual(expected)
})