import js from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  { ignores: ["node_modules/**", ".next/**", "dist/**"] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
];

export default eslintConfig;