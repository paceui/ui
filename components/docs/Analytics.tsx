"use client";

import { type BeforeSendEvent, Analytics as VercelAnalytics } from "@vercel/analytics/next";

export const Analytics = () => {
    return (
        <VercelAnalytics
            beforeSend={(event: BeforeSendEvent) => {
                if (event.type === "pageview") {
                    return event;
                }
                return null;
            }}
        />
    );
};
