import { FileSizeRange } from "../types"

export const parseBytes = (bytes: number): string => 
{
    let bytesAsString = bytes.toString()
    return parseBytesInRange(bytesAsString, determineFileSizeRange(bytesAsString))
}

const determineFileSizeRange = (bytes: string): FileSizeRange => 
{
    if(inKilobyteRange(bytes)) {
        return FileSizeRange.Kilobytes
    } else if(inMegabyteRange(bytes)) {
        return FileSizeRange.Megabytes
    } else if(inGigabyteRange(bytes)) {
        return FileSizeRange.Gigabytes
    }
    return FileSizeRange.Bytes
}

const inKilobyteRange = (bytes: string): boolean => 
{
    if(bytes.length > 3 && bytes.length < 7) {
        return true
    }
    return false
}

const inMegabyteRange = (bytes: string): boolean => 
{
    if(bytes.length > 6 && bytes.length < 10) {
        return true
    }
    return false
}

const inGigabyteRange = (bytes: string): boolean => 
{
    if(bytes.length > 9 && bytes.length < 13) {
        return true
    }
    return false
}

const parseBytesInRange = (bytes: string, inRange: FileSizeRange): string => 
{
    if(inRange === FileSizeRange.Kilobytes) {
            return `${bytes.slice(0, -3)} KB`
    } else if(inRange === FileSizeRange.Megabytes) {
        return `${bytes.slice(0, -6)} MB`
    } else if(inRange === FileSizeRange.Gigabytes) {
        return handleGigabyteDecimal(bytes)
    }
    return `${bytes} B`
}

const handleGigabyteDecimal = (bytes: string): string =>
{
    if(bytes.length === 11) {
        return `${bytes.slice(0, -9)}.${bytes.slice(2, 3)} GB`
    } else if(bytes.length === 10) {
        return `${bytes.slice(0, -9)}.${bytes.slice(1, 2)} GB`
    }
    return `${bytes.slice(0, -9)} GB`
}