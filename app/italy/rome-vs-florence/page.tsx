import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Rome vs Florence: Which Should You Visit First?",
    description:
        "Compare Rome vs Florence for first-time visitors and decide which city fits your travel style.",
};

export default function RomeVsFlorence() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[380px]">
                <Image
                    src="/images/italy-hero.jpg"
                    alt="Rome vs Florence"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">Rome vs Florence</h1>
                        <p className="text-lg">Which city should you visit first?</p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

                {/* Back */}
                <Link href="/" className="text-blue-600 underline">
                    ← Back to Home
        </Link>

                {/* QUICK DECISION */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Quick Decision</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>👉 Choose <strong>Rome</strong> if it’s your first time in Italy</li>
                        <li>👉 Choose <strong>Florence</strong> for a relaxed, walkable trip</li>
                        <li>👉 Visit both if you have 5+ days</li>
                    </ul>
                </section>

                {/* COMPARISON TABLE — moved earlier */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Rome vs Florence — Quick Comparison
          </h2>

                    <div className="overflow-x-auto border rounded-lg">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-4 font-medium">Feature</th>
                                    <th className="p-4 font-medium">Rome</th>
                                    <th className="p-4 font-medium">Florence</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t">
                                    <td className="p-4 font-medium">Best For</td>
                                    <td className="p-4">First-time visitors</td>
                                    <td className="p-4">Relaxed travelers</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Vibe</td>
                                    <td className="p-4">Busy & historic</td>
                                    <td className="p-4">Calm & charming</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Attractions</td>
                                    <td className="p-4">Colosseum, Vatican</td>
                                    <td className="p-4">Duomo, Uffizi</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Cost</td>
                                    <td className="p-4 font-semibold text-blue-600">Higher</td>
                                    <td className="p-4">Moderate</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Walkability</td>
                                    <td className="p-4">Medium</td>
                                    <td className="p-4">High</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-6">
                        <AffiliateLink href={affiliateLinks.hotels}>
                            Compare hotel prices in Rome & Florence
            </AffiliateLink>
                    </div>
                </section>

                {/* SIDE-BY-SIDE — moved below table */}
                <section className="grid md:grid-cols-2 gap-8">

                    {/* ROME */}
                    <div className="border rounded-2xl overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src="/images/rome.jpg"
                                alt="Rome"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold">Rome</h2>
                            <ul className="text-gray-600 space-y-1">
                                <li>✔ Iconic landmarks (Colosseum, Vatican)</li>
                                <li>✔ Best for first-time visitors</li>
                                <li>✔ More things to do</li>
                                <li>✖ Busy and spread out</li>
                            </ul>

                            <AffiliateLink href={affiliateLinks.hotels}>
                                Find hotels in Rome
              </AffiliateLink>
                        </div>
                    </div>

                    {/* FLORENCE */}
                    <div className="border rounded-2xl overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src="/images/florence.jpg"
                                alt="Florence"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold">Florence</h2>
                            <ul className="text-gray-600 space-y-1">
                                <li>✔ Compact and walkable</li>
                                <li>✔ Relaxed atmosphere</li>
                                <li>✔ Great for art & food</li>
                                <li>✖ Fewer major attractions</li>
                            </ul>

                            <AffiliateLink href={affiliateLinks.hotels}>
                                Find hotels in Florence
              </AffiliateLink>
                        </div>
                    </div>

                </section>

                {/* DETAILS */}
                <section className="space-y-8">

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Attractions</h2>
                        <p className="text-gray-600">
                            Rome is packed with world-famous landmarks, while Florence focuses
                            more on art, museums, and architecture.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Ease of Travel</h2>
                        <p className="text-gray-600">
                            Florence is easier to navigate due to its compact layout. Rome
                            requires more planning and transport.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Time Needed</h2>
                        <p className="text-gray-600">
                            Rome typically needs 2–3 days, while Florence can be explored in
                            1–2 days.
            </p>
                    </div>

                </section>

                {/* CTA */}
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">Start Planning Your Trip</h2>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <AffiliateLink href={affiliateLinks.flights}>
                            Compare Flights
            </AffiliateLink>

                        <AffiliateLink href={affiliateLinks.hotels}>
                            Book Hotels
            </AffiliateLink>
                    </div>
                </section>

                {/* INTERNAL LINK */}
                <section className="text-center">
                    <Link
                        href="/italy/7-day-itinerary"
                        className="text-blue-600 underline"
                    >
                        See full 7-day Italy itinerary →
          </Link>
                </section>

            </div>
        </main>
    );
}
