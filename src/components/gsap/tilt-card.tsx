"use client";

import { ComponentProps, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

type TiltCardProps = {
    maxTilt?: number;
    highlightClassName?: string;
    wrapperClassName?: string;
} & ComponentProps<"div">;

export const TiltCard = ({
    children,
    highlightClassName,
    className,
    wrapperClassName,
    maxTilt = 10,
    ...props
}: TiltCardProps) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const cardRef = useRef<HTMLDivElement | null>(null);
    const highlightRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            const container = containerRef.current;
            const card = cardRef.current;
            const highlight = highlightRef.current;
            if (!container || !card || !highlight) return;

            const handleMouseLeave = () => {
                gsap.to(card, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.6,
                    ease: "power3.out",
                });
            };

            const handleMouseMove = (e: MouseEvent) => {
                const bounds = card.getBoundingClientRect();
                const offsetX = e.clientX - bounds.left;
                const offsetY = e.clientY - bounds.top;
                const centerX = bounds.width / 2;
                const centerY = bounds.height / 2;
                const percentX = (offsetX - centerX) / centerX;
                const percentY = (offsetY - centerY) / centerY;

                gsap.to(card, {
                    rotateY: percentX * maxTilt,
                    rotateX: -percentY * maxTilt,
                    duration: 0.3,
                    ease: "power3.out",
                });
                gsap.to(highlight, {
                    left: bounds.width - offsetX + "px",
                    top: bounds.height - offsetY + "px",
                    duration: 0.3,
                    ease: "power3.out",
                });
            };

            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("mouseleave", handleMouseLeave);

            return () => {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("mouseleave", handleMouseLeave);
            };
        },
        { scope: containerRef },
    );

    return (
        <div {...props} ref={containerRef} className={cn("relative perspective-[1000px]", wrapperClassName)}>
            <div ref={cardRef} className={className}>
                {children}
            </div>
            <div
                ref={highlightRef}
                className={cn(
                    "absolute top-0 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full blur-[28px] select-none",
                    highlightClassName,
                )}
            />
        </div>
    );
};
