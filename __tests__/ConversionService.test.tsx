import { expect, test } from "@jest/globals"
import { convertToBooks, convertToFileCache } from "../src/services/ConversionService"
import { Book, File } from "../src/types"
import { DocumentPickerResponse } from "react-native-document-picker"
import { FileType } from "../src/types"

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
            type: 'test/pdf-file'
        }
    ]
    const expected = [
        { 
            title: 'test',
            path: 'file/copy/test/uri',
            fileType: FileType.pdf
        }
    ]


    expect(convertToBooks(files)).toStrictEqual(expected)
})

test('map multiple files to books', async () => {
    const files = [
        {
            path: 'file/copy/test/uri',
            name: 'test',
            type: 'test/epub-file'
        },
        { 
            path: 'file/copy/test/uri/1',
            name: 'test',
            type: 'test/pdf-file'
        },
        { 
            path: 'file/copy/test/uri/2',
            name: 'test',
            type: 'test/file-unknown-type'
        }
    ]
    const expected = [
        { 
            title: 'test',
            path: 'file/copy/test/uri',
            fileType: FileType.epub
        },
        {
            title: 'test',
            path: 'file/copy/test/uri/1',
            fileType: FileType.pdf
        },
        {
            title: 'test',
            path: 'file/copy/test/uri/2',
            fileType: FileType.unknown
        }
    ]


    expect(convertToBooks(files)).toStrictEqual(expected)
})