import js from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";

export default [
  // Base recommended rules
  js.configs.recommended,

  // Your project settings + rules
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
    plugins: {
      jest,
    },
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
    },
  },

  // Jest rules applied to test files
  {
    files: ["**/*.{test,spec}.js", "**/__tests__/**/*.js"],
    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },
    },
    rules: {
      ...jest.configs.recommended.rules,
    },
  },
];
