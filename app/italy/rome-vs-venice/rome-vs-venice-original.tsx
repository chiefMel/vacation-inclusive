import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Rome vs Venice: Which Should You Visit First?",
    description:
        "Compare Rome vs Venice for first-time visitors and decide which city fits your travel style.",
};

export default function RomeVsVenice() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[380px]">
                <Image
                    src="/images/venice.jpg"
                    alt="Rome vs Venice"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">Rome vs Venice</h1>
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
                        <li>👉 Choose <strong>Rome</strong> for history, landmarks, and first-time visits</li>
                        <li>👉 Choose <strong>Venice</strong> for romance and unique atmosphere</li>
                        <li>👉 Visit both if you have 5–6+ days</li>
                    </ul>
                </section>

                {/* COMPARISON TABLE — moved earlier */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        Rome vs Venice — Quick Comparison
          </h2>

                    <div className="overflow-x-auto border rounded-lg">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-4 font-medium">Category</th>
                                    <th className="p-4 font-medium">Rome</th>
                                    <th className="p-4 font-medium">Venice</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr className="border-t">
                                    <td className="p-4 font-medium">Best For</td>
                                    <td className="p-4">History & landmarks</td>
                                    <td className="p-4">Romance & scenery</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Cost</td>
                                    <td className="p-4">Moderate</td>
                                    <td className="p-4 font-semibold text-blue-600">Expensive</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Walkability</td>
                                    <td className="p-4">Medium</td>
                                    <td className="p-4">High</td>
                                </tr>

                                <tr className="border-t">
                                    <td className="p-4 font-medium">Crowds</td>
                                    <td className="p-4">Busy</td>
                                    <td className="p-4">Very crowded</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-6">
                        <AffiliateLink href={affiliateLinks.hotels}>
                            Compare hotel prices in Rome & Venice
            </AffiliateLink>
                    </div>
                </section>

                {/* SIDE-BY-SIDE */}
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
                                <li>✔ Colosseum, Vatican, Roman Forum</li>
                                <li>✔ Best for first-time visitors</li>
                                <li>✔ More things to do</li>
                                <li>✖ Large and busy</li>
                            </ul>

                            <AffiliateLink href={affiliateLinks.hotels}>
                                Find hotels in Rome
              </AffiliateLink>
                        </div>
                    </div>

                    {/* VENICE */}
                    <div className="border rounded-2xl overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src="/images/venice.jpg"
                                alt="Venice"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold">Venice</h2>
                            <ul className="text-gray-600 space-y-1">
                                <li>✔ Unique canals and architecture</li>
                                <li>✔ Romantic atmosphere</li>
                                <li>✔ Easy to walk everywhere</li>
                                <li>✖ Expensive and crowded</li>
                            </ul>

                            <AffiliateLink href={affiliateLinks.hotels}>
                                Find hotels in Venice
              </AffiliateLink>
                        </div>
                    </div>

                </section>

                {/* DETAILS */}
                <section className="space-y-8">

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Attractions</h2>
                        <p className="text-gray-600">
                            Rome offers iconic landmarks and ancient history, while Venice delivers
                            a one‑of‑a‑kind canal experience and romantic scenery.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Ease of Travel</h2>
                        <p className="text-gray-600">
                            Venice is extremely walkable, while Rome is larger and requires more
                            transportation planning.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Time Needed</h2>
                        <p className="text-gray-600">
                            Rome typically needs 2–3 days. Venice can be enjoyed in 1–2 days,
                            depending on your pace.
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

                {/* INTERNAL LINKS */}
                <section className="text-center space-y-2">
                    <Link href="/italy/7-day-itinerary" className="text-blue-600 underline">
                        See 7-day Italy itinerary →
          </Link>
                    <br />
                    <Link href="/italy/rome-vs-florence" className="text-blue-600 underline">
                        Compare Rome vs Florence →
          </Link>
                </section>

            </div>
        </main>
    );
}
