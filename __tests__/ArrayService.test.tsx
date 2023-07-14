import 'react-native';
import { isEmpty } from '../services/ArrayService';
import { expect, test } from '@jest/globals';

// check is empty on empty array
function test_isEmpty_onEmptyArray()
{
    let arr: any[] = []
    let result = isEmpty(arr)
    let expected = true

    test('is an empty array', () => {
        expect(result).toBe(expected)
    })
}

// check is empty on empty array
function test_isEmpty_onNonEmptyArray()
{
    let arr: any[] = ['']
    let result = isEmpty(arr)
    let expected = false

    test('is an empty array', () => {
        expect(result).toBe(expected)
    })
}

test_isEmpty_onEmptyArray()
test_isEmpty_onNonEmptyArray()