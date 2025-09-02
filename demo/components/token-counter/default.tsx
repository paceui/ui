"use client";

import { ArrowUpIcon, SquareIcon } from "lucide-react";
import { useRef, useState } from "react";

import { TokenCounter } from "@/components/ai/token-counter";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export const Demo = () => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [token, setToken] = useState(0);
    const [generating, setGenerating] = useState(false);

    const onGenerate = () => {
        setGenerating(true);
        setTimeout(() => {
            setToken((t) => t + Math.floor(Math.random() * 100) + 10);
            setGenerating(false);
        }, 1000);
    };

    return (
        <div className="bg-card max-w-2xl grow rounded border">
            <Textarea
                className="h-36 resize-none appearance-none border-none shadow-none !ring-0"
                placeholder="Ask me anything... It will consumed a token 😉"
            />
            <div className="flex items-center justify-between px-4 py-3">
                <p className="text-muted-foreground text-sm">ChatGPT</p>
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                        <TokenCounter
                            sourceRef={buttonRef}
                            token={token}
                            className="font-medium"
                            flyingClassName="text-sm text-primary"
                        />
                        <p className="text-muted-foreground text-sm">/1000</p>
                    </div>
                    <Button
                        className="text-primary-foreground size-8 cursor-pointer"
                        disabled={generating}
                        onClick={onGenerate}
                        ref={buttonRef}>
                        {generating ? <SquareIcon /> : <ArrowUpIcon />}
                    </Button>
                </div>
            </div>
        </div>
    );
};
