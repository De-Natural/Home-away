import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import Button from "../components/ui/Button";
import corporateImage from "../assets/images/cooperate-group-image.png";
import image1 from "../assets/images/homeaway7.png";

export default function CorporateStays() {
    const corporateBenefits = [
        {
            title: "Cost-Effective",
            description: "Significant savings compared to traditional hotel stays, especially for long-term projects and relocating staff.",
            icon: "💰"
        },
        {
            title: "Productive Environment",
            description: "Dedicated workspaces and high-speed Wi-Fi in every apartment to ensure your team stays connected and productive.",
            icon: "💻"
        },
        {
            title: "Privacy & Space",
            description: "Separate living, dining, and sleeping areas provide a true 'home from home' experience for busy professionals.",
            icon: "🏠"
        },
        {
            title: "Prime Locations",
            description: "Centrally located apartments in Newcastle, Gosforth, and Jesmond with easy access to major business hubs.",
            icon: "📍"
        }
    ];

    return (
        <>
            <Head>
                <title>Corporate Stays & Business Travel Newcastle | Week2Week</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${corporateImage.src}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                    Corporate Stays
                </h1>
            </section>

            {/* Search Bar */}
            <section className="relative z-20 -mt-10 mb-16">
                <ApartmentSearch />
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Corporate Accommodation Solutions" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        Week2Week Serviced Apartments has been a trusted partner for corporate travel managers,
                        HR teams, and SMEs for over 20 years. We provide high-quality, fully furnished accommodation
                        that serves as a superior alternative to traditional hotels.
                    </p>
                    <p>
                        Whether you're visiting Newcastle for a short business trip, managing a long-term project,
                        or relocating employees, our apartments offer the flexibility, space, and comfort
                        needed to maintain a healthy work-life balance while away from home.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="bg-light-gray py-20">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {corporateBenefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
                                <div className="text-4xl mb-6">{benefit.icon}</div>
                                <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Relocation Section */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 rounded-sm overflow-hidden shadow-lg aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${image1.src}')` }} />
                    <div className="flex-1 space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Experts in Relocation</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            We work closely with relocation agents to provide a seamless transition for individuals and families
                            moving to the North East. Our properties offer a stable and welcoming base, allowing new
                            residents to explore the city and find their permanent home without the pressure of
                            living out of a suitcase.
                        </p>
                        <div className="flex gap-4">
                            <Button href="/contact">Relocation Support</Button>
                            <Button variant="outline" href="/find-apartments">View Properties</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust/Accreditation Section */}
            <section className="bg-primary-dark py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="font-heading text-3xl font-bold">Trusted by Industry Leaders</h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed">
                        As members of ASAP (Association of Serviced Accommodation Providers) and Gold Quality
                        Accredited by Quality in Tourism, we guarantee the highest standards of safety,
                        cleanliness, and professionalism in every stay.
                    </p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-80 filter brightness-200">
                        {/* Icons would go here, using text for now */}
                        <div className="font-heading font-bold text-xl tracking-widest">ASAP MEMBER</div>
                        <div className="font-heading font-bold text-xl tracking-widest">QUALITY IN TOURISM</div>
                        <div className="font-heading font-bold text-xl tracking-widest">GOLD ACCREDITED</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark">Dedicated Account Management</h2>
                    <p className="font-body text-gray-600 leading-relaxed">
                        For businesses with frequent travel requirements, we offer dedicated account management
                        and tailored booking portals. Contact our corporate team today to discuss your
                        specific needs and discover the Week2Week difference.
                    </p>
                    <Button href="/contact">Enquire About Corporate Rates</Button>
                </div>
            </section>
        </>
    );
}
