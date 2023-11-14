import { parseDate } from "../src/services/DateParsingService"
import { expect, test } from '@jest/globals'

function test_dateStamp_today()
{
    let result = parseDate(new Date("Tue Nov 14 2023 11:32:25 GMT-0700 (Mountain Standard Time)"))
    let expected = '14-11-2023'

    test('parse date', () => {
        expect(result).toBe(expected)
    })
}

test_dateStamp_today()