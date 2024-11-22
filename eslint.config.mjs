import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import jsdocPlugin from 'eslint-plugin-jsdoc';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import eslintPrettier from 'eslint-plugin-prettier';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsEslint from 'typescript-eslint';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tsParser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

/**@type {import('eslint').Linter.Config[]}*/
export default tsEslint.config(
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  js.configs.recommended,
  ...tsEslint.configs.recommended,

  {
    plugins: {
      '@typescript-eslint': tsEslint.plugin,
      react: eslintReact,
      jest: jestPlugin,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: eslintPrettier,
      'jsx-a11y': jsxA11yPlugin,
      jsdoc: jsdocPlugin,
      'simple-import-sort': simpleImportSort,
    },
  },

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2025,
      },
      parserOptions: {
        parser: tsParser,
      },
    },
  },

  {
    rules: {
      'no-undef': 'warn',
      'react/display-name': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'no-unused-vars': [
        'off',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'no-extra-semi': 1,
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',

      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            ['^\\u0000'],
            ['^react', '^mobx', '^@mui', '^@\\w', '^@?\\w', '^', '^\\.'],
            ['^.+\\.scss$'],
            ['^.+\\./styles.tsx$'],
          ],
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'simple-import-sort/exports': 'warn',
    },
  },

  {
    ignores: ['node_modules', 'dist', '.editorconfig'],
  }
);
