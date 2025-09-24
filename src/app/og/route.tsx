import { ImageResponse } from "next/og";

async function loadGoogleFont(font: string, text: string) {
    const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(text)}`;
    const css = await (await fetch(url)).text();
    const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);

    if (resource) {
        const response = await fetch(resource[1]);
        if (response.status == 200) {
            return await response.arrayBuffer();
        }
    }

    throw new Error("failed to load font data");
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return new ImageResponse(
        (
            <div tw="flex h-full w-full text-black" style={{ fontFamily: "Work Sans", background: "#FBFBFB" }}>
                <div tw="border absolute border-dashed inset-y-0 left-16 w-[1px]" style={{ borderColor: "#E8EAEC" }} />
                <div tw="border absolute border-dashed inset-y-0 right-16 w-[1px]" style={{ borderColor: "#E8EAEC" }} />
                <div tw="border absolute inset-x-0 h-[1px] bottom-16" style={{ borderColor: "#E8EAEC" }} />
                <p tw="absolute bottom-2 right-24 text-neutral-500 text-[20px]" style={{ fontStyle: "italic" }}>
                    @paceui
                </p>
                <div tw="flex flex-col absolute w-[880px] inset-x-32 inset-y-22">
                    <img src="https://paceui.com/images/brand/logo-light.svg" tw="h-20" alt="Logo" />
                    <div tw="flex flex-col mt-20">
                        <div
                            tw="tracking-tight flex-grow-1 flex flex-col justify-center leading-[1.1]"
                            style={{
                                textWrap: "balance",
                                fontSize: title && title.length > 20 ? 64 : 80,
                                letterSpacing: "-0.04em",
                            }}>
                            {title}
                        </div>
                        <div
                            tw="text-[36px] leading-[1.4] flex-grow-1 text-neutral-600 mt-4"
                            style={{
                                textWrap: "balance",
                            }}>
                            {description}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            fonts: [
                {
                    name: "Work Sans",
                    data: await loadGoogleFont("Work Sans", `${title} ${description} @paceui`),
                    style: "normal",
                },
            ],
        },
    );
}
