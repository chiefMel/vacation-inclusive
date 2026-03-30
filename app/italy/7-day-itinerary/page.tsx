import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";
import LocalInsights from "@/components/LocalInsightsVenice";
import LocalInsightsRome from "@/components/LocalInsightsRome";
import LocalInsightsFlorence from "@/components/LocalInsightsFlorence";

export const metadata = {
    title: "7-Day Italy Itinerary for First-Time Visitors — Book Hotels Fast",
    description:
        "Explore Rome, Florence, and Venice in 7 days. Easy train travel, top hotels, and fast booking links included.",
};

export default function ItalyItineraryPage() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[450px] md:h-[550px]">
                <Image
                    src="/images/italy.jpg"
                    alt="Italy travel"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            7-Day Italy Itinerary
            </h1>
                        <p className="text-lg">
                            Rome → Florence → Venice — the easiest route for first-time travelers, no car needed.
            </p>
                        <AffiliateLink
                            href={affiliateLinks.hotels.rome.center}
                            className="inline-block mt-4 px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition"
                        >
                            Check Hotel Availability in Rome
            </AffiliateLink>
                        <p className="text-sm mt-2">
                            Prices update daily — book early for the best rates
            </p>
                    </div>
                </div>
            </section>

            {/* QUICK NAV CTA */}
            <section className="max-w-5xl mx-auto px-6 py-8 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Quick Booking Options
        </h2>
                <div className="flex justify-center gap-4 flex-wrap">
                    <AffiliateLink href={affiliateLinks.hotels.rome.center} className="btn-primary">
                        Rome Hotels
          </AffiliateLink>
                    <AffiliateLink href={affiliateLinks.hotels.florence.center} className="btn-primary">
                        Florence Hotels
          </AffiliateLink>
                    <AffiliateLink href={affiliateLinks.hotels.venice.center} className="btn-primary">
                        Venice Hotels
          </AffiliateLink>
                    <AffiliateLink href={affiliateLinks.flights} className="btn-secondary">
                        Compare Flights
          </AffiliateLink>
                    <AffiliateLink href={affiliateLinks.tours} className="btn-secondary">
                        Book Tours
          </AffiliateLink>
                </div>
            </section>

            {/* ITINERARY CONTENT */}
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">

                {/* DAYS 1–2: ROME */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Days 1–2: Rome</h2>
                    <p>
                        Explore the Colosseum, Vatican City, and Trastevere. Rome is crowded but full of history — the perfect start.
          </p>
                    <AffiliateLink
                        href={affiliateLinks.hotels.rome.center}
                        className="btn-primary"
                    >
                        Find Hotels in Rome
          </AffiliateLink>
                    <LocalInsightsRome />
                </section>

                {/* DAYS 3–4: FLORENCE */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Days 3–4: Florence</h2>
                    <p>
                        Walkable Renaissance city with iconic art, the Duomo, and Ponte Vecchio. Easy to navigate and soak in Italian culture.
          </p>
                    <AffiliateLink
                        href={affiliateLinks.hotels.florence.center}
                        className="btn-primary"
                    >
                        Compare Hotels in Florence
          </AffiliateLink>
                    <LocalInsightsFlorence />
                </section>

                {/* DAYS 5–6: VENICE */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Days 5–6: Venice</h2>
                    <p>
                        Explore canals, bridges, and neighborhoods like San Marco and Dorsoduro. Venice is unique — stay near main attractions.
          </p>
                    <AffiliateLink
                        href={affiliateLinks.hotels.venice.center}
                        className="btn-primary"
                    >
                        Book Venice Hotels
          </AffiliateLink>
                    <LocalInsightsVenic />

                </section>

                {/* DAY 7: DEPARTURE */}
                <section className="border p-6 rounded-2xl space-y-2">
                    <h2 className="text-2xl font-semibold">Day 7: Departure</h2>
                    <p>
                        Travel back home or continue exploring nearby Italian regions. Ensure your hotels and trains are booked in advance.
          </p>
                </section>

                {/* COST ESTIMATE */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h2 className="text-2xl font-semibold">Estimated Cost</h2>
                    <ul className="space-y-1 text-gray-700">
                        <li>Flights: $500–$900</li>
                        <li>Hotels: $700–$1,500</li>
                        <li>Total: $1,600–$3,000</li>
                    </ul>
                </section>

                {/* FINAL CTA BLOCK */}
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Ready to Book Your Italy Trip?
          </h2>
                    <p>Check hotel availability in Rome, Florence, and Venice now — prices update daily!</p>
                    <div className="flex justify-center gap-4 flex-wrap mt-4">
                        <AffiliateLink href={affiliateLinks.hotels.rome.center} className="btn-primary">
                            Rome Hotels
            </AffiliateLink>
                        <AffiliateLink href={affiliateLinks.hotels.florence.center} className="btn-primary">
                            Florence Hotels
            </AffiliateLink>
                        <AffiliateLink href={affiliateLinks.hotels.venice.center} className="btn-primary">
                            Venice Hotels
            </AffiliateLink>
                    </div>
                </section>
                  
                {/* INTERNAL NAVIGATION */}
                <section className="text-center mt-8">
                    <Link
                        href="/italy/rome-vs-florence"
                        className="text-blue-600 underline font-medium"
                    >
                        Not sure where to start? Compare Rome vs Florence →
          </Link>
                </section>
            </div>
        </main>
    );
}