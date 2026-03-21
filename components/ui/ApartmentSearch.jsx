// ApartmentSearch.jsx
// Purple rounded search bar component used at the top of the Find Apartments page.

import Link from "next/link";

export default function ApartmentSearch() {
    return (
        <div className="relative -mt-20 md:-mt-24 z-20 px-6 max-w-2xl mx-auto">
            <div className="bg-primary pt-4 py-2 rounded-2xl shadow-xl flex items-center justify-center gap-4">
                <h2 className="text-white font-heading font-bold text-lg md:text-xl mb-4">
                    Find Apartments
                </h2>
                <div className="w-2/4 px-6 mb-4">
                    <Link href="/find-apartments">
                        <button className="w-full bg-white text-primary hover:bg-gray-100 font-heading font-bold py-3 rounded-full transition-colors text-sm uppercase tracking-wide">
                            Search
                        </button>
                    </Link>
                </div>
            </div>

            {/* Flexible Cancellation Badge */}
            {/* <div className="absolute -left-10 top-0 md:-left-16 md:top-4 bg-primary-dark w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center p-2 shadow-lg rotate-[-15deg]">
                <span className="text-white font-heading font-bold text-[10px] md:text-xs leading-tight">
                    Flexible<br />Cancellation
                </span>
            </div> */}
        </div>
    );
}
