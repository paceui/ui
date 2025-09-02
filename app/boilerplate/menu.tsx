import { ReactNode } from "react";

import { routes } from "@/lib/docs";

const blocks = routes.blocks.base;

type IBlockSection = {
    title: string;
    items: IBlockItem[];
};

type IBlockItem = {
    title: string;
    href: string;
    badge?: "new";
    demo: ReactNode;
};

export const blockSections: IBlockSection[] = [
    {
        title: "Marketing",
        items: [
            {
                title: "Testimonials",
                badge: "new",
                href: blocks + "/testimonials",
                demo: (
                    <div className="flex h-full items-center justify-center -space-x-4 p-6 pe-12 pb-12">
                        <div className="bg-foreground/10 size-10 rounded-full"></div>
                        <div className="bg-foreground/10 size-10 rounded-full"></div>
                        <div className="bg-foreground/10 size-10 rounded-full"></div>
                        <div className="relative">
                            <div className="bg-foreground/30 size-10 rounded-full"></div>
                            <div className="bg-foreground/20 absolute -start-2 -top-2 h-24 w-28 rounded">
                                <div className="ms-14 mt-4">
                                    <div className="bg-foreground/15 h-2 w-[70%] rounded"></div>
                                    <div className="bg-foreground/10 mt-1 h-2 w-[50%] rounded"></div>
                                </div>
                                <div className="bg-foreground/10 m-3 mt-6 h-2 w-[70%] rounded p-3"></div>
                            </div>
                        </div>
                    </div>
                ),
            },
            {
                title: "Hero Sections",
                href: blocks + "/hero",
                badge: "new",
                demo: (
                    <div className="grid h-full grid-cols-2 p-6">
                        <div className="flex flex-col">
                            <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                            <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                            <div className="bg-foreground/10 mt-2 h-8 w-[80%] rounded"></div>
                            <div className="bg-foreground/10 mt-auto h-4 w-[60%] rounded"></div>
                        </div>
                        <div>
                            <div className="from-foreground/5 to-foreground/10 h-full w-full rounded bg-linear-to-r"></div>
                        </div>
                    </div>
                ),
            },
            {
                title: "Pricing Sections",
                href: blocks + "/pricing",
                demo: (
                    <div className="grid h-full grid-cols-3 gap-4 p-6">
                        <div className="bg-foreground/5 flex flex-col items-center rounded p-3">
                            <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                            <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                            <div className="bg-foreground/5 mt-2 h-8 w-[80%] rounded"></div>
                            <div className="bg-foreground/10 mt-auto h-4 w-[60%] rounded"></div>
                        </div>
                        <div className="bg-foreground/5 flex flex-col items-center rounded p-2">
                            <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                            <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                            <div className="bg-foreground/5 mt-2 h-10 w-[80%] rounded"></div>
                            <div className="bg-foreground/10 mx-auto mt-auto h-4 w-[60%] rounded"></div>
                        </div>
                        <div className="bg-foreground/5 flex flex-col items-center rounded p-2">
                            <div className="bg-foreground/10 h-1.5 w-[20%] rounded"></div>
                            <div className="bg-foreground/15 mt-1 h-3 w-[80%] rounded"></div>
                            <div className="bg-foreground/5 mt-2 h-12 w-[80%] rounded"></div>
                            <div className="bg-foreground/10 mx-auto mt-auto h-4 w-[60%] rounded"></div>
                        </div>
                    </div>
                ),
            },
        ],
    },
    {
        title: "Ecommerce",
        items: [
            {
                title: "Product Filter",
                href: blocks + "/product-filter",
                demo: (
                    <div className="p-6">
                        <div className="flex items-center gap-3">
                            <div className="h-4 w-[20%] rounded border"></div>
                            <div className="h-4 w-[20%] rounded border"></div>
                            <div className="h-4 w-[20%] rounded border border-dashed"></div>
                        </div>
                        <div className="mt-3 grid grid-cols-5 gap-3">
                            {Array.from({ length: 8 }).map((_, index) => (
                                <div className="bg-foreground/5 rounded" key={index}>
                                    <div className="bg-foreground/5 m-1 h-8 rounded"></div>
                                    <div className="bg-foreground/10 m-1.5 mx-auto h-2 w-[60%] rounded"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                ),
            },
            {
                title: "Product",
                href: blocks + "/product",
                demo: (
                    <div className="flex items-center justify-center p-8">
                        <div className="bg-foreground/5 w-40 rounded">
                            <div className="bg-foreground/5 m-1 h-20 rounded"></div>
                            <div className="m-2 space-y-1">
                                <div className="flex items-center justify-between">
                                    <div className="bg-foreground/5 h-1.5 w-[20%] rounded-xs"></div>
                                    <div className="bg-foreground/10 h-1.5 w-[15%] rounded-xs"></div>
                                </div>
                                <div className="bg-foreground/10 h-2.5 w-[60%] rounded-xs"></div>
                                <div className="bg-foreground/5 h-4 w-[80%] rounded-xs"></div>
                            </div>
                        </div>
                    </div>
                ),
            },
        ],
    },
];
