"use client";

import { BrainIcon, CodeIcon, EyeIcon, FileSearch2Icon, SpeechIcon, Wand2Icon } from "lucide-react";
import { ComponentProps, ReactNode, useMemo, useState } from "react";

import { Swap } from "@/components/gsap/swap";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

type ModalCapability = "vision" | "thinking" | "code" | "speech" | "search" | "creativity";

export type ModalOption = {
    value: string;
    image: string;
    name: string;
    darkInvertImage?: boolean;
    description: string;
    capabilities: ModalCapability[];
};

type ModalSelectorProps = ComponentProps<typeof Button> & {
    showCapabilities?: boolean;
    showDescription?: boolean;
};

const modals: ModalOption[] = [
    {
        value: "openai-gpt-4o",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg",
        name: "gpt-4o",
        darkInvertImage: true,
        description: "High-speed language understanding and generation",
        capabilities: ["vision", "thinking", "code", "speech"],
    },
    {
        value: "google-gemini-1.5",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini-color.svg",
        name: "gemini-1.5",
        description: "Advanced multimodal processing for text and images",
        capabilities: ["vision", "thinking", "speech"],
    },
    {
        value: "anthropic-claude-3-opus",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg",
        name: "claude-3-opus",
        description: "Deep contextual reasoning for complex tasks",
        capabilities: ["thinking", "code"],
    },
    {
        value: "xai-grok-1",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/grok.svg",
        name: "grok-1",
        darkInvertImage: true,
        description: "Conversational AI from xAI for real-time interactions",
        capabilities: ["thinking", "speech"],
    },
    {
        value: "qwen-1.5",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/qwen-color.svg",
        name: "qwen-1.5",
        description: "Efficient large language model by Alibaba Cloud",
        capabilities: ["thinking", "code"],
    },
    {
        value: "openai-gpt-4-turbo",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg",
        name: "gpt-4-turbo",
        darkInvertImage: true,
        description: "Optimized for fast and cost-effective workflows",
        capabilities: ["thinking", "code", "speech"],
    },
    {
        value: "google-gemini-ultra",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/gemini-color.svg",
        name: "gemini-ultra",
        description: "Cutting-edge reasoning and creativity features",
        capabilities: ["vision", "thinking", "creativity"],
    },
    {
        value: "deepseek-llm",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/deepseek-color.svg",
        name: "deepseek-llm",
        description: "Multilingual model for global use cases",
        capabilities: ["thinking", "code"],
    },
    {
        value: "anthropic-claude-3-sonnet",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg",
        name: "claude-3-sonnet",
        description: "Balanced model for efficiency and safety",
        capabilities: ["thinking"],
    },
    {
        value: "stability-sdxl",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/stability-color.svg",
        name: "stability-sdxl",
        description: "Text-to-image generation at photorealistic quality",
        capabilities: ["vision", "creativity"],
    },
    {
        value: "microsoft-copilot",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/microsoft-color.svg",
        name: "copilot",
        description: "Integrated productivity assistant from Microsoft",
        capabilities: ["thinking", "code", "speech"],
    },
    {
        value: "midjourney-v6",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/midjourney.svg",
        name: "midjourney-v6",
        darkInvertImage: true,
        description: "AI art generation for creative visuals",
        capabilities: ["vision", "creativity"],
    },
    {
        value: "perplexity-answers",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/perplexity-color.svg",
        name: "perplexity-answers",
        description: "AI-powered search and question answering",
        capabilities: ["search", "thinking"],
    },
    {
        value: "cohere-command-r",
        image: "https://unpkg.com/@lobehub/icons-static-svg@latest/icons/cohere-color.svg",
        name: "command-r",
        description: "Powerful retrieval-augmented generation model",
        capabilities: ["thinking", "search"],
    },
];

const CapabilityBadge = ({ capability }: { capability: ModalCapability }) => {
    const styles: Record<ModalCapability, { color: string; text: string; icon: ReactNode }> = {
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

    const { color, text, icon } = styles[capability];

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <div className={cn("rounded p-1", color)}>{icon}</div>
            </TooltipTrigger>
            <TooltipContent>
                <p>{text}</p>
            </TooltipContent>
        </Tooltip>
    );
};

export const ModalSelector = ({
    showDescription = true,
    showCapabilities = true,
    variant = "outline",
    className,
    ...props
}: ModalSelectorProps) => {
    const [selectedModal, setSelectedModal] = useState(modals[0].value);

    const selectedModalItem = useMemo(() => {
        return modals.find((item) => item.value === selectedModal) ?? modals[0];
    }, [selectedModal]);

    return (
        <TooltipProvider>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        {...props}
                        variant={variant}
                        className={cn("cursor-pointer overflow-hidden shadow-none select-none", className)}>
                        <Swap state={selectedModalItem} effects={["blur", "slideDown", "opacity"]}>
                            {(state) => (
                                <div className="flex items-center gap-2.5">
                                    <img
                                        src={state.image}
                                        className={cn("min-w-4.5", { "dark:invert": state.darkInvertImage })}
                                        alt={`${state.name} logo`}
                                    />
                                    <p className="text-base overflow-ellipsis">{state.name}</p>
                                    {showCapabilities && (
                                        <div className="flex items-center gap-1.5">
                                            {state.capabilities.map((capability) => (
                                                <CapabilityBadge capability={capability} key={capability} />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </Swap>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80 shadow-xs transition-all hover:shadow-md" align="start">
                    <ScrollArea className="h-80">
                        <div className="space-y-0.5">
                            {modals.map((item) => (
                                <DropdownMenuItem
                                    key={item.value}
                                    onClick={() => setSelectedModal(item.value)}
                                    className={cn("group relative cursor-pointer gap-3", {
                                        "bg-accent": selectedModal === item.value,
                                    })}>
                                    <img
                                        src={item.image}
                                        alt={`${item.name} logo`}
                                        className={cn("size-6", {
                                            "dark:invert": item.darkInvertImage,
                                        })}
                                    />
                                    <div className="grow">
                                        <div className="flex items-center gap-2">
                                            <p className="grow text-base/none font-medium">{item.name}</p>
                                        </div>
                                        {showDescription && (
                                            <p className="text-muted-foreground mt-0.5 line-clamp-1">
                                                {item.description}
                                            </p>
                                        )}
                                    </div>
                                    {showCapabilities && (
                                        <div className="absolute end-0 flex translate-x-5 scale-90 items-center gap-1.5 rounded bg-inherit px-2.5 py-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100">
                                            {item.capabilities.map((capability) => (
                                                <CapabilityBadge capability={capability} key={capability} />
                                            ))}
                                        </div>
                                    )}
                                </DropdownMenuItem>
                            ))}
                        </div>
                    </ScrollArea>
                </DropdownMenuContent>
            </DropdownMenu>
        </TooltipProvider>
    );
};
