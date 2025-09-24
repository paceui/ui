export default {
    printWidth: 120,
    tabWidth: 4,
    semi: true,
    bracketSpacing: true,
    arrowParens: "always",
    bracketSameLine: true,
    importOrder: ["^react/(.*)$", "^@?gsap(?:/.*)?$", "^@/(.*)$", "^[./]"],
    importOrderGroupNamespaceSpecifiers: true,
    plugins: ["@trivago/prettier-plugin-sort-imports", "@trivago/prettier-plugin-sort-imports"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
};
