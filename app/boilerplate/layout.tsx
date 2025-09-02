import React from "react";

import { Footer, Topbar } from "@/components/docs/layouts";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container-wrapper bg-foreground/2 border-dashed md:border-x">
            <div className="bg-background flex flex-col min-h-screen border-dashed md:mx-2 md:border-x">
                <div className="bg-background/90 sticky top-0 z-10 h-16 border-b border-dashed px-4 backdrop-blur-md lg:px-8 xl:px-16 2xl:px-24">
                    <Topbar className="" showLogo />
                </div>
                <div className="px-4 py-4 sm:py-8 grow lg:px-8 xl:px-16 xl:py-12 2xl:px-24 2xl:py-16">{children}</div>
                <div className="border-t border-dashed">
                    <Footer className="px-4 lg:px-8 xl:px-16 2xl:px-24" />
                </div>
            </div>
        </div>
    );
}
