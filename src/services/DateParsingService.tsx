export const parseDate = (withDate: string) =>
{
    let rawMonthDayYear = withDate.split(' ').slice(1, 4)
    let monthDayYear: string = ''

    rawMonthDayYear.forEach((element: string) => {
        monthDayYear = `${monthDayYear} ${element}`
    })
    return monthDayYear.trim()
}