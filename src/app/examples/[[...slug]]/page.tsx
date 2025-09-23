import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug?: string[];
    }>;
}

export default async function ExamplePage(props: PageProps) {
    try {
        const path = ((await props.params).slug ?? []).join("/");
        const Component = await import(`@/demo/${path.replace(/^demo\//, "")}`).then((e) => e.default);
        return Component ? <Component /> : notFound();
    } catch (e) {
        console.error(e);
        notFound();
    }
}
