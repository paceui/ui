"use client";

import { ComponentProps, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type SpringButtonProps = {
    scale?: number;
    shaking?: boolean;
} & ComponentProps<"button">;

export const SpringButton = ({ scale = 0.85, shaking = true, ...props }: SpringButtonProps) => {
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const pressed = useRef(false);

    useGSAP(
        () => {
            const element = buttonRef.current;
            if (!element) return;
            let pressTimeline = gsap.timeline();
            let shakingTimeline = gsap.timeline({ repeat: -1 });

            const press = () => {
                pressed.current = true;
                pressTimeline.pause(0);
                pressTimeline.kill();
                pressTimeline = gsap.timeline();
                shakingTimeline = gsap.timeline({ repeat: -1 });

                pressTimeline.to(element, {
                    scale: scale,
                    duration: 1,
                    ease: "power4.out",
                });

                if (shaking) {
                    pressTimeline.add(shakingTimeline);
                    shakingTimeline
                        .to(element, { x: -1, y: 1, duration: 0.08 })
                        .to(element, { x: 1, y: -1, duration: 0.08 })
                        .to(element, { x: -0.5, y: -0.5, duration: 0.08 })
                        .to(element, { x: 0.5, y: 0.5, duration: 0.08 })
                        .to(element, { x: 0, y: 0, duration: 0.08 });
                }
            };

            const release = () => {
                pressed.current = false;
                if (shakingTimeline) {
                    shakingTimeline.pause(0);
                    shakingTimeline.kill();
                }
                gsap.to(element, {
                    scale: 1,
                    duration: 0.5,
                    ease: "elastic.out(1.4, 0.2)",
                    onComplete: () => {
                        if (!pressed.current && pressTimeline) {
                            pressTimeline.pause(0);
                            pressTimeline.kill();
                        }
                    },
                });
            };

            element.addEventListener("mousedown", press);
            element.addEventListener("touchstart", press);
            element.addEventListener("mouseup", release);
            element.addEventListener("mouseleave", release);
            element.addEventListener("touchend", release);

            return () => {
                element.removeEventListener("mousedown", press);
                element.removeEventListener("touchstart", press);
                element.removeEventListener("mouseup", release);
                element.removeEventListener("mouseleave", release);
                element.removeEventListener("touchend", release);
            };
        },
        { scope: buttonRef },
    );

    return <button {...props} ref={buttonRef} />;
};
