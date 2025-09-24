import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
    return (
        <>
            <img src="/images/brand/logo-light.svg" alt="logo" className={cn("h-7 dark:hidden", className)} />
            <img src="/images/brand/logo-dark.svg" alt="logo" className={cn("h-7 not-dark:hidden", className)} />
        </>
    );
};
