import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import Button from "../components/ui/Button";
import mobilityImage from "../assets/images/Global mobility.png";
import image1 from "../assets/images/image-337.png";  

export default function Relocation() {
    const relocationBenefits = [
        {
            title: "Home from Home",
            description: "Fully furnished properties with all the space and privacy needed to settle into a new city comfortably.",
            icon: "🏠"
        },
        {
            title: "Strategic Locations",
            description: "Apartments in prime areas like Jesmond, Gosforth, and the City Centre, close to top schools and business hubs.",
            icon: "📍"
        },
        {
            title: "All-Inclusive",
            description: "High-speed Wi-Fi, utilities, and weekly housekeeping are all included for a hassle-free transition.",
            icon: "✨"
        },
        {
            title: "Expert Support",
            description: "Our local team provides personal meet & greet services and 24/7 support for all your needs.",
            icon: "🤝"
        }
    ];

    return (
        <>
            <Head>
                <title>Relocation & Global Mobility Accommodation Newcastle | Week2Week</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${mobilityImage.src}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Relocation & Global Mobility
                </h1>
            </section>

            {/* Search Bar */}
            <section className="relative z-20 -mt-10 mb-16">
                <ApartmentSearch />
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Seamless Transitions to the North East" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        Relocating can be a stressful experience, whether you're moving for work, study, or
                        finding a new family home. Week2Week Serviced Apartments provides a stable and
                        welcoming base for individuals and families during their transition to Newcastle
                        and the surrounding areas.
                    </p>
                    <p>
                        We work closely with relocation agents, HR teams, and corporate travel managers to
                        ensure a seamless move. Our properties offer the flexibility of short or long-term
                        stays, allowing you to settle in at your own pace while you explore the city.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="bg-light-gray py-20">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {relocationBenefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-b-4 border-primary">
                                <div className="text-4xl mb-6">{benefit.icon}</div>
                                <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Family Focus Section */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 rounded-sm overflow-hidden shadow-lg aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url(${image1.src})` }} />
                    <div className="flex-1 space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Accommodation for the Whole Family</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            We offer a range of properties from 1-bedroom apartments to 4-bedroom houses,
                            ensuring there's enough space for the entire family. Many of our properties
                            feature private gardens and parking, providing a safe and comfortable
                            environment during your move.
                        </p>
                        <div className="flex gap-4">
                            <Button href="/contact">Relocation Enquiry</Button>
                            <Button variant="outline" href="/find-apartments">Explore Properties</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Mobility Section */}
            <section className="bg-primary-dark py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="font-heading text-3xl font-bold">Supporting Global Mobility</h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed">
                        As a Gold Standard Quality Accredited provider with over 25 years of experience,
                        we are the trusted choice for global mobility professionals. We understand
                        compliance, duty of care, and the high standards required for international
                        relocations.
                    </p>
                    <div className="pt-4">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors" href="/contact">
                            Talk to Our Team
                        </Button>
                    </div>
                </div>
            </section>

            {/* Local Knowledge Section */}
            <section className="py-20 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark italic">Expert Local Guidance</h2>
                    <p className="font-body text-gray-600 leading-relaxed">
                        Not sure which area of Newcastle is right for you? Our local team has expert
                        knowledge of the city and its neighborhoods. We can help you find a property
                        that fits your lifestyle, whether you're looking for vibrant city living or a
                        quiet suburban retreat.
                    </p>
                    <Button href="/locations">Browse Newcastle Areas</Button>
                </div>
            </section>
        </>
    );
}
