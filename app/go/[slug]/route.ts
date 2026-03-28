
import { NextRequest, NextResponse } from "next/server";

const links: Record<string, string> = {
    "rome-hotels": "https://expedia.com/affiliates/hotel-search-rome.CioQm9y",
    "florence-hotels": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.aJ2idmq",
    "venice-hotels": "https://expedia.com/affiliates/hotel-search-venice-city-center.7IloCqn",
};

export async function GET(
    request: NextRequest,
    context: { params: Promise<{ slug: string }> }
) {
    const { slug } = await context.params;

    const url = links[slug];

    if (!url) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    return NextResponse.redirect(url);
}

//push