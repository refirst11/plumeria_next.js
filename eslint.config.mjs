import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import plumeria from "@plumeria/eslint-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  eslint.configs.recommended,
  plumeria.flatConfigs.recommended,
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
