import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "7 Day Italy Itinerary for First-Time Visitors (No Car Needed)",
    description:
        "A simple 7-day Italy itinerary covering Rome, Florence, and Venice using trains.",
};

export default function ItalyItineraryPage() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[400px]">
                <Image
                    src="/images/italy.jpg"
                    alt="Italy travel"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            7 Day Italy Itinerary
            </h1>
                        <p className="text-lg">
                            Rome, Florence & Venice — simple route, no car needed.
            </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <AffiliateLink href={affiliateLinks.hotels.rome.center}>
                                Rome Hotels
  </AffiliateLink>

                            <AffiliateLink href={affiliateLinks.hotels.florence.center}>
                                Florence Hotels
  </AffiliateLink>

                            <AffiliateLink href={affiliateLinks.hotels.venice.center}>
                                Venice Hotels
  </AffiliateLink>
</div>
                    </div>
                </div>
            </section>
            {/*
            <img
                src=""
                alt=" route"
                className="w-full h-[300px] object-cover rounded-xl my-8"
            />
            {/* CONTENT */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* Back */}
                <Link href="/" className="text-blue-600 underline">
                    ← Back to Home
        </Link>

                {/* QUICK PLAN */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <p className="text-sm text-gray-600">
                        Prices change daily — check your travel dates now
</p>
                    <h2 className="text-2xl font-semibold">Quick Plan</h2>
                    <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                        <li>Day 1–2: Rome</li>
                        <li>Day 3–4: Florence</li>
                        <li>Day 5–6: Venice</li>
                        <li>Day 7: Departure</li>
                    </ul>
                </section>

                <div className="border p-4 rounded-xl text-center">
                    <p className="font-medium mb-2">
                        Hotels fill up fast in peak season — check your dates now
  </p>

                    <AffiliateLink href={affiliateLinks.hotels.rome.center}>
                        Check Availability in Rome
  </AffiliateLink>
                </div>

                {/* DAY SECTIONS */}
                <section className="space-y-8">

                    <div className="border p-6 rounded-2xl space-y-3">
                        <h2 className="text-xl font-semibold">Day 1–2: Rome</h2>
                        <p className="text-gray-600">
                            Visit iconic landmarks like the Colosseum and Vatican City.
                            Expect crowds but unmatched history.
            </p>

                        <AffiliateLink href={affiliateLinks.hotels.rome.center}>
                            Check Rome hotel prices
</AffiliateLink>
                       
                    </div>

                    <div className="border p-6 rounded-2xl space-y-3">
                        <h2 className="text-xl font-semibold">Day 3–4: Florence</h2>
                        <p className="text-gray-600">
                            A compact city known for Renaissance art and walkable streets.
            </p>

                        <AffiliateLink href={affiliateLinks.hotels.florence.center}>
                            See best hotels in Florence
</AffiliateLink>
                        
                    </div>

                    <div className="border p-6 rounded-2xl space-y-3">
                        <h2 className="text-xl font-semibold">Day 5–6: Venice</h2>
                        <p className="text-gray-600">
                            Explore canals, bridges, and unique neighborhoods.
            </p>
                        <AffiliateLink href={affiliateLinks.hotels.venice.center}>
                            View Venice hotel deals
</AffiliateLink>
                        {/*<a href="https://www.booking.com/index.html" className="text-blue-600 underline">
                            Find stays in Venice
            </a>*/}
                    </div>

                </section>

                {/* COST */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h2 className="text-2xl font-semibold">Estimated Cost</h2>
                    <ul className="text-gray-700 space-y-1">
                        <li>Flights: $500–$900</li>
                        <li>Hotels: $700–$1500</li>
                        <li>Total: $1,600 – $3,000</li>
                    </ul>
                </section>

                {/* CTA */}
                
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Plan Your Italy Trip
          </h2>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <AffiliateLink href={affiliateLinks.hotels.rome.center}>
                            Rome Hotels
  </AffiliateLink>

                        <AffiliateLink href={affiliateLinks.hotels.florence.center}>
                            Florence Hotels
  </AffiliateLink>

                        <AffiliateLink href={affiliateLinks.hotels.venice.center}>
                            Venice Hotels
  </AffiliateLink>

                        <AffiliateLink href={affiliateLinks.flights}>
                            Compare Flights
  </AffiliateLink>

                        <AffiliateLink href={affiliateLinks.tours}>
                            Book Tours
  </AffiliateLink>
                    </div>
                </section>
                
                {/* INTERNAL LINK */}
                <section className="text-center">
                    <Link
                        href="/italy/where-to-stay-rome"
                        className="text-blue-600 underline"
                    >
                        Best areas to stay in Rome →
          </Link>
                </section>

            </div>

        </main>
    );
}