import type { Metadata } from "next";

type Props = {
    title: string;
    description?: string;
};

export const getMetadata = ({ title, description }: Props): Metadata => {
    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            type: "article",
            url: "https://ui.paceui.com",
            images: [
                {
                    url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description ?? "")}`,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: title,
            description: description,
            images: [
                {
                    url: `/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description ?? "")}`,
                },
            ],
            creator: "@paceui_",
        },
    };
};
