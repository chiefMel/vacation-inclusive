// components/AreaSection.tsx
import HotelCardSecondary from './HotelCardSecondary';

export default function AreaSection({ title, description, hotels }) {
    return (
        <section className="py-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
                {title}
            </h2>
            <p className="text-gray-700 mb-6">{description}</p>

            <div className="grid gap-6 md:grid-cols-2">
                {hotels.map((hotel, idx) => (
                    <HotelCardSecondary
                        key={idx}
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