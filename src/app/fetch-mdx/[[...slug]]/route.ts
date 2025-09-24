import { notFound } from "next/navigation";
import { type NextRequest, NextResponse } from "next/server";
import fs from "node:fs/promises";

import { source } from "@/lib/source";

export const revalidate = 604800;

export function generateStaticParams() {
    return source.generateParams();
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ slug?: string[] }> }) {
    const { slug } = await params;
    const page = source.getPage(slug);
    if (!page) notFound();

    return new NextResponse((await fs.readFile(page.absolutePath)).toString());
}
