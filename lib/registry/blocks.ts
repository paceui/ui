import { type RegistryItem } from "shadcn/schema";

export const blockRegistries: RegistryItem[] = [
    {
        title: "Hero Section",
        description: "Hero sections to highlight your message and engage users with a clean, bold intro.",
        name: "hero-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "@paceui-ui/reveal-text",
            "@paceui-ui/tilt-card",
            "@paceui-ui/spring-button",
            "@paceui-ui/text-fall-button",
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
        title: "Hero Section",
        description: "Hero sections to highlight your message and engage users with a clean, bold intro.",
        name: "hero-2",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "@paceui-ui/reveal-text",
            "@paceui-ui/spring-button",
            "@paceui-ui/text-fall-button",
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
        title: "Hero Section",
        description: "Hero sections to highlight your message and engage users with a clean, bold intro.",
        name: "hero-3",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "@paceui-ui/reveal-on-scroll",
            "@paceui-ui/reveal-text",
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
        title: "Hero Section",
        description: "Engaging hero with dynamic AI-focused CTAs and smooth animated content transitions.",
        name: "hero-4",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "@paceui-ui/reveal-on-scroll",
            "@paceui-ui/reveal-text",
            "@paceui-ui/swap",
            "button",
            "avatar",
        ],
        files: [
            {
                path: "hero/hero-4.tsx",
                type: "registry:block",
                target: "~/blocks/hero-4.tsx",
            },
        ],
    },
    {
        title: "Pricing Section",
        description: "Flexible pricing layouts to showcase your plans clearly and help users choose with confidence.",
        name: "pricing-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: [
            "@paceui-ui/spring-button",
            "@paceui-ui/stagger-on-scroll",
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
        title: "Product Filters",
        description: "Filter products by name or category with smooth animated transitions.",
        name: "product-filter-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@paceui-ui/flip-reveal", "input", "label", "select"],
        files: [
            {
                path: "product-filter/product-filter-1.tsx",
                type: "registry:block",
                target: "~/blocks/product-filter-1.tsx",
            },
        ],
    },
    {
        title: "Product",
        description: "Interactive product cards with smooth transitions, variant options, and purchase actions.",
        name: "product-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@paceui-ui/spring-button", "tooltip"],
        files: [
            {
                path: "product/product-1.tsx",
                type: "registry:block",
                target: "~/blocks/product-filter-1.tsx",
            },
        ],
    },
    {
        title: "Testimonials",
        description: "Minimal block with smooth hover effects to highlight user feedback clearly.",
        name: "testimonials-1",
        type: "registry:block",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@paceui-ui/profile-peek"],
        files: [
            {
                path: "testimonials/testimonials-1.tsx",
                type: "registry:block",
                target: "~/blocks/product-filter-1.tsx",
            },
        ],
    },
];
