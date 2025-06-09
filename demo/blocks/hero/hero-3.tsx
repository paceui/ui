import { BookOpenIcon, RocketIcon } from "lucide-react";
import Link from "next/link";

import { RevealOnScroll } from "@/components/gsap/reveal-on-scroll";
import { RevealText } from "@/components/gsap/reveal-text";
import { Button } from "@/components/ui/button";

const Hero3 = () => {
    return (
        <div className="bg-background">
            <div className="border-b border-dashed">
                <div className="container flex h-15 items-center justify-between">
                    <div className="flex items-center gap-8">
                        <p className="text-lg font-medium">ACME</p>
                        <div className="*:text-muted-foreground *:hover:text-foreground flex items-center gap-6 *:text-sm *:font-medium *:tracking-tight *:transition-all max-md:hidden">
                            <Link href="#">Dashboard</Link>
                            <Link href="#">Workflows</Link>
                            <Link href="#">Analytics</Link>
                            <Link href="#">Integrations</Link>
                            <Link href="#">Settings</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="outline" size="sm" className="shadow-none">
                            Docs
                        </Button>
                        <Button size="sm">Log In</Button>
                    </div>
                </div>
            </div>
            <div className="container pt-12 sm:pt-20 lg:pt-28 2xl:pt-32">
                <div className="flex items-center justify-center">
                    <div className="max-w-3xl">
                        <RevealText
                            type="lines"
                            gsapVars={{
                                filter: "blur(8px)",
                                duration: 1.75,
                                stagger: 0.2,
                                yPercent: 50,
                                ease: "power4.out",
                            }}>
                            <p className="text-center text-2xl leading-[1.15] font-medium tracking-tight md:text-4xl xl:text-5xl 2xl:text-6xl">
                                Dynamic automation dashboard for smooth flow
                            </p>
                        </RevealText>
                        <RevealText
                            type="lines"
                            className="mt-4"
                            gsapVars={{ filter: "blur(8px)", duration: 1.5, stagger: 0.15, delay: 0.25 }}>
                            <p className="text-foreground/70 text-center text-sm leading-snug font-medium md:text-base lg:text-lg">
                                An open-source, scalable base to automate tasks, connect tools seamlessly, and shape
                                systems around your unique workflow.
                            </p>
                        </RevealText>
                        <RevealOnScroll
                            effect="blurIn"
                            className="mt-8 flex items-center justify-center gap-4 md:gap-6"
                            toVars={{ duration: 1, delay: 0.5 }}>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-fit w-32 flex-col items-stretch justify-start gap-0 px-4 py-3 sm:w-40">
                                <div className="flex items-center justify-between opacity-60">
                                    <p className="text-sm/none">Study</p>
                                    <BookOpenIcon />
                                </div>
                                <p className="text-start">Explore Docs</p>
                            </Button>
                            <Button
                                size="lg"
                                className="shadow-primary/10 hover:shadow-primary/20 h-fit w-32 cursor-pointer flex-col items-stretch justify-start gap-0 px-4 py-3 shadow-xl sm:w-40">
                                <div className="flex items-center justify-between opacity-80">
                                    <p className="text-sm/none">Boost</p>
                                    <RocketIcon />
                                </div>
                                <p className="text-start">Start Free</p>
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

export default Hero3;
