import * as React from "react";
import { Switch as SwitchPrimitives } from "radix-ui";

import { cn } from "@/lib/utils";

export type SwitchProps = React.ComponentProps<typeof SwitchPrimitives.Root>;

export const Switch = ({ className, ...props }: SwitchProps) => (
    <SwitchPrimitives.Root
        className={cn(
            "peer focus-visible:ring-ring focus-visible:ring-offset-background data-[state=checked]:bg-primary data-[state=unchecked]:bg-input inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            className,
        )}
        {...props}>
        <SwitchPrimitives.Thumb
            className={cn(
                "bg-background pointer-events-none block h-4 w-4 rounded-full shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0",
            )}
        />
    </SwitchPrimitives.Root>
);
