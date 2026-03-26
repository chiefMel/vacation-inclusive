// app/italy/where-to-stay-florence/components/HotelCard.tsx
import AffiliateLink from '@/components/AffiliateLink';

interface HotelCardProps {
    name: string;
    desc: string;
    link: string;
    highlight?: string; // e.g., "Best Overall" or "Luxury"
    primaryCTA?: boolean; //black button if true
}

export default function HotelCard({ name, desc, link, highlight, primaryCTA }: HotelCardProps) {
    return (
        <div className="border border-gray-500 rounded-2xl p-6 shadow-md hover:shadow-lg scale-[1.01] transition bg-white">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>

            {highlight && (
                <span className="text-sm font-medium text-gray-800 mb-2 block">
                    {highlight}
                </span>
            )}

            <p className="mb-4 text-gray-800">{desc}</p>

            <AffiliateLink href={link}>
                <button
                    className={`px-5 py-2 rounded ${primaryCTA
                            ? 'bg-black text-white'
                            : 'border border-gray-700 text-gray-900'
                        }`}
                >
                    {primaryCTA ? 'Check Availability' : 'View Hotel'}
                </button>
            </AffiliateLink>
        </div>
    );
}
