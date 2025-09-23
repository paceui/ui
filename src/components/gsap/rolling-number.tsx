"use client";

import { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { cn } from "@/lib/utils";

type RollingDigitProps = {
    digit: number;
    duration?: number;
    height?: number;
};

const RollingDigit = ({ digit, duration = 1, height = 20 }: RollingDigitProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.to(containerRef.current, {
                y: -height * (digit + 1),
                duration: duration,
                ease: "power4.out",
            });
        },
        { dependencies: [digit] },
    );

    return (
        <div ref={containerRef} className="text-center" style={{ transform: `translateY(-${height}px)` }}>
            <span style={{ height: height }} className="block">
                9
            </span>
            {[...Array(10).keys()].map((num) => (
                <span key={num} style={{ height: height }} className="block">
                    {num}
                </span>
            ))}
            <span style={{ height: height }} className="block">
                0
            </span>
        </div>
    );
};

type RollingNumberProps = {
    targetNumber: number | string;
    duration?: number;
    height?: number;
    onComplete?: () => void;
    className?: string;
};

export const RollingNumber = ({ targetNumber, duration = 1, onComplete, height, className }: RollingNumberProps) => {
    const digits = String(targetNumber).split("");

    useEffect(() => {
        const interval = setTimeout(() => {
            onComplete?.();
        }, duration * 1000);
        return () => clearTimeout(interval);
    }, [duration, onComplete]);

    return (
        <div className={cn("inline-flex", className)}>
            {digits.map((digit, i) => (
                <RollingDigit key={i} digit={Number(digit)} duration={duration} height={height} />
            ))}
        </div>
    );
};
