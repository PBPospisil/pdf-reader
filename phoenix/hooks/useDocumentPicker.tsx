import { useCallback, useState } from "react"
import DocumentPicker, { DocumentPickerResponse } from "react-native-document-picker"

export default function handleFileSelection()
{
    const [browsingResponse, setBrowsingResponse] = useState([] as DocumentPickerResponse[])

    useCallback(async () =>
    {
        try {
            const res: DocumentPickerResponse[] = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            setBrowsingResponse(res)
        } catch (error) {
            console.warn(error) // TODO: toast to user about the failure
        }
    }, [])

    return browsingResponse
}