"use client";

import * as React from "react";
import { CheckIcon, ChevronDown, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

export const Select = SelectPrimitive.Root;

export const SelectGroup = SelectPrimitive.Group;

export const SelectValue = SelectPrimitive.Value;

export type SelectTriggerProps = React.ComponentProps<typeof SelectPrimitive.Trigger>;

export const SelectTrigger = ({ className, children, ...props }: SelectTriggerProps) => {
    return (
        <SelectPrimitive.Trigger
            className={cn(
                "border-input ring-offset-background data-[placeholder]:text-muted-foreground focus:ring-ring flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs focus:ring-1 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                className,
            )}
            {...props}>
            {children}
            <SelectPrimitive.Icon asChild>
                <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>
    );
};

export type SelectScrollUpButtonProps = React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>;

export const SelectScrollUpButton = ({ className, ...props }: SelectScrollUpButtonProps) => (
    <SelectPrimitive.ScrollUpButton
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        {...props}>
        <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
);

export type SelectScrollDownButtonProps = React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>;

export const SelectScrollDownButton = ({ className, ...props }: SelectScrollDownButtonProps) => (
    <SelectPrimitive.ScrollDownButton
        className={cn("flex cursor-default items-center justify-center py-1", className)}
        {...props}>
        <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
);

export type SelectContentProps = React.ComponentProps<typeof SelectPrimitive.Content>;

export const SelectContent = ({ className, children, position = "popper", ...props }: SelectContentProps) => (
    <SelectPrimitive.Portal>
        <SelectPrimitive.Content
            className={cn(
                "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded border shadow-md",
                position === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                className,
            )}
            position={position}
            {...props}>
            <SelectScrollUpButton />
            <SelectPrimitive.Viewport
                className={cn(
                    "p-1",
                    position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
                )}>
                {children}
            </SelectPrimitive.Viewport>
            <SelectScrollDownButton />
        </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
);

export type SelectLabelProps = React.ComponentProps<typeof SelectPrimitive.Label>;

export const SelectLabel = ({ className, ...props }: SelectLabelProps) => (
    <SelectPrimitive.Label className={cn("py-1.5 pr-2 pl-8 text-sm font-medium opacity-60", className)} {...props} />
);

type SelectItemProps = React.ComponentProps<typeof SelectPrimitive.Item>;

export const SelectItem = ({ className, children, ...props }: SelectItemProps) => (
    <SelectPrimitive.Item
        className={cn(
            "focus:bg-foreground/10 focus:text-foreground relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-2 pl-8 text-sm outline-none select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            className,
        )}
        {...props}>
        <span className="absolute left-2 flex size-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <CheckIcon className="size-4" />
            </SelectPrimitive.ItemIndicator>
        </span>

        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
);

export type SelectSeparatorProps = React.ComponentProps<typeof SelectPrimitive.Separator>;

export const SelectSeparator = ({ className, ...props }: SelectSeparatorProps) => (
    <SelectPrimitive.Separator className={cn("bg-foreground/10 -mx-1 my-1 h-px", className)} {...props} />
);
