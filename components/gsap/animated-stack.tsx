"use client";

import { Children, ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { gsap } from "gsap";

type AnimatedStackProps = {
    children: ReactNode;
    visibleCount?: number;
    gap?: number;
    offset?: number;
    direction?: "up" | "down";
};

export const AnimatedStack = ({
    children,
    visibleCount = 3,
    gap = 8,
    offset = 8,
    direction = "up",
}: AnimatedStackProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<HTMLDivElement[]>([]);
    const prevItemCount = useRef(0);
    const timeoutRef = useRef<NodeJS.Timeout>(null);
    const lastItemHeight = useRef(0);
    const [expanded, setExpanded] = useState(false);

    itemsRef.current = [];

    const registerItemRef = (el: HTMLDivElement) => {
        if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
    };

    const calculatePositions = useCallback(
        (arr: number[]) =>
            arr
                .reduce((acc, val) => [...acc, acc.at(-1)! + val + gap], [0])
                .slice(0, -1)
                .reverse(),
        [gap],
    );

    useEffect(() => {
        const items = itemsRef.current;
        const total = items.length;

        const heights = items.map((el) => el.getBoundingClientRect().height);
        lastItemHeight.current = heights.at(-1) || 0;
        const positions = calculatePositions(heights);

        items.forEach((el, i) => {
            const rev = total - 1 - i;
            let y = 0;
            let opacity = 1,
                scale = 1;

            if (expanded) {
                y = (positions[i] || 0) * (direction == "down" ? 1 : -1);
            } else {
                if (rev >= visibleCount) {
                    y = offset * (visibleCount - 1);
                    opacity = 0;
                } else if (i !== total - 1) {
                    y = rev * offset * (direction == "down" ? 1 : -1);
                    scale = 1 - (total - i) * 0.015;
                }
            }

            const isNew = total > prevItemCount.current && i === total - 1;

            if (isNew) {
                gsap.fromTo(
                    el,
                    { opacity: 0, y: y + 20 * (direction == "down" ? -1 : 1) },
                    { opacity: 1, y, duration: 0.8, ease: "power2.out" },
                );
            } else {
                gsap.to(el, { y, opacity, scaleX: scale, duration: 0.8, ease: "power4.inOut" });
            }
        });
        prevItemCount.current = total;
    }, [children, expanded, visibleCount, direction, calculatePositions, gap, offset]);

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-visible"
            style={{ height: lastItemHeight.current }}
            onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setExpanded(true);
            }}
            onMouseLeave={() => {
                timeoutRef.current = setTimeout(() => setExpanded(false), 1500);
            }}>
            {Children.map(children, (child) => (
                <div ref={registerItemRef} className="absolute w-full">
                    {child}
                </div>
            ))}
        </div>
    );
};
