import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";
import security from "eslint-plugin-security";
import importPlugin from "eslint-plugin-import";
import nodePlugin from "eslint-plugin-node";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Include JS & TS files
    languageOptions: {
      globals: globals.node, // Ensure Node.js globals are available
    },
  },
  pluginJs.configs.recommended, // JavaScript recommended rules
  ...tseslint.configs.recommended, // TypeScript recommended rules
  prettier, // Disables ESLint rules that conflict with Prettier
  security.configs.recommended, // Security recommended rules
  {
    plugins: {
      prettier: prettierPlugin,
      nodePlugin: nodePlugin, // Node recommended rules
      importPlugin: importPlugin, // Import order
    },
    rules: {
      "prettier/prettier": "error", // Enforce Prettier formatting as ESLint errors

      eqeqeq: ["error", "always"], // Require strict `===` comparisons
      curly: "error", // Enforce curly braces for all control statements
      "no-console": "warn", // Warn on console logs (use a logger in production)
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }], // Ignore unused `_` vars

      "@typescript-eslint/explicit-function-return-type": "warn", // Warn if functions don't have return types
      "@typescript-eslint/no-explicit-any": "warn", // Avoid `any` type
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused `_` vars
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"], // Enforce `interface` over `type`

      "callback-return": "error", // Enforce returning in callbacks
      "handle-callback-err": "error", // Handle errors properly in callbacks
      "no-process-exit": "warn", // Discourage `process.exit()`

      "linebreak-style": ["error", "unix"], // Enforce LF line endings
      camelcase: "error", // Enforce camelCase variable and function names
    },
  },
];
