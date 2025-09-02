"use client";

import { RotateCcwIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchFile } from "@/lib/docs";

import { ClientDemoComponent } from "./client-demo-component";
import { CodePreview } from "./code-preview";
import { DemoPreview, IDemoPreview } from "./demo-preview";

type IDemoCodePreview = {
    path: string;
    props: IDemoPreview["props"];
    v0Link?: string;
};

export const DemoCodePreview = ({ path, props, v0Link }: IDemoCodePreview) => {
    const [mode, setMode] = useState("preview");
    const [previewKey, setPreviewKey] = useState(1);
    const [code, setCode] = useState<string | undefined>(undefined);

    useEffect(() => {
        fetchFile(path).then(setCode);
    }, [path]);

    const DemoComponent = useMemo(() => ClientDemoComponent(path), [path]);

    return (
        <>
            <div className="mt-3 flex items-center justify-between">
                <Tabs value={mode} onValueChange={setMode}>
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="flex items-center gap-2.5">
                    {v0Link && (
                        <Link
                            href={`https://v0.dev/chat/api/open?url=https://ui.paceui.com/r${v0Link}.json`}
                            target="_blank">
                            <Button
                                className="group cursor-pointer shadow-none max-sm:size-9"
                                aria-label="Open in v0"
                                title="Open in v0"
                                variant="outline"
                                asChild>
                                <div>
                                    <span className="max-sm:hidden">Open in</span>
                                    <svg
                                        viewBox="0 0 40 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="!size-5 text-current">
                                        <path
                                            d="M23.3919 0H32.9188C36.7819 0 39.9136 3.13165 39.9136 6.99475V16.0805H36.0006V6.99475C36.0006 6.90167 35.9969 6.80925 35.9898 6.71766L26.4628 16.079C26.4949 16.08 26.5272 16.0805 26.5595 16.0805H36.0006V19.7762H26.5595C22.6964 19.7762 19.4788 16.6139 19.4788 12.7508V3.68923H23.3919V12.7508C23.3919 12.9253 23.4054 13.0977 23.4316 13.2668L33.1682 3.6995C33.0861 3.6927 33.003 3.68923 32.9188 3.68923H23.3919V0Z"
                                            fill="currentColor"></path>
                                        <path
                                            d="M13.7688 19.0956L0 3.68759H5.53933L13.6231 12.7337V3.68759H17.7535V17.5746C17.7535 19.6705 15.1654 20.6584 13.7688 19.0956Z"
                                            fill="currentColor"></path>
                                    </svg>
                                </div>
                            </Button>
                        </Link>
                    )}
                    <Button
                        className="group cursor-pointer shadow-none"
                        size="icon"
                        aria-label="Refresh"
                        title="Refresh"
                        variant="outline"
                        onClick={() => setPreviewKey(previewKey + 1)}>
                        <RotateCcwIcon className="!size-3.5 transition-all group-hover:-rotate-60" />
                    </Button>
                </div>
            </div>

            <div className="mt-4">
                {mode === "preview" && (
                    <DemoPreview component={DemoComponent} props={props} key={previewKey.toString()} />
                )}
                {mode === "code" && <CodePreview code={code} removeExtraProps />}
            </div>
        </>
    );
};
