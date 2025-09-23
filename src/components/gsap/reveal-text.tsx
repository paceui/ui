"use client";

import { ComponentProps, useMemo, useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

type SplitType = "chars" | "words" | "lines";

type RevealTextProps = {
    type?: SplitType;
    gsapVars?: gsap.TweenVars;
    splitTextVars?: Partial<SplitText.Vars>;
} & ComponentProps<"div">;

const defaultGsapVars: Record<SplitType, gsap.TweenVars> = {
    chars: {
        x: 150,
        opacity: 0,
        duration: 0.7,
        ease: "power3",
        stagger: 0.05,
    },
    words: {
        x: 150,
        opacity: 0,
        ease: "power3",
        duration: 1,
        stagger: 0.2,
        y: -100,
        rotation: "random(-80, 80)",
    },
    lines: {
        duration: 1,
        yPercent: 100,
        opacity: 0,
        stagger: 0.4,
        ease: "expo.out",
    },
};

export const RevealText = ({ type = "chars", gsapVars = {}, splitTextVars = {}, ...props }: RevealTextProps) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    const splitType = useMemo(
        () =>
            ({
                chars: "chars,words,lines",
                words: "words,lines",
                lines: "lines",
            })[type],
        [type],
    );

    useGSAP(
        () => {
            const element = wrapperRef.current;
            if (!element) return;

            const splitText = SplitText.create(element, { type: splitType, ...splitTextVars });
            gsap.from(splitText[type], {
                ...defaultGsapVars[type],
                ...gsapVars,
            });
        },
        { scope: wrapperRef },
    );

    return <div {...props} ref={wrapperRef} />;
};
