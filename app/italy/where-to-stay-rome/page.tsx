import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";
import Link from "next/link";

export const metadata = {
    title: "Where to Stay in Rome: Best Areas for First-Time Visitors",
    description:
        "Find the best areas to stay in Rome based on your travel style, budget, and itinerary.",
};

export default function WhereToStayRome() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[400px]">
                <Image
                    src="/images/rome.jpg"
                    alt="Where to stay in Rome"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Where to Stay in Rome
            </h1>
                        <p className="text-lg">
                            Best neighborhoods for first-time visitors, convenience, and experience.
            </p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

                {/* Back */}
                <Link href="/" className="text-blue-600 underline">
                    ← Back to Home
        </Link>

                {/* QUICK ANSWER */}
                <section className="bg-gray-50 p-6 rounded-2xl">
                    <h2 className="text-xl font-semibold mb-2">Quick Answer</h2>
                    <p className="text-gray-700">
                        Stay in the Historic Center for convenience, Trastevere for charm,
                        or near Termini if you're on a budget or using trains frequently.
          </p>
                </section>

                {/* AREAS */}
                <section className="space-y-8">

                    {/* Historic Center */}
                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Historic Center</h2>
                        <p className="text-gray-600 mb-4">
                            Best for first-time visitors. Close to major attractions like the
                            Pantheon, Trevi Fountain, and Piazza Navona.
            </p>

                        <p className="text-sm text-gray-600 mb-2">
                            Prices vary by location — check current availability:
            </p>

                        <AffiliateLink href={affiliateLinks.hotels.rome.center}>
                            Find hotels in Historic Center
            </AffiliateLink>
                    </div>

                    {/* Trastevere */}
                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Trastevere</h2>
                        <p className="text-gray-600 mb-4">
                            Charming neighborhood with great restaurants and a local vibe.
                            Ideal for a more relaxed stay.
            </p>

                        <p className="text-sm text-gray-600 mb-2">
                            Check available stays in this area:
            </p>

                        <AffiliateLink href={affiliateLinks.hotels.rome.trastevere}>
                            Explore Trastevere hotels
            </AffiliateLink>
                    </div>

                    {/* Colosseum */}
                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Near Termini</h2>
                        <p className="text-gray-600 mb-4">
                            Best for budget travelers and easy access to trains and transport.
            </p>

                        <p className="text-sm text-gray-600 mb-2">
                            Compare budget-friendly options:
            </p>

                        <AffiliateLink href={affiliateLinks.hotels.rome.colosseum}>
                            Find budget hotels near Termini
            </AffiliateLink>
                    </div>

                </section>

                {/* FINAL CTA */}
                <section className="text-center">
                    <p className="text-sm text-gray-600 mb-2">
                        Compare prices across all Rome neighborhoods:
          </p>

                    <AffiliateLink href={affiliateLinks.hotels}>
                        See all available hotels in Rome
          </AffiliateLink>
                </section>

                {/* INTERNAL LINK */}
                <section className="text-center">
                    <Link
                        href="/italy/7-day-itinerary"
                        className="text-blue-600 underline"
                    >
                        See how Rome fits into a 7-day Italy itinerary →
          </Link>
                </section>

            </div>

        </main>
    );
}