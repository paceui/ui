"use client";

import { ComponentProps, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type EffectType = "fadeIn" | "slideInRight" | "zoomIn" | "blurIn";
type RevealOnScrollProps = {
    effect?: EffectType;
    scrollTriggerVars?: ScrollTrigger.Vars;
    fromVars?: gsap.TweenVars;
    toVars?: gsap.TweenVars;
} & ComponentProps<"div">;

export const RevealOnScroll = ({
    effect = "fadeIn",
    scrollTriggerVars,
    fromVars,
    toVars,
    ...props
}: RevealOnScrollProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<gsap.core.Tween | null>(null);

    useGSAP(
        () => {
            const el = wrapperRef.current;
            if (!el) return;

            // Cleanup previous animation
            animationRef.current?.scrollTrigger?.kill();
            animationRef.current?.kill();
            gsap.set(el, { clearProps: "all" });

            const scrollTrigger: ScrollTrigger.Vars = {
                trigger: el,
                start: "top 80%",
                toggleActions: "play pause play reverse",
                ...scrollTriggerVars,
            };

            const presets: Record<EffectType, { from: gsap.TweenVars; to: gsap.TweenVars }> = {
                fadeIn: {
                    from: { opacity: 0, y: 50 },
                    to: { opacity: 1, y: 0, duration: 1 },
                },
                slideInRight: {
                    from: { x: 100, opacity: 0 },
                    to: { x: 0, opacity: 1, duration: 1 },
                },
                zoomIn: {
                    from: { scale: 0.8, opacity: 0 },
                    to: { scale: 1, opacity: 1, duration: 1 },
                },
                blurIn: {
                    from: { y: 30, opacity: 0, filter: "blur(10px)" },
                    to: { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
                },
            };

            const preset = presets[effect] || presets.fadeIn;
            const fromVarsFinal = { ...preset.from, ...fromVars };
            const toVarsFinal = { ...preset.to, scrollTrigger, ...toVars };

            animationRef.current = gsap.fromTo(el, fromVarsFinal, toVarsFinal);

            return () => {
                animationRef.current?.scrollTrigger?.kill();
                animationRef.current?.kill();
            };
        },
        { scope: wrapperRef, dependencies: [effect, scrollTriggerVars, fromVars, toVars] },
    );

    return <div {...props} ref={wrapperRef} />;
};
