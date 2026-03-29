import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Where to Stay in Venice (Best Areas & Hotels Guide)",
    description:
        "Find the best areas to stay in Venice — San Marco, Dorsoduro, Cannaregio. Compare hotels and book the right location.",
};

export default function WhereToStayVenice() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[420px] md:h-[520px]">
                <Image
                    src="/images/venice.jpg"
                    alt="Venice canals"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Where to Stay in Venice
            </h1>
                        <p className="text-lg">
                            Best areas for first-time visitors — based on location, price, and experience.
            </p>

                        <AffiliateLink
                            href={affiliateLinks.hotels.venice.center}
                            className="btn-primary"
                        >
                            Check Venice Hotel Prices
            </AffiliateLink>

                        <p className="text-sm">
                            Prices change fast — check availability for your travel dates
            </p>
                    </div>
                </div>
            </section>

            {/* QUICK PICKS */}
            <section className="max-w-5xl mx-auto px-6 py-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Best Areas to Stay in Venice
        </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    <AffiliateLink href={affiliateLinks.hotels.venice.sanMarco} className="btn-primary">
                        San Marco Hotels
          </AffiliateLink>

                    <AffiliateLink href={affiliateLinks.hotels.venice.dorsoduro} className="btn-primary">
                        Dorsoduro Hotels
          </AffiliateLink>

                    <AffiliateLink href={affiliateLinks.hotels.venice.cannaregio} className="btn-primary">
                        Cannaregio Hotels
          </AffiliateLink>
                </div>
            </section>

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto px-6 space-y-12 pb-16">

                {/* SAN MARCO */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">San Marco (Best Location)</h2>
                    <p>
                        The most central and iconic area in Venice. Stay here if you want to be
                        within walking distance of major attractions like St. Mark’s Square.
          </p>
                    <ul className="text-gray-700 space-y-1">
                        <li>✔ Best for first-time visitors</li>
                        <li>✔ Walk to major landmarks</li>
                        <li>✖ Most expensive area</li>
                    </ul>

                    <AffiliateLink
                        href={affiliateLinks.hotels.venice.sanMarco}
                        className="btn-primary"
                    >
                        View San Marco Hotels
          </AffiliateLink>
                </section>

                {/* DORSODURO */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Dorsoduro (Best Balance)</h2>
                    <p>
                        A quieter, more local neighborhood with great views and fewer crowds.
                        Perfect if you want a relaxed Venice experience.
          </p>
                    <ul className="text-gray-700 space-y-1">
                        <li>✔ Less crowded</li>
                        <li>✔ Great restaurants</li>
                        <li>✔ Better value hotels</li>
                    </ul>

                    <AffiliateLink
                        href={affiliateLinks.hotels.venice.dorsoduro}
                        className="btn-primary"
                    >
                        Find Hotels in Dorsoduro
          </AffiliateLink>
                </section>

                {/* CANNAREGIO */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Cannaregio (Best Budget Area)</h2>
                    <p>
                        A more affordable area with a local vibe. Great for budget travelers
                        who still want easy access to the main sights.
          </p>
                    <ul className="text-gray-700 space-y-1">
                        <li>✔ Lower hotel prices</li>
                        <li>✔ Local atmosphere</li>
                        <li>✔ Close to train station</li>
                    </ul>

                    <AffiliateLink
                        href={affiliateLinks.hotels.venice.cannaregio}
                        className="btn-primary"
                    >
                        Browse Cannaregio Hotels
          </AffiliateLink>
                </section>

                {/* DECISION HELPER */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-3">
                    <h2 className="text-2xl font-semibold">Which Area Should You Choose?</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>First time?</strong> → Stay in San Marco</li>
                        <li><strong>Want quieter?</strong> → Choose Dorsoduro</li>
                        <li><strong>On a budget?</strong> → Pick Cannaregio</li>
                    </ul>
                </section>

                {/* FINAL CTA */}
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Ready to Book Your Venice Stay?
          </h2>
                    <p>
                        Compare hotels across all areas and secure the best price for your trip.
          </p>

                    <AffiliateLink
                        href={affiliateLinks.hotels.venice.center}
                        className="btn-primary"
                    >
                        Check All Venice Hotels
          </AffiliateLink>
                </section>

            </div>
        </main>
    );
}