// app/italy/where-to-stay-florence/page.tsx
import AreaSection from '@/components/AreaSection';
import HotelCard from '@/components/HotelCard';
import AffiliateLink from '@/components/AffiliateLink';
import Link from 'next/link';

export default function WhereToStayFlorence() {
    return (
        <main className="max-w-5xl mx-auto px-4">

            {/* Hero */}
            <section className="py-12 text-center">
                <h1 className="text-4xl font-bold mb-4">
                    Where to Stay in Florence (Best Areas + Hotels)
        </h1>
                <p className="text-lg mb-6">
                    Choosing the right area in Florence can make or break your trip. Here are the best neighborhoods and hotels for every type of traveler.
        </p>
                <AffiliateLink href="AFFILIATE_LINK_ALL_HOTELS">
                    <button className="border border-black px-6 py-3">
                        View All Florence Hotels
          </button>
                </AffiliateLink>
            </section>

            {/* Quick Picks */}
            <section className="py-12">
                <h2 className="text-2xl font-semibold mb-6">Best Hotels in Florence (Quick Picks)</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <HotelCard
                        name="Hotel Spadai"
                        desc="Central location near the Duomo. Modern rooms and consistently high ratings."
                        link="AFFILIATE_LINK_HOTEL_SPADAI"
                        highlight="Best Overall"
                        primaryCTA
                    />
                    <HotelCard
                        name="Four Seasons Firenze"
                        desc="One of the most luxurious stays in Florence with private gardens and spa."
                        link="AFFILIATE_LINK_FOUR_SEASONS"
                        highlight="Luxury"
                        primaryCTA
                    />
                </div>
            </section>

            {/* Area Sections */}
            <AreaSection
                title="Historic Center (Centro Storico)"
                description="Best for first-time visitors who want to walk everywhere."
                hotels={[
                    { name: 'Hotel Brunelleschi', desc: 'Steps from the Duomo with historic charm.', link: 'AFFILIATE_LINK_BRUNELLESCHI' },
                    { name: 'Hotel Spadai', desc: 'Modern, central, and highly rated.', link: 'AFFILIATE_LINK_HOTEL_SPADAI' },
                ]}
            />

            <AreaSection
                title="Santa Croce"
                description="Perfect for those who want local artisan vibes and restaurants."
                hotels={[
                    { name: 'Hotel Santa Croce', desc: 'Cozy, family-run hotel in the heart of the neighborhood.', link: 'AFFILIATE_LINK_SANTA_CROCE' },
                    { name: 'Palazzo Guadagni', desc: 'Elegant boutique with historical charm.', link: 'AFFILIATE_LINK_PALAZZO' },
                ]}
            />

            {/* Mid-page CTA */}
            <section className="py-12 text-center">
                <AffiliateLink href="AFFILIATE_LINK_ALL_HOTELS">
                    <button className="bg-black text-white px-8 py-4 text-lg">
                        See All Florence Hotel Deals
          </button>
                </AffiliateLink>
            </section>

            {/* Where NOT to Stay */}
            <section className="py-12">
                <h2 className="text-2xl font-semibold mb-4">Where NOT to Stay in Florence</h2>
                <p>
                    Avoid staying far outside the historic center unless you're on a tight budget. Transportation is limited, and you'll lose valuable time commuting.
        </p>
            </section>

            {/* FAQ Section */}
            <section className="py-12">
                <h2 className="text-2xl font-semibold mb-6">FAQs About Staying in Florence</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-semibold">Is Florence walkable?</h3>
                        <p>Yes, most major attractions are within walking distance.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Is it better to stay in the historic center?</h3>
                        <p>For first-time visitors, absolutely.</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 text-center">
                <h2 className="text-2xl font-semibold mb-6">Ready to book your stay in Florence?</h2>
                <AffiliateLink href="AFFILIATE_LINK_ALL_HOTELS">
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