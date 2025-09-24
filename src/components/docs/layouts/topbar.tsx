"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClassNameValue } from "tailwind-merge";

import { DiscordIcon, GithubIcon, TwitterIcon } from "@/components/docs/icon";
import { Logo } from "@/components/docs/logo";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";
import { cn } from "@/lib/utils";

import { ThemeToggle } from "../theme-toggle";

type TopbarProps = {
    className?: ClassNameValue;
    showLogo?: boolean;
};

export const Topbar = ({ className, showLogo = false }: TopbarProps) => {
    const pathname = usePathname();

    return (
        <div className={cn("flex h-full items-center justify-between", className)}>
            <div className="flex items-center  gap-2 md:gap-8">
                {showLogo && (
                    <Link href={routes.landing}>
                        <Logo />
                    </Link>
                )}
            </div>
            <div className="hidden gap-2 md:inline-flex md:gap-6">
                <Link
                    className={cn("text-foreground/80 hover:text-foreground text-[15px] transition-all", {
                        "text-foreground font-medium": pathname.includes("docs"),
                    })}
                    href={routes.docs.components.base}>
                    Components
                </Link>
                <Link
                    className={cn(
                        "text-foreground/80 hover:text-foreground flex items-center gap-1.5 text-[15px] transition-all",
                        {
                            "text-foreground font-medium": pathname.includes("blocks"),
                        },
                    )}
                    href={routes.blocks.base}>
                    Blocks
                </Link>
            </div>
            <div className="flex items-center">
                <Button variant={"ghost"} size="icon" asChild aria-label="Discord">
                    <Link href={routes.external.discord} target="_blank">
                        <DiscordIcon className="!size-4.5" />
                    </Link>
                </Button>
                <Button variant={"ghost"} size="icon" asChild aria-label="Twitter">
                    <Link href={routes.external.twitter} target="_blank">
                        <TwitterIcon className="!size-4" />
                    </Link>
                </Button>
                <Button variant={"ghost"} size="icon" asChild aria-label="Github">
                    <Link href={routes.external.github} target="_blank">
                        <GithubIcon className="!size-4.5" />
                    </Link>
                </Button>
                <hr className="mx-2 h-6 border-e" />
                <ThemeToggle />
            </div>
        </div>
    );
};
