import {jest} from '@jest/globals';
import { expect, test } from '@jest/globals';
import { getEpubIdentifier } from '../src/services/PlatformSpecificHelper';
import { UTType } from '../src/types';

test('is an empty array', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'ios',
        select: () => null
    }));
    expect(getEpubIdentifier()).toBe(UTType.epub)
})