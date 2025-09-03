"use client";

import { ComponentProps, useEffect, useRef } from "react";

import gsap from "gsap";

import { cn } from "@/lib/utils";

type LayeredStackProps = ComponentProps<"div"> & {};

export const LayeredStack = ({ children, className, ...props }: LayeredStackProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const stackCards = () => {
        const container = containerRef.current;
        if (!container) return;

        const cards = Array.from(container.children) as HTMLElement[];

        cards.forEach((card, i) => {
            const left = card.offsetLeft;
            const top = card.offsetTop;
            const width = card.offsetWidth;
            const height = card.offsetHeight;

            const offsetX = container.clientWidth / 2 - width / 2 - left;
            const offsetY = container.clientHeight / 2 - height / 2 - top;

            gsap.to(card, {
                x: offsetX,
                y: offsetY,
                rotate: "random(-15,15)",
                zIndex: 100 - i,
                duration: 0.5,
                ease: "power2.out",
                overwrite: true,
            });
        });
    };

    const resetCards = () => {
        const container = containerRef.current;
        if (!container) return;

        const cards = Array.from(container.children);

        gsap.to(cards, {
            x: 0,
            y: 0,
            zIndex: 1,
            duration: 0.6,
            rotate: 0,
            ease: "power3.out",
            stagger: {
                amount: 0.05,
                from: "start",
            },
            overwrite: true,
        });
    };

    useEffect(() => {
        stackCards();
    }, []);

    return (
        <div
            ref={containerRef}
            onMouseEnter={resetCards}
            onMouseLeave={stackCards}
            className={cn("relative", className)}
            {...props}>
            {children}
        </div>
    );
};
