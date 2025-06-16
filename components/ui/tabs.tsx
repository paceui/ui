"use client";

import * as React from "react";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>;

export const TabsList = ({ className, ...props }: TabsListProps) => {
    return (
        <TabsPrimitive.List
            className={cn(
                "bg-muted text-muted-foreground inline-flex h-9 items-center justify-center rounded-lg p-1",
                className,
            )}
            {...props}
        />
    );
};

export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger>;

export const TabsTrigger = ({ className, ...props }: TabsTriggerProps) => {
    return (
        <TabsPrimitive.Trigger
            className={cn(
                "ring-offset-background focus-visible:ring-ring data-[state=active]:bg-background data-[state=active]:text-foreground inline-flex items-center justify-center rounded-md px-3 py-1 text-sm font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow",
                className,
            )}
            {...props}
        />
    );
};

export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content>;

export const TabsContent = ({ className, ...props }: TabsContentProps) => (
    <TabsPrimitive.Content
        className={cn(
            "ring-offset-background focus-visible:ring-ring mt-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
            className,
        )}
        {...props}
    />
);
