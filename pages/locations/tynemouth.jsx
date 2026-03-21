import Head from "next/head";
import SectionHeading from "../../components/ui/SectionHeading";
import Button from "../../components/ui/Button";
import BgImage from "../../assets/images/BrownModern(5).png";
import coverage from "../../assets/images/coverage.png";

export default function Tynemouth() {
    const highlights = [
        { icon: "🏖️", title: "Stunning Beaches", description: "Tynemouth Longsands is one of England's finest beaches — surf, swim, or simply relax." },
        { icon: "🏰", title: "Tynemouth Castle & Priory", description: "Explore centuries of history at the dramatic ruined priory overlooking the sea." },
        { icon: "🏄", title: "Surf Culture", description: "A thriving surfing community with lessons and equipment hire available all year round." },
        { icon: "☕", title: "Café Life", description: "Front Street is lined with award-winning cafés, delis, independent restaurants, and boutiques." },
        { icon: "🚇", title: "Metro to Newcastle", description: "The coastal Metro route connects Tynemouth to Newcastle city centre in under 20 minutes." },
        { icon: "🎪", title: "Weekend Market", description: "The famous Tynemouth Station Market runs on weekends — vintage, art, and street food galore." },
    ];

    return (
        <>
            <Head>
                <title>Serviced Apartments Tynemouth | Week2Week</title>
                <meta name="description" content="Coastal serviced apartments in Tynemouth. Beaches, surf, and village charm — perfect for a relaxing or working break." />
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
                        Tynemouth
                    </h1>
                </div>
            </section>

            {/* Intro */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Coastal Living at Its Finest" />
                <div className="space-y-5 text-gray-600 font-body text-sm md:text-base leading-relaxed mt-8">
                    <p>
                        Tynemouth is a jewel on the North East coast — a vibrant seaside village with surf beaches, a ruined priory,
                        and one of the best café cultures in the North of England. It's the perfect escape while remaining connected
                        to Newcastle by Metro.
                    </p>
                    <p>
                        Whether you're here for a leisure staycation, a working break, or a longer project stay, our Tynemouth
                        serviced apartments offer something truly special: the peace and beauty of the coast.
                    </p>
                </div>
                <div className="mt-10">
                    <Button href="/find-apartments">Find Tynemouth Apartments</Button>
                </div>
            </section>

            {/* Highlights Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">Why Tynemouth?</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto mt-4">
                            Sea air, sandy beaches, and a village community unlike anywhere else in the North East.
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
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Your Coastal Home Base</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Our Tynemouth apartments are warm, welcoming, and fully equipped for an extended stay.
                            With the beach a short walk away and the Metro linking you to Newcastle in under 20 minutes,
                            you get the best of both worlds.
                        </p>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Perfect for staycations, relocating professionals, and visiting NHS staff at nearby hospitals.
                            Stays from one week to as long as you need.
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
                    <h2 className="font-heading text-3xl font-bold italic">Wake Up to the Sound of Waves</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        There's no better way to start every morning than with sea air and coastal views. Book a Tynemouth apartment today.
                    </p>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/find-apartments">
                        Search Available Apartments
                    </Button>
                </div>
            </section>
        </>
    );
}
