"use client";

import { ComponentProps, RefObject, useRef, useState } from "react";
import { ClassNameValue } from "tailwind-merge";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

import { cn } from "@/lib/utils";

gsap.registerPlugin(MotionPathPlugin);

type TokenCounterProps = ComponentProps<"p"> & {
    sourceRef: RefObject<HTMLElement | null>;
    token: number;
    flyingClassName?: ClassNameValue;
};

export const TokenCounter = ({ sourceRef, token, className, flyingClassName, ...props }: TokenCounterProps) => {
    const [currentCount, setCurrentCount] = useState(token);
    const counterRef = useRef<HTMLParagraphElement>(null);
    const flyingTokenRef = useRef<HTMLParagraphElement>(null);
    const animationTimeline = useRef<gsap.core.Timeline | null>(null);

    useGSAP(
        () => {
            const tokenDifference = token - currentCount;
            const counterElement = counterRef.current;
            const sourceElement = sourceRef.current;
            const flyingElement = flyingTokenRef.current;

            if (!counterElement || !sourceElement || !flyingElement) return;

            flyingElement.innerText = `${tokenDifference > 0 ? "+" : ""}${tokenDifference}`;

            const buttonRect = sourceElement.getBoundingClientRect();
            const counterRect = counterElement.getBoundingClientRect();
            const flyingRect = flyingElement.getBoundingClientRect();

            const startPosition = {
                x: buttonRect.left + buttonRect.width / 2 - flyingRect.width / 2,
                y: buttonRect.top,
            };
            const endPosition = {
                x: counterRect.left + counterRect.width / 2 - flyingRect.width / 2,
                y: counterRect.top,
            };
            const midPosition = {
                x: (startPosition.x + endPosition.x) / 2,
                y: Math.min(startPosition.y, endPosition.y) - 20,
            };

            gsap.set(flyingElement, {
                x: startPosition.x,
                y: startPosition.y,
                scale: 0,
                opacity: 0,
                clipPath: "circle(0% at 50% 50%)",
            });

            animationTimeline.current?.kill();

            const obj = { value: currentCount };
            const targetValue = token;

            const tl = gsap.timeline();
            animationTimeline.current = tl;

            tl.to(
                flyingElement,
                {
                    duration: 1.5,
                    ease: "power2.inOut",
                    motionPath: {
                        path: [startPosition, midPosition, endPosition],
                        autoRotate: false,
                    },
                },
                0,
            );

            tl.to(
                flyingElement,
                {
                    opacity: 1,
                    scale: 1,
                    clipPath: "circle(100% at 50% 50%)",
                    duration: 0.5,
                    ease: "power1.out",
                },
                0,
            );

            tl.to(
                flyingElement,
                {
                    opacity: 0,
                    scale: 0.5,
                    clipPath: "circle(0% at 50% 50%)",
                    duration: 0.3,
                    ease: "power1.in",
                },
                1.0,
            );

            tl.to(
                obj,
                {
                    value: targetValue,
                    duration: 1,
                    ease: "power1.out",
                    onUpdate: () => setCurrentCount(Math.floor(obj.value)),
                    onComplete: () => setCurrentCount(token),
                },
                1,
            );
        },
        { dependencies: [token] },
    );

    return (
        <>
            <p {...props} ref={counterRef} className={className}>
                {currentCount}
            </p>

            <p
                ref={flyingTokenRef}
                className={cn("pointer-events-none fixed", flyingClassName)}
                style={{
                    top: 0,
                    left: 0,
                    willChange: "transform, opacity, clip-path",
                }}>
                +0
            </p>
        </>
    );
};
