"use client";

import { useEffect, useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { DotLoader } from "@/components/gsap/dot-loader";

export type DotFlowProps = {
    items: {
        title: string;
        frames: number[][];
        duration?: number;
        repeatCount?: number;
    }[];
};

export const DotFlow = ({ items }: DotFlowProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);
    const [textIndex, setTextIndex] = useState(0);

    const { contextSafe } = useGSAP();

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const newWidth = textRef.current.offsetWidth + 1;

        gsap.to(containerRef.current, {
            width: newWidth,
            duration: 0.5,
            ease: "power2.out",
        });
    }, [textIndex]);

    const next = contextSafe(() => {
        const el = containerRef.current;
        if (!el) return;
        gsap.to(el, {
            y: 20,
            opacity: 0,
            filter: "blur(8px)",
            duration: 0.5,
            ease: "power2.in",
            onComplete: () => {
                setTextIndex((prev) => (prev + 1) % items.length);
                gsap.fromTo(
                    el,
                    { y: -20, opacity: 0, filter: "blur(4px)" },
                    {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        duration: 0.7,
                        ease: "power2.out",
                    },
                );
            },
        });

        setIndex((prev) => (prev + 1) % items.length);
    });

    return (
        <div className="flex items-center gap-4 rounded bg-black px-4 py-3">
            <DotLoader
                frames={items[index].frames}
                onComplete={next}
                className="gap-px"
                repeatCount={items[index].repeatCount ?? 1}
                duration={items[index].duration ?? 150}
                dotClassName="bg-white/15 [&.active]:bg-white size-1"
            />
            <div ref={containerRef} className="relative">
                <div ref={textRef} className="inline-block text-lg font-medium whitespace-nowrap text-white">
                    {items[textIndex].title}
                </div>
            </div>
        </div>
    );
};
