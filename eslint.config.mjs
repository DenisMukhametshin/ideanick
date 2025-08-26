// eslint.config.mjs
import js from '@eslint/js'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  js.configs.recommended,
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      curly: ['error', 'all'],
      'no-irregular-whitespace': ['error', { skipTemplates: true, skipStrings: true }],
      'no-console': ['error', { allow: ['info', 'error', 'warn'] }],
    },
    ignores: ['**/node_modules/**', '**/dist/**'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
      parserOptions: { project: false },
    },
    plugins: {
      '@typescript-eslint': (await import('@typescript-eslint/eslint-plugin')).default,
    },
  },
  {
    files: ['backend/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: [path.join(__dirname, 'backend/tsconfig.json')],
        tsconfigRootDir: __dirname,
      },
      globals: globals.node,
    },
  },
  {
    files: ['webapp/**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      parserOptions: {
        project: [path.join(__dirname, 'webapp/tsconfig.json')],
        tsconfigRootDir: __dirname,
      },
      globals: { ...globals.browser, ...globals.es2021 },
    },
    plugins: {
      'react-refresh': (await import('eslint-plugin-react-refresh')).default,
    },
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
  {
    files: ['webapp/vite.config.ts'],
    languageOptions: {
      parserOptions: {
        project: [path.join(__dirname, 'webapp/tsconfig.node.json')],
        tsconfigRootDir: __dirname,
      },
      globals: globals.node,
    },
  },
  { ignores: ['**/node_modules/**', '**/dist/**'] },
  {
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]
