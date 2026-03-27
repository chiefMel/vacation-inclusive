import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export const metadata = {
    title: "Best Time to Visit Italy (Month-by-Month Guide)",
    description:
        "Find the best time to visit Italy based on weather, crowds, and cost. Month-by-month breakdown for first-time travelers.",
};

export default function BestTimeItaly() {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[400px]">
                <Image
                    src="/images/italy.jpg"
                    alt="Best time to visit Italy"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25" />


                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Best Time to Visit Italy
            </h1>
                        <p className="text-lg">
                            Weather, crowds, and prices — broken down by month.
            </p>
                    </div>
                </div>
            </section>

            {/*
            <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
                alt="Italy seasons"
                className="w-full h-[300px] object-cover rounded-xl my-8"
            />*/}

            {/* CONTENT */}
            <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

                {/* Back */}
                <Link href="/" className="text-blue-600 underline">
                    ← Back to Home
        </Link>

                {/* QUICK ANSWER */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Quick Answer</h2>
                    <ul className="space-y-2 text-gray-700">
                        <li>👉 Best overall: April–June, September–October</li>
                        <li>👉 Cheapest: January–March</li>
                        <li>👉 Peak season: July–August</li>
                    </ul>
                </section>

                {/* MONTH GRID */}
                <section className="grid md:grid-cols-2 gap-6">

                    <div className="border p-6 rounded-2xl">
                        <h3 className="font-semibold mb-2">Spring (Apr–Jun)</h3>
                        <p className="text-gray-600">
                            Best balance of weather, crowds, and price. Ideal for first-time visitors.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h3 className="font-semibold mb-2">Summer (Jul–Aug)</h3>
                        <p className="text-gray-600">
                            Hot, crowded, and expensive — but lively and full of events.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h3 className="font-semibold mb-2">Fall (Sep–Oct)</h3>
                        <p className="text-gray-600">
                            Great weather with fewer crowds. One of the best times to visit.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h3 className="font-semibold mb-2">Winter (Nov–Mar)</h3>
                        <p className="text-gray-600">
                            Lowest prices and fewer tourists, but cooler weather.
            </p>
                    </div>
                    <AffiliateLink href={affiliateLinks.hotelsForItinerary.romeFlorenceVenice}>
                        Check hotel prices for your dates
</AffiliateLink>
                </section>

                {/* DETAILS */}
                <section className="space-y-8">

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Weather</h2>
                        <p className="text-gray-600">
                            Summers can be extremely hot, especially in cities like Rome.
                            Spring and fall offer the most comfortable temperatures.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Crowds</h2>
                        <p className="text-gray-600">
                            July and August are peak tourist months. Expect long lines and
                            higher prices.
            </p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Cost</h2>
                        <p className="text-gray-600">
                            Flights and hotels are cheapest in winter and most expensive
                            during summer.
            </p>
                    </div>

                </section>

                {/* CTA */}
                <section className="bg-black text-white p-8 rounded-2xl text-center space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Plan Your Italy Trip
          </h2>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <a href="#" className="bg-white text-black px-5 py-2 rounded-lg">
                            Find Flights
            </a>
                        <a href="#" className="bg-white text-black px-5 py-2 rounded-lg">
                            Find Hotels
            </a>
                    </div>
                </section>

                {/* INTERNAL LINKS */}
                <section className="text-center space-y-2">
                    <Link href="/italy/7-day-itinerary" className="text-blue-600 underline block">
                        View 7 Day Italy Itinerary →
          </Link>

                    <Link href="/italy/rome-vs-florence" className="text-blue-600 underline block">
                        Compare Rome vs Florence →
          </Link>
                </section>

            </div>

        </main>
    );
}