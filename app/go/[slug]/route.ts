
import { NextRequest, NextResponse } from "next/server";

const links: Record<string, string> = {
    "rome-hotels": "https://expedia.com/affiliates/hotel-search-rome.CioQm9y",
    "trastevere-hotels": "https://expedia.com/affiliates/rome-hotels-giuditta-in-trastevere.isdjFuw",
    "colosseum-hotels": "https://expedia.com/affiliates/rome-hotels-hotel-viminale.0bvznqz",
    "all-rome-hotels": "https://expedia.com/affiliates/hotel-search-rome.4iBF8Qh",

    "florence-hotels": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.aJ2idmq",
    "duomo-hotels": "https://expedia.com/affiliates/florence-hotels-hotel-accademia.K0fiRRi",
    "santaCroce-hotels": "https://expedia.com/affiliates/florence-hotels-hotel-david.rHQLjExe",
    "all-florence-hotels": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.ZASfiVD",
    "spadai-hotel": "https://expedia.com/affiliates/florence-hotels-hotel-spadai.6qRj14h",
    "four-seasons-firenze-hotel": "https://expedia.com/affiliates/florence-hotels-four-seasons-hotel-firenze.yJheeY3",
    "brunelleschi-hotel": "https://expedia.com/affiliates/florence-hotels-brunelleschi-hotel.ymqemj3",
    "arte-boutique-hotel": "https://expedia.com/affiliates/florence-hotels-arte-boutique-hotel.qQb3fdT",
    "le-reve-de-naim-hotel": "https://expedia.com/affiliates/florence-hotels-le-reve-de-naim.cx0OjMP",


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