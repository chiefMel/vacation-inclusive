import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Where to Stay in Florence (Best Areas & Hotels Guide)",
    description:
        "Find the best areas to stay in Florence — Historic Center, Oltrarno, Santa Maria Novella. Compare hotels and book the right location.",
};

export default function WhereToStayFlorence() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[420px] md:h-[520px]">
                <Image
                    src="/images/florence.jpg"
                    alt="Florence skyline"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Where to Stay in Florence
            </h1>
                        <p className="text-lg">
                            Best areas for first-time visitors — walkable, central, and easy to navigate.
            </p>

                        <AffiliateLink
                            href={affiliateLinks.hotels.florence.center}
                            className="btn-primary"
                        >
                            Check Florence Hotel Prices
            </AffiliateLink>

                        <p className="text-sm">
                            Prices change fast — top hotels sell out quickly in Florence
            </p>
                    </div>
                </div>
            </section>

            {/* PRICE CONTEXT */}
            <section className="max-w-4xl mx-auto px-6 py-8 text-center">
                <p className="text-gray-700">
                    Florence hotels typically range from <strong>$120–$350 per night</strong> depending on location and season.
  </p>

                <AffiliateLink
                    href={affiliateLinks.hotels.florence.center}
                    className="inline-block mt-4 underline text-blue-600"
                >
                    Compare real-time prices for your dates
  </AffiliateLink>
            </section>

            {/* QUICK PICKS */}
            <section className="max-w-5xl mx-auto px-6 py-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Best Areas to Stay in Florence
        </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    <AffiliateLink href={affiliateLinks.hotels.florence.center} className="btn-primary">
                        Stay in the Center (Historic Center)
          </AffiliateLink>

                    <AffiliateLink href={affiliateLinks.hotels.florence.oltrarno} className="btn-primary">
                        Local & Quiet (Oltrarno)
          </AffiliateLink>

                    <AffiliateLink href={affiliateLinks.hotels.florence.smn} className="btn-primary">
                        Near Train Station (SMN)
          </AffiliateLink>
                </div>
            </section>

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto px-6 space-y-12 pb-16">

                {/* HISTORIC CENTER */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Historic Center (Best Location)</h2>
                    <p>
                        Stay near the Duomo, Uffizi Gallery, and Ponte Vecchio. Everything is within walking distance.
          </p>
                    <ul className="space-y-1 text-gray-700">
                        <li>✔ Walk to all major attractions</li>
                        <li>✔ Best for first-time visitors</li>
                        <li>✖ Higher prices</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.florence.center} className="btn-primary">
                        View Hotels in Historic Center
          </AffiliateLink>
                </section>

                <div className="text-center">
                    <AffiliateLink
                        href={affiliateLinks.hotels.florence.center}
                        className="inline-block bg-gray-100 px-6 py-3 rounded-xl hover:shadow"
                    >
                        Compare all Florence hotels → Find best deals
  </AffiliateLink>
                </div>

                {/* OLTRARNO */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Oltrarno (Local Experience)</h2>
                    <p>
                        A quieter area across the river with artisan shops, local restaurants, and fewer tourists.
          </p>
                    <ul className="space-y-1 text-gray-700">
                        <li>✔ More authentic vibe</li>
                        <li>✔ Less crowded</li>
                        <li>✔ Great food scene</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.florence.oltrarno} className="btn-primary">
                        Find Hotels in Oltrarno
          </AffiliateLink>
                </section>

                {/* SMN */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Santa Maria Novella (Best for Transport)</h2>
                    <p>
                        Ideal if you're arriving by train. Close to the station with easy access to the city center.
          </p>
                    <ul className="space-y-1 text-gray-700">
                        <li>✔ Close to train station</li>
                        <li>✔ Convenient for short stays</li>
                        <li>✔ Good hotel availability</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.florence.smn} className="btn-primary">
                        Browse Hotels Near Station
          </AffiliateLink>
                </section>

                {/* DECISION */}
                <section className="bg-gray-50 p-6 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-2">Which Area Should You Choose?</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>First time?</strong> → Historic Center</li>
                        <li><strong>Want local vibe?</strong> → Oltrarno</li>
                        <li><strong>Short trip?</strong> → Near station</li>
                    </ul>
                </section>

                <section className="border p-6 rounded-2xl text-center space-y-3">
                    <h2 className="text-xl font-semibold">
                        Compare All Florence Areas at Once
  </h2>

                    <p className="text-gray-600">
                        See prices across the Historic Center, Oltrarno, and SMN for your dates.
  </p>

                    <AffiliateLink
                        href={affiliateLinks.hotels.florence.center}
                        className="btn-primary"
                    >
                        Compare Prices Across Florence
  </AffiliateLink>
                </section>

                {/* FINAL CTA */}
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Compare Florence Hotels
          </h2>

                    <AffiliateLink href={affiliateLinks.hotels.florence.center} className="btn-primary">
                        Check All Florence Hotels
          </AffiliateLink>
                </section>

            </div>
        </main>
    );
}