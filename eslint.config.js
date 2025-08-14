import js from '@eslint/js';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';

export default [
  js.configs.recommended,

  // Общие настройки для всего кода (включая JSX)
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false, // для @babel/eslint-parser без отдельного .babelrc
        babelOptions: {
          presets: ['@babel/preset-react']
        },
        ecmaVersion: 2023,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        ...globals.browser
      }
    }
  },

  // Специально для тестов Jest
  {
    files: ['**/*.test.{js,jsx}', '**/__tests__/**/*.{js,jsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
        ...globals.browser
      }
    },
    rules: {
      'no-undef': 'off'
    }
  },

  {
    ignores: ['node_modules/', 'dist/', 'coverage/']
  }
];
