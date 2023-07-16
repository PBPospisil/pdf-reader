import { Platform } from "react-native"
import { MimeType, UTType } from "../types"

export function getEpubIdentifier()
{
    if(Platform.OS === 'ios'){
        return UTType.epub
    }
    return MimeType.epub
}