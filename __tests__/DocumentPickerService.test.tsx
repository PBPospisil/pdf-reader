import { jest } from "@jest/globals"
import { expect, test } from "@jest/globals"
import DocumentPicker from "react-native-document-picker"
import { pickDocument } from "../src/services/DocumentPickerService"

jest.mock("react-native-document-picker")

test('add single file successfully', async () =>
{
    const response = [{
        uri: 'test/uri',
        name: 'test',
        copyError: undefined,
        fileCopyUri: 'file/copy/test/uri',
        type: 'test/file',
        size: 0
    }]
    jest.mocked(DocumentPicker).pick.mockResolvedValue(response)

    return pickDocument().then(res => expect(res).toBe(response))
})

test('add multiple files successfully', async () =>
{
    const response = [{
        uri: 'test/uri',
        name: 'test',
        copyError: undefined,
        fileCopyUri: 'file/copy/test/uri',
        type: 'test/file',
        size: 0
    },
    {
        uri: 'test/uri/1',
        name: 'test',
        copyError: undefined,
        fileCopyUri: 'file/copy/test/uri/1',
        type: 'test/file-1',
        size: 0
    }]
    jest.mocked(DocumentPicker).pick.mockResolvedValue(response)

    return pickDocument().then(res => expect(res).toBe(response))
})

test('error encountered while picking document', async () =>
{
    jest.mocked(DocumentPicker).pick.mockRejectedValue(Error)

    return pickDocument().catch(error => expect(error).toBe(Error))
})