import Link from "next/link";
import { Fragment } from "react";

import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export const DocsBreadcrumb = ({ slug = [] }: { slug?: string[] }) => {
    const lastSlug = slug.length > 0 ? slug[slug.length - 1] : "";

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <Link href="/docs">Docs</Link>
                </BreadcrumbItem>

                {lastSlug && (
                    <Fragment>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem className={cn("capitalize text-foreground")}>
                            {lastSlug.replace(/-/g, " ")}
                        </BreadcrumbItem>
                    </Fragment>
                )}
            </BreadcrumbList>
        </Breadcrumb>
    );
};
