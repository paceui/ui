import { RocketIcon, TargetIcon } from "lucide-react";

import { RevealText } from "@/components/gsap/reveal-text";
import { SpringButton } from "@/components/gsap/spring-button";
import { TextFallButton } from "@/components/gsap/text-fall-button";

const Hero2 = () => {
    return (
        <div className="bg-background overflow-hidden pt-8 sm:pt-16 lg:pt-24">
            <div className="container">
                <div className="flex flex-col items-center">
                    <div className="bg-muted flex items-center gap-1.5 rounded-full py-1 ps-1 pe-3 text-sm">
                        <div className="bg-primary text-primary-foreground rounded-full p-1">
                            <TargetIcon className="size-4" />
                        </div>
                        <p>Built for focused momentum</p>
                    </div>

                    <RevealText className="mt-3 text-center text-2xl leading-[1.25] font-semibold text-balance sm:text-3xl lg:text-4xl">
                        Clear Goals. Sharp Tools. Fast Progress.
                    </RevealText>
                    <p className="text-foreground/80 mt-3 max-w-lg text-center max-sm:text-sm lg:mt-5">
                        Create, organize, and move forward with tools designed for clarity, flow, and real results
                        across your everyday work.
                    </p>
                    <div className="mt-6 flex items-center gap-3 max-sm:flex-col sm:mt-8">
                        <SpringButton
                            shaking={false}
                            className="flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 font-medium shadow-none">
                            <RocketIcon className="size-4.5" />
                            How It Works
                        </SpringButton>
                        <TextFallButton className="bg-primary text-primary-foreground cursor-pointer overflow-hidden rounded-full py-2 ps-4 pe-5 font-medium">
                            Explore Now
                        </TextFallButton>
                    </div>
                    <div className="mt-6 flex items-center gap-2 sm:mt-8">
                        <div className="flex -space-x-4 *:transition-all *:duration-300 *:hover:-translate-y-2">
                            <img
                                src="/images/avatars/8.jpg"
                                alt="Avatar"
                                className="border-background size-10 rounded-full border-4 sm:size-12"
                            />
                            <img
                                src="/images/avatars/5.jpg"
                                alt="Avatar"
                                className="border-background size-10 rounded-full border-4 sm:size-12"
                            />
                            <img
                                src="/images/avatars/4.jpg"
                                alt="Avatar"
                                className="border-background size-10 rounded-full border-4 sm:size-12"
                            />
                        </div>
                        <div>
                            <p className="font-medium">28k+</p>
                            <p className="text-muted-foreground text-sm leading-none max-sm:text-xs">
                                Professionals using it every day
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex justify-center sm:mt-8 lg:mt-12">
                    <img
                        src="https://images.unsplash.com/photo-1674027392842-29f8354e236c?w=1000"
                        className="h-90 w-full max-w-4xl rounded-md object-cover shadow-xl sm:h-100 lg:h-120"
                        alt="Hero Image"
                    />
                </div>
            </div>

            <div className="bg-foreground/2 -mt-24 pt-36 pb-24">
                <p className="text-foreground/70 text-center text-lg font-medium">Used by top companies</p>
                <div className="*: container mt-4 flex items-center justify-around gap-5 *:opacity-40 *:brightness-0 *:transition-all *:duration-300 *:hover:opacity-100 *:hover:brightness-100 lg:mt-8 *:not-hover:dark:invert">
                    <img src="/images/companies/loom.png" className="h-8" alt="Company Image" />
                    <img src="/images/companies/notion.png" className="h-9" alt="Company Image" />
                    <img src="/images/companies/slack.png" className="h-8 max-sm:hidden" alt="Company Image" />
                    <img src="/images/companies/hubspot.png" className="h-8 max-md:hidden" alt="Company Image" />
                    <img src="/images/companies/dropbox.png" className="h-8 max-md:hidden" alt="Company Image" />
                </div>
            </div>
        </div>
    );
};

export default Hero2;
