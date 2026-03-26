"use client";

import { useState } from "react";

type Props = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

import Image from "next/image";
import Link from "next/link";
import AffiliateLink from "@/components/AffiliateLink";

export default function CityComparisonTemplate({
    cityA,
    cityB,
    heroImageA,
    heroImageB,
    quickDecision,
    comparisonTable,
    cityAHighlights,
    cityBHighlights,
    attractionsText,
    travelEaseText,
    timeNeededText,
    affiliateLinks,
    itineraryLink,
}) {
    return (
        <main className="bg-white text-gray-900">

            {/* HERO */}
            <section className="relative h-[400px]">
                <Image
                    src={heroImageA}
                    alt={`${cityA} vs ${cityB}`}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-center justify-center text-center px-6">
                    <div className="text-white space-y-4 max-w-2xl">
                        <h1 className="text-4xl md:text-5xl font-bold">
                            {cityA} vs {cityB}
                        </h1>
                        <p className="text-lg">
                            Which city should you visit first? Here’s the clear answer.
            </p>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">

                {/* Back */}
                <Link href="/" className="text-blue-600 underline">
                    ← Back to Home
        </Link>

                {/* QUICK DECISION */}
                <section className="bg-gray-50 p-6 rounded-2xl space-y-4">
                    <h2 className="text-2xl font-semibold">Quick Decision</h2>
                    <ul className="space-y-2 text-gray-700">
                        {quickDecision.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                </section>

                {/* SIDE-BY-SIDE */}
                <section className="grid md:grid-cols-2 gap-8">

                    {/* City A */}
                    <div className="border rounded-2xl overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src={heroImageA}
                                alt={cityA}
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                        </div>

                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold">{cityA}</h2>
                            <ul className="text-gray-600 space-y-1">
                                {cityAHighlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <AffiliateLink href={affiliateLinks.hotels}>
                                Find hotels in {cityA}
                            </AffiliateLink>
                        </div>
                    </div>

                    {/* City B */}
                    <div className="border rounded-2xl overflow-hidden">
                        <div className="relative h-48">
                            <Image
                                src={heroImageB}
                                alt={cityB}
                                fill
                                className="object-cover rounded-t-2xl"
                            />
                        </div>

                        <div className="p-6 space-y-3">
                            <h2 className="text-xl font-semibold">{cityB}</h2>
                            <ul className="text-gray-600 space-y-1">
                                {cityBHighlights.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>

                            <AffiliateLink href={affiliateLinks.hotels}>
                                Find hotels in {cityB}
                            </AffiliateLink>
                        </div>
                    </div>

                </section>

                {/* COMPARISON TABLE */}
                <section className="mt-16">
                    <h2 className="text-2xl font-semibold mb-4 text-center">
                        {cityA} vs {cityB} — Quick Comparison
          </h2>

                    <div className="overflow-x-auto border rounded-lg">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-100 text-left">
                                <tr>
                                    <th className="p-4 font-medium">Feature</th>
                                    <th className="p-4 font-medium">{cityA}</th>
                                    <th className="p-4 font-medium">{cityB}</th>
                                </tr>
                            </thead>

                            <tbody>
                                {comparisonTable.map((row, i) => (
                                    <tr key={i} className="border-t">
                                        <td className="p-4 font-medium">{row.feature}</td>
                                        <td className="p-4">{row.cityA}</td>
                                        <td className="p-4">{row.cityB}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-sm text-gray-600 mb-2">
                            Prices vary by date — check availability for your travel dates:
            </p>

                        <AffiliateLink href={affiliateLinks.hotels}>
                            Compare hotel prices in {cityA} & {cityB}
                        </AffiliateLink>
                    </div>
                </section>

                {/* DETAILS */}
                <section className="space-y-8">

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Attractions</h2>
                        <p className="text-gray-600">{attractionsText}</p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Ease of Travel</h2>
                        <p className="text-gray-600">{travelEaseText}</p>
                    </div>

                    <div className="border p-6 rounded-2xl">
                        <h2 className="text-xl font-semibold mb-2">Time Needed</h2>
                        <p className="text-gray-600">{timeNeededText}</p>
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
                {itineraryLink && (
                    <section className="text-center">
                        <Link href={itineraryLink} className="text-blue-600 underline">
                            See full itinerary →
            </Link>
                    </section>
                )}

            </div>
        </main>
    );
}


export const buttonStyles = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-white text-black border border-gray-300 hover:bg-gray-100",
};

export default function AffiliateLink({
    href,
    children,
    className = "",
}: Props) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);

        // Future: replace with real analytics
        console.log("Affiliate click:", href);
    };

    return (
        <a
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={handleClick}
            className={`
  inline-block
  px-6 py-3
  rounded-lg
  text-sm font-medium
  transition
  active:scale-95
  ${className || "bg-black text-white hover:bg-gray-800"}
`}
        >
            {children}
        </a>
    );
}