"use client";

import { useEffect, useRef } from "react";

import { ScrollArea, ScrollAreaProps, ScrollBar } from "@/components/ui/scroll-area";

type ResponseWriterProps = ScrollAreaProps & {
    text: string;
};

export const ResponseWriter = ({ text, ...props }: ResponseWriterProps) => {
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollAreaRef.current) {
            const viewport = scrollAreaRef.current.querySelector("[data-radix-scroll-area-viewport]");
            if (viewport) {
                viewport.scrollTo({
                    top: viewport.scrollHeight,
                    behavior: "smooth",
                });
            }
        }
    }, [text]);

    return (
        <ScrollArea ref={scrollAreaRef} {...props}>
            <div className="pr-4">
                <p className="text-foreground/80 text-sm whitespace-pre-line">{text}</p>
            </div>
            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
};
