// components/HotelCardSecondary.tsx
import AffiliateLink from '@/components/AffiliateLink';

interface Props {
    name: string;
    desc: string;
    link: string;
    highlight?: string;
}

export default function HotelCardSecondary({ name, desc, link, highlight }: Props) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            {highlight && (
                <span className="inline-block text-xs font-semibold border border-black px-2 py-1 mb-2">
                    {highlight}
                </span>
            )}

            <h3 className="text-gray-900 font-semibold text-lg mb-1">{name}</h3>
            <p className="text-gray-700 mb-4">{desc}</p>

            <AffiliateLink href={link}>
                <button className="w-full border border-black text-white px-5 py-2 rounded font-semibold">
                    View Hotel
                </button>
            </AffiliateLink>
        </div>
    );
}