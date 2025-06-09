import { type RegistryItem } from "shadcn/registry";

export const blockRegistries: RegistryItem[] = [
    {
        name: "hero-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "https://paceui.com/r/gsap/reveal-text",
            "https://paceui.com/r/gsap/tilt-card",
            "https://paceui.com/r/gsap/spring-button",
            "https://paceui.com/r/gsap/text-fall-button",
        ],
        files: [
            {
                path: "hero/hero-1.tsx",
                type: "registry:block",
                target: "~/blocks/hero-1.tsx",
            },
        ],
    },
    {
        name: "hero-2",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "https://paceui.com/r/gsap/reveal-text",
            "https://paceui.com/r/gsap/spring-button",
            "https://paceui.com/r/gsap/text-fall-button",
        ],
        files: [
            {
                path: "hero/hero-2.tsx",
                type: "registry:block",
                target: "~/blocks/hero-2.tsx",
            },
        ],
    },
    {
        name: "hero-3",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "https://paceui.com/r/gsap/reveal-on-scroll",
            "https://paceui.com/r/gsap/reveal-text",
            "button",
        ],
        files: [
            {
                path: "hero/hero-3.tsx",
                type: "registry:block",
                target: "~/blocks/hero-3.tsx",
            },
        ],
    },
    {
        name: "pricing-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "https://paceui.com/r/gsap/spring-button",
            "https://paceui.com/r/gsap/stagger-on-scroll",
            "button",
        ],
        files: [
            {
                path: "pricing/pricing-1.tsx",
                type: "registry:block",
                target: "~/blocks/pricing-1.tsx",
            },
        ],
    },
    {
        name: "product-filter-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["https://paceui.com/r/gsap/flip-reveal", "input", "label", "select"],
        files: [
            {
                path: "product-filter/product-filter-1.tsx",
                type: "registry:block",
                target: "~/blocks/product-filter-1.tsx",
            },
        ],
    },
    {
        name: "product-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["https://paceui.com/r/gsap/spring-button", "tooltip"],
        files: [
            {
                path: "product/product-1.tsx",
                type: "registry:block",
                target: "~/blocks/product-filter-1.tsx",
            },
        ],
    },
    {
        name: "testimonials-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["https://paceui.com/r/gsap/profile-peek"],
        files: [
            {
                path: "testimonials/testimonials-1.tsx",
                type: "registry:block",
                target: "~/blocks/product-filter-1.tsx",
            },
        ],
    },
];
