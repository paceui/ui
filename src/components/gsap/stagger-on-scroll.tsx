"use client";

import { ComponentProps, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type EffectType = "scale" | "slideInRight" | "blur" | "random";

type StaggerOnScrollProps = {
    effect?: EffectType;
} & ComponentProps<"div">;

export const StaggerOnScroll = ({ effect = "scale", ...props }: StaggerOnScrollProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useGSAP(
        () => {
            if (!wrapperRef.current || !wrapperRef.current.children.length) return;

            const animationPresets: Record<EffectType, gsap.TweenVars> = {
                scale: {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                },
                slideInRight: {
                    opacity: 0,
                    x: 80,
                    duration: 1,
                    stagger: 0.1,
                    ease: "back.out(1.4)",
                },
                blur: {
                    opacity: 0,
                    filter: "blur(10px)",
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power2.out",
                },

                random: {
                    opacity: 0,
                    x: () => gsap.utils.random(-100, 100),
                    y: () => gsap.utils.random(-100, 100),
                    duration: 0.9,
                    stagger: 0.1,
                    ease: "power2.out",
                },
            };

            gsap.from(wrapperRef.current.children, {
                ...animationPresets[effect],
                scrollTrigger: {
                    trigger: wrapperRef.current,
                    start: "top 85%",
                },
            });
        },
        { scope: wrapperRef, dependencies: [effect] },
    );

    return <div {...props} ref={wrapperRef} />;
};
