import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import imageCenter from "../../assets/images/property5.png"; 


const pillars = [
    {
        icon: "🌱",
        label: "Environmental",
        title: "Reducing Our Footprint",
        description: "We are committed to reducing the environmental impact of our properties through energy efficiency, responsible sourcing, and sustainable cleaning practices.",
        points: ["Energy-efficient appliances in all apartments", "Recycling encouraged across all properties", "Eco-friendly cleaning products", "Reducing single-use plastics"],
    },
    {
        icon: "🤝",
        label: "Social",
        title: "People & Community",
        description: "Our people are at the heart of everything we do. We invest in our team, support local charities, and work to create a positive impact in our local community.",
        points: ["Living Wage employer", "Supporting local suppliers", "Charitable partnerships", "Disability-inclusive practices"],
    },
    {
        icon: "🏛️",
        label: "Governance",
        title: "Transparent & Accountable",
        description: "We run our business with integrity, transparency, and accountability. We work to the highest ethical standards and comply with all relevant regulations.",
        points: ["Annual ESG reporting", "ASAP code of conduct compliance", "Anti-bribery & corruption policy", "Data protection & GDPR compliance"],
    },
];

export default function ESG() {
    return (
        <>
            <Head>
                <title>ESG Policy — Environmental, Social & Governance | Ideal home</title>
                <meta name="description" content="Ideal home's commitment to Environmental, Social and Governance principles — building a more sustainable and responsible serviced apartment business." />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${imageCenter.src}')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60" />
                <div className="relative z-10 text-center px-6 space-y-4">
                    <p className="font-body text-gold uppercase tracking-widest text-xs font-bold">Our Commitment</p>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                        Environmental, Social<br />& Governance
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Doing Business the Right Way" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        At Week2Week, we believe that a successful business must be a responsible one. After 25+ years in the
                        serviced apartment industry, we understand that our success is deeply intertwined with the wellbeing
                        of our people, our community, and our environment.
                    </p>
                    <p>
                        Our ESG framework guides how we operate, invest, and grow — ensuring that we leave a positive legacy
                        for the communities and environments we touch.
                    </p>
                </div>
            </section>

            {/* Three Pillars */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6 space-y-16">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-start gap-12`}>
                            <div className="flex-1 bg-white p-10 rounded-sm shadow-sm">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-4xl">{pillar.icon}</span>
                                    <div>
                                        <p className="font-body text-gold text-xs uppercase tracking-widest font-bold">{pillar.label}</p>
                                        <h2 className="font-heading text-2xl font-bold text-primary-dark">{pillar.title}</h2>
                                    </div>
                                </div>
                                <p className="font-body text-gray-600 leading-relaxed mb-6">{pillar.description}</p>
                                <ul className="space-y-3">
                                    {pillar.points.map((point, i) => (
                                        <li key={i} className="flex items-center gap-3 font-body text-sm text-gray-700">
                                            <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs shrink-0">✓</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={`flex-1 text-center ${idx % 2 === 1 ? "md:text-right" : "md:text-left"}`}>
                                <span className="inline-block font-heading text-[9rem] leading-none opacity-10 text-primary-dark select-none">{pillar.icon}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CHUF Callout */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <p className="font-body text-gold text-xs uppercase tracking-widest font-bold">Charity Partner</p>
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Supporting CHUF</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            We are proud supporters of the Children's Heart Unit Fund (CHUF) at the Freeman Hospital
                            in Newcastle. CHUF funds vital equipment, family support, and research for children with
                            heart conditions across the North of England.
                        </p>
                        <Button href="/esg/supporting-chuf">Learn More About CHUF</Button>
                    </div>
                    <div className="flex-1 bg-light-gray rounded-sm p-12 flex items-center justify-center">
                        <div className="text-center space-y-4">
                            <span className="text-6xl">❤️</span>
                            <p className="font-heading text-2xl font-bold text-primary-dark">Children&apos;s Heart Unit Fund</p>
                            <p className="font-body text-gray-600 text-sm">Freeman Hospital, Newcastle</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">Together, We Can Do More</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        We're always looking for new ways to improve our ESG credentials. If you'd like to partner with us
                        on a sustainability initiative or community project, we'd love to hear from you.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/contact">
                        Get In Touch
                    </Button>
                </div>
            </section>
        </>
    );
}
