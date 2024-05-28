// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'airbnb-typescript',
//     'airbnb/hooks',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:jsx-a11y/recommended',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/typescript',
//     'plugin:prettier/recommended',
//     'prettier/@typescript-eslint',
//     'prettier/react',
//     'prettier',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: [
//     '@typescript-eslint',
//     'react',
//     'react-hooks',
//     'jsx-a11y',
//     'import',
//     'simple-import-sort',
//     'prettier'
//     ,'react-refresh'
//   ],
//   rules: {
//     'prettier/prettier': 'error',
//     'import/order': 'off',
//     'simple-import-sort/imports': 'error',
//     'simple-import-sort/exports': 'error',
//     'react/react-in-jsx-scope': 'off',
//     'react/jsx-filename-extension': [
//       1,
//       { extensions: ['.jsx', '.tsx'] },
//     ],
//     'react/prop-types': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'jsx-a11y',
    'import',
    'simple-import-sort',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    'import/order': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx'] },
    ],
    'react/prop-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};



