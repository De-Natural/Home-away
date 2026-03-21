import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BgImage from "../../assets/images/BrownModern(2).png";
import BgImage2 from "../../assets/images/add2.png";

export default function NewcastleCityCentre() {
    const highlights = [
        { icon: "🏛️", title: "Cultural Quarter", description: "Steps away from the Theatre Royal, BALTIC Centre, and Sage Gateshead." },
        { icon: "🛍️", title: "World-Class Shopping", description: "Eldon Square, Grey Street boutiques, and the Grainger Market all nearby." },
        { icon: "🍽️", title: "Dining & Nightlife", description: "Hundreds of restaurants, bars, and eateries right on your doorstep." },
        { icon: "🚉", title: "Transport Hub", description: "Central Station minutes away with direct links to Edinburgh and London." },
        { icon: "🏟️", title: "St. James' Park", description: "Perfect for football fans visiting for a Newcastle United match." },
        { icon: "🏥", title: "Near the RVI", description: "Convenient for those attending or working at the Royal Victoria Infirmary." },
    ];

    return (
        <>
            <Head>
                <title>Serviced Apartments Newcastle City Centre | Week2Week</title>
                <meta name="description" content="Premium serviced apartments in the heart of Newcastle City Centre. Ideal for business stays, leisure, and long-term stays." />
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
                        Newcastle<br />City Centre
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="In the Heart of the City" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        Our Newcastle City Centre serviced apartments place you at the very heart of one of the UK's most vibrant and exciting cities.
                        Whether you're here for business or pleasure, you'll find everything you need within easy walking distance.
                    </p>
                    <p>
                        From the iconic Grey Street and the Grainger Market to the buzzing Quayside and major corporate headquarters,
                        our city centre apartments are the ideal base for any stay — short or long.
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="/find-apartments">Find City Centre Apartments</Button>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">Why Stay in the City Centre?</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
                            Everything Newcastle has to offer, right outside your door.
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

            {/* Alternating Feature */}
            <section className="py-24 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-6">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Your Home in the City</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Our city centre apartments come fully furnished with everything you'd expect at home — a fully equipped kitchen,
                            comfortable living space, high-speed Wi-Fi, and weekly housekeeping included.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Available for stays from one week to several years, our flexible terms make us the ideal choice for
                            project workers, relocating professionals, and anyone who deserves more than a hotel room.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <Button href="/find-apartments">Browse Apartments</Button>
                            <Button variant="outline" href="/contact">Enquire Now</Button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-video bg-cover bg-center" style={{ backgroundImage: `url('${BgImage2.src}')` }} />
                </div>
            </section>

            {/* CTA Banner */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">"A genuine home-from-home in the heart of Newcastle"</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        Don't settle for a cramped hotel room. Experience the freedom and comfort of your own private apartment
                        in one of England's most exciting city centres.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                        Search Available Apartments
                    </Button>
                </div>
            </section>
        </>
    );
}
