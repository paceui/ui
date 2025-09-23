import { RocketIcon, UsersIcon, ZapIcon } from "lucide-react";

import { SpringButton } from "@/components/gsap/spring-button";
import { StaggerOnScroll } from "@/components/gsap/stagger-on-scroll";
import { Button } from "@/components/ui/button";

const Pricing1 = () => {
    return (
        <div className="bg-background container py-6 sm:py-12 lg:py-24">
            <div className="flex flex-col items-center">
                <p className="text-foreground/50 font-mono text-xs font-medium uppercase">Simple & Transparent</p>
                <p className="mt-1 text-3xl font-medium sm:text-4xl lg:text-5xl">Pricing</p>
                <p className="text-muted-foreground mt-2 max-w-lg text-center text-sm">
                    Choose the plan that fits your needs. No hidden fees, no surprises.
                </p>
            </div>
            <StaggerOnScroll
                effect="slideInRight"
                className="mt-8 grid h-full grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
                <div className="bg-background flex flex-col rounded-md border p-6">
                    <div className="flex justify-between">
                        <p className="text-2xl font-medium">Starter</p>
                        <p>
                            <sup className="text-foreground/70 text-lg font-medium">$</sup>
                            <span className="text-3xl font-medium">0</span>
                            <sub className="text-muted-foreground text-sm">/month</sub>
                        </p>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm italic">Individuals just getting started</p>
                    <p className="text-foreground/50 mt-4 text-xs font-medium uppercase">Features</p>
                    <ul className="mt-2 list-inside list-disc space-y-0.5">
                        <li>1 Project</li>
                        <li>Community support</li>
                        <li>Basic components</li>
                        <li>Limited access to updates</li>
                    </ul>
                    <div className="mt-auto pt-5">
                        <SpringButton
                            scale={0.95}
                            shaking={false}
                            className="hover:bg-muted flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border py-2">
                            <RocketIcon className="size-4.5" />
                            Start for Free
                        </SpringButton>
                    </div>
                </div>
                <div className="bg-background relative flex flex-col rounded-md border p-6 shadow">
                    <div className="bg-background absolute start-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border px-2 py-0.5 text-xs">
                        Most Popular
                    </div>
                    <div className="flex justify-between">
                        <p className="text-2xl font-medium">Pro</p>
                        <p>
                            <sup className="text-foreground/70 text-lg font-medium">$</sup>
                            <span className="text-3xl font-medium">19</span>
                            <sub className="text-muted-foreground text-sm">/month</sub>
                        </p>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm italic">Freelancers and solo developers</p>
                    <p className="text-foreground/50 mt-4 text-xs font-medium uppercase">Features</p>
                    <ul className="mt-2 list-inside list-disc space-y-0.5">
                        <li>Unlimited projects</li>
                        <li>Priority support</li>
                        <li>All components included</li>
                        <li>Regular updates</li>
                        <li>Access to interaction animations</li>
                    </ul>
                    <div className="mt-auto pt-5">
                        <SpringButton
                            scale={0.95}
                            shaking={false}
                            className="bg-primary text-primary-foreground flex w-full cursor-pointer items-center justify-center gap-2 rounded-md py-2">
                            <ZapIcon className="size-4.5" />
                            Upgrade to Pro
                        </SpringButton>
                    </div>
                </div>
                <div className="bg-background flex flex-col rounded-md border p-6">
                    <div className="flex justify-between">
                        <p className="text-2xl font-medium">Team</p>
                        <p>
                            <sup className="text-foreground/70 text-lg font-medium">$</sup>
                            <span className="text-3xl font-medium">49</span>
                            <sub className="text-muted-foreground text-sm">/month</sub>
                        </p>
                    </div>
                    <p className="text-muted-foreground mt-1 text-sm italic">Small teams and startups</p>
                    <p className="text-foreground/50 mt-4 text-xs font-medium uppercase">Features</p>
                    <ul className="mt-2 list-inside list-disc space-y-0.5">
                        <li>Everything in Pro</li>
                        <li>Team collaboration</li>
                        <li>Design tokens support</li>
                        <li>Advanced layout templates</li>
                        <li>Early access to new components</li>
                        <li>
                            <div className="inline-flex items-center gap-2">
                                Live chat support
                                <div className="text-muted-foreground rounded-full border px-1 py-px text-xs/none">
                                    New
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="mt-auto pt-5">
                        <SpringButton
                            scale={0.95}
                            shaking={false}
                            className="bg-muted hover:bg-primary hover:text-primary-foreground flex w-full cursor-pointer items-center justify-center gap-2 rounded-md border py-2">
                            <UsersIcon className="size-4.5" />
                            Choose Team Plan
                        </SpringButton>
                    </div>
                </div>
            </StaggerOnScroll>
            <div className="mt-6 text-center sm:mt-8 lg:mt-16">
                <p className="text-2xl font-medium">Need something custom?</p>
                <p className="text-muted-foreground mt-1 text-sm">Let’s talk and find the right solution for you.</p>
                <Button className="mt-3">Contact Us</Button>
            </div>
        </div>
    );
};

export default Pricing1;
