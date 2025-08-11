"use client";

import Link from "next/link";
import { ClassNameValue } from "tailwind-merge";

import { GithubIcon, TwitterIcon } from "@/components/docs/icon";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";
import { cn } from "@/lib/utils";

type FooterProps = {
    className?: ClassNameValue;
};

export const Footer = ({ className }: FooterProps) => {
    return (
        <div
            className={cn("flex flex-wrap items-center justify-between py-3 max-sm:justify-center md:py-4", className)}>
            <p className="text-foreground/80 max-sm:text-center max-sm:text-sm">
                Built by{" "}
                <Link
                    className="text-foreground font-medium hover:underline"
                    href={routes.external.portfolio}
                    target="_blank">
                    Denish
                </Link>
                . The source code is available on{" "}
                <Link
                    className="text-foreground font-medium hover:underline"
                    href={routes.external.github}
                    target="_blank">
                    GitHub
                </Link>
                .
            </p>
            <div className="flex items-center gap-0.5">
                <Button variant={"ghost"} size="icon" asChild aria-label="Github">
                    <Link href={routes.external.twitter} target="_blank">
                        <TwitterIcon className="!size-4" />
                    </Link>
                </Button>
                <Button variant={"ghost"} size="icon" asChild aria-label="Github">
                    <Link href={routes.external.github} target="_blank">
                        <GithubIcon className="!size-4.5" />
                    </Link>
                </Button>
            </div>
        </div>
    );
};
