// components/LocalInsights.tsx
export default function LocalInsights() {
    return (
        <section className="local-insights">
            <h2 className="local-insights-title">Local Insights: What Venetians Say</h2>

            <div className="local-insights-grid">

                <article className="local-card">
                    <h3>“Venice Wakes Up at the Rialto Market”</h3>
                    <p>
                        Locals say the real Venice begins before sunrise at the Rialto fish market.
                        Chefs, grandmothers, and early risers gather here long before tourists arrive.
                        Visit before 8 AM if you want to feel the city’s heartbeat.
          </p>
                </article>

                <article className="local-card">
                    <h3>“Cannaregio Is Where We Escape the Crowds”</h3>
                    <p>
                        Many Venetians describe Cannaregio as the last neighborhood that still feels
                        truly local. Quiet mornings, family-run bakeries, and peaceful canals make it
                        a favorite among residents.
          </p>
                </article>

                <article className="local-card">
                    <h3>“Bàcari Are Our Living Rooms”</h3>
                    <p>
                        Small wine bars called <em>bàcari</em> are where locals gather after work.
            Order a spritz and a few cicchetti to blend right in. Locals avoid places
            with laminated menus — that’s usually a tourist sign.
          </p>
                </article>

            </div>

            <style jsx>{`
        .local-insights {
          margin: 60px 0;
          padding: 40px 20px;
          background: #faf7f2;
          border-radius: 12px;
        }

        .local-insights-title {
          font-size: 2rem;
          margin-bottom: 30px;
          text-align: center;
          color: #333;
        }

        .local-insights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .local-card {
          background: white;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .local-card h3 {
          margin-top: 0;
          font-size: 1.2rem;
          color: #444;
        }

        .local-card p {
          line-height: 1.6;
          color: #555;
        }
      `}</style>
        </section>
    );
}
