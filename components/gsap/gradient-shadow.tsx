"use client";

import { ReactNode, useEffect, useRef } from "react";

import { gsap } from "gsap";

type GradientShadowProps = {
    colors?: string[];
    children: ReactNode;
};

export const GradientShadow = ({
    colors = ["#3b82f6", "#8b5cf6", "#ec4899", "#f97316"],
    children,
}: GradientShadowProps) => {
    const shadowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!shadowRef.current) return;
        gsap.to(shadowRef.current, {
            backgroundPosition: "200% 0%",
            duration: 6,
            ease: "linear",
            repeat: -1,
        });
    }, []);

    const gradient = `linear-gradient(90deg, ${colors.join(", ")}, ${colors[0]})`;

    return (
        <div className="group relative inline-block">
            <div
                ref={shadowRef}
                className="pointer-events-none absolute -inset-1 -z-10 scale-0 rounded-xl opacity-0 blur-sm transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
                style={{
                    backgroundImage: gradient,
                    backgroundSize: "300% 300%",
                    backgroundPosition: "0% 0%",
                    willChange: "background-position",
                }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
};
