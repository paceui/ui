import * as StepsComponents from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { BlockPreview } from "./block-preview";
import { CodePreview } from "./code-preview";
import { DemoCodePreview } from "./demo-code-preview";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
    return {
        ...defaultMdxComponents,
        ...components,
        ...StepsComponents,
        DemoCodePreview,
        BlockPreview,
        Tabs,
        TabsList,
        TabsTrigger,
        TabsContent,
        CodePreview,
    };
}
