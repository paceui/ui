"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

export const Accordion = AccordionPrimitive.Root;

export type AccordionItemProps = React.ComponentProps<typeof AccordionPrimitive.Item>;

export const AccordionItem = ({ className, ...props }: AccordionItemProps) => {
    return <AccordionPrimitive.Item className={cn("border-b", className)} {...props} />;
};

export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger>;

export const AccordionTrigger = ({ className, children, ...props }: AccordionTriggerProps) => {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                className={cn(
                    "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className,
                )}
                {...props}>
                {children}
                <ChevronDown className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    );
};

export type AccordionContentProps = React.ComponentProps<typeof AccordionPrimitive.Content>;

export const AccordionContent = ({ className, children, ...props }: AccordionContentProps) => {
    return (
        <AccordionPrimitive.Content
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            {...props}>
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    );
};
