"use client";

import dynamic from "next/dynamic";
import React from "react";

import { ComponentPreviewProp } from "./demo-preview";

export const ClientDemoComponent = (name: string) => {
    return dynamic<ComponentPreviewProp>(() => import(`@/demo/${name.replace(/^demo\//, "")}`).then((e) => e.Demo), {
        loading: () => <p className="opacity-60">Loading...</p>,
        ssr: false,
    });
};
