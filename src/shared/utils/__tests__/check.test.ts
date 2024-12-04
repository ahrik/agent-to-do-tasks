import { describe, expect, test } from '@jest/globals';
import { checkError } from '../check';

describe('checkError', () => {
  test('null params', () => {
    expect(checkError(null)).toBeFalsy();
  });

  test('number 0', () => {
    expect(checkError(0)).toBeFalsy();
  });

  test('string test', () => {
    expect(checkError('test')).toBeFalsy();
  });

  test('new Error', () => {
    expect(checkError(new Error('error'))).toBeTruthy();
  });
});
