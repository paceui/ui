"use client";

import { LightbulbIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { RevealOnScroll } from "@/components/gsap/reveal-on-scroll";
import { RevealText } from "@/components/gsap/reveal-text";
import { Swap } from "@/components/gsap/swap";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Customers = () => {
    const avatars = [
        "https://github.com/vercel.png",
        "https://github.com/shadcn.png",
        "https://github.com/tailwindcss.png",
        "https://github.com/rauchg.png",
        "https://github.com/lucide-icons.png",
        "https://github.com/greensock.png",
        "https://github.com/radix-ui.png",
        "https://github.com/nextjs.png",
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => current + 3);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex -space-x-3.5 *:transition-all *:duration-300 *:hover:-translate-y-1">
            <Swap state={current} effects={["opacity", "blur"]} duration={0.8}>
                {(state) => (
                    <Avatar className="size-8 xl:size-10">
                        <AvatarImage src={avatars[state % avatars.length]} alt="@github" />
                    </Avatar>
                )}
            </Swap>
            <Swap state={current} effects={["opacity", "blur"]} duration={0.8}>
                {(state) => (
                    <Avatar className="size-8 xl:size-10">
                        <AvatarImage src={avatars[(state + 1) % avatars.length]} alt="@github" />
                    </Avatar>
                )}
            </Swap>
            <Swap state={current} effects={["opacity", "blur"]} duration={0.8}>
                {(state) => (
                    <Avatar className="size-8 xl:size-10">
                        <AvatarImage src={avatars[(state + 2) % avatars.length]} alt="@github" />
                    </Avatar>
                )}
            </Swap>
        </div>
    );
};

const Hero4 = () => {
    return (
        <div className="bg-background">
            <div className="border-b border-dashed">
                <div className="container flex h-15 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <p className="text-lg font-medium">ACME</p>
                        <div className="*:text-muted-foreground *:hover:text-foreground flex items-center gap-6 *:text-sm *:font-medium *:tracking-tight *:transition-all max-md:hidden">
                            <Link href="#">Prompt Studio</Link>
                            <Link href="#">Model Hub</Link>
                            <Link href="#">Data Insights</Link>
                            <Link href="#">API Connect</Link>
                            <Link href="#">Account</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="shadow-none">
                            Discover AI Apps
                        </Button>
                        <Button size="sm">Sign In</Button>
                    </div>
                </div>
            </div>
            <div className="container pt-4 sm:pt-8 lg:pt-12 2xl:pt-16">
                <div className="flex items-center justify-center">
                    <div className="max-w-3xl">
                        <RevealText type="lines" gsapVars={{ filter: "blur(8px)", duration: 1.5, stagger: 0.15 }}>
                            <p className="text-center text-2xl leading-tight font-semibold tracking-tight sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
                                Think Smarter. Work Faster. Achieve More.
                            </p>
                        </RevealText>

                        <RevealText
                            type="lines"
                            className="mt-4 lg:mt-6"
                            gsapVars={{ filter: "blur(8px)", duration: 1.5, stagger: 0.15, delay: 0.25 }}>
                            <p className="text-foreground/70 text-center text-sm leading-snug font-medium md:text-base lg:text-lg">
                                From thoughtful UI states to ready-to-use task flows, everything you need to design
                                smarter agentic apps and future-proof your product
                            </p>
                        </RevealText>
                        <RevealOnScroll
                            effect="blurIn"
                            className="mt-6 flex items-center justify-center gap-2 md:mt-8 xl:mt-10"
                            toVars={{ duration: 1, delay: 0.5 }}>
                            <Customers />

                            <div>
                                <p className="font-medium">12k+</p>
                                <p className="text-muted-foreground line-clamp-1 text-sm leading-none max-sm:text-xs">
                                    Trusted by teams and businesses
                                </p>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll
                            effect="blurIn"
                            className="mt-8 flex items-center justify-center gap-4 md:gap-6 xl:mt-12"
                            toVars={{ duration: 1, delay: 0.75 }}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-fit w-32 flex-col items-stretch justify-start gap-0 px-4 py-3 shadow-none sm:w-40">
                                <div className="flex items-center justify-between opacity-60">
                                    <p className="text-sm/none">Discover</p>
                                    <LightbulbIcon />
                                </div>
                                <p className="text-start">AI Marketplace</p>
                            </Button>
                            <Button
                                size="lg"
                                className="shadow-primary/10 hover:shadow-primary/20 h-fit w-32 cursor-pointer flex-col items-stretch justify-start gap-0 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 text-white shadow-xl transition-transform duration-200 ease-in-out hover:scale-105 sm:w-40">
                                <div className="flex items-center justify-between opacity-80">
                                    <p className="text-sm/none">Launch</p>
                                    <ZapIcon />
                                </div>
                                <p className="text-start">AI App</p>
                            </Button>
                        </RevealOnScroll>
                    </div>
                </div>
            </div>
            <div className="relative flex h-172 items-center justify-center overflow-hidden pt-36 [perspective:400px] sm:pt-44 xl:pt-52">
                <RevealOnScroll
                    effect="blurIn"
                    className="absolute start-1/2 top-64 -z-2 h-180 w-220 -translate-x-1/2 skew-x-14 -skew-y-3 rounded border"
                    toVars={{ delay: 1 }}
                    scrollTriggerVars={{
                        start: "top 100%",
                    }}>
                    <img src="/images/demo/sidebar-1.jpg" alt="Sidebar" />
                </RevealOnScroll>
                <RevealOnScroll
                    effect="blurIn"
                    toVars={{ delay: 1.25 }}
                    className="bg-background absolute start-3/5 top-20 -z-1 h-180 w-240 -translate-x-1/2 skew-x-14 -skew-y-3 rounded border shadow-lg sm:top-28 xl:top-36">
                    <img src="/images/demo/hero-1.jpg" alt="Hero" />
                </RevealOnScroll>
                <div className="to-background absolute inset-x-0 bottom-0 h-32 bg-linear-to-b from-transparent sm:h-48"></div>
            </div>
            <div className="bg-background text-muted-foreground flex h-44 items-center justify-center border-t">
                Add other sections
            </div>
        </div>
    );
};

export default Hero4;
