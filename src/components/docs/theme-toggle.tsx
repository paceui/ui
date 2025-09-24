"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            size="icon"
            variant="ghost"
            suppressHydrationWarning
            title={theme == "light" ? "Light" : "Dark"}
            className="relative cursor-pointer overflow-hidden"
            aria-label="Theme mode"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <SunIcon
                suppressHydrationWarning
                className={cn(
                    "absolute !size-4.5 scale-50 opacity-0 transition-all [html.dark_&]:scale-100 [html.dark_&]:opacity-100",
                )}
            />
            <MoonIcon
                suppressHydrationWarning
                className={cn(
                    "absolute !size-4.5 scale-50 opacity-0 transition-all [html.light_&]:scale-100 [html.light_&]:opacity-100",
                )}
            />
        </Button>
    );
};
