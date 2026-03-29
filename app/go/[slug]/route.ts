
import { NextRequest, NextResponse } from "next/server";

const links: Record<string, string> =
 {
    "rome-center": "https://expedia.com/affiliates/hotel-search-rome-city-centre.5bU9C5U",
    "rome-trastevere": "https://expedia.com/affiliates/hotel-search-trastevere.GD1nz2E",
    "rome-termini": "https://expedia.com/affiliates/hotel-search-rome-termini-station.bOEW3d2",

    "rome-hotels": "https://expedia.com/affiliates/hotel-search-rome.CioQm9y",
    "trastevere-hotels": "https://expedia.com/affiliates/rome-hotels-giuditta-in-trastevere.isdjFuw",
    "colosseum-hotels": "https://expedia.com/affiliates/rome-hotels-hotel-viminale.0bvznqz",
    "all-rome-hotels": "https://expedia.com/affiliates/hotel-search-rome.4iBF8Qh",

    "florence-center": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.aJ2idmq",
    "florence-oltrarno": "https://expedia.com/affiliates/hotel-search-oltrarno.M6A2PBv",
    "florence-smn": "https://expedia.com/affiliates/hotel-search-florence-santa-maria-novella-station.5YMJ2Ef",

    "florence-hotels": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.aJ2idmq",
    "duomo-hotels": "https://expedia.com/affiliates/florence-hotels-hotel-accademia.K0fiRRi",
    "santaCroce-hotels": "https://expedia.com/affiliates/florence-hotels-hotel-david.rHQLjExe",
    "all-florence-hotels": "https://expedia.com/affiliates/hotel-search-historic-centre-of-florence.ZASfiVD",
    "spadai-hotel": "https://expedia.com/affiliates/florence-hotels-hotel-spadai.6qRj14h",
    "four-seasons-firenze-hotel": "https://expedia.com/affiliates/florence-hotels-four-seasons-hotel-firenze.yJheeY3",
    "brunelleschi-hotel": "https://expedia.com/affiliates/florence-hotels-brunelleschi-hotel.ymqemj3",
    "arte-boutique-hotel": "https://expedia.com/affiliates/florence-hotels-arte-boutique-hotel.qQb3fdT",
    "le-reve-de-naim-hotel": "https://expedia.com/affiliates/florence-hotels-le-reve-de-naim.cx0OjMP",
    "palazzo-guadagni-hotel": "https://expedia.com/affiliates/florence-hotels-hotel-palazzo-guadagni.xNVCxtc",
    
    "dorsoduro-hotels": "https://expedia.com/affiliates/hotel-search-dorsoduro.CYaFSPo",
    "venice-hotels": "https://expedia.com/affiliates/hotel-search-venice.fEcFPZF",
    "san-marco-hotels": "https://expedia.com/affiliates/hotel-search-san-marco.ENCAFue",
    "cannaregio-hotels": "https://expedia.com/affiliates/hotel-search-cannaregio.8c3KEO2",
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