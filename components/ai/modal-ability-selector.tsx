"use client";

import { BrainIcon, CodeIcon, EyeIcon, FileSearch2Icon, SpeechIcon, Wand2Icon } from "lucide-react";
import { ComponentProps, ReactNode, useEffect, useState } from "react";

import { Swap } from "@/components/gsap/swap";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const abilities = ["vision", "thinking", "code", "speech", "search", "creativity"] as const;

type AbilityType = (typeof abilities)[number];

const abilityConfig: Record<AbilityType, { color: string; text: string; icon: ReactNode }> = {
    thinking: {
        color: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-500",
        text: "Thinking",
        icon: <BrainIcon className="size-4.5" />,
    },
    code: {
        color: "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-500",
        text: "Code",
        icon: <CodeIcon className="size-4.5" />,
    },
    vision: {
        color: "bg-green-500/10 hover:bg-green-500/20 text-green-500",
        text: "Vision",
        icon: <EyeIcon className="size-4.5" />,
    },
    creativity: {
        color: "bg-orange-500/10 hover:bg-orange-500/20 text-orange-500",
        text: "Creativity",
        icon: <Wand2Icon className="size-4.5" />,
    },
    search: {
        color: "bg-teal-500/10 hover:bg-teal-500/20 text-teal-500",
        text: "Search",
        icon: <FileSearch2Icon className="size-4.5" />,
    },
    speech: {
        color: "bg-pink-500/10 hover:bg-pink-500/20 text-pink-500",
        text: "Speech",
        icon: <SpeechIcon className="size-4.5" />,
    },
};

type ModalAbilitySelectorProps = ComponentProps<typeof Button> & {
    buttonVariant?: "ghost" | "outline" | "default";
    maxVisible?: number;
};

export const ModalAbilitySelector = ({
    className,
    buttonVariant = "ghost",
    maxVisible = 3,
    ...props
}: ModalAbilitySelectorProps) => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<AbilityType[]>([]);

    const toggleAbility = (ability: AbilityType) => {
        setSelected((prev) => (prev.includes(ability) ? prev.filter((c) => c !== ability) : [...prev, ability]));
    };

    useEffect(() => setSelected((s) => [...s]), [maxVisible]);

    return (
        <TooltipProvider>
            <DropdownMenu open={open}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant={buttonVariant}
                        {...props}
                        className={cn("cursor-pointer px-2 shadow-none !ring-0", className)}
                        onClick={() => setOpen(true)}>
                        <Swap state={selected} effects={["blur", "opacity"]}>
                            {(current) =>
                                current.length === 0 ? (
                                    <p className="text-muted-foreground">None</p>
                                ) : (
                                    <div className="flex items-center gap-1.5">
                                        {current.slice(0, maxVisible - 1).map((cap) => (
                                            <Tooltip key={cap}>
                                                <TooltipTrigger asChild>
                                                    <div className="bg-card rounded p-1 shadow">
                                                        {abilityConfig[cap].icon}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>{abilityConfig[cap].text}</TooltipContent>
                                            </Tooltip>
                                        ))}
                                        {current.length > maxVisible - 1 && (
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <div className="bg-card flex size-6 items-center justify-center rounded text-xs font-medium shadow">
                                                        {current.length === maxVisible
                                                            ? abilityConfig[current[maxVisible - 1]].icon
                                                            : `+${current.length - (maxVisible - 1)}`}
                                                    </div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {current.length === maxVisible
                                                        ? abilityConfig[current[maxVisible - 1]].text
                                                        : current
                                                              .slice(maxVisible - 1)
                                                              .map((cap) => abilityConfig[cap].text)
                                                              .join(", ")}
                                                </TooltipContent>
                                            </Tooltip>
                                        )}
                                    </div>
                                )
                            }
                        </Swap>
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    onInteractOutside={() => open && setOpen(false)}
                    onEscapeKeyDown={() => open && setOpen(false)}
                    className="w-44 shadow-xs transition-all hover:shadow-md"
                    align="start">
                    <div className="space-y-0.5">
                        {abilities.map((ability) => (
                            <DropdownMenuCheckboxItem
                                key={ability}
                                className="cursor-pointer gap-2"
                                checked={selected.includes(ability)}
                                onCheckedChange={() => toggleAbility(ability)}>
                                {abilityConfig[ability].icon}
                                {abilityConfig[ability].text}
                            </DropdownMenuCheckboxItem>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </TooltipProvider>
    );
};
