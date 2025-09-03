import { Footer, Topbar } from "@/components/docs/layouts";
import { Newsletter } from "@/components/docs/newsletter";

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
                        <Newsletter />
                    </div>
                </div>
            </div>
            <div className="bg-background/90 sticky top-0 z-10 border-t border-dashed">
                <Footer className="container-wrapper" />
            </div>
        </div>
    );
}
