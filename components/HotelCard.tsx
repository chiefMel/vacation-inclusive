// app/italy/where-to-stay-florence/components/HotelCard.tsx
import AffiliateLink from '@/components/AffiliateLink';

interface HotelCardProps {
    name: string;
    desc: string;
    link: string;
    highlight?: string; // e.g., "Best Overall" or "Luxury"
    primaryCTA?: boolean; // black button if true
}

export default function HotelCard({ name, desc, link, highlight, primaryCTA }: HotelCardProps) {
    return (
        <div className="border p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            {highlight && <span className="text-sm font-medium text-gray-600 mb-2 block">{highlight}</span>}
            <p className="mb-4">{desc}</p>
            <AffiliateLink href={link}>
                <button className={`px-5 py-2 rounded ${primaryCTA ? 'bg-black text-white' : 'border border-black'}`}>
                    {primaryCTA ? 'Check Availability' : 'View Hotel'}
                </button>
            </AffiliateLink>
        </div>
    );
}