import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Where to Stay in Rome (Best Areas & Hotels Guide)",
    description:
        "Find the best areas to stay in Rome — Centro Storico, Trastevere, Termini. Compare hotels and book the right location.",
};

export default function WhereToStayRome() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[420px] md:h-[520px]">
                <Image
                    src="/images/rome.jpg"
                    alt="Rome city"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Where to Stay in Rome
            </h1>
                        <p className="text-lg">
                            Best areas based on location, price, and travel style.
            </p>

                        <AffiliateLink
                            href={affiliateLinks.hotels.rome.center}
                            className="btn-primary"
                        >
                            Check Rome Hotel Prices
            </AffiliateLink>

                        <p className="text-sm">
                            Rome hotels sell out fast — especially in central areas
            </p>
                    </div>
                </div>
            </section>


            {/* PRICE CONTEXT */}
            <section className="max-w-4xl mx-auto px-6 py-8 text-center">
                <p className="text-gray-700">
                    Rome hotels typically range from <strong>$100–$400+ per night</strong> depending on area and season.
  </p>

                <AffiliateLink
                    href={affiliateLinks.hotels.rome.center}
                    className="inline-block mt-4 underline text-blue-600"
                >
                    Compare real-time prices for your dates
  </AffiliateLink>
            </section>
            {/* QUICK PICKS */}
            <section className="max-w-5xl mx-auto px-6 py-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">
                    Best Areas to Stay in Rome
        </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    <AffiliateLink href={affiliateLinks.hotels.rome.center} className="btn-primary">
                        Stay in the Center (Centro Storico)

          </AffiliateLink>

                    <AffiliateLink href={affiliateLinks.hotels.rome.trastevere} className="btn-primary">
                        Best Vibe & Food (Trastevere)
          </AffiliateLink>

                    <AffiliateLink href={affiliateLinks.hotels.rome.termini} className="btn-primary">
                        Budget & Transport (Termini)
          </AffiliateLink>
                </div>
            </section>

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto px-6 space-y-12 pb-16">

                {/* CENTRO */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Centro Storico (Best Location)</h2>
                    <p>
                        Stay near major landmarks like the Pantheon, Trevi Fountain, and Piazza Navona.
          </p>
                    <ul className="space-y-1 text-gray-700">
                        <li>✔ Walk everywhere</li>
                        <li>✔ Best for first-time visitors</li>
                        <li>✖ Higher prices</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.rome.center} className="btn-primary">
                        View Hotels in Centro Storico
          </AffiliateLink>
                </section>

                <div className="text-center">
                    <AffiliateLink
                        href={affiliateLinks.hotels.rome.center}
                        className="inline-block bg-gray-100 px-6 py-3 rounded-xl hover:shadow"
                    >
                        Compare all Rome hotels → Find best deals
  </AffiliateLink>
                </div>

                {/* TRASTEVERE */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Trastevere (Best Vibe)</h2>
                    <p>
                        Known for nightlife, restaurants, and a more local atmosphere.
          </p>
                    <ul className="space-y-1 text-gray-700">
                        <li>✔ Great food & nightlife</li>
                        <li>✔ Charming streets</li>
                        <li>✔ Slightly quieter than center</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.rome.trastevere} className="btn-primary">
                        Find Hotels in Trastevere
          </AffiliateLink>
                </section>

                {/* TERMINI */}
                <section className="border p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Termini (Best Budget)</h2>
                    <p>
                        Close to Rome’s main train station. Good for budget travelers and short stays.
          </p>
                    <ul className="space-y-1 text-gray-700">
                        <li>✔ Cheapest hotels</li>
                        <li>✔ Transport hub</li>
                        <li>✖ Less charming</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.rome.termini} className="btn-primary">
                        Browse Termini Hotels
          </AffiliateLink>
                </section>

                {/* DECISION */}
                <section className="bg-gray-50 p-6 rounded-2xl">
                    <h2 className="text-2xl font-semibold mb-2">Which Area Should You Choose?</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li><strong>First time?</strong> → Centro Storico</li>
                        <li><strong>Nightlife?</strong> → Trastevere</li>
                        <li><strong>Budget?</strong> → Termini</li>
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

                <section className="border p-6 rounded-2xl text-center space-y-3">
                    <h2 className="text-xl font-semibold">
                        Compare All Rome Areas at Once
  </h2>

                    <p className="text-gray-600">
                        See prices across Centro Storico, Trastevere, and Termini.
  </p>

                    <AffiliateLink
                        href={affiliateLinks.hotels.rome.center}
                        className="btn-primary"
                    >
                        Compare Prices Across Rome
  </AffiliateLink>
                </section>

                {/* FINAL CTA */}
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Compare Rome Hotels
          </h2>

                    <AffiliateLink href={affiliateLinks.hotels.rome.center} className="btn-primary">
                        Check All Rome Hotels
          </AffiliateLink>
                </section>

            </div>
        </main>
    );
}