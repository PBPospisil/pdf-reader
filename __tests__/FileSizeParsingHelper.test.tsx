import { parseBytes } from '../src/services/FileSizeParsingHelper'
import { expect, test } from '@jest/globals'

function test_parseBytes_withBytes_1s()
{
    let bytes = 2
    let result = parseBytes(bytes)
    let expected = '2 B'

    test('parse single digit bytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withBytes_10s()
{
    let bytes = 78
    let result = parseBytes(bytes)
    let expected = '78 B'

    test('parse double digit bytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withBytes_100s()
{
    let bytes = 346
    let result = parseBytes(bytes)
    let expected = '346 B'

    test('parse triple digit bytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withKiloBytes_1s()
{
    let bytes = 7493
    let result = parseBytes(bytes)
    let expected = '7 KB'

    test('parse single digit kilobytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withKiloBytes_10s()
{
    let bytes = 76583
    let result = parseBytes(bytes)
    let expected = '76 KB'

    test('parse double digit kilobytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withKiloBytes_100s()
{
    let bytes = 859202
    let result = parseBytes(bytes)
    let expected = '859 KB'

    test('parse triple digit kilobytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withMegaBytes_1s()
{
    let bytes = 7493749
    let result = parseBytes(bytes)
    let expected = '7 MB'

    test('parse single digit megabytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withMegaBytes_10s()
{
    let bytes = 76583842
    let result = parseBytes(bytes)
    let expected = '76 MB'

    test('parse double digit megabytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withMegaBytes_100s()
{
    let bytes = 857029925
    let result = parseBytes(bytes)
    let expected = '857 MB'

    test('parse triple digit megabytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withGigaBytes_1s()
{
    let bytes = 7493859287
    let result = parseBytes(bytes)
    let expected = '7.4 GB'

    test('parse single digit gigabytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withGigaBytes_10s()
{
    let bytes = 76583857193
    let result = parseBytes(bytes)
    let expected = '76.5 GB'

    test('parse double digit gigabytes', () => {
        expect(result).toBe(expected)
    })
}

function test_parseBytes_withGigaBytes_100s()
{
    let bytes = 859202848193
    let result = parseBytes(bytes)
    let expected = '859 GB'

    test('parse triple digit gigabytes', () => {
        expect(result).toBe(expected)
    })
}

test_parseBytes_withBytes_1s()
test_parseBytes_withBytes_10s()
test_parseBytes_withBytes_100s()
test_parseBytes_withKiloBytes_1s()
test_parseBytes_withKiloBytes_10s()
test_parseBytes_withKiloBytes_100s()
test_parseBytes_withMegaBytes_1s()
test_parseBytes_withMegaBytes_10s()
test_parseBytes_withMegaBytes_100s()
test_parseBytes_withGigaBytes_1s()
test_parseBytes_withGigaBytes_10s()
test_parseBytes_withGigaBytes_100s()