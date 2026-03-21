import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BgImage from "../../assets/images/BrownModern(4).png";
import coverage from "../../assets/images/coverage.png";

export default function NewcastleQuayside() {
    const highlights = [
        { icon: "🌉", title: "Iconic Views", description: "Wake up to stunning views of the Tyne Bridge and the Sage from your apartment window." },
        { icon: "🍽️", title: "Restaurant Row", description: "Some of the finest dining in the North East is right on the Quayside — from casual bites to fine dining." },
        { icon: "🎨", title: "BALTIC & Culture", description: "BALTIC Centre for Contemporary Art and the Sage Gateshead are walking distance away." },
        { icon: "🚣", title: "River Activities", description: "Kayaking, boat tours, and riverside cycling paths make every day an adventure." },
        { icon: "🏢", title: "Business District", description: "Close to Newcastle's key corporate offices – perfect for business travellers." },
        { icon: "🌙", title: "Famous Nightlife", description: "The Quayside is the epicentre of Newcastle's legendary night-time economy." },
    ];

    return (
        <>
            <Head>
                <title>Serviced Apartments Newcastle Quayside | Week2Week</title>
                <meta name="description" content="Stunning serviced apartments on the Newcastle Quayside. Iconic views, world-class dining, and vibrant culture on your doorstep." />
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
                        Newcastle<br />Quayside
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Life on the Iconic Tyne" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        There's nowhere quite like the Newcastle Quayside. Stretching along the north bank of the River Tyne, this iconic
                        stretch is home to some of the most breathtaking views in England, world-class culture, and a dining and social scene
                        that attracts visitors from across the globe.
                    </p>
                    <p>
                        A serviced apartment on the Quayside puts you at the centre of the action, whether you're here for a leisure
                        break or on an extended business visit.
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="/find-apartments">Find Quayside Apartments</Button>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">Why the Quayside?</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
                            An unbeatable location where history, culture, and modernity converge.
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
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">A View Worth Coming Home To</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Quayside apartments are our most premium offering — beautifully appointed and filled with natural light.
                            With iconic Tyne Bridge views, fully equipped kitchens, and flexible terms, they represent the very best
                            in Newcastle serviced accommodation.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Whether you're watching the Sunday Quayside Market from your window or heading out to the BALTIC,
                            you'll never be short of things to do.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button href="/find-apartments">Browse Apartments</Button>
                            <Button variant="outline" href="/contact">Enquire Now</Button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-video bg-cover bg-center" style={{ backgroundImage: `url('${coverage.src}')` }} />
                </div>
            </section>

            {/* Dark CTA */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">"Waking up to a Tyne Bridge view never gets old"</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        Experience Newcastle from its most spectacular vantage point. Book a Quayside apartment today.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                        Search Available Apartments
                    </Button>
                </div>
            </section>
        </>
    );
}
