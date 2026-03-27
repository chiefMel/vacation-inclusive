import "./globals.css";
import Link from "next/link";

export const metadata = {
    title: "Vacation-Inclusive",
    description: "Smart travel planning guides and itineraries",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">

                {/* NAVBAR */}
                <header className="border-b">
                    <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                        <Link href="/" className="font-semibold text-lg">
                            Vacation-Inclusive
            </Link>

                        <nav className="flex gap-6 text-sm">
                            <Link href="/italy/7-day-itinerary">Itinerary</Link>
                            <Link href="/italy/rome-vs-florence">Compare</Link>
                            <Link href="/italy/best-time-to-visit">When to Go</Link>
                        </nav>

                    </div>
                </header>

                {/* PAGE CONTENT */}
                <main className="flex-grow bg-white">
                    {children}
                </main>

                <footer className="bg-black text-white">
                    <div className="max-w-5xl mx-auto px-6 py-6 text-center space-y-3">

                        <p className="text-sm m-0">
                            © 2026 Vacation-Inclusive
                        </p>
                        

                        <div className="flex justify-center gap-6 text-sm text-gray-300">
                            <a href="/about" className="hover:underline">About</a>
                            <a href="/privacy" className="hover:underline">Privacy</a>
                            <a href="/contact" className="hover:underline">Contact</a>
                        </div>

                        <p className="text-xs text-gray-400">
                            This site contains affiliate links. We may earn a commission at no extra cost to you.
      </p>

                    </div>
                </footer>
            </body>
        </html>
    );
}