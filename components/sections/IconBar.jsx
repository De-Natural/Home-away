// IconBar.jsx
// Dark purple bar with four category icons: Leisure, Business, Corporate Groups, Contractor.
// Links to the relevant pages on the site.

import Link from "next/link";

const categories = [
    {
        label: "Leisure",
        href: "/serviced-apartments",
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/banner_icon_1.png",
        alt: "leisure travel serviced apartments",
    },
    {
        label: "Business",
        href: "/serviced-apartments",
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/banner_icon_2.png",
        alt: "business serviced apartments",
    },
    {
        label: "Corporate Groups",
        href: "/serviced-apartments",
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/banner_icon_3.png",
        alt: "corporate groups serviced apartments",
    },
    {
        label: "Contractor",
        href: "/contractor-accommodation",
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/benefit_icon_3.png",
        alt: "contractor serviced apartments",
    },
];

export default function IconBar() {
    return (
        <section className="bg-primary-dark -mt-1">
            <div className="max-w-container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4">
                    {categories.map((cat, i) => (
                        <Link
                            key={cat.label}
                            href={cat.href}
                            className={`flex items-center justify-center gap-3 py-5 px-4 text-white hover:bg-primary transition-colors text-center ${i < 3 ? "md:border-r md:border-primary" : ""
                                }`}
                        >
                            <span className="font-heading font-semibold text-sm md:text-base">
                                {cat.label}
                            </span>
                            <img
                                src={cat.icon}
                                alt={cat.alt}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain invert brightness-0 filter"
                                style={{ filter: "brightness(0) invert(1)" }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
