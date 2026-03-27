// app/italy/where-to-stay-florence/page.tsx
import AffiliateLink from '@/components/AffiliateLink';
import Link from 'next/link';

export default function WhereToStayFlorence() {
    return (
        <main className="max-w-5xl mx-auto px-4">

            {/* HERO */}
            <section className="py-16 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Where to Stay in Florence (Best Areas + Hotels)
        </h1>

                <p className="text-lg text-gray-700 mb-6">
                    The right location makes Florence effortless. These are the best areas and hotels based on walkability, vibe, and convenience.
        </p>

                <AffiliateLink href="https://www.booking.com/index.html">
                    <button className="border border-black text-black px-6 py-3 font-semibold">
                        View All Florence Hotels
          </button>
                </AffiliateLink>
            </section>
            {/**/}

            {/* QUICK PICKS */}
            <section className="py-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">
                    Best Hotels in Florence (Quick Picks)
        </h2>

                <div className="grid gap-6 md:grid-cols-2">

                    {/* CARD 1 */}
                    <div className="border border-gray-200 p-6 rounded-2xl">
                        <p className="text-xs border border-black inline-block px-2 py-1 mb-2">
                            Best Overall
            </p>

                        <h3 className="font-semibold text-lg text-gray-900">
                            Hotel Spadai
            </h3>

                        <p className="text-gray-700 mb-4">
                            Steps from the Duomo with modern rooms, excellent breakfast, and top reviews. One of the most reliable stays in Florence.
            </p>

                        <AffiliateLink href="https://www.booking.com/index.html">
                            <button className="w-full bg-black text-white px-5 py-3 font-semibold">
                                Check Availability
              </button>
                        </AffiliateLink>
                    </div>

                    {/* CARD 2 */}
                    <div className="border border-gray-200 p-6 rounded-2xl">
                        <p className="text-xs border border-black inline-block px-2 py-1 mb-2">
                            Luxury
            </p>

                        <h3 className="font-semibold text-lg text-gray-900">
                            Four Seasons Firenze
            </h3>

                        <p className="text-gray-700 mb-4">
                            Quiet luxury with private gardens, spa, and world-class service just outside the busy center.
            </p>

                        <AffiliateLink href="https://www.booking.com/index.html">
                            <button className="w-full bg-black text-white px-5 py-3 font-semibold">
                                Check Availability
              </button>
                        </AffiliateLink>
                    </div>

                </div>
            </section>

            {/* AREA 1 */}
            <section className="py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Historic Center (Centro Storico)
        </h2>
                <p className="text-gray-700 mb-6">
                    Best for first-time visitors. You can walk to all major attractions.
        </p>

                <div className="grid gap-6 md:grid-cols-2">

                    <div className="border border-gray-200 p-6 rounded-2xl">
                        <h3 className="font-semibold text-gray-900">
                            Hotel Brunelleschi
            </h3>
                        <p className="text-gray-700 mb-4">
                            Historic building steps from Florence’s top sights with elegant rooms and excellent service.
            </p>
                        <AffiliateLink href="https://www.booking.com/index.html">
                            <button className="w-full border border-black text-black px-5 py-3 font-semibold">
                                View Hotel
              </button>
                        </AffiliateLink>
                    </div>

                    <div className="border border-gray-200 p-6 rounded-2xl">
                        <h3 className="font-semibold text-gray-900">
                            Hotel Spadai
            </h3>
                        <p className="text-gray-700 mb-4">
                            Modern boutique stay near the Duomo with unbeatable location and reviews.
            </p>
                        <AffiliateLink href="https://www.booking.com/index.html">
                            <button className="w-full border border-black text-black px-5 py-3 font-semibold">
                                View Hotel
              </button>
                        </AffiliateLink>
                    </div>

                </div>
            </section>

            {/* AREA 2 */}
            <section className="py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    Santa Croce
        </h2>
                <p className="text-gray-700 mb-6">
                    Best for local vibes, artisan shops, and great food.
        </p>

                <div className="grid gap-6 md:grid-cols-2">

                    <div className="border border-gray-200 p-6 rounded-2xl">
                        <h3 className="font-semibold text-gray-900">
                            Hotel Santa Croce
            </h3>
                        <p className="text-gray-700 mb-4">
                            Cozy and affordable stay in a lively, authentic neighborhood.
            </p>
                        <AffiliateLink href="https://www.booking.com/index.html">
                            <button className="w-full border border-black text-black px-5 py-3 font-semibold">
                                View Hotel
              </button>
                        </AffiliateLink>
                    </div>

                    <div className="border border-gray-200 p-6 rounded-2xl">
                        <p className="text-xs border border-black inline-block px-2 py-1 mb-2">
                            Local Favorite
            </p>

                        <h3 className="font-semibold text-gray-900">
                            Palazzo Guadagni
            </h3>

                        <p className="text-gray-700 mb-4">
                            Boutique hotel with rooftop terrace and authentic Florentine atmosphere.
            </p>

                        <AffiliateLink href="https://www.booking.com/index.html">
                            <button className="w-full border border-black text-black px-5 py-3 font-semibold">
                                View Hotel
              </button>
                        </AffiliateLink>
                    </div>

                </div>
            </section>

            {/* MID CTA */}
            <section className="py-12 text-center">
                <AffiliateLink href="https://www.booking.com/index.html">
                    <button className="bg-black text-white px-8 py-4 text-lg font-semibold">
                        See All Florence Hotel Deals
          </button>
                </AffiliateLink>
            </section>

            {/* WHERE NOT TO STAY */}
            <section className="py-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Where NOT to Stay in Florence
        </h2>
                <p className="text-gray-700">
                    Avoid staying far outside the historic center unless you're on a tight budget. You'll lose time commuting and miss the walkable charm.
        </p>
            </section>

            {/* FINAL CTA */}
            <section className="py-16 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    Ready to book your stay in Florence?
        </h2>

                <AffiliateLink href="https://www.booking.com/index.html">
                    <button className="bg-black text-white px-8 py-4 text-lg font-semibold">
                        Check Florence Hotel Deals
          </button>
                </AffiliateLink>
            </section>

            {/* INTERNAL LINKS */}
            <section className="py-12 text-center text-sm">
                <Link href="/italy/rome-vs-florence" className="underline mx-2">
                    Rome vs Florence
        </Link>
                <Link href="/italy/where-to-stay-rome" className="underline mx-2">
                    Where to Stay in Rome
        </Link>
                <Link href="/italy/7-day-italy-itinerary" className="underline mx-2">
                    7-Day Italy Itinerary
        </Link>
            </section>

        </main>
    );
}