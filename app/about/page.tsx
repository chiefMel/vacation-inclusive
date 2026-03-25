export default function About() {
    return (
        <div className="bg-white text-gray-900 min-h-full">
            <div className="max-w-3xl mx-auto px-6 py-16 space-y-6">

                <h1 className="text-3xl font-bold">About</h1>

                <p className="text-gray-600 leading-relaxed">
                    Vacation-Inclusive helps travelers plan smarter trips with structured
                    itineraries, destination comparisons, and practical travel guidance.
        </p>

                <p className="text-gray-600 leading-relaxed">
                    Our goal is simple: remove confusion and help you make better travel
                    decisions—faster.
        </p>

                <div className="border rounded-xl p-6 bg-gray-50">
                    <h2 className="font-semibold mb-2">What You’ll Find Here</h2>
                    <ul className="text-gray-600 space-y-1">
                        <li>• Step-by-step itineraries</li>
                        <li>• City comparisons</li>
                        <li>• Travel planning tips</li>
                    </ul>
                </div>

            </div>
        </div>
    );
}