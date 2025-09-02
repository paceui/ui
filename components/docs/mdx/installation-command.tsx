"use client";

import { CheckIcon, ClipboardIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { codeToHtml } from "shiki";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { copyToClipboard } from "@/lib/docs";
import { cn } from "@/lib/utils";

export type PackageManager = "npm" | "yarn" | "bun" | "pnpm";

const installCommands: Record<PackageManager, string> = {
    npm: "npm install",
    yarn: "yarn add",
    bun: "bun add",
    pnpm: "pnpm add",
};

const executeCommands: Record<PackageManager, string> = {
    npm: "npx",
    yarn: "npx",
    pnpm: "pnpm dlx",
    bun: "bunx --bun",
};

const createCommands: Record<PackageManager, string> = {
    npm: "npm create",
    yarn: "yarn create",
    pnpm: "pnpm create",
    bun: "bun create",
};

export const getCommandAsPackageManager = (command: string, manager: PackageManager) => {
    return command
        .replaceAll(installCommands.npm, installCommands[manager])
        .replaceAll(executeCommands.npm, executeCommands[manager])
        .replaceAll(createCommands.npm, createCommands[manager]);
};

export const InstallationCommand = ({
    command: rawCommand = "",
    className,
    wrapperClassname,
}: {
    command: string;
    className?: string;
    wrapperClassname?: string;
}) => {
    const [code, setCode] = useState<string>("");
    const [hasCopied, setHasCopied] = useState(false);

    const command = useMemo(() => {
        return rawCommand.replace("~website/", "https://ui.paceui.com/");
    }, [rawCommand]);

    const copy = async (manager: PackageManager) => {
        setHasCopied(true);
        const packageLevelCommand = getCommandAsPackageManager(command, manager);
        await copyToClipboard(packageLevelCommand);
        setTimeout(() => {
            setHasCopied(false);
        }, 3000);
    };

    useEffect(() => {
        codeToHtml(command, {
            lang: "bash",
            theme: "github-dark-default",
        }).then(setCode);
    }, [command]);

    return (
        <div className={cn("relative mt-4 mb-3", wrapperClassname)}>
            <div
                className={cn("overflow-hidden rounded text-sm select-all [&>.shiki]:p-4", className)}
                dangerouslySetInnerHTML={{ __html: code }}
            />
            <div className="absolute end-4 top-3">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="relative size-8 rounded-md hover:bg-white/25"
                            size="icon"
                            aria-label="Copy">
                            <CheckIcon
                                className={cn(
                                    "absolute start-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white transition-all",
                                    {
                                        "scale-0 opacity-0": !hasCopied,
                                    },
                                )}
                            />
                            <ClipboardIcon
                                className={cn(
                                    "absolute start-1/2 top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 text-white transition-all",
                                    {
                                        "scale-0 opacity-0": hasCopied,
                                    },
                                )}
                            />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onSelect={() => copy("npm")}>npm</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => copy("yarn")}>yarn</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => copy("pnpm")}>pnpm</DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => copy("bun")}>bun</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};
