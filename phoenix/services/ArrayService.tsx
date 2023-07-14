// Returns false for non-Array types
export function isEmpty(arr: Array<any>)
{
    return Array.isArray(arr) && arr.length === 0
}