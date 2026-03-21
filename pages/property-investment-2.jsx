import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import imageCenter from "../assets/images/property2.png";
import imageCenter2 from "../assets/images/property management2.png";

export default function PropertyInvestment() {
    const managementServices = [
        {
            title: "Full Management",
            description: "From renovation and interior design to cleaning, linen, and maintenance. We handle it all.",
            icon: "🏢"
        },
        {
            title: "Strategic Marketing",
            description: "We list your property on major platforms and use price optimization to maximize your occupancy and ROI.",
            icon: "📈"
        },
        {
            title: "Housekeeping",
            description: "Our professional team ensures your property is always immaculate and ready for the next guest.",
            icon: "🧹"
        },
        {
            title: "Guest Services",
            description: "24/7 support and personal meet & greet services to ensure a world-class experience for your guests.",
            icon: "🤝"
        }
    ];

    const targetLocations = [
        "Newcastle City Centre",
        "Jesmond & Gosforth",
        "Gateshead Quays",
        "Tynemouth & Coastal Areas",
        "Whitley Bay",
        "South Shields"
    ];

    return (
        <>
            <Head>
                <title>Property Investment & Management Newcastle | Ideal home</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                    style={{ backgroundImage: `url('${imageCenter.src}')` }}
                >
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Maximize Your Property's Potential
                </h1>
            </section>

            {/* Introduction Section */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Property Investment & Management" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        Ideal Home Serviced Apartments offers more than just accommodation. We are experts in
                        helping property owners and investors maximize their return on investment through
                        strategic serviced apartment management.
                    </p>
                    <p>
                        Whether you already own a property or are looking to start your investment journey in
                        the North East, our family-run team provides the local knowledge and professional
                        expertise needed to turn your property into a high-yielding asset.
                    </p>
                    <div className="pt-6">
                        <Button href="/contact">Book a Consultation</Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark mb-4">Our Management Solutions</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto">
                            We provide a hassle-free, full-service management experience, allowing you to enjoy
                            the benefits of property investment without the daily administrative burden.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {managementServices.map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border-t-4 border-primary">
                                <div className="text-4xl mb-6">{service.icon}</div>
                                <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">{service.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Section */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Strategic Price Optimization</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            We don't just list your property; we actively manage it. Our team uses sophisticated
                            price optimization tools to adjust rates based on seasonal demand, local events,
                            and market trends, ensuring your property always earns its maximum potential.
                        </p>
                        <ul className="space-y-4 font-body text-gray-600">
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">✓</span> Monthly performance updates and statements
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">✓</span> Transparent reporting and communication
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary font-bold">✓</span> Professional listing creation and guest screening
                            </li>
                        </ul>
                        <Button variant="outline" href="/contact">View ROI Estimates</Button>
                    </div>
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-[4/3] bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${imageCenter2.src}')` }} />
                </div>
            </section>

            {/* Target Locations */}
            <section className="bg-primary-dark py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="font-heading text-3xl font-bold">Properties Needed</h2>
                    <p className="font-body text-lg text-gray-300">
                        We are currently seeking high-quality properties in these prime North East locations:
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {targetLocations.map((loc) => (
                            <span key={loc} className="px-6 py-2 border border-white/30 rounded-full font-heading text-sm font-semibold hover:bg-white hover:text-primary-dark transition-colors cursor-default">
                                {loc}
                            </span>
                        ))}
                    </div>
                    <p className="font-body text-gray-400 text-sm italic">
                        Not sure if your property is right? Contact us today for a free evaluation.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center space-y-8">
                    <div className="w-20 h-1 bg-gold mb-4" />
                    <h2 className="font-heading text-3xl font-bold text-primary-dark">Start Your Investment Journey</h2>
                    <p className="font-body text-gray-600 leading-relaxed max-w-2xl">
                        Partner with the original serviced accommodation provider in Newcastle.
                        Experience the peace of mind that comes with a full-management solution designed
                        to maximize your income and protect your asset.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button href="/contact">Talk to an Investment Expert</Button>
                        <Button variant="outline" href="/Ideal Home-apartments-about-us">About Our Team</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
