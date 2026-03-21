import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BgImage from "../../assets/images/BrownModern(7).png";
import coverage from "../../assets/images/add1.png";

export default function SunderlandAndSouthShields() {
    const highlights = [
        { icon: "🏖️", title: "South Beach", description: "Sunderland's award-winning beach stretches for miles — perfect for morning walks and summer days." },
        { icon: "⚽", title: "Stadium of Light", description: "Home of Sunderland AFC, one of England's most passionate football clubs." },
        { icon: "🚢", title: "South Shields", description: "A charming coastal town with a Roman fort, great fish & chips, and stunning sea views." },
        { icon: "🏭", title: "Industrial Hub", description: "Close to major employers, business parks, and automotive plants across Wearside." },
        { icon: "🎓", title: "Universities", description: "University of Sunderland close by — ideal for academics, researchers, and visiting staff." },
        { icon: "🌊", title: "Coastal Scenery", description: "The Durham Heritage Coast offers dramatic cliffs, beaches, and wildlife all year round." },
    ];

    return (
        <>
            <Head>
                <title>Serviced Apartments Sunderland & South Shields | Week2Week</title>
                <meta name="description" content="Quality serviced apartments in Sunderland and South Shields. Ideal for business, leisure, and long-term stays in the North East." />
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
                        Sunderland &<br />South Shields
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Wearside & the South Tyne Coast" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        Sunderland and South Shields offer a compelling mix of coastal beauty, industrial heritage, and a growing
                        creative and business scene. Whether you're visiting for work or leisure, this part of the North East
                        has a distinct character all its own.
                    </p>
                    <p>
                        Our serviced apartments in the area provide everything you need for a comfortable, flexible stay — whether
                        you're a contractor on a long project, a business professional, or a family enjoying the stunning coastline.
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="/find-apartments">Find Apartments Here</Button>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">What's Nearby?</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
                            From the coast to the Stadium of Light, there's more here than you might expect.
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
                <div className="max-w-container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-16">
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-video bg-cover bg-center" style={{ backgroundImage: `url('${coverage.src}')` }} />
                    <div className="flex-1 space-y-6">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Great Value on the Coast</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Our Sunderland and South Shields properties offer exceptional value without compromising on quality.
                            Fully furnished, all bills included, and with our housekeeping service, you can settle in and focus
                            on what matters most.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            With strong transport links along the Metro network, getting to Newcastle or the coast
                            is quick and easy. Book for as little as a week or as long as you need.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button href="/find-apartments">Browse Apartments</Button>
                            <Button variant="outline" href="/contact">Enquire Now</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">Discover the South Tyne Coast</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        Great value, coastal living, and a warm North East welcome. Let us find the perfect apartment for your stay.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                        Search Available Apartments
                    </Button>
                </div>
            </section>
        </>
    );
}
