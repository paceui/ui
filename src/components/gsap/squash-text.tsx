"use client";

import { ComponentProps, useId, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomBounce } from "gsap/CustomBounce";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(CustomEase, CustomBounce, SplitText);

type SquashTextProps = {
    repeat?: boolean | number;
} & ComponentProps<"div">;

export const SquashText = ({ repeat = true, ...props }: SquashTextProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const bounceId = useId();
    const squashEase = `squash-${bounceId}`;
    const bounceEase = `bounce-${bounceId}`;

    useGSAP(
        () => {
            if (!wrapperRef.current) return;

            CustomBounce.create(bounceEase, {
                strength: 0.6,
                squash: 1,
                squashID: squashEase,
            });

            const splitText = new SplitText(wrapperRef.current).chars;

            gsap.timeline({
                defaults: { duration: 1.5, stagger: { amount: 0.1, ease: "sine.in" } },
                repeat: repeat === true ? -1 : repeat === false ? 0 : repeat,
            })
                .from(
                    splitText,
                    {
                        duration: 0.6,
                        opacity: 0,
                        ease: "power1.inOut",
                    },
                    0,
                )
                .from(
                    splitText,
                    {
                        y: -100,
                        ease: bounceEase,
                    },
                    0,
                )
                .to(
                    splitText,
                    {
                        scaleX: 1.5,
                        scaleY: 0.8,
                        rotate: () => 15 - 30 * Math.random(),
                        ease: squashEase,
                        transformOrigin: "50% 100%",
                    },
                    0,
                );
        },
        { scope: wrapperRef },
    );

    return <div {...props} ref={wrapperRef} />;
};
