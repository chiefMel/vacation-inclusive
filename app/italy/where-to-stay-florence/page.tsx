// app/italy/where-to-stay-florence/page.tsx
import AreaSection from '@/components/AreaSection';
import HotelCard from '@/components/HotelCard';
import AffiliateLink from '@/components/AffiliateLink';
import Link from 'next/link';

export default function WhereToStayFlorence() {
    return (
        <main className="max-w-5xl mx-auto px-4">

            {/* Hero */}
            <section className="py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Where to Stay in Florence (Best Areas + Hotels)
        </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-6">
                    Choosing the right area in Florence can make or break your trip. Here are the best neighborhoods and hotels for every type of traveler.
        </p>
                <AffiliateLink href="https://www.booking.com/index.html">
                    <button className="border border-black px-6 py-3">
                        View All Florence Hotels
          </button>
                </AffiliateLink>
            </section>

            {/* Quick Picks */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Best Hotels in Florence (Quick Picks)
        </h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <HotelCard
                        name="Hotel Spadai"
                        highlight="Best Overall"
                        desc="Steps from the Duomo with modern rooms, excellent breakfast, and consistently high ratings—one of the most booked hotels in Florence."
                        link="https://www.booking.com/index.html"
                        primaryCTA
                    />
                    <HotelCard
                        name="Four Seasons Firenze"
                        highlight="Luxury"
                        desc="A peaceful luxury retreat with private gardens, spa, and world-class service just minutes from the historic center."
                        link="https://www.booking.com/index.html"
                        primaryCTA
                    />
                </div>
            </section>

            {/* Area Sections */}
            {/*hotels={[
                    {
                        name: "Hotel Brunelleschi",
                        desc: "Stay in a restored historic building just steps from Florence’s main attractions, with top-rated service and elegant rooms.",
                        link: "https://www.booking.com/index.html",
                        highlight: "Historic Stay",
                    },
                    {
                        name: "Hotel Spadai",
                        desc: "Modern boutique hotel near the Duomo with excellent reviews and a location that’s hard to beat.",
                        link: "https://www.booking.com/index.html",
                    },
                ]}*/}

            <AreaSection
                title="Historic Center (Centro Storico)"
                description="Best for first-time visitors who want to walk everywhere."
                <HotelCard
                        name="Hotel Brunelleschi"
                        highlight="Historic Stay"
                        desc="Stay in a restored historic building just steps from Florence’s main attractions, with top-rated service and elegant rooms."
                        link="https://www.booking.com/index.html",
                        primaryCTA
                    />
                <HotelCard
                        name="Hotel Spadai"
                        desc= "Modern boutique hotel near the Duomo with excellent reviews and a location that’s hard to beat.",
                        link="https://www.booking.com/index.html",
                     primaryCTA
                    />
                
            />

            <AreaSection
                title="Santa Croce"
                description="Perfect for those who want local artisan vibes and restaurants."
                hotels={[
                    {
                        name: "Hotel Santa Croce",
                        desc: "Cozy, family-run hotel in the heart of the neighborhood.",
                        link: "https://www.booking.com/index.html",
                    },
                    {
                        name: "Palazzo Guadagni",
                        desc: "Charming boutique stay with a rooftop terrace and authentic local feel in one of Florence’s most atmospheric neighborhoods.",
                        link: "https://www.booking.com/index.html",
                        highlight: "Local Favorite",
                    },
                ]}
            />

            {/* Mid-page CTA */}
            <section className="py-12 text-center">
                <AffiliateLink href="https://www.booking.com/index.html">
                    <button className="bg-black text-white px-8 py-4 text-lg">
                        See All Florence Hotel Deals
          </button>
                </AffiliateLink>
            </section>

            {/* Where NOT to Stay */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                    Where NOT to Stay in Florence
        </h2>
                <p className="text-gray-700">
                    Avoid staying far outside the historic center unless you're on a tight budget. Transportation is limited, and you'll lose valuable time commuting.
        </p>
            </section>

            {/* FAQ Section */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">FAQs About Staying in Florence</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold text-gray-800">Is Florence walkable?</h3>
                        <p className="text-gray-700">Yes, most major attractions are within walking distance.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800">Is it better to stay in the historic center?</h3>
                        <p className="text-gray-700">For first-time visitors, absolutely.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
                    Ready to book your stay in Florence?
        </h2>
                <AffiliateLink href="https://www.booking.com/index.html">
                    <button className="bg-black text-white px-8 py-4 text-lg">
                        Check Florence Hotel Deals
          </button>
                </AffiliateLink>
            </section>

            {/* Internal Linking */}
            <section className="py-12 text-center text-sm">
                <Link href="/italy/rome-vs-florence" className="underline mx-2">Rome vs Florence</Link>
                <Link href="/italy/where-to-stay-rome" className="underline mx-2">Where to Stay in Rome</Link>
                <Link href="/italy/7-day-italy-itinerary" className="underline mx-2">7-Day Italy Itinerary</Link>
            </section>

        </main>
    );
}