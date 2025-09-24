"use client";

import { ArrowUpIcon } from "lucide-react";
import { useRef, useState } from "react";

import { AISuggestion, AISuggestions } from "@/components/ai/suggestions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const suggestions = [
    "Why does shadcn win every time? 🤔",
    "Which shadcn CLI command starts a project?",
    "What is PaceUI used for exactly?",
    "How to add PaceUI components in React?",
    "Top AI trends shaping the future",
    "Why TypeScript powers scalable applications",
    "How self-learning systems actually work",
];

export const Demo = () => {
    const [showSuggestions, setShowSuggestions] = useState(true);
    const [input, setInput] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const onSuggestion = (suggestion: string) => {
        textAreaRef.current?.focus();
        setInput(suggestion);
        setShowSuggestions(false);
    };

    const onChangeInput = (value: string) => {
        setInput(value);

        if (value.trim().length == 0) {
            setShowSuggestions(true);
        }
    };

    return (
        <div className="max-w-2xl grow">
            <div className="bg-muted/20 flex h-120 flex-col rounded-md border p-2.5">
                <div className="text-muted-foreground flex grow justify-center pt-24 font-medium">Chat Area</div>
                <AISuggestions className="me-3 mt-auto pb-1" show={showSuggestions}>
                    {suggestions.map((suggestion) => (
                        <AISuggestion
                            className="cursor-pointer shadow-none"
                            key={suggestion}
                            onClick={() => onSuggestion(suggestion)}
                            suggestion={suggestion}
                        />
                    ))}
                </AISuggestions>
                <div className="bg-card mt-2 rounded-md border">
                    <Textarea
                        ref={textAreaRef}
                        value={input}
                        onChange={(e) => onChangeInput(e.target.value)}
                        className="!bg-card h-36 resize-none appearance-none border-none shadow-none !ring-0"
                        placeholder="Ask me anything... It will consumed a token 😉"
                    />
                    <div className="flex items-end justify-between px-4 py-3">
                        <p className="text-muted-foreground text-sm">Vercel / AI</p>
                        <div className="flex items-end gap-3">
                            <div className="flex items-center gap-1">
                                55
                                <p className="text-muted-foreground  text-sm">/1000</p>
                            </div>
                            <Button className="text-primary-foreground size-8 cursor-pointer">
                                <ArrowUpIcon />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
