"use client";

import { buttonVariants } from "fumadocs-ui/components/ui/button";
import { useCopyButton } from "fumadocs-ui/utils/use-copy-button";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";

const cacheMarkdowns = new Map<string, string>();

export const CopyMarkdown = ({ markdownPath }: { markdownPath: string }) => {
    const [isLoading, setLoading] = useState(false);
    const [checked, onClick] = useCopyButton(async () => {
        const cached = cacheMarkdowns.get(markdownPath);
        if (cached) return navigator.clipboard.writeText(cached);

        setLoading(true);

        try {
            await navigator.clipboard.write([
                new ClipboardItem({
                    "text/plain": fetch(markdownPath).then(async (res) => {
                        const content = await res.text();
                        cacheMarkdowns.set(markdownPath, content);

                        return content;
                    }),
                }),
            ]);
        } finally {
            setLoading(false);
        }
    });

    return (
        <button
            disabled={isLoading}
            className={cn(
                buttonVariants({
                    color: "secondary",
                    size: "sm",
                    className: "gap-2 cursor-pointer px-2.5",
                }),
            )}
            onClick={onClick}>
            {checked ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
            Copy Markdown
        </button>
    );
};
