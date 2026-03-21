import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import coverage from "../../assets/images/add4.png";
import BgImage from "../../assets/images/BrownModern(6).png";

export default function GatesheadQuays() {
    const highlights = [
        { icon: "🎵", title: "Sage Gateshead", description: "Steps from the world-class Sage Gateshead — a stunning music and arts venue on the riverbank." },
        { icon: "🎨", title: "BALTIC Art Centre", description: "One of the UK's most important contemporary art institutions, right at your doorstep." },
        { icon: "🌉", title: "Tyne Bridge Views", description: "Iconic views of the Tyne Bridge and Newcastle skyline from across the river." },
        { icon: "🍽️", title: "Trinity Square", description: "Great dining, supermarkets, and amenities all within easy reach in Trinity Square." },
        { icon: "🚇", title: "Metro Access", description: "Easy Metro connections to Newcastle city centre, the airport, and the coast." },
        { icon: "🏢", title: "Corporate Hub", description: "Close to major employers and business parks in the Gateshead area." },
    ];

    return (
        <>
            <Head>
                <title>Serviced Apartments Gateshead Quays | Week2Week</title>
                <meta name="description" content="Modern serviced apartments at Gateshead Quays. Stunning riverfront location with easy access to the Sage, BALTIC, and Newcastle." />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-end justify-start relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${BgImage.src}')` }}                    
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="relative z-10 px-8 md:px-16 pb-12 space-y-2">
                    <p className="font-body text-gold uppercase tracking-widest text-xs font-bold">Location</p>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                        Gateshead<br />Quays
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Where Culture Meets the River" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        Gateshead Quays is one of the most exciting cultural destinations in the UK. Home to the world-famous
                        Sage Gateshead and BALTIC Centre for Contemporary Art, this dynamic waterfront area has undergone an
                        extraordinary transformation and continues to thrive.
                    </p>
                    <p>
                        Staying at Gateshead Quays puts you at the heart of this cultural renaissance, with stunning views across
                        the Tyne to Newcastle and all the amenities of a modern city at your fingertips.
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="/find-apartments">Find Gateshead Apartments</Button>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">Why Gateshead Quays?</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
                            Culture, connectivity, and breathtaking views of the Tyne.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {highlights.map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-primary-dark mb-2">{item.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Row */}
            <section className="py-24 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">A World-Class Location</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Our Gateshead Quays apartments offer modern, high-specification accommodation in a location
                            that's hard to beat. With the Millennium Bridge, Sage, and BALTIC all within walking distance,
                            there's always something cultural to experience.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            All apartments are fully furnished with a well-equipped kitchen, super-fast Wi-Fi, and
                            flexible stay options to suit your needs.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button href="/find-apartments">Browse Apartments</Button>
                            <Button variant="outline" href="/contact">Enquire Now</Button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-video bg-cover bg-center" style={{ backgroundImage: `url('${coverage.src}')` }} />
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">Stay Where the Art Happens</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        From the Sage to BALTIC, Gateshead Quays is the cultural heartbeat of the North East. Make it your home.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                        Search Available Apartments
                    </Button>
                </div>
            </section>
        </>
    );
}
