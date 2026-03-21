import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import imageCenter from "../assets/images/property4.png";
import imageCenter2 from "../assets/images/contact us2.png";

export default function TrustedPartners() {
    const accreditations = [
        {
            name: "Quality in Tourism",
            status: "Gold Accredited",
            description: "We hold the prestigious Gold Award, signifying our commitment to the highest standards of safety, cleanliness, and guest experience.",
            icon: "🏆"
        },
        {
            name: "ASAP Member",
            status: "Association of Serviced Apartment Providers",
            description: "As a member of ASAP, we adhere to a code of conduct and industry-leading safety standards.",
            icon: "🛡️"
        },
        {
            name: "Visitor Ready",
            status: "Official Partner",
            description: "An accreditation scheme backed by Visit England and the AA, demonstrating our compliance with health and safety standards.",
            icon: "✅"
        },
        {
            name: "NGI Partner",
            status: "NewcastleGateshead Initiative",
            description: "Working to promote the region as a vibrant place for visitors, work, and investment.",
            icon: "🤝"
        }
    ];

    return (
        <>
            <Head>
                <title>Trusted Partners & Accreditations Newcastle | Ideal home</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${imageCenter.src}')` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Our Trusted Partners
                </h1>
            </section>

            {/* Introduction */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Built on Trust for Over 25 Years" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        At Week2Week, we believe that trust is the foundation of every successful stay.
                        As Newcastle's original serviced apartment provider, we've spent over a quarter
                        of a century building a reputation for excellence, reliability, and care.
                    </p>
                    <p>
                        Our partnerships with leading industry bodies and local initiatives ensure that
                        every one of our properties meets the highest standards of safety, cleanliness,
                        and legal compliance. When you stay with us, you're staying with the best in the business.
                    </p>
                </div>
            </section>

            {/* Accreditations Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark mb-4">Our Accreditations</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto">
                            We are audited annually by independent bodies to ensure we continue to exceed
                            industry standards and guest expectations.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {accreditations.map((acc, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                <div className="text-5xl mb-6">{acc.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-primary-dark mb-1">{acc.name}</h3>
                                <p className="font-body text-primary font-bold text-xs uppercase tracking-widest mb-4">{acc.status}</p>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{acc.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partner Network Section */}
            <section className="py-24 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">UK-Wide reach through our Partner Network</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            While we are specialists in the North East, our reach extends across the United Kingdom.
                            Through our carefully vetted network of trusted partners, we can source and manage
                            high-quality serviced accommodation in any major UK city.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            This allowing our corporate clients to benefit from a single point of contact and
                            the same high standards of service, no matter where their business takes them.
                        </p>
                        <Button href="/contact">Enquire About UK Stays</Button>
                    </div>
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${imageCenter2.src}')` }} />
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="bg-primary-dark py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="font-heading text-3xl font-bold italic">Commitment to Sustainability</h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed">
                        We are dedicated to reducing our environmental footprint. We encourage recycling in
                        all our apartments, use energy-efficient appliances, and choose environmentally
                        responsible cleaning products wherever possible.
                    </p>
                    <div className="pt-4">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors" href="/about-us">
                            Learn More About Our Values
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark italic">Become a Partner</h2>
                    <p className="font-body text-gray-600 leading-relaxed">
                        Are you a provider of high-quality serviced accommodation? We are always looking
                        to expand our network of trusted partners. Contact our team today to discuss how
                        we can work together.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button href="/contact">Partner With Us</Button>
                        <Button variant="outline" href="/property-investment-2">Management Services</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
