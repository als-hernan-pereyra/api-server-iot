// /** @type {import('eslint').Linter.Config} */
// const eslintConfig = [
//   {
//     languageOptions: {
//       ecmaVersion: 2021,
//       sourceType: "module",
//       globals: {
//         process: 'readonly',  // Define Node.js global variables
//         __dirname: 'readonly',
//       },
//     },
//     plugins: {
//       node: require("eslint-plugin-node"), // Load Node plugin
//       prettier: require("eslint-plugin-prettier"), // Load Prettier plugin
//     },
//     env: {
//       node: true,  // This will set Node.js-specific globals
//     },
//     rules: {
//       "no-console": "off", //"warn",
//       "prettier/prettier": "error", // Prettier rules for code style
//     },
//   },
// ];

// module.exports = eslintConfig;

// eslint.config.js

// import { FlatConfigArray } from '@eslint/config-array';

export default [
  {
    languageOptions: {
      globals: {
        process: 'readonly',  // Node.js global variable
        __dirname: 'readonly', // Node.js global variable
      },
    },
    rules: {
      'no-console': 'warn',  // Example rule to allow console logs
    },
  },
];
