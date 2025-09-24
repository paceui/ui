import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    outputFileTracingIncludes: {
        "/": ["./src/components/**/*", "./src/demo/**/*"],
    },
    async rewrites() {
        return [
            {
                source: "/docs/:path*.mdx",
                destination: "/fetch-mdx/:path*",
            },
        ];
    },
};

export default withMDX(config);
