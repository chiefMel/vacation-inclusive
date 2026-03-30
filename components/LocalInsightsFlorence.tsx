"use client";

export default function LocalInsightsFlorence() {
    return (
        <section className="local-insights">
            <h2 className="local-insights-title">Local Insights: What Florentines Say</h2>

            <div className="local-insights-grid">

                <article className="local-card">
                    <h3>“Oltrarno Is the Soul of Florence”</h3>
                    <p>
                        Florentines often say the Oltrarno district is where the city’s true character lives.
                        Artisan workshops, quiet cafés, and family-run restaurants make it feel worlds away
                        from the crowds near the Duomo.
          </p>
                </article>

                <article className="local-card">
                    <h3>“Go to Piazzale Michelangelo at Sunrise, Not Sunset”</h3>
                    <p>
                        Locals recommend visiting at sunrise to avoid crowds and see Florence bathed in soft
                        morning light. It’s one of the most peaceful moments you can experience in the city.
          </p>
                </article>

                <article className="local-card">
                    <h3>“Mercato Sant’Ambrogio Beats Mercato Centrale”</h3>
                    <p>
                        Florentines prefer Sant’Ambrogio for fresh produce and authentic food stalls.
                        It’s quieter, more local, and far less commercial than Mercato Centrale.
          </p>
                </article>

            </div>
        </section>
    );
}
