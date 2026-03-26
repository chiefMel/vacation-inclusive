// app/italy/where-to-stay-florence/components/AreaSection.tsx
import HotelCard from './HotelCard';

interface Hotel {
    name: string;
    desc: string;
    link: string;
    highlight?: string;
}

interface AreaSectionProps {
    title: string;
    description: string;
    hotels: Hotel[];
}

export default function AreaSection({ title, description, hotels }: AreaSectionProps) {
    return (
        <section className="py-12">
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <p className="mb-6">{description}</p>
            <div className="grid gap-6 md:grid-cols-2">
                {hotels.map((hotel) => (
                    <HotelCard
                        key={hotel.name}
                        name={hotel.name}
                        desc={hotel.desc}
                        link={hotel.link}
                        highlight={hotel.highlight}
                    />
                ))}
            </div>
        </section>
    );
}