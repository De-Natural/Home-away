import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import imageCenter2 from "../../assets/images/costomersays.png"; 

const milestones = [
    { year: "2018", event: "Week2Week became an official charity partner of CHUF" },
    { year: "2019", event: "First annual fundraising gala dinner raising £12,000 for the unit" },
    { year: "2020", event: "Guests donate over 500 items to CHUF family support packages" },
    { year: "2021", event: "Staff complete the Great North Run raising over £8,500" },
    { year: "2022", event: "Week2Week total donation milestone reaches £50,000" },
    { year: "2023", event: "CHUF family accommodation partnership launched" },
    { year: "2024", event: "Continued support with events, donations, and guest-facing initiatives" },
];

export default function SupportingChuf() {
    return (
        <>
            <Head>
                <title>Supporting CHUF — Children's Heart Unit Fund | Ideal home</title>
                <meta name="description" content="Week2Week's ongoing partnership with CHUF — the Children's Heart Unit Fund at the Freeman Hospital, Newcastle." />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${imageCenter2.src}')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
                <div className="relative z-10 text-center px-6 space-y-3">
                    <span className="text-4xl">❤️</span>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Supporting CHUF</h1>
                    <p className="font-body text-white/80 text-base">Children's Heart Unit Fund, Freeman Hospital Newcastle</p>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Helping Little Hearts Beat Stronger" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        The Children's Heart Unit Fund (CHUF) is a charity that raises money to enhance the care given to
                        children and young people with heart conditions in the North of England. Based at the Freeman Hospital
                        in Newcastle, the unit is one of the busiest paediatric cardiac centres in the UK.
                    </p>
                    <p>
                        Week2Week has been a proud and passionate supporter of CHUF since 2018. We fundraise throughout the
                        year and encourage our guests, staff, and partners to get involved in supporting this incredible cause.
                    </p>
                </div>
            </section>

            {/* Impact Stats */}
            <section className="bg-primary py-20">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
                        {[
                            { stat: "£50,000+", label: "Total raised for CHUF" },
                            { stat: "6+ Years", label: "Official charity partnership" },
                            { stat: "100%", label: "Of donations go to patient care" },
                        ].map((s, idx) => (
                            <div key={idx} className="space-y-3">
                                <p className="font-heading text-5xl font-bold">{s.stat}</p>
                                <p className="font-body text-white/70 text-sm uppercase tracking-widest">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About CHUF + Image */}
            <section className="py-24 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">What CHUF Does</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            CHUF funds vital equipment for the cardiac unit, provides financial support to families
                            who travel long distances for treatment, and invests in research and training.
                            The charity relies entirely on donations and fundraising — every penny makes a real difference
                            to children's lives.
                        </p>
                        <ul className="space-y-3">
                            {[
                                "State-of-the-art medical equipment",
                                "Family support and accommodation assistance",
                                "Research grants and clinical trials",
                                "Play therapy and child wellbeing programmes",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 font-body text-sm text-gray-700">
                                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs shrink-0">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <Button href="https://www.chuf.org.uk" variant="outline">Donate to CHUF Directly</Button>
                    </div>
                    <div className="flex-1 bg-light-gray rounded-sm p-12 flex flex-col items-center justify-center gap-6 text-center">
                        <span className="text-7xl">💛</span>
                        <h3 className="font-heading text-2xl font-bold text-primary-dark">How You Can Help</h3>
                        <p className="font-body text-gray-600 text-sm leading-relaxed">
                            When you stay with Week2Week, you're indirectly supporting CHUF. But you can also donate
                            directly, take part in fundraising events, or simply spread the word.
                        </p>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="bg-light-gray py-24">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="font-heading text-3xl font-bold text-primary-dark text-center mb-16">Our Partnership Journey</h2>
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
                        <div className="space-y-8">
                            {milestones.map((m, idx) => (
                                <div key={idx} className="flex items-start gap-8 relative">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold text-xs shrink-0 relative z-10">
                                        {m.year.slice(2)}
                                    </div>
                                    <div className="flex-1 bg-white p-6 rounded-sm shadow-sm">
                                        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-1">{m.year}</p>
                                        <p className="font-body text-gray-700 text-sm">{m.event}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">Every Stay Helps a Child's Heart</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        Book your stay with Week2Week and be part of something bigger. A portion of our effort
                        and energy goes towards supporting CHUF and the remarkable children in their care.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                            Book Your Stay
                        </Button>
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white" href="/esg">
                            Our Full ESG Policy
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
