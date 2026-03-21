import Head from "next/head";
import Link from "next/link";
import SectionHeading from "../components/ui/SectionHeading";

const siteMap = [
    {
        category: "Main Pages",
        links: [
            { label: "Home", href: "/" },
            { label: "About Us", href: "/week2week-apartments-about-us" },
            { label: "Find Apartments", href: "/find-apartments" },
            { label: "Contact Us", href: "/contact" },
        ],
    },
    {
        category: "Accommodation Types",
        links: [
            { label: "Serviced Apartments", href: "/serviced-apartments" },
            { label: "Corporate Stays", href: "/corporate-stays" },
            { label: "Contractor Accommodation", href: "/contractor-accommodation" },
            { label: "Leisure & Staycation", href: "/staycation-apartments-newcastle" },
            { label: "Hospital Stays", href: "/hospital-stays-2" },
            { label: "Relocation Apartments", href: "/relocation-serviced-apartments" },
            { label: "Property Investment", href: "/property-investment-2" },
        ],
    },
    {
        category: "Locations",
        links: [
            { label: "Newcastle City Centre", href: "/locations/newcastle-city-centre" },
            { label: "Jesmond", href: "/locations/jesmond" },
            { label: "Newcastle Quayside", href: "/locations/newcastle-quayside" },
            { label: "Tynemouth", href: "/locations/tynemouth" },
            { label: "Gateshead Quays", href: "/locations/gateshead-quays" },
            { label: "Sunderland & South Shields", href: "/locations/sunderland-and-south-shields" },
        ],
    },
    {
        category: "Company",
        links: [
            { label: "Guest Perks", href: "/guest-perks" },
            { label: "Trusted Partners", href: "/trusted-partners" },
            { label: "Blog & News", href: "/blog" },
            { label: "Reviews & Testimonials", href: "/feedback-form-and-reviews" },
            { label: "ESG Policy", href: "/esg" },
            { label: "Supporting CHUF", href: "/esg/supporting-chuf" },
        ],
    },
    {
        category: "Legal",
        links: [
            { label: "Terms & Conditions", href: "/terms-and-conditions" },
            { label: "Privacy Policy", href: "/privacy-policy" },
            { label: "Accessibility Policy", href: "/accessibility-policy" },
            { label: "Site Map", href: "/site-map" },
        ],
    },
];

export default function SiteMap() {
    return (
        <>
            <Head>
                <title>Site Map | Ideal Home Away Service Apartment</title>
                <meta name="description" content="A complete site map of all pages on the Ideal Home Away website." />
            </Head>

            {/* Hero */}
            <section className="w-full h-[220px] bg-primary-dark flex items-center justify-center relative mt-[90px] md:mt-[120px]">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white text-center px-6">Site Map</h1>
            </section>

            {/* Content */}
            <section className="py-20 max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <SectionHeading title="All Pages" />
                    <p className="font-body text-gray-500 text-sm mt-4">A complete directory of all pages on our website.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {siteMap.map((section, idx) => (
                        <div key={idx}>
                            <h2 className="font-heading text-lg font-bold text-primary-dark mb-4 pb-3 border-b border-light-gray">{section.category}</h2>
                            <ul className="space-y-3">
                                {section.links.map((link, i) => (
                                    <li key={i}>
                                        <Link
                                            href={link.href}
                                            className="font-body text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-2 group"
                                        >
                                            <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
