"use client";

import { ComponentProps, useCallback, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type DotLoaderProps = {
    frames: number[][];
    dotClassName?: string;
    isPlaying?: boolean;
    duration?: number;
} & ComponentProps<"div">;

export const DotLoader = ({
    frames,
    isPlaying = true,
    duration = 100,
    dotClassName,
    className,
    ...props
}: DotLoaderProps) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const currentIndex = useRef(0);
    const interval = useRef<NodeJS.Timeout>(null);

    const setDot = useCallback(
        (dots: HTMLDivElement[], active: number) => {
            dots.forEach((dot, index) => {
                dots[index].classList.toggle("active", frames[active].includes(index));

                // if (frames[active].includes(index)) {
                //     dot.setAttribute("data-active", "");
                // } else {
                //     dot.removeAttribute("data-active");
                // }
            });
        },
        [frames],
    );

    useEffect(() => {
        if (isPlaying) {
            if (currentIndex.current >= frames.length) currentIndex.current = 0;
            const dotEs = gridRef.current?.children;
            if (!dotEs) return;
            const dots = Array.from(dotEs) as HTMLDivElement[];
            interval.current = setInterval(() => {
                setDot(dots, currentIndex.current);
                currentIndex.current = (currentIndex.current + 1) % frames.length;
            }, duration);
        } else {
            if (interval.current) clearInterval(interval.current);
        }

        return () => {
            if (interval.current) clearInterval(interval.current);
        };
    }, [frames, isPlaying, setDot, duration]);

    return (
        <div {...props} ref={gridRef} className={cn("grid w-fit grid-cols-7 gap-0.5", className)}>
            {Array.from({ length: 49 }).map((_, i) => (
                <div key={i} className={cn("h-1.5 w-1.5 rounded-sm", dotClassName)} />
            ))}
        </div>
    );
};
