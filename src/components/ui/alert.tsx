import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

const alertVariants = cva(
    "relative w-full rounded border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    {
        variants: {
            variant: {
                default: "bg-background text-foreground",
                destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export type AlertProps = React.ComponentProps<"div"> &
    VariantProps<typeof alertVariants> & {
        startContent?: ReactNode;
        endContent?: ReactNode;
    };

export const Alert = ({ className, variant, ...props }: AlertProps) => (
    <div role="alert" className={cn(alertVariants({ variant }), className)} {...props} />
);

export type AlertTitleProps = React.ComponentProps<"h5">;

export const AlertTitle = ({ className, ...props }: AlertTitleProps) => (
    <h5 className={cn("mb-1 leading-none font-medium tracking-tight", className)} {...props} />
);

export type AlertDescriptionProps = React.ComponentProps<"div">;

export const AlertDescription = ({ className, ...props }: AlertDescriptionProps) => (
    <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
);
