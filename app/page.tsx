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

      {/* FEATURED */}
      <section className="max-w-5xl mx-auto px-6 py-20 space-y-10">
        <h2 className="text-3xl font-semibold text-center">
          Start With a Proven Plan
        </h2>

<div className="grid md:grid-cols-2 gap-8">

  {/* Italy Card */}
                  <Link href="/italy/7-day-itinerary" className="group border rounded-lg overflow-hidden hover:shadow border rounded-lg overflow-hidden hover:shadow">

                      <img
                          src="https://images.unsplash.com/photo-1529260830199-42c24126f198"
                          alt="Italy itinerary"
                          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition"
                      />

                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                              7 Day Italy Itinerary
    </h3>
                          <p className="text-gray-600">
                              Rome, Florence & Venice — simple train route, no car needed.
    </p>
                      </div>

                  </Link>

                  {/* Rome vs Florence Card */}

                  <Link href="/italy/rome-vs-florence" className="group border rounded-lg overflow-hidden hover:shadow border rounded-lg overflow-hidden hover:shadow">

                      <img
                          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
                          alt="Rome vs Florence"
                          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition"
                      />

                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                              Rome vs Florence
    </h3>
                          <p className="text-gray-600">
                              Decide where to go first based on your travel style.
    </p>
                      </div>

                  </Link>

                  {/* Rome vs Venice Card */}

                  <Link href="/italy/rome-vs-venice" className="group border rounded-lg overflow-hidden hover:shadow border rounded-lg overflow-hidden hover:shadow">

                      <img
                          src="https://plus.unsplash.com/premium_photo-1661963047742-dabc5a735357?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Rome vs Florence"
                          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition"
                      />

                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                              Rome vs Venice
    </h3>
                          <p className="text-gray-600">
                              Decide where to go first based on your travel style.
    </p>
                      </div>

                  </Link>


                  { /*Best time to visit*/}
                  

                  <Link href="/italy/best-time-to-visit" className="group border rounded-lg overflow-hidden hover:shadow border rounded-lg overflow-hidden hover:shadow">

                      <img
                          src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
                          alt="Best Time to Visit Italy"
                          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition"
                      />

                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                              Best Time to Visit Italy
    </h3>
                          <p className="text-gray-600">
                              Find the perfect month based on weather, crowds, and price.
    </p>
                      </div>

                  </Link>


                  {/* Where to Stay className="border p-6 rounded-lg block hover:shadow"*/}
                  <Link href="/italy/where-to-stay-rome" className="group border rounded-lg overflow-hidden hover:shadow border rounded-lg overflow-hidden hover:shadow">

                      <img
                          src="/images/italy.jpg"
                          alt="Where to stay in Rome"
                          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition"
                      />

                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                              Where to Stay in Rome
        </h3>

                          <p className="text-gray-600">
                              Best neighborhoods for first-time visitors and different budgets.
        </p>
                      </div>

                  </Link>

                  { /* Where to stay in Florence*/}
                  {/*<Link href="/italy/where-to-stay-florence" className="group border rounded-lg overflow-hidden hover:shadow border rounded-lg overflow-hidden hover:shadow">

                      <img
                          src="/images/italy.jpg"
                          alt="Where to stay in Florence"
                          className="w-full h-48 object-cover scale-105 group-hover:scale-110 transition"
                      />

                      <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">
                              Where to Stay in Florence
                            </h3>

                          <p className="text-gray-600">
                              Steps from the Duomo with modern rooms and consistently high ratings—one of the most booked hotels in Florence.
                        </p>
                      </div>

                  </Link>*/}
                  

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
      <section className="max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
        <h2 className="text-3xl font-semibold">
          Start Planning Your Trip Today
        </h2>

        <p className="text-gray-600">
          Pick a destination and follow a proven plan.
        </p>

        <Link
          href="/italy/7-day-itinerary"
                  className="group border rounded-lg overflow-hidden hover:shadow inline-block bg-black text-white px-8 py-3 rounded-xl shadow hover:shadow-lg transition"
        >
          View Italy Itinerary
        </Link>
      </section>

    </main>
  );

}
