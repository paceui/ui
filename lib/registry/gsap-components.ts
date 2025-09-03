import type { RegistryItem } from "shadcn/schema";

export const gsapComponentRegistries: RegistryItem[] = [
    {
        title: "Distort Text",
        description:
            "A responsive text effect that scrambles nearby characters as the cursor moves across a paragraph.",
        name: "distort-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/distort-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/distort-text.tsx",
            },
        ],
    },
    {
        title: "Reveal Text",
        description: "A smooth text reveal animation where each heading reveals related content on interaction.",
        name: "reveal-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/reveal-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/reveal-text.tsx",
            },
        ],
    },
    {
        title: "Scramble Text",
        description: "A hover-triggered text effect that scrambles and restores characters with smooth motion.",
        name: "scramble-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/scramble-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/scramble-text.tsx",
            },
        ],
    },
    {
        title: "Reveal On Scroll",
        description: "Animate content into view on scroll with effects like fade, slide, zoom, and blur.",
        name: "reveal-on-scroll",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/reveal-on-scroll.tsx",
                type: "registry:ui",
                target: "~/components/gsap/reveal-on-scroll.tsx",
            },
        ],
    },
    {
        title: "Bouncing Text",
        description: "A playful animation where characters bounce in sequence across the text.",
        name: "bouncing-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/bouncing-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/bouncing-text.tsx",
            },
        ],
    },
    {
        title: "Mouse Wave Text",
        description: "Creates a wave-like bounce effect on text as the mouse moves across",
        name: "mouse-wave-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/mouse-wave-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/mouse-wave-text.tsx",
            },
        ],
    },
    {
        title: "Squash Text",
        description: "Characters bounce and squash into place with playful, dynamic energy.",
        name: "squash-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/squash-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/squash-text.tsx",
            },
        ],
    },
    {
        title: "Stagger on Scroll",
        description: "Stagger elements into view with scroll-triggered fade, slide, zoom, or blur effects.",
        name: "stagger-on-scroll",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/stagger-on-scroll.tsx",
                type: "registry:ui",
                target: "~/components/gsap/stagger-on-scroll.tsx",
            },
        ],
    },
    {
        title: "Draw Line Text",
        description:
            "A smooth text effect that draws characters as strokes and fills them in—perfect for headers and highlights.",
        name: "draw-line-text",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/draw-line-text.tsx",
                type: "registry:ui",
                target: "~/components/gsap/draw-line-text.tsx",
            },
        ],
    },
    {
        title: "Text Fall Button",
        description:
            "A button with dynamic text that falls into place with a smooth, elastic motion on hover or click.",
        name: "text-fall-button",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/text-fall-button.tsx",
                type: "registry:ui",
                target: "~/components/gsap/text-fall-button.tsx",
            },
        ],
    },
    {
        title: "Tilt Card",
        description: "Interactive 3D tilt card that responds to cursor, adds depth and motion.",
        name: "tilt-card",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/tilt-card.tsx",
                type: "registry:ui",
                target: "~/components/gsap/tilt-card.tsx",
            },
        ],
    },
    {
        title: "Spring Button",
        description: "A button that shrinks on press and springs back with bounce.",
        name: "spring-button",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/spring-button.tsx",
                type: "registry:ui",
                target: "~/components/gsap/spring-button.tsx",
            },
        ],
    },
    {
        title: "Flip Reveal",
        description: "Animated container that reveals or hides items using GSAP Flip transitions and keys.",
        name: "flip-reveal",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/flip-reveal.tsx",
                type: "registry:ui",
                target: "~/components/gsap/flip-reveal.tsx",
            },
        ],
    },
    {
        title: "Profile Peek",
        description: "Hover to peek profile with smooth reveal, right from the image.",
        name: "profile-peek",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/profile-peek.tsx",
                type: "registry:ui",
                target: "~/components/gsap/profile-peek.tsx",
            },
        ],
    },
    {
        title: "Liquid Cursor",
        description: "A smooth, fluid cursor that follows your mouse with gentle stretch and bounce effects.",
        name: "liquid-cursor",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/liquid-cursor.tsx",
                type: "registry:ui",
                target: "~/components/gsap/liquid-cursor.tsx",
            },
        ],
    },
    {
        title: "Liquid Glass",
        description: "A smooth glass effect with subtle blur, ideal for UI highlights and overlays.",
        name: "liquid-glass",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/liquid-glass.tsx",
                type: "registry:ui",
                target: "~/components/gsap/liquid-glass.tsx",
            },
        ],
    },
    {
        title: "Dot Loader",
        description:
            "A compact 7x7 dot grid loader with smooth animation to visualize frame sequences or loading states in your app",
        name: "dot-loader",
        type: "registry:ui",
        files: [
            {
                path: "gsap/dot-loader.tsx",
                type: "registry:ui",
                target: "~/components/gsap/dot-loader.tsx",
            },
        ],
    },
    {
        title: "Dot Flow",
        description: "Visually expressive status updates with animated dots and smooth sliding text transitions",
        name: "dot-flow",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@paceui-ui/dot-loader"],
        files: [
            {
                path: "gsap/dot-flow.tsx",
                type: "registry:ui",
                target: "~/components/gsap/dot-flow.tsx",
            },
        ],
    },
    {
        title: "Rolling Number",
        description: "Animate numbers with smooth vertical digit transitions",
        name: "rolling-number",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/rolling-number.tsx",
                type: "registry:ui",
                target: "~/components/gsap/rolling-number.tsx",
            },
        ],
    },
    {
        title: "Github Star Counter",
        description: "Display live GitHub star count for any public repository",
        name: "github-star-counter",
        type: "registry:ui",
        registryDependencies: ["@paceui-ui/rolling-number"],
        files: [
            {
                path: "gsap/github-star-counter.tsx",
                type: "registry:ui",
                target: "~/components/gsap/github-star-counter.tsx",
            },
        ],
    },
    {
        title: "Swap",
        description: "A dynamic content swapper with smooth animations and flexible visual effects",
        name: "swap",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/swap.tsx",
                type: "registry:ui",
                target: "~/components/gsap/swap.tsx",
            },
        ],
    },
    {
        title: "Modal Selector",
        description: "AI-focused model selector with preview, tooltips, and capability indicators built-in",
        name: "modal-selector",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@paceui-ui/swap", "button"],
        files: [
            {
                path: "ai/modal-selector.tsx",
                type: "registry:ui",
                target: "~/components/ai/modal-selector.tsx",
            },
        ],
    },
    {
        title: "Modal Ability Selector",
        description: "Compact selector for toggling abilities with icons and custom styles",
        name: "modal-ability-selector",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        registryDependencies: ["@paceui-ui/swap", "button", "dropdown-menu", "tooltip"],
        files: [
            {
                path: "ai/modal-ability-selector.tsx",
                type: "registry:ui",
                target: "~/components/ai/modal-ability-selector.tsx",
            },
        ],
    },
    {
        title: "Token Counter",
        description: "Accurately counts and tracks tokens in real time to optimize input limits",
        name: "token-counter",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "ai/token-counter.tsx",
                type: "registry:ui",
                target: "~/components/ai/token-counter.tsx",
            },
        ],
    },
    {
        title: "Gradient Shadow",
        description: "Smooth horizontal gradient flow, creating a subtle glowing hover shadow effect",
        name: "gradient-shadow",
        type: "registry:ui",
        dependencies: ["gsap"],
        files: [
            {
                path: "gsap/gradient-shadow.tsx",
                type: "registry:ui",
                target: "~/components/gsap/gradient-shadow.tsx",
            },
        ],
    },
    {
        title: "Swap",
        description:
            "A flexible swap component that animates content changes with smooth customizable transition effects",
        name: "swap",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/swap.tsx",
                type: "registry:ui",
                target: "~/components/gsap/swap.tsx",
            },
        ],
    },
    {
        title: "Animated Stack",
        description: "A smooth stacked card component that expands on hover and collapses with animation",
        name: "animated-stack",
        type: "registry:ui",
        dependencies: ["gsap", "@gsap/react"],
        files: [
            {
                path: "gsap/animated-stack.tsx",
                type: "registry:ui",
                target: "~/components/gsap/animated-stack.tsx",
            },
        ],
    },
];
