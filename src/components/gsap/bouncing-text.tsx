"use client";

import { ComponentProps, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

type BouncingTextProps = {
    repeat?: boolean | number;
} & ComponentProps<"p">;

export const BouncingText = ({ repeat = true, ...props }: BouncingTextProps) => {
    const textRef = useRef<HTMLParagraphElement | null>(null);

    useGSAP(
        () => {
            if (!textRef.current) return;
            let bounceCount = 0;
            const bounceChars = new SplitText(textRef.current, { type: "words,chars" }).chars;
            bounceChars.forEach((el) => {
                const tl = gsap.timeline({ repeat: repeat === true ? -1 : repeat === false ? 0 : repeat });
                tl.to(el, {
                    duration: 0,
                    y: -200,
                });
                tl.to(el, {
                    duration: 2,
                    y: 0,
                    rotate: -10,
                    ease: "bounce",
                });
                tl.to(el, {
                    duration: 1,
                    y: 0,
                    rotate: 0,
                    ease: "bounce",
                });
                tl.to(el, {
                    duration: 2,
                    y: -200,
                    rotate: 0,
                    delay: 1,
                    ease: "elastic",
                });
                tl.delay(bounceCount / 8);
                bounceCount++;
            });
        },
        { scope: textRef },
    );

    return <p {...props} ref={textRef} />;
};
