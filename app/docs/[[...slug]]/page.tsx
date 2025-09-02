import { ChevronLeftIcon, ChevronRightIcon, Link2Icon, PencilIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { docs } from "@/.velite";
import { docsSidebarNavItems } from "@/app/docs/menu";
import { MDXContent } from "@/components/docs/mdx/mdx-content";
import { DocsPagination } from "@/components/docs/mdx/pagination";
import { TableOfContent } from "@/components/docs/mdx/toc";
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { createPaginationPair, routes } from "@/lib/docs";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

export async function generateStaticParams(): Promise<{ slug?: string[] }[]> {
    return docs.map(({ path }) => ({ slug: [path] }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const url = `docs${params.slug ? "/" : ""}${(params.slug ?? []).join("/")}`;
    const page = docs.find((doc) => doc.path === url);

    return {
        title: page?.title,
        description: page?.description,
    };
}

export default async function Page(props: PageProps) {
    const params = await props.params;
    const url = `docs${params.slug ? "/" : ""}${(params.slug ?? []).join("/")}`;
    const page = docs.find((doc) => doc.path === url);

    if (!page) {
        notFound();
    }

    const pager = createPaginationPair({
        items: docsSidebarNavItems,
        activePath: url,
        pagerPair: { prev: page.pagerPrev, next: page.pagerNext },
        defaultPagerPair: { next: { title: "Blocks", href: routes.blocks.base } },
    });

    return (
        <div className="flex gap-4 max-xl:px-6 max-sm:px-4 xl:gap-8 xl:ps-8 2xl:gap-16 2xl:ps-12">
            <div className="w-full min-w-0 grow">
                <BreadcrumbList className="sm:gap-1.5">
                    <BreadcrumbItem>
                        <Link className="text-foreground/80" href={routes.docs.home}>
                            Docs
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-foreground">{page.title}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                <div className="mt-2 flex items-center justify-between sm:mt-3">
                    <h1 className="text-xl font-semibold sm:text-2xl xl:text-3xl">{page.title}</h1>
                    <div className="flex items-center gap-2">
                        {pager.prev != null && (
                            <Button asChild size="icon" variant="outline" className="shadow-none">
                                <Link href={pager.prev.href}>
                                    <ChevronLeftIcon />
                                </Link>
                            </Button>
                        )}
                        {pager.next != null && (
                            <Button asChild size="icon" variant="outline" className="shadow-none">
                                <Link href={pager.next.href}>
                                    <ChevronRightIcon />
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
                <h2 className="text-muted-foreground max-sm:text-sm">{page.description}</h2>
                {page.links && (
                    <div className="mt-4 flex gap-2">
                        {page.links.api && (
                            <Link
                                className="bg-foreground/5 text-foreground hover:bg-foreground/10 inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-sm font-medium transition-all"
                                href={page.links.api}
                                target="_blank">
                                <Link2Icon className="size-3.5" />
                                Plugin Reference
                            </Link>
                        )}
                    </div>
                )}
                {page.code && (
                    <div className="mt-8">
                        <MDXContent code={page.code} />
                    </div>
                )}
                <div className="mt-12">
                    <DocsPagination prev={pager.prev} next={pager.next} />
                </div>
            </div>
            <div className="sticky top-28 hidden h-full w-48 min-w-48 xl:block">
                <TableOfContent entries={page.toc} />
                <div className="mt-6 text-sm">
                    <p className="font-medium">Contribute</p>
                    <div className="mt-2 space-y-1.5">
                        <Link
                            href={`https://github.com/paceui/ui/blob/main/content/${url}.mdx`}
                            target="_blank"
                            className="text-foreground/70 hover:text-foreground flex items-center gap-2 transition-all">
                            <PencilIcon className="size-4" />
                            Edit this page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
