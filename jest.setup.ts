import '@testing-library/jest-dom';

import { configure } from '@testing-library/react';

// Настройка React Testing Library
configure({
  testIdAttribute: 'data-testid',
});

// Mock для window.localStorage
// const localStorageMock = (() => {
//   let store: Record<string, string> = {};
//   return {
//     getItem: (key: string) => store[key] || null,
//     setItem: (key: string, value: string) => {
//       store[key] = value;
//     },
//     clear: () => {
//       store = {};
//     },
//     removeItem: (key: string) => {
//       delete store[key];
//     },
//   };
// })();
//
// Object.defineProperty(window, 'localStorage', {
//   value: localStorageMock,
// });
