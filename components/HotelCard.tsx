// app/italy/where-to-stay-florence/components/HotelCard.tsx
import AffiliateLink from '@/components/AffiliateLink';

interface HotelCardProps {
    name: string;
    desc: string;
    link: string;
    highlight?: string;
    primaryCTA?: boolean; // true = main CTA (Quick Picks), false = secondary (AreaSection)
}

export default function HotelCard({
    name,
    desc,
    link,
    highlight,
    primaryCTA = false,
}: HotelCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition transform hover:scale-[1.01]">
            {highlight && (
                <span className="inline-block text-xs font-semibold border border-black px-2 py-1 mb-2">
                    {highlight}
                </span>
            )}
            <h3 className="text-gray-800 font-semibold text-lg mb-1">{name}</h3>
            <p className="text-gray-700 mb-4">{desc}</p>

            <AffiliateLink href={link}>
                <button
                    className={`w-full px-5 py-2 rounded font-semibold transition
    ${primaryCTA
                            ? 'bg-black text-white hover:opacity-90'      // Quick Picks: black button, white text
                            : 'border border-black text-black hover:bg-black hover:text-white'} // AreaSection: outline button, black text, hover turns black bg + white text
  `}
                >
                    {primaryCTA ? 'Check Availability' : 'View Hotel'}
                </button>
            </AffiliateLink>
        </div>
    );
}