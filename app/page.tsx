import Link from "next/link";
import Image from "next/image";
import AffiliateLink from "@/components/AffiliateLink";
import { affiliateLinks } from "@/lib/affiliateLinks";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">

 
          
          {/* HERO src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" className="absolute inset-0 w-full h-full object-cover"*/}
          {/*className="absolute inset-0 w-full h-full object-cover scale-105 block"*/}
          <section className="relative h-[500px] overflow-hidden">

              <img
                  src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34"
                  alt="Italy travel"
                  
                  className="absolute inset-0 w-full h-full object-cover scale-105 hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-6">
                  <div>
                      <h1 className="text-4xl md:text-6xl font-bold mb-4">
                          Plan Smarter Trips
      </h1>
                      <p className="text-lg">
                          Proven itineraries, comparisons, and travel planning tools
      </p>
                  </div>
              </div>

          </section>


          {/* ADD ABOUT SECTION HERE */}
          <section className="max-w-3xl mx-auto text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">
                  Smarter Travel Planning
        </h2>
              <p className="text-gray-600">
                  Vacation-Inclusive helps you plan trips faster with proven itineraries,
                  destination comparisons, and practical travel advice.
        </p>
          </section>

          {/* WHERE TO STAY (PRIMARY MONEY SECTION) */}
          <section className="max-w-6xl mx-auto px-6 py-16">
              <h2 className="text-3xl font-bold text-center mb-4">
                  Where to Stay in Italy
  </h2>

              <p className="text-center text-gray-600 mb-8">
                  Choose your destination — find the best areas and hotels.
  </p>

              <div className="grid md:grid-cols-3 gap-6">

                  <Link href="/italy/where-to-stay-rome" className="group border rounded-2xl overflow-hidden hover:shadow-lg transition">
                      <div className="relative h-48">
                          <Image src="/images/rome.jpg" alt="Rome" fill className="object-cover group-hover:scale-105 transition" />
                      </div>
                      <div className="p-4">
                          <h3 className="text-xl font-semibold">Rome</h3>
                          <p className="text-gray-600 text-sm">Best areas for first-time visitors</p>
                      </div>
                  </Link>

                  <Link href="/italy/where-to-stay-florence" className="group border rounded-2xl overflow-hidden hover:shadow-lg transition">
                      <div className="relative h-48">
                          <Image src="/images/florence.jpg" alt="Florence" fill className="object-cover group-hover:scale-105 transition" />
                      </div>
                      <div className="p-4">
                          <h3 className="text-xl font-semibold">Florence</h3>
                          <p className="text-gray-600 text-sm">Compact, walkable stays</p>
                      </div>
                  </Link>

                  <Link href="/italy/where-to-stay-venice" className="group border rounded-2xl overflow-hidden hover:shadow-lg transition">
                      <div className="relative h-48">
                          <Image src="/images/venice.jpg" alt="Venice" fill className="object-cover group-hover:scale-105 transition" />
                      </div>
                      <div className="p-4">
                          <h3 className="text-xl font-semibold">Venice</h3>
                          <p className="text-gray-600 text-sm">Best areas by budget</p>
                      </div>
                  </Link>

              </div>
          </section>

          {/* ITINERARY */}
          <section className="bg-gray-50 py-16">
              <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
                  <h2 className="text-3xl font-bold">Start With a Proven Plan</h2>

                  <Link
                      href="/italy/7-day-itinerary"
                      className="inline-block border p-6 rounded-2xl hover:shadow-lg transition"
                  >
                      <h3 className="text-xl font-semibold">7-Day Italy Itinerary</h3>
                      <p className="text-gray-600">
                          Rome, Florence & Venice — simple train route, no car needed
      </p>
                  </Link>
              </div>
          </section>

          {/* COMPARISONS */}
          <section className="max-w-5xl mx-auto px-6 py-16">
              <h2 className="text-3xl font-bold text-center mb-10">
                  Not Sure Where to Start?
  </h2>

              <div className="grid md:grid-cols-2 gap-6">

                  <Link href="/italy/rome-vs-florence" className="border p-6 rounded-xl hover:shadow">
                      <h3 className="font-semibold text-lg">Rome vs Florence</h3>
                      <p className="text-gray-600 text-sm">History vs charm — which fits your trip?</p>
                  </Link>

                  <Link href="/italy/rome-vs-venice" className="border p-6 rounded-xl hover:shadow">
                      <h3 className="font-semibold text-lg">Rome vs Venice</h3>
                      <p className="text-gray-600 text-sm">Classic landmarks or canals?</p>
                  </Link>

              </div>
          </section>

      {/* VALUE SECTION */}
      <section className="bg-gray-50 border-y">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center space-y-10">

          <h2 className="text-3xl font-semibold">
            Everything You Need. Nothing You Don’t.
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">

            <div className="space-y-2">
              <h3 className="font-semibold">Clear Itineraries</h3>
              <p className="text-gray-600 text-sm">
                Step-by-step plans so you always know what to do next.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Smart Decisions</h3>
              <p className="text-gray-600 text-sm">
                Compare options quickly without hours of research.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">No Overwhelm</h3>
              <p className="text-gray-600 text-sm">
                Only the essential information you actually need.
              </p>
            </div>

          </div>
        </div>
      </section>

          {/* FINAL CTA */}
          <section className="bg-black text-white py-16 text-center">
              <h2 className="text-3xl font-bold mb-4">
                  Ready to Book Your Trip?
  </h2>

              <p className="mb-6 text-gray-300">
                  Compare hotels, flights, and tours in one place.
  </p>

              <div className="flex justify-center gap-4 flex-wrap">
                  <AffiliateLink href={affiliateLinks.hotels.rome.center}>
                      Find Hotels
    </AffiliateLink>

                  <AffiliateLink href={affiliateLinks.flights}>
                      Compare Flights
    </AffiliateLink>

                  <AffiliateLink href={affiliateLinks.tours}>
                      Book Tours
    </AffiliateLink>
              </div>
          </section>

    </main>
  );

}
