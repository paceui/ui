"use client";

import { ComponentProps, ReactNode, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

type MouseWaveTextProps = {
    children: ReactNode;
    className?: string;
    shadowClassName?: string;
    textClassName?: string;
    wrapperTweenVars?: gsap.TweenVars;
} & ComponentProps<"div">;

export const MouseWaveText = ({
    children,
    textClassName,
    className,
    shadowClassName,
    wrapperTweenVars,
    ...props
}: MouseWaveTextProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const shadowRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(
        () => {
            if (!wrapperRef.current || !shadowRef.current || !textRef.current) return;
            const textContent = shadowRef.current.textContent;
            const bb = shadowRef.current.getBoundingClientRect();

            for (let i = 0; i <= bb.width * 0.55; i++) {
                const div = document.createElement("div");
                textRef.current.append(div);
                gsap.set(div, {
                    position: "absolute",
                    width: 4,
                    height: bb.height,
                    x: i * 2,
                    y: -bb.height,
                    textIndent: -i * 2,
                    overflow: "hidden",
                    textContent: textContent,
                });
            }

            if (wrapperTweenVars) gsap.set(wrapperRef.current, wrapperTweenVars);

            const tl = gsap
                .timeline({
                    paused: true,
                    defaults: { duration: 0.25, ease: "power3.inOut", yoyoEase: "sine.inOut" },
                })
                .to(textRef.current.children, {
                    y: "-=30",
                    stagger: {
                        amount: 1,
                        yoyo: true,
                        repeat: 1,
                        ease: "none",
                    },
                });

            gsap.timeline()
                .fromTo(tl, { progress: 0.9 }, { duration: 1.5, progress: 0.1, ease: "power2.inOut" })
                .to(tl, { duration: 4, progress: 0.4, ease: "elastic.out(0.8)" });

            const onMove = (e: MouseEvent) => {
                const xp = e.x / window.innerWidth;
                gsap.to(tl, { progress: xp, overwrite: true });
                gsap.to(wrapperRef.current, {
                    x: gsap.utils.mapRange(0, 1, 15, -15, xp),
                    y: gsap.utils.mapRange(0, 1, -15, 15, xp),
                });
            };

            const onMouseDown = () => {
                gsap.timeline({ defaults: { duration: 0.2, overwrite: "auto" } })
                    .to(textRef.current, {
                        y: -25,
                    })
                    .to(
                        shadowRef.current,
                        {
                            filter: "blur(2px)",
                            opacity: 0.85,
                            scale: 0.96,
                            transformOrigin: "45px 99px",
                        },
                        0,
                    );
            };

            const onMouseUp = () => {
                gsap.timeline({ defaults: { ease: "bounce" } })
                    .to(textRef.current, { y: 0 })
                    .to(
                        shadowRef.current,
                        {
                            filter: "blur(0px)",
                            opacity: 1,
                            scale: 1,
                        },
                        0,
                    );
            };

            window.addEventListener("pointermove", onMove);
            window.addEventListener("mousedown", onMouseDown);
            window.addEventListener("mouseup", onMouseUp);

            return () => {
                window.removeEventListener("pointermove", onMove);
                window.removeEventListener("mousedown", onMouseDown);
                window.removeEventListener("mouseup", onMouseUp);
            };
        },
        { scope: wrapperRef },
    );

    return (
        <div {...props} ref={wrapperRef} className={cn("whitespace-nowrap", className)}>
            <p ref={shadowRef} className={shadowClassName}>
                {children}
            </p>
            <p ref={textRef} aria-disabled="true" className={textClassName} />
        </div>
    );
};
