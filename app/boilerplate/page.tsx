import { PlusIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { Newsletter } from "@/components/docs/newsletter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { routes } from "@/lib/docs";

export const metadata: Metadata = {
    title: "Boilerplate",
    description:
        "Working on a handy starter kit for payments, content, and beyond. Still shaping it, so share your thoughts with us.\n",
};

export default async function Page() {
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center gap-2 rounded-full border px-3 py-0.5 text-sm font-medium">
                    <div className="size-1.5 rounded-full bg-gray-500"></div>
                    In Dev
                </div>
                <p className="from-foreground to-foreground/65 mt-2 w-fit bg-linear-to-r bg-clip-text text-3xl font-[650] tracking-tight text-transparent lg:text-4xl 2xl:text-5xl">
                    Boilerplate
                </p>
                <p className="text-muted-foreground mt-1 max-w-xl text-center max-sm:text-sm">
                    Working on a handy starter kit for payments, content, and beyond. Still shaping it, so share your
                    thoughts with us.
                </p>
            </div>
            <div className="mt-8 sm:mt-12 xl:mt-16 2xl:mt-24">
                <div className="mt-4 lg:mt-8">
                    <p className="text-lg font-medium">Payment Provider</p>
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                        <Link href="https://x.com/paceui_/status/1962393920975057027" target="_blank">
                            <Card className="group relative overflow-hidden rounded border shadow-none">
                                <div className="bg-foreground/3 flex h-50 items-center justify-center gap-6 transition-all duration-300">
                                    <img src="/images/logo/creem.png" className="h-18" alt="Creem" />
                                    <PlusIcon className="size-12" />
                                    <img src="/images/logo/shadcn.png" className="h-18" alt="Creem" />
                                </div>
                                <div className="bg-muted absolute end-2 top-2 rounded border border-dashed px-1.5 py-0.5 text-xs">
                                    In Progress
                                </div>
                                <div className="flex items-center justify-between px-4 py-3">
                                    <p className="font-medium">Creem & shadcn ui</p>
                                    <Button className="cursor-pointer" size="sm">
                                        Feature Request
                                    </Button>
                                </div>
                            </Card>
                        </Link>
                        <Link href={routes.external.twitter} target="_blank">
                            <Card className="group relative overflow-hidden rounded border shadow-none">
                                <div className="bg-foreground/3 flex h-50 items-center justify-center gap-6 transition-all duration-300">
                                    <div className="flex h-full items-center justify-center gap-4 opacity-60 transition-all duration-300 hover:opacity-100">
                                        <div className="border-b-foreground/15 h-0 w-0 border-r-20 border-b-30 border-l-20 border-transparent"></div>
                                        <div className="bg-foreground/15 size-8"></div>
                                        <div className="bg-foreground/15 size-9 rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between px-4 py-3">
                                    <p className="font-medium text-gray-800">Have an idea for us?</p>
                                    <Button className="cursor-pointer" size="sm">
                                        Share
                                    </Button>
                                </div>
                            </Card>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mt-8 flex items-center justify-center xl:mt-16 2xl:mt-24">
                <Newsletter />
            </div>
        </div>
    );
}
