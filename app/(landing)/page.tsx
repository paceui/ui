import Link from "next/link";

import { TwitterIcon } from "@/components/docs/icon";
import { Footer, Topbar } from "@/components/docs/layouts";
import { Button } from "@/components/ui/button";
import { routes } from "@/lib/docs";

import { Demo } from "./components/demo";
import { Feature } from "./components/feature";
import { Hero } from "./components/hero";

export default function LandingPage() {
    return (
        <div>
            <div className="bg-background/90 sticky top-0 z-10 border-b border-dashed backdrop-blur-md">
                <div className="container-wrapper h-16 max-2xl:!px-4">
                    <Topbar showLogo />
                </div>
            </div>
            <div className="overflow-hidden">
                <div className="container-wrapper max-2xl:!px-4">
                    <Hero />
                    <Feature />
                    <Demo />
                    <div className="my-8 flex justify-center lg:my-16 2xl:my-24">
                        <div className="from-muted to-muted/70 flex flex-col items-center justify-center gap-6 rounded-md bg-gradient-to-br p-8 px-16">
                            <p className="text-center text-xl font-medium">Updates. Previews. First.</p>
                            <TwitterIcon className="size-9 animate-pulse" />
                            <Button
                                size="lg"
                                asChild
                                className="shadow-primary/20 h-11 gap-2.5 px-6 !text-base shadow-xl">
                                <Link href={routes.external.twitter} target="_blank">
                                    Follow
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-background/90 sticky top-0 z-10 border-t border-dashed">
                <Footer className="container-wrapper" />
            </div>
        </div>
    );
}
