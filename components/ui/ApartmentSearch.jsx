
import Link from "next/link";

export default function ApartmentSearch() {
    return (
        <div className="relative -mt-20 md:-mt-24 z-20 px-6 max-w-lg mx-auto">
            <div className="bg-primary pt-4 py-2 px-2 rounded-3xl shadow-xl flex items-center justify-center gap-4">
                <h2 className="text-white font-heading font-bold text-lg md:text-xl mb-2">
                    Find Apartments
                </h2>
                <div className="w-2/4 flex items-center justify-center px-6 mb-2">
                    <Link href="/find-apartments">
                        <button className="bg-white text-primary hover:bg-gray-100 font-heading font-bold py-3 px-8 rounded-full transition-colors text-sm uppercase tracking-wide">
                            Search
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
