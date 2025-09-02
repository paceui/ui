import type { Metadata } from "next";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Fira_Code, Work_Sans } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import React from "react";

import { Analytics } from "@/components/docs/Analytics";
import { cn } from "@/lib/utils";
import "@/styles/app.css";

export const metadata: Metadata = {
    title: {
        template: "%s | PaceUI",
        default: "PaceUI – Animated Components and Blocks for React Ecosystem",
    },
    metadataBase: new URL("https://ui.paceui.com/"),
    description:
        "Animated components and building blocks built for smooth interaction and  rich detail. Copy, customise, and create without the extra setup.",
    keywords: [
        "Tailwind CSS",
        "shadcn",
        "Next.js",
        "React",
        "animations",
        "copy-paste components",
        "gsap",
        "gsap react",
    ],
    authors: [
        {
            name: "Denish Navadiya",
            url: "https://withden.dev/",
        },
    ],
    creator: "withden",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ui.paceui.com",
        title: "PaceUI – Animated Components and Blocks for React Ecosystem",
        description:
            "Animated components and building blocks built for smooth interaction and  rich detail. Copy, customise, and create without the extra setup.",
        siteName: "PaceUI",
        images: [
            {
                url: "https://ui.paceui.com/images/og.jpg",
                alt: "PaceUI",
            },
            {
                url: "https://ui.paceui.com/images/logo.png",
                alt: "PaceUI Logo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "PaceUI – Animated Components and Blocks for React Ecosystem",
        description:
            "Animated components and building blocks built for smooth interaction and  rich detail. Copy, customise, and create without the extra setup.",
        creator: "@paceui_",
    },
    icons: {
        icon: [
            {
                url: "/images/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
        apple: [
            {
                url: "/images/favicon-light.png",
                media: "(prefers-color-scheme: light)",
            },
            {
                url: "/images/favicon-dark.png",
                media: "(prefers-color-scheme: dark)",
            },
        ],
    },
    alternates: {
        canonical: "https://ui.paceui.com",
    },
    robots: {
        index: true,
        follow: true,
    },
};

const sansFont = Work_Sans({ subsets: ["latin"], variable: "--font-sans" });
const monoFont = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("font-sans", sansFont.variable, monoFont.variable)}>
                <NextTopLoader height={1} showSpinner color="var(--color-primary)" />
                <NextThemesProvider attribute="class" defaultTheme="light">
                    {children}
                </NextThemesProvider>
                <Analytics />
            </body>
        </html>
    );
}
