"use client";

import { PageTree } from "fumadocs-core/server";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export const SidebarItem = ({ item }: { item: PageTree.Item }) => {
    const pathname = usePathname();

    const isActive = pathname == item.url;

    return (
        <Link
            className={cn(
                "hover:bg-foreground/5 mb-0.5 text-foreground/75 flex h-7.5 items-center gap-2 rounded px-2.5 transition-all",
                {
                    "bg-foreground/5": isActive,
                },
            )}
            href={item.url}>
            {item.name}
        </Link>
    );
};

export const SidebarSeparator = ({ item }: { item: PageTree.Separator }) => {
    return <p className="ms-2.5 not-first:mt-5 mb-1 font-medium">{item.name}</p>;
};
