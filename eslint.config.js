import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';
import next from '@next/eslint-plugin-next';
import typescript from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

export default [
  ...compat.extends('next/core-web-vitals').map(config => ({
    ...config,
    plugins: {
        ...config.plugins,
        '@typescript-eslint': typescript,
    }
  })),
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescript,
    },
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    rules: {
      ...typescript.configs.recommended.rules,
    },
  },
];