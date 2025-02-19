import { describe, expect, it } from 'vitest';
import {
  BothValueHeaders,
  getFlattenedHeadersMap,
  getFlattenedHeadersMapAndCookies,
  getMultiValueHeadersMap,
} from '../../src';

describe('getFlattenedHeadersMap', () => {
  it('should return headers flattened', () => {
    const headerLists: BothValueHeaders[] = [
      {
        'Accept-Encoding': 'gzip',
        'Accept-Language': 'en-US,en;q=0.9',
        Host: undefined,
        'Content-Type': '',
        'Content-Length': 40 as unknown as string,
      },
      {
        'Accept-Encoding': ['gzip'],
        'Accept-Language': ['en-US', 'en;q=0.9'],
        Host: undefined,
        'Content-Type': '',
        'Content-Length': [40] as unknown as string[],
      },
    ];

    for (const headers of headerLists) {
      const flattenedHeaders = getFlattenedHeadersMap(headers);

      expect(Object.keys(flattenedHeaders).length).toEqual(
        Object.keys(headers).length,
      );

      expect(flattenedHeaders).toHaveProperty('Accept-Encoding');
      expect(flattenedHeaders['Accept-Encoding']).toEqual('gzip');
      expect(flattenedHeaders['Accept-Language']).toEqual('en-US,en;q=0.9');
      expect(flattenedHeaders['Content-Length']).toEqual('40');
    }
  });

  it('should return headers flattened with custom options', () => {
    const defaultSingleValueHeaders = {
      'Accept-Encoding': 'gzip',
      'Accept-Language': 'en-US,en;q=0.9',
    };
    const defaultMultiValueHeaders = {
      'Accept-Encoding': ['gzip'],
      'Accept-Language': ['en-US', 'en;q=0.9'],
    };

    const headerLists: [
      headers: BothValueHeaders,
      separator: string,
      lowerCase: boolean,
    ][] = [
      [defaultSingleValueHeaders, ',', false],
      [defaultMultiValueHeaders, ',', false],
      [defaultSingleValueHeaders, '|', false],
      [defaultMultiValueHeaders, '|', false],
      [defaultSingleValueHeaders, ',', true],
      [defaultMultiValueHeaders, ',', true],
      [defaultSingleValueHeaders, '|', true],
      [defaultMultiValueHeaders, '|', true],
    ];

    for (const [headers, separator, lowerCase] of headerLists) {
      const flattenedHeaders = getFlattenedHeadersMap(
        headers,
        separator,
        lowerCase,
      );

      expect(Object.keys(flattenedHeaders).length).toEqual(
        Object.keys(headers).length,
      );

      const checkedHeader = lowerCase ? 'accept-encoding' : 'Accept-Encoding';

      const arrayCheckedHeader = lowerCase
        ? 'accept-language'
        : 'Accept-Language';

      expect(flattenedHeaders).toHaveProperty(checkedHeader);
      expect(flattenedHeaders[checkedHeader]).toEqual('gzip');

      if (Array.isArray(headers['Accept-Language'])) {
        expect(headers['Accept-Language']).toStrictEqual(
          flattenedHeaders[arrayCheckedHeader].split(separator),
        );
      } else {
        expect(headers['Accept-Language']).toStrictEqual(
          flattenedHeaders[arrayCheckedHeader],
        );
      }
    }
  });
});

describe('getMultiValueHeadersMap', () => {
  it('should return headers flattened', () => {
    const headerLists: BothValueHeaders[] = [
      {
        'Accept-Encoding': 'gzip',
        'Accept-Language': 'en-US,en;q=0.9',
        Host: undefined,
        'Content-Type': '',
      },
      {
        'Accept-Encoding': ['gzip'],
        'Accept-Language': ['en-US', 'en;q=0.9'],
        Host: undefined,
        'Content-Type': '',
      },
    ];

    for (const headers of headerLists) {
      const multiValueHeadersMap = getMultiValueHeadersMap(headers);

      expect(Object.keys(multiValueHeadersMap).length).toEqual(
        Object.keys(headers).length,
      );

      expect(multiValueHeadersMap).toHaveProperty('accept-encoding', ['gzip']);
      expect(
        Object.keys(multiValueHeadersMap).every(key =>
          Array.isArray(multiValueHeadersMap[key]),
        ),
      );
    }
  });
});

describe('getFlattenedHeadersMapAndCookies', () => {
  it('should return headers flattened', () => {
    const headerLists: BothValueHeaders[] = [
      {
        'Accept-Encoding': 'gzip',
        'Accept-Language': 'en-US,en;q=0.9',
        Host: undefined,
        'Content-Type': '',
        'Content-Length': 40 as unknown as string,
        'Set-Cookie': 'blabla',
      },
      {
        'Accept-Encoding': ['gzip'],
        'Accept-Language': ['en-US', 'en;q=0.9'],
        Host: undefined,
        'Content-Type': '',
        'Content-Length': [40] as unknown as string[],
        'Set-Cookie': ['blabla'],
      },
    ];

    for (const headers of headerLists) {
      const { headers: flattenedHeaders, cookies } =
        getFlattenedHeadersMapAndCookies(headers);

      expect(Object.keys(flattenedHeaders).length).toEqual(
        Object.keys(headers).length - 1,
      );

      expect(flattenedHeaders).toHaveProperty('Accept-Encoding');
      expect(flattenedHeaders['Accept-Encoding']).toEqual('gzip');
      expect(flattenedHeaders['Accept-Language']).toEqual('en-US,en;q=0.9');
      expect(flattenedHeaders['Content-Length']).toEqual('40');
      expect(flattenedHeaders['Content-Length']).toEqual('40');
      expect(cookies[0]).toEqual('blabla');
    }
  });
});
