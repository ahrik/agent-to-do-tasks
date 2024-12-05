import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { I18nProvider } from '../I18nProvider';
import { useI18n } from '../useI18n';

jest.mock('../translations', () => ({
  translations: {
    en: jest.fn(() => Promise.resolve({ hello: 'Hello' })),
    ru: jest.fn(() => Promise.resolve({ hello: 'Привет' })),
  },
}));

const TestComponent = () => {
  const { t, language, changeLanguage } = useI18n();

  return (
    <div>
      <p data-testid="translation">{t('hello')}</p>
      <p data-testid="language">{language}</p>
      <button onClick={() => changeLanguage('ru')}>Switch to RU</button>
    </div>
  );
};

describe('I18nProvider', () => {
  it('renders translations correctly', async () => {
    render(
      <I18nProvider defaultLanguage="en">
        <TestComponent />
      </I18nProvider>
    );

    // Ожидаем, пока переводы загрузятся
    const translation = await screen.findByTestId('translation');
    expect(translation.textContent).toBe('Hello');
  });

  it('switches language', async () => {
    render(
      <I18nProvider defaultLanguage="en">
        <TestComponent />
      </I18nProvider>
    );

    const button = screen.getByText('Switch to RU');
    button.click();

    const translation = await screen.findByTestId('translation');
    expect(translation.textContent).toBe('Привет');
  });
});
