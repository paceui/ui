"use client";

import { Settings2Icon } from "lucide-react";
import React, { ComponentType, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import { ClientDemoComponent } from "./client-demo-component";

export type ComponentPreviewProp = { [key: string]: string | boolean };

export type IDemoProp = {
    title: string;
    name: string;
} & (
    | {
          type: "select";
          values: string[];
          defaultValue: string;
      }
    | {
          type: "switch";
          defaultValue: boolean;
      }
);

export type IDemoPreview = {
    path?: string;
    component?: ComponentType<ComponentPreviewProp>;
    props: IDemoProp[];
};

export const DemoPreview = ({ path, component, props = [] }: IDemoPreview) => {
    const Demo = useMemo<ComponentType<ComponentPreviewProp> | undefined>(
        () => component ?? (path ? ClientDemoComponent(path) : undefined),
        [path, component],
    );

    const [compProps, setCompProps] = useState<ComponentPreviewProp>(() =>
        props.reduce(
            (obj, prop) => ({
                ...obj,
                [prop.name]: prop.defaultValue,
            }),
            {},
        ),
    );

    function formatCamelCase(text: string): string {
        return text
            .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space before capital letters
            .replace(/^./, (char) => char.toUpperCase()); // Capitalize the first letter
    }

    if (!Demo) return <p>Demo is not available</p>;

    return (
        <div className={cn("relative mt-3 overflow-hidden rounded border")}>
            {/*<div className="absolute inset-0 bg-[url('/images/docs/dots-bg.png')] bg-[length:800px_300px] bg-repeat opacity-3 dark:opacity-5" />*/}
            <div className="absolute end-3 top-3 z-9 flex items-center gap-2">
                {props.length > 0 && (
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="cursor-pointer shadow-none"
                                size="icon"
                                aria-label="Setting"
                                title="Setting"
                                variant="outline">
                                <Settings2Icon className="!size-4 transition-all" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-52 max-w-60" align="end">
                            <div className="space-y-3">
                                {props.map((prop, index) => {
                                    return (
                                        <div key={prop.name + index}>
                                            {prop.type == "select" ? (
                                                <>
                                                    <Label className="block">{prop.title}</Label>
                                                    <Select
                                                        value={compProps[prop.name]?.toString()}
                                                        onValueChange={(value) =>
                                                            setCompProps({
                                                                ...compProps,
                                                                [prop.name]: value,
                                                            })
                                                        }>
                                                        <SelectTrigger className="mt-2 capitalize" aria-label="Select">
                                                            <SelectValue placeholder={prop.title} />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {prop.values.map((val) => (
                                                                <SelectItem
                                                                    value={val}
                                                                    key={val}
                                                                    className="capitalize">
                                                                    {formatCamelCase(val)}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectContent>
                                                    </Select>
                                                </>
                                            ) : prop.type == "switch" ? (
                                                <>
                                                    <Label className="block">{prop.title}</Label>
                                                    <Switch
                                                        checked={!!compProps[prop.name]}
                                                        className="mt-2"
                                                        onCheckedChange={(value) =>
                                                            setCompProps({
                                                                ...compProps,
                                                                [prop.name]: value,
                                                            })
                                                        }></Switch>
                                                </>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </div>
            <div className={cn("relative flex min-h-80 grow items-center justify-center p-8 lg:p-16")}>
                <Demo {...compProps} />
            </div>
        </div>
    );
};
