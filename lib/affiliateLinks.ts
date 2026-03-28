// affiliateLinks.ts
export const affiliateLinks = {
    // Generic categories
    flights: "https://www.skyscanner.com",
    tours: "https://www.getyourguide.com/",

    
    hotelsForItinerary: {
        romeFlorenceVenice: "https://expedia.com/affiliates/rome-hotels-albergo-delle-regioni.CarigYb", // main CTA link for 7-day Italy itinerary
    },

    // Hotels per city / neighborhood
    hotels: {

        rome: {
            center: "/go/rome-hotels",
            trastevere: "/go/trastevere-hotels",
            colosseum: "/go/colosseum-hotels",
            all: "/go/all-rome-hotels",

            //center: "https://expedia.com/affiliates/rome-hotels-hotel-nazionale.J3xmB92",
            //trastevere: "https://expedia.com/affiliates/rome-hotels-giuditta-in-trastevere.isdjFuw",
            //colosseum: "https://expedia.com/affiliates/rome-hotels-hotel-viminale.0bvznqz",
            //all: "https://expedia.com/affiliates/hotel-search-rome.4iBF8Qh",
        },
        florence: {
            center: "/go/florence-hotels",
            duomo: "/go/duomo-hotels",
            spadai: "/go/spadai-hotel",// https://expedia.com/affiliates/florence-hotels-hotel-spadai.6qRj14h
            firenze: "/go/four-seasons-firenze-hotel",
            Brunelleschi: "/go/brunelleschi-hotel",

            arte: "/go/arte-boutique-hotel",
            leReveDeNaim: "/go/le-reve-de-naim-hotel",
            palazzoGuadagni: "/go/palazzo-guadagni",
            all: "/go/all-florence-hotels",
        },
        venice: {
            center: "/go/venice-hotels",
            //center: "https://expedia.com/affiliates/venice-hotels-hotel-montecarlo.8bOWCfT",
            sanMarco: "https://expedia.com/affiliates/venice-hotels-hotel-san-marco.8SjXnzT",
            cannaregio: "https://expedia.com/affiliates/venice-hotels-carnival-palace-hotel.Vy6ZxkC",
        },
    },
};