"use client";

import { FlowList } from "./components/FlowList";
import { FrameList } from "./components/FrameList";
import { Playground } from "./components/Playground";
import { Preview } from "./components/Preview";
import { useFlowBuilder } from "./use-flow-builder";

export const FlowBuilder = () => {
    const hook = useFlowBuilder();

    return (
        <div className="mb-16 not-prose">
            <Preview hook={hook} />
            <div className="mt-8 grid grid-cols-1 flex-wrap items-stretch gap-4 gap-y-8 px-2 py-6 xl:grid-cols-3 xl:px-4 xl:py-8 2xl:px-6 2xl:py-8">
                <div className="border-dashed pe-10 xl:border-e">
                    <FlowList hook={hook} />
                </div>
                <div className="px-4 xl:px-8 2xl:px-10">
                    <Playground hook={hook} />
                </div>

                <div className="px-4 xl:px-8 2xl:px-10">
                    <FrameList hook={hook} />
                </div>
            </div>
        </div>
    );
};
