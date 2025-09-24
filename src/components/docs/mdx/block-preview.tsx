"use client";

import { CodeBlock } from "fumadocs-ui/components/codeblock";
import {
    Code2Icon,
    EyeIcon,
    LaptopIcon,
    MaximizeIcon,
    MonitorIcon,
    RotateCcwIcon,
    SmartphoneIcon,
    TerminalIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";

import { CodePreview } from "@/components/docs/mdx/code-preview";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export type IBlockPreview = {
    path?: string;
    registry?: string;
    smHeight?: number;
    mdHeight?: number;
    lgHeight?: number;
};

export const BlockPreview = ({ path, registry, smHeight, mdHeight, lgHeight }: IBlockPreview) => {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const [device, setDevice] = useState<"sm" | "md" | "lg">("lg");
    const [mode, setMode] = useState<"preview" | "code">("preview");

    const minHeight = useMemo(() => {
        const lg = lgHeight ?? 200;
        const md = mdHeight ?? lg;
        const sm = smHeight ?? md;
        return { lg, md, sm }[device];
    }, [device, lgHeight, mdHeight, smHeight]);

    const openPreview = () => {
        window.open(`/examples/${path}`, "_blank");
    };

    const refreshIframe = () => {
        if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src ?? "";
        }
    };

    return (
        <div className="mt-3 rounded-md border not-prose">
            <div className="flex items-center justify-between gap-2 border-b p-3">
                <Tabs value={mode} onValueChange={(e) => setMode(e as typeof mode)}>
                    <TabsList>
                        <TabsTrigger value="preview" className="cursor-pointer max-sm:px-1">
                            <span className="max-sm:hidden">Preview</span>
                            <span className="sm:hidden">
                                <EyeIcon className="size-5" />
                            </span>
                        </TabsTrigger>
                        <TabsTrigger value="code" className="cursor-pointer max-sm:px-1">
                            <span className="max-sm:hidden">Code</span>
                            <span className="sm:hidden">
                                <Code2Icon className="size-5" />
                            </span>
                        </TabsTrigger>
                    </TabsList>
                </Tabs>
                <TooltipProvider>
                    <div className="flex items-center gap-1">
                        <Tooltip>
                            <TooltipTrigger className="cursor-pointer max-sm:hidden" asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={cn("size-8 cursor-pointer", { "bg-muted": device === "sm" })}
                                    onClick={() => setDevice("sm")}>
                                    <SmartphoneIcon className="!size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Mobile</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger className="cursor-pointer max-sm:hidden" asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={cn("size-8 cursor-pointer", { "bg-muted": device === "md" })}
                                    onClick={() => setDevice("md")}>
                                    <LaptopIcon className="!size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Laptop</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger className="cursor-pointer max-sm:hidden" asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className={cn("size-8 cursor-pointer", {
                                        "bg-muted": device === "lg",
                                    })}
                                    onClick={() => setDevice("lg")}>
                                    <MonitorIcon className="!size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Desktop</TooltipContent>
                        </Tooltip>
                        <hr className="mx-1 h-6 border-s max-sm:hidden" />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="size-8 cursor-pointer"
                                    onClick={openPreview}>
                                    <MaximizeIcon className="!size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Full Screen</TooltipContent>
                        </Tooltip>
                    </div>
                </TooltipProvider>
                <div className="flex items-center gap-1.5">
                    {registry && (
                        <Link
                            href={`https://v0.dev/chat/api/open?url=https://ui.paceui.com/r/${registry}.json`}
                            target="_blank">
                            <Button
                                className="group cursor-pointer shadow-none max-sm:size-9"
                                aria-label="Open in v0"
                                title="Open in v0"
                                variant="ghost"
                                asChild>
                                <div>
                                    <span className="max-sm:hidden">Open in</span>
                                    <svg
                                        viewBox="0 0 40 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="!size-5 text-current">
                                        <path
                                            d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Button>
                        </Link>
                    )}
                    {registry && <hr className="h-6 border-s" />}
                    <Button
                        size="icon"
                        variant="ghost"
                        className="group cursor-pointer shadow-none"
                        onClick={refreshIframe}>
                        <RotateCcwIcon className="!size-4.5 transition-all group-hover:-rotate-60" />
                    </Button>
                </div>
            </div>
            {mode == "preview" && (
                <div className="relative overflow-hidden rounded-b-md">
                    <div className="absolute inset-0 -z-1 bg-[url('/images/docs/dots-bg.png')] bg-[length:800px_300px] bg-repeat opacity-5 dark:opacity-6" />
                    <div className="flex justify-center">
                        <div
                            className="group w-full shadow data-[device=md]:w-4xl data-[device=sm]:w-md"
                            data-device={device}>
                            <iframe
                                ref={iframeRef}
                                className="h-full w-full"
                                style={{
                                    minHeight: minHeight + "px",
                                }}
                                src={`/examples/${path}`}></iframe>
                        </div>
                    </div>
                </div>
            )}
            {mode == "code" && (
                <div className="space-y-4 p-4">
                    {registry && (
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="bg-muted rounded-full p-1.5">
                                    <TerminalIcon className="size-4.5" />
                                </div>
                                <p className="max-sm:text-sm">Use the shadcn CLI to add this block</p>
                            </div>
                            <CodeBlock
                                lang="npm"
                                className="ps-4">{`npx shadcn@latest add @paceui-ui/${registry}`}</CodeBlock>
                        </div>
                    )}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="bg-muted rounded-full p-1.5">
                                <Code2Icon className="size-4.5" />
                            </div>
                            <p className="max-sm:text-sm">Copy and paste this code into your project</p>
                        </div>
                        <CodePreview path={path} collapsible className="ms-9.5 mt-2 mb-0" />
                    </div>
                </div>
            )}
        </div>
    );
};
