import CityComparisonTemplate from "@/components/CityComparisonTemplate";
import { affiliateLinks } from "@/lib/affiliateLinks";

export default function RomeVsFlorence() {
    return (
        <CityComparisonTemplate
            cityA="Rome"
            cityB="Florence"
            heroImageA="/images/rome.jpg"
            heroImageB="/images/florence.jpg"
            quickDecision={[
                "👉 Choose Rome if it’s your first time in",
                "👉 Choose Florence for a relaxed, walkable trip",
                "👉 Visit both if you have 5+ days",
            ]}
            cityAHighlights={[
                "✔ Iconic landmarks (Colosseum, Vatican)",
                "✔ Best for first-time visitors",
                "✔ More things to do",
                "✖ Busy and spread out",
            ]}
            cityBHighlights={[
                "✔ Compact and walkable",
                "✔ Relaxed atmosphere",
                "✔ Great for art & food",
                "✖ Fewer major attractions",
            ]}
            comparisonTable={[
                { feature: "Best For", cityA: "First-time visitors", cityB: "Relaxed travelers" },
                { feature: "Vibe", cityA: "Busy & historic", cityB: "Calm & charming" },
                { feature: "Attractions", cityA: "Colosseum, Vatican", cityB: "Duomo, Uffizi" },
                { feature: "Cost", cityA: "Higher", cityB: "Moderate" },
                { feature: "Walkability", cityA: "Medium", cityB: "High" },
            ]}
            attractionsText="Rome is packed with world-famous landmarks, while Florence focuses more on art, museums, and architecture."
            travelEaseText="Florence is easier to navigate due to its compact layout. Rome requires more planning and transport."
            timeNeededText="Rome typically needs 2–3 days, while Florence can be explored in 1–2 days."
            affiliateLinks={affiliateLinks}
            itineraryLink="/italy/7-day-itinerary"
        />
    );
}
