"use client";

import { CSSProperties, ComponentProps, useMemo, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

type EffectType = "type-1" | "type-2" | "type-3" | "type-4";

const effects: Record<EffectType, CSSProperties> = {
    "type-1": {
        filter: "blur(0.3em) contrast(50)",
        backgroundImage: `
    radial-gradient(circle at var(--clientX, 50%) var(--clientY, 50%), transparent, 6em, black 10em),
    radial-gradient(circle, black 0.2em, transparent 1em),
    radial-gradient(circle, black 0.2em, transparent 1em)
  `,
        backgroundSize: "100% 100%, 2em 3em, 2em 3em",
        backgroundPosition: "0 0, 0 0, 1em 1.5em",
    },
    "type-2": {
        filter: "blur(1em) contrast(100)",
        backgroundImage: `
    radial-gradient(circle at var(--clientX, 50%) var(--clientY, 50%), transparent, black 16em),
    repeating-linear-gradient(45deg, black 0 0.4em, transparent 0 3em),
    repeating-linear-gradient(-45deg, black 0 0.4em, transparent 0 3em)
  `,
    },
    "type-3": {
        filter: "blur(0.1em) contrast(10)",
        backgroundImage: `
    radial-gradient(circle at var(--clientX, 50%) var(--clientY, 50%), transparent, black 14em),
    repeating-linear-gradient(0deg, black 0, transparent 0.1em 2.9em, black 3em),
    repeating-linear-gradient(90deg, black 0, transparent 0.1em 2.9em, black 3em)
  `,
        backgroundPosition: `
    0 0, 
    0 calc(var(--clientY, 50%) * -0.2), 
    calc(var(--clientX, 50%) * -0.2) 0
  `,
    },
    "type-4": {
        filter: "blur(0.5em) contrast(10)",
        backgroundImage: `
    radial-gradient(circle at var(--clientX, 50%) var(--clientY, 50%), transparent 6em, black 8em),
    repeating-linear-gradient(60deg, black 0 0.6em, transparent 0 3em)
  `,
    },
};

export type OverlayEffectProps = ComponentProps<"div"> & {
    effect?: EffectType;
};

export const OverlayEffect = ({ effect = "type-2", className, ...props }: OverlayEffectProps) => {
    const elementRef = useRef<HTMLDivElement>(null);

    const styles = useMemo(() => effects[effect], [effect]);
    const proxy = { x: 0, y: 0 };

    useGSAP(() => {
        const element = elementRef.current;
        const parentElement = element?.parentElement;
        if (!element || !parentElement) return;
        parentElement.style.position = "relative";

        const move = (e: MouseEvent) => {
            const rect = parentElement.getBoundingClientRect();
            const targetX = e.clientX - rect.left;
            const targetY = e.clientY - rect.top;

            gsap.to(proxy, {
                x: targetX,
                y: targetY,
                duration: 0.3,
                ease: "power1.out",
                onUpdate: () => {
                    element.style.setProperty("--clientX", `${proxy.x}px`);
                    element.style.setProperty("--clientY", `${proxy.y}px`);
                },
            });
        };

        const enter = () => {
            element.classList.remove("remove");
        };

        const leave = () => {
            element.classList.add("remove");
        };

        parentElement.addEventListener("mousemove", move);
        parentElement.addEventListener("mouseenter", enter);
        parentElement.addEventListener("mouseleave", leave);

        return () => {
            parentElement.removeEventListener("mousemove", move);
            parentElement.removeEventListener("mouseenter", enter);
            parentElement.removeEventListener("mouseleave", leave);
        };
    });

    return (
        <div
            ref={elementRef}
            style={styles}
            className={cn(
                "pointer-events-none absolute inset-0 bg-white opacity-80 mix-blend-darken outline-8 outline-black transition-all duration-1000 [&.remove]:bg-black [&.remove]:opacity-0",
                className,
            )}
            {...props}
        />
    );
};
