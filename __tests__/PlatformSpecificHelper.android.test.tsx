import {jest} from '@jest/globals';
import { expect, test } from '@jest/globals';
import { getEpubIdentifier } from '../src/services/PlatformSpecificHelper';
import { MimeType } from '../src/types';

test('', () => {
    jest.mock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'android',
        select: () => null
    }));
    expect(getEpubIdentifier()).toBe(MimeType.epub)
})