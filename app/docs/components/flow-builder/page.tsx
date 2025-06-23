import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { routes } from "@/lib/docs";

import { FlowBuilder } from "./FlowBuilder";

const FlowBuilderPage = () => {
    return (
        <div className="max-xl:px-6 max-sm:px-4 xl:px-8 2xl:px-12">
            <div className="w-full min-w-0 grow">
                <BreadcrumbList className="sm:gap-1.5">
                    <BreadcrumbItem>
                        <Link className="text-foreground/80" href={routes.docs.home}>
                            Docs
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-foreground">Flow Builder</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
                <div className="mt-2 flex items-center gap-3">
                    <h1 className="text-xl font-semibold sm:text-2xl xl:text-3xl">Flow Builder </h1>
                    <Badge>Beta</Badge>
                </div>
                <h2 className="text-muted-foreground max-sm:text-sm">
                    Interactive tool to design and preview custom dot loader animations visually.
                </h2>
                <div className="mt-12">
                    <FlowBuilder />
                </div>
            </div>
        </div>
    );
};

export default FlowBuilderPage;
