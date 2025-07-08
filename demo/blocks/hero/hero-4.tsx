"use client";

import { LightbulbIcon, ZapIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { RevealOnScroll } from "@/components/gsap/reveal-on-scroll";
import { Swap } from "@/components/gsap/swap";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Title = () => {
    const avatars = ["https://github.com/shadcn.png", "https://github.com/leerob.png", "https://github.com/rauchg.png"];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => current + 1);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <p className="text-center text-2xl leading-normal font-semibold tracking-tight sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
            If you’re starting a project,
            <br />
            Discover
            <span className="mx-3 mb-2 inline-flex items-center gap-2 self-center align-middle md:mx-4 lg:gap-2.5 xl:mx-5 xl:mb-2.5">
                <Swap state={current} effects={["opacity", "blur"]} duration={0.8}>
                    {(state) => (
                        <Avatar className="size-8 md:size-12 xl:size-16">
                            <AvatarImage src={avatars[(state + 2) % 3]} alt="@github" />
                        </Avatar>
                    )}
                </Swap>
                <Swap state={current} effects={["opacity", "blur"]} duration={0.8}>
                    {(state) => (
                        <Avatar className="size-8 md:size-12 xl:size-16">
                            <AvatarImage src={avatars[(state + 1) % 3]} alt="@github" />
                        </Avatar>
                    )}
                </Swap>
                <Swap state={current} effects={["opacity", "blur"]} duration={0.8}>
                    {(state) => (
                        <Avatar className="size-8 md:size-12 xl:size-16">
                            <AvatarImage src={avatars[state % 3]} alt="@github" />
                        </Avatar>
                    )}
                </Swap>
            </span>
            innovations
            <br />
            that redefine how we build
        </p>
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
                    <div className="max-w-4xl">
                        <Title />
                        <RevealOnScroll
                            effect="blurIn"
                            className="mt-8 flex items-center justify-center gap-4 md:gap-6 xl:mt-16"
                            toVars={{ duration: 1, delay: 0.5 }}>
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
                    toVars={{ delay: 0.25 }}
                    scrollTriggerVars={{
                        start: "top 100%",
                    }}>
                    <img src="/images/demo/sidebar-1.jpg" alt="Sidebar" />
                </RevealOnScroll>
                <RevealOnScroll
                    effect="blurIn"
                    toVars={{ delay: 0.5 }}
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
