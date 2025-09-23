"use server";

import axios from "axios";

export type ISubscribeResponse = {
    success: boolean;
    message: string;
};

export const subscribe = async ({ email }: { email: string }): Promise<ISubscribeResponse> => {
    const apiKey = process.env.CONVERTKIT_API_KEY;

    if (!apiKey) {
        return {
            success: false,
            message: "Missing API key",
        };
    }

    const url = `https://api.convertkit.com/v3/forms/7680297/subscribe`;

    const contactData = {
        email,
        api_key: apiKey,
    };

    try {
        await axios.post(url, contactData);

        return {
            message: "Subscribed",
            success: true,
        };
        // @ts-expect-error
    } catch (e: never) {
        return {
            success: false,
            message: e?.response?.data?.message ?? "Error adding contact",
        };
    }
};
