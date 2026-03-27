import { NextResponse } from "next/server";

const links: Record<string, string> = {
    "rome-hotels": "https://expedia.com/affiliates/hotel-search-rome.CioQm9y",
    "florence-hotels": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.aJ2idmq",
    "venice-hotels": "https://expedia.com/affiliates/hotel-search-venice-city-center.7IloCqn",
};

export async function GET(
    req: Request,
    { params }: { params: { slug: string } }
) {
    const url = links[params.slug];

    if (!url) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.redirect(url);
}