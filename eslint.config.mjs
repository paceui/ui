import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: ["node_modules/**", ".next/**", "out/**", "build/**", ".source/**", "next-env.d.ts"],
    },
    {
        rules: {
            "@typescript-eslint/ban-ts-comment": "off",
            "@next/next/no-img-element": "off",
            "react/no-unescaped-entities": "off",
            "import/no-anonymous-default-export": "off",
        },
    },
];

export default eslintConfig;
