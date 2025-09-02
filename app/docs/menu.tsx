import { BookOpenTextIcon, ShapesIcon } from "lucide-react";

import { SidebarNavItem } from "@/components/docs/layouts";
import { routes } from "@/lib/docs";

const base = routes.docs;

const components = base.components.base;

export const docsComponentNavItems: SidebarNavItem[] = [
    {
        title: "AI Toolkit",
        isLabel: true,
    },
    {
        title: "Modal Selector",
        href: components + "/modal-selector",
    },
    {
        title: "Ability Selector",
        href: components + "/modal-ability-selector",
    },
    {
        title: "AI Suggestions",
        href: components + "/ai-suggestions",
    },
    {
        title: "Token Counter",
        href: components + "/token-counter",
        new: true,
    },
    {
        title: "Text based",
        isLabel: true,
    },
    {
        title: "Reveal Text",
        href: components + "/reveal-text",
    },
    {
        title: "Scramble Text",
        href: components + "/scramble-text",
    },
    {
        title: "Distort Text",
        href: components + "/distort-text",
    },
    {
        title: "Squash Text",
        href: components + "/squash-text",
    },
    {
        title: "Bouncing Text",
        href: components + "/bouncing-text",
    },
    {
        title: "Scroll based",
        isLabel: true,
    },
    {
        title: "Mouse Wave Text",
        href: components + "/mouse-wave-text",
    },
    {
        title: "Reveal on Scroll",
        href: components + "/reveal-on-scroll",
    },
    {
        title: "Stagger on Scroll",
        href: components + "/stagger-on-scroll",
    },
    {
        title: "Button",
        isLabel: true,
    },
    {
        title: "Text Fall Button",
        href: components + "/text-fall-button",
    },
    {
        title: "Spring Button",
        href: components + "/spring-button",
    },
    {
        title: "Other",
        isLabel: true,
    },
    {
        title: "Gradient Shadow",
        href: components + "/gradient-shadow",
        new: true,
    },
    {
        title: "Github Star Counter",
        href: components + "/github-star-counter",
    },
    {
        title: "Dot Loader",
        href: components + "/dot-loader",
    },
    {
        title: "Dot Flow",
        href: components + "/dot-flow",
    },
    {
        title: "Flow Builder",
        href: components + "/flow-builder",
    },
    {
        title: "Draw Line Text",
        href: components + "/draw-line-text",
    },
    {
        title: "Tilt Card",
        href: components + "/tilt-card",
    },
    {
        title: "Profile Peek",
        href: components + "/profile-peek",
    },
    {
        title: "Flip Reveal",
        href: components + "/flip-reveal",
    },
    {
        title: "Liquid Cursor",
        href: components + "/liquid-cursor",
    },
    {
        title: "Liquid Glass",
        href: components + "/liquid-glass",
    },
];

export const docsSidebarNavItems: SidebarNavItem[] = [
    {
        title: "Getting Started",
        icon: <BookOpenTextIcon />,
        expanded: true,
        items: [
            {
                title: "Introduction",
                href: base.home,
            },
            {
                title: "Installation",
                href: base.installation,
            },
            {
                title: "MCP",
                href: base.mcp,
            },
        ],
    },
    {
        title: "Components",
        icon: <ShapesIcon />,
        expanded: true,
        items: docsComponentNavItems,
    },
];
