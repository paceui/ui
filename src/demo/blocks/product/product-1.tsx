"use client";

import { ChevronDownIcon, RulerDimensionLineIcon, ShoppingCartIcon } from "lucide-react";
import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { SpringButton } from "@/components/gsap/spring-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const Product1 = () => {
    const [infoVisible, setInfoVisible] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);

    const { contextSafe } = useGSAP();

    const toggleProductInfo = contextSafe(() => {
        const content = contentRef.current;
        if (!content) return;

        const showContent = () => {
            gsap.set(content, {
                display: "block",
                height: "auto",
            });
            const height = content.offsetHeight;
            gsap.fromTo(
                content,
                {
                    height: 0,
                    opacity: 0,
                    filter: "blur(4px)",
                },
                {
                    height,
                    opacity: 1,
                    filter: "blur(0px)",
                    duration: 0.9,
                    ease: "expo.out",
                },
            );
        };

        const hideContent = () => {
            gsap.to(content, {
                height: 0,
                opacity: 0,
                filter: "blur(4px)",
                duration: 0.6,
                ease: "circ.in",
                onComplete: () => {
                    gsap.set(content, { display: "none" });
                },
            });
        };

        if (infoVisible) {
            hideContent();
        } else {
            showContent();
        }
        setInfoVisible(!infoVisible);
    });

    return (
        <div className="bg-background container py-4 sm:py-8 lg:py-16">
            <div className="flex flex-col items-center text-center">
                <p className="text-xl font-medium sm:text-2xl lg:text-3xl">Smart Product Card</p>
                <p className="text-muted-foreground mt-1 max-w-lg text-center max-sm:text-sm">
                    Expand to view size options, color variants, and purchase actions in a compact layout
                </p>
            </div>
            <div className="mt-6 flex items-center justify-center lg:mt-12">
                <div className="group w-80 cursor-pointer">
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1589810635657-232948472d98?w=1000"
                            alt="Shirt"
                            className="h-88 w-full rounded-md object-cover"
                        />
                        <div
                            className={cn(
                                "bg-background/50 absolute inset-x-2 bottom-2 rounded-md backdrop-blur-xs transition-all",
                                {
                                    "bg-background/80": infoVisible,
                                },
                            )}>
                            <div
                                className={cn(
                                    "hover:bg-background/70 flex items-start justify-between transition-all duration-500",
                                    {
                                        "rounded-t-md px-3 py-1.5": infoVisible,
                                        "rounded-md px-2.5 py-1": !infoVisible,
                                    },
                                )}
                                role="button"
                                aria-expanded={infoVisible}
                                tabIndex={0}
                                onClick={toggleProductInfo}>
                                <div>
                                    <p
                                        className={cn(
                                            "mt-1 line-clamp-1 leading-none font-medium transition-all duration-500 max-sm:text-sm",
                                            {
                                                "text-lg/none": infoVisible,
                                            },
                                        )}>
                                        Classic White Tee
                                    </p>
                                    <p>
                                        <sup className="text-muted-foreground">$</sup>
                                        <span
                                            className={cn("text-xl font-medium transition-all duration-500", {
                                                "text-2xl": infoVisible,
                                            })}>
                                            29
                                        </span>
                                    </p>
                                </div>
                                <div className="bg-background mt-1 rounded-full p-0.5">
                                    <ChevronDownIcon
                                        className={cn("text-muted-foreground size-4 transition-all duration-500", {
                                            "rotate-180": infoVisible,
                                        })}
                                    />
                                </div>
                            </div>
                            <div ref={contentRef} className="hidden overflow-hidden">
                                <div className="p-3 pt-0">
                                    <div className="flex items-center justify-between">
                                        <p className="text-foreground/60 font-medium">Sizes</p>
                                        <div className="text-foreground/80 flex items-center gap-1.5 text-xs">
                                            <RulerDimensionLineIcon className="size-4" />
                                            <p>Chart</p>
                                        </div>
                                    </div>
                                    <div className="mt-1 flex items-center gap-1.5">
                                        <div className="rounded border px-1 py-px text-sm">Small</div>
                                        <div className="rounded border px-1 py-px text-sm">Medium</div>
                                        <div className="bg-foreground/10 rounded border px-1 py-px text-sm opacity-60 grayscale-50">
                                            Large
                                        </div>
                                    </div>
                                    <div className="mt-3 flex items-center justify-between">
                                        <p className="text-foreground/60 font-medium">Colors</p>
                                        <p className="text-foreground/80 text-xs hover:underline">Custom color?</p>
                                    </div>
                                    <TooltipProvider>
                                        <div className="mt-1 flex items-center gap-1.5">
                                            <Tooltip>
                                                <TooltipTrigger className="cursor-pointer" asChild>
                                                    <div className="size-5 rounded-full bg-red-500 shadow-xs"></div>
                                                </TooltipTrigger>
                                                <TooltipContent>Red</TooltipContent>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger className="cursor-pointer" asChild>
                                                    <div className="size-5 rounded-full bg-teal-500 shadow-xs"></div>
                                                </TooltipTrigger>
                                                <TooltipContent>Teal</TooltipContent>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger className="cursor-pointer" asChild>
                                                    <div className="size-5 rounded-full bg-blue-400 opacity-40 shadow-xs grayscale-25"></div>
                                                </TooltipTrigger>
                                                <TooltipContent>Blue (Not available)</TooltipContent>
                                            </Tooltip>

                                            <Tooltip>
                                                <TooltipTrigger className="cursor-pointer" asChild>
                                                    <div className="size-5 rounded-full bg-pink-500 shadow-xs"></div>
                                                </TooltipTrigger>
                                                <TooltipContent>Pink</TooltipContent>
                                            </Tooltip>
                                        </div>
                                    </TooltipProvider>
                                    <div className="mt-3 flex items-end justify-between">
                                        <p className="text-muted-foreground text-sm max-sm:text-xs">
                                            Available in stock
                                        </p>
                                        <SpringButton
                                            scale={0.95}
                                            shaking={false}
                                            className="bg-primary text-primary-foreground flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm font-medium">
                                            <ShoppingCartIcon className="size-4" />
                                            Add to cart
                                        </SpringButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product1;
