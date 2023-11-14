export const parseDate = (withDate: Date) =>
{
    let day = withDate.getDate()
    let month = withDate.getMonth() + 1
    let year = withDate.getFullYear()

    return `${day}-${month}-${year}`
}