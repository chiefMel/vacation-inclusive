// app/italy/where-to-stay-florence/components/AreaSection.tsx
import HotelCard from './HotelCard';

interface AreaSectionProps {
    title: string;
    description: string;
    hotels: {
        name: string;
        desc: string;
        link: string;
        highlight?: string;
    }[];
}

export default function AreaSection({ title, description, hotels }: AreaSectionProps) {
    return (
        <section className="py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="grid gap-6 md:grid-cols-2">
                {hotels.map((hotel, idx) => (
                    <HotelCard
                        key={idx}
                        name={hotel.name}
                        desc={hotel.desc}
                        highlight={hotel.highlight}
                        link={hotel.link}
                        primaryCTA={false} // secondary button for AreaSection
                    />
                ))}
            </div>
        </section>
    );
}