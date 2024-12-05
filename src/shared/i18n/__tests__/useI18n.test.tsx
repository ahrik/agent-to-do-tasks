import { PropsWithChildren } from 'react';
import { describe, expect, it } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { I18nProvider } from '../I18nProvider';
import { useI18n } from '../useI18n';

jest.mock('../translations', () => ({
  translations: {
    en: jest.fn(() => Promise.resolve({ hello: 'Hello' })),
    ru: jest.fn(() => Promise.resolve({ hello: 'Привет' })),
  },
}));

describe('useI18n', () => {
  // it('throws an error when used outside of provider', () => {
  //   const { result } = renderHook(() => useI18n());
  //   expect(result).toEqual(new Error('useI18n must be used within an I18nProvider'));
  // });

  it('provides translations when used inside provider', async () => {
    const wrapper = ({ children }: PropsWithChildren) => <I18nProvider defaultLanguage="en">{children}</I18nProvider>;

    let result: any;
    await act(async () => {
      const renderedHook = renderHook(() => useI18n(), { wrapper });
      result = renderedHook.result;
    });

    expect(result.current.language).toBe('en');
    expect(typeof result.current.t).toBe('function');
    expect(typeof result.current.changeLanguage).toBe('function');
  });
});
