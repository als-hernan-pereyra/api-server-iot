/** @type {import('eslint').Linter.Config} */
const eslintConfig = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      node: require("eslint-plugin-node"), // Load Node plugin
      prettier: require("eslint-plugin-prettier"), // Load Prettier plugin
    },
    rules: {
      "no-console": "warn",
      "prettier/prettier": "error", // Prettier rules for code style
    },
  },
];

module.exports = eslintConfig;
