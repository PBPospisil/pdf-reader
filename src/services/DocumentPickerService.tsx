import DocumentPicker, { DocumentPickerResponse } from "react-native-document-picker"

export const pickDocument = async () =>
{
    const promise = new Promise(async (resolve, reject) => {
        try {
            const res: DocumentPickerResponse[] = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
            });
            resolve(res)
        } catch (error) {
            reject(error)
        }
    })
    return promise
}

export function isCancelled(error: unknown)
{
    return DocumentPicker.isCancel(error)
}