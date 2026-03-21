// PrimeLocations.jsx
// "Our Prime Locations" section with location cards and a "View All Apartments" button.

import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const locations = [
    {
        name: "Newcastle City Centre",
        href: "/locations/newcastle-city-centre",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/Newcastle-City-Centre-min.jpg",
    },
    {
        name: "Newcastle Quayside",
        href: "/locations/newcastle-quayside",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/Newcastle-Quayside-min.jpg",
    },
    {
        name: "South Shields & Sunderland",
        href: "/locations/sunderland-and-south-shields",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/South-ShieldsandSunderland-min.jpg",
    },
    {
        name: "Tynemouth",
        href: "/locations/tynemouth",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/Tynemouth-min.jpg",
    },
    {
        name: "Gateshead Quays",
        href: "/locations/gateshead-quays",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/Gateshead-min.jpg",
    },
    {
        name: "Jesmond & Gosforth",
        href: "/locations/jesmond",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/JesmondandGosforth-min.jpg",
    },
];

export default function PrimeLocations() {
    return (
        <section className="py-10 md:py-16">
            <div className="max-w-container mx-auto px-6">
                <SectionHeading className="mb-4">Our Prime Locations</SectionHeading>
                <p className="text-center text-body-text font-body text-sm md:text-base mb-10 max-w-3xl mx-auto">
                    We have a large selection of different sized serviced apartments in
                    various locations across the North East area including Newcastle City
                    Centre, Newcastle Quayside, Gateshead, Jesmond &amp; Gosforth,
                    Tynemouth, South Shields &amp; Sunderland.
                </p>

                {/* Location Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
                    {locations.map((loc) => (
                        <Link
                            key={loc.name}
                            href={loc.href}
                            className="group relative overflow-hidden block aspect-[4/3]"
                        >
                            <img
                                src={loc.image}
                                alt={loc.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-primary-dark/40 group-hover:bg-primary-dark/60 transition-colors duration-300 flex items-end justify-center pb-6">
                                <h3 className="text-white font-heading font-bold text-lg md:text-xl text-center">
                                    {loc.name}
                                </h3>
                            </div>
                            {/* "View Apartments" hover text */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-heading font-semibold text-sm bg-primary/80 px-4 py-2 rounded">
                                    View Apartments
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <Button href="/find-apartments">View All Apartments</Button>
                </div>
            </div>
        </section>
    );
}
