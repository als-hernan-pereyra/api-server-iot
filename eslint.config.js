module.exports = {
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
      'plugin:prettier/recommended',
    ],
    env: {
      node: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      // Add custom linting rules here
      'no-console': 'warn',
      'prettier/prettier': 'error',
    },
  };
  