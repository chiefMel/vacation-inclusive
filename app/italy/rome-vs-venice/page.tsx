import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Rome vs Venice: Which Should You Visit First?",
    description:
        "Compare Rome vs Venice for first-time visitors. Find out which city fits your travel style, budget, and time.",
};

export default function RomeVsVenice() {
    return (
        <main className="bg-white text-black hover:bg-gray-100">

            {/* HERO */}
            <section className="relative h-[400px] overflow-hidden">
                <Image
                    src="/images/venice.jpg"
                    alt="Rome vs Venice"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Rome vs Venice
            </h1>
                        <p className="text-lg">
                            Which city should you visit first? Here's the clear answer.
            </p>
                    </div>
                </div>
            </section>
            <div className="max-w-5xl mx-auto px-6 mt-8">
                <div className="w-full border text-black p-4 rounded-xl text-center">
                    <p className="font-medium mb-2">
                        Compare hotel prices in Rome & Venice for your travel dates
    </p>
                    <AffiliateLink href={affiliateLinks.hotelsForItinerary.romeFlorenceVenice} >
                        Check Prices Now
    </AffiliateLink>
                </div>
            </div>
            {/* CONTENT */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

                <Link href="/" className="text-blue-600 underline">
                    ← Back to Home
        </Link>

                {/* QUICK ANSWER */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Quick Answer</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>👉 Choose <strong>Rome</strong> for history, landmarks, and first-time visits</li>
                        <li>👉 Choose <strong>Venice</strong> for romance and unique atmosphere</li>
                        <li>👉 Visit both if you have 5–6+ days</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotelsForItinerary.romeFlorenceVenice}>
                        Compare hotel prices in Rome & Venice
          </AffiliateLink>
                </section>

                {/* COMPARISON TABLE */}
                <section className="overflow-x-auto">
                    <table className="w-full border rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="p-3 text-left">Category</th>
                                <th className="p-3 text-left">Rome</th>
                                <th className="p-3 text-left">Venice</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-700">
                            <tr className="border-t">
                                <td className="p-3">Best For</td>
                                <td className="p-3">History & landmarks</td>
                                <td className="p-3">Romance & scenery</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3">Cost</td>
                                <td className="p-3">Moderate</td>
                                <td className="p-3">Expensive</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3">Walkability</td>
                                <td className="p-3">Medium</td>
                                <td className="p-3">High</td>
                            </tr>
                            <tr className="border-t">
                                <td className="p-3">Crowds</td>
                                <td className="p-3">Busy</td>
                                <td className="p-3">Very crowded</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* ROME */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Why Choose Rome</h2>
                    <ul className="text-gray-600 space-y-2">
                        <li>✔ Colosseum, Vatican, Roman Forum</li>
                        <li>✔ Best for first-time visitors</li>
                        <li>✔ More things to do</li>
                        <li>✖ Large and busy</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.rome.center}
                    
                    >
                        Find hotels in Rome
          </AffiliateLink>
                </section>

                {/* VENICE */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">Why Choose Venice</h2>
                    <ul className="text-gray-600 space-y-2">
                        <li>✔ Unique canals and architecture</li>
                        <li>✔ Romantic atmosphere</li>
                        <li>✔ Easy to walk everywhere</li>
                        <li>✖ Expensive and crowded</li>
                    </ul>

                    <AffiliateLink href={affiliateLinks.hotels.venice.center} >
                        Find hotels in Venice
          </AffiliateLink>
                </section>

                {/* FINAL VERDICT */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Final Verdict</h2>
                    <p className="text-gray-700">
                        If it's your first time in Italy, Rome is the better starting point due to its
                        iconic landmarks and variety of experiences. Venice is perfect for a slower,
                        more romantic trip.
          </p>

                    <AffiliateLink href={affiliateLinks.flights}>
                        Compare flights to Italy
          </AffiliateLink>
                </section>

                {/* INTERNAL LINKS */}
                <section className="text-center space-y-2">
                    <Link href="/italy/7-day-itinerary" className="text-blue-600 underline block">
                        See 7-day Italy itinerary →
          </Link>

                    <Link href="/italy/rome-vs-florence" className="text-blue-600 underline block">
                        Compare Rome vs Florence →
          </Link>
                </section>

            </div>
        </main>
    );
}