import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BgImage from "../../assets/images/BrownModern(1).png";
import BgImage2 from "../../assets/images/add3.png";

export default function Jesmond() {
    const highlights = [
        { icon: "🌳", title: "Jesmond Dene", description: "A stunning wooded valley park right on your doorstep — perfect for morning runs and relaxing walks." },
        { icon: "🍷", title: "Osborne Road", description: "A lively strip of acclaimed restaurants, wine bars, and gastropubs." },
        { icon: "🏫", title: "Close to Universities", description: "Ideal for visiting academics, students, and healthcare workers near Newcastle University." },
        { icon: "🚇", title: "Metro Links", description: "Quick and easy Metro connections to the city centre, airport, and coast." },
        { icon: "🎭", title: "Vibrant Community", description: "One of Newcastle's most sought-after neighbourhoods with a friendly, cosmopolitan feel." },
        { icon: "🏥", title: "Healthcare Proximity", description: "Easy access to Freeman Hospital and the Royal Victoria Infirmary." },
    ];

    return (
        <>
            <Head>
                <title>Serviced Apartments Jesmond Newcastle | Week2Week</title>
                <meta name="description" content="Stylish serviced apartments in Jesmond, Newcastle's most desirable neighbourhood. Short and long stays welcome." />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-end justify-start relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage:  `url('${BgImage.src}')` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="relative z-10 px-8 md:px-16 pb-12 space-y-2">
                    <p className="font-body text-gold uppercase tracking-widest text-xs font-bold">Location</p>
                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-white drop-shadow-lg leading-tight">
                        Jesmond
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Newcastle's Most Desirable Neighbourhood" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        Jesmond is widely regarded as Newcastle's most prestigious residential area — a leafy, characterful neighbourhood
                        that blends Victorian architecture with a vibrant modern lifestyle. It's the perfect balance between city buzz and
                        suburban tranquillity.
                    </p>
                    <p>
                        Our Jesmond serviced apartments are popular with visiting professionals, academics, medical staff, and anyone
                        who wants a high-quality base in Newcastle without being in the heart of the city.
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="/find-apartments">Find Jesmond Apartments</Button>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">Why Jesmond?</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
                            The best of both worlds — village atmosphere with city convenience.
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
                    <div className="flex-1 rounded-sm overflow-hidden shadow-xl aspect-video bg-cover bg-center" style={{ backgroundImage: `url('${BgImage2.src}')` }} />
                    <div className="flex-1 space-y-6">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Comfortable & Well-Connected</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Each apartment in Jesmond is furnished to a high standard, with a fully equipped kitchen, smart TV, and
                            high-speed Wi-Fi. The Metro station puts the city centre just 5 minutes away, and the airport is equally accessible.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            We offer flexible stays from one week upwards, and our team is always on hand to help make your stay
                            as comfortable as possible.
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
                    <h2 className="font-heading text-3xl font-bold italic">Jesmond — Where Newcastle Lives Its Best Life</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        Book a Jesmond apartment and discover why this neighbourhood is so beloved by locals and visitors alike.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                        Search Available Apartments
                    </Button>
                </div>
            </section>
        </>
    );
}
