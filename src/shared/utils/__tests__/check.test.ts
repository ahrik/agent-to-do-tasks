import { checkError } from '../check';

describe('checkError', () => {
  test('null params', () => {
    expect(checkError(null)).toEqual(false);
  });

  test('number 0', () => {
    expect(checkError(0)).toEqual(false);
  });

  test('string test', () => {
    expect(checkError('test')).toEqual(false);
  });

  test('new Error', () => {
    expect(checkError(new Error('error'))).toEqual(true);
  });
});
