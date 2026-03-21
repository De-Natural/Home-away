import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import Button from "../components/ui/Button";
import imageCation from "../assets/images/image-337.png";
import imageStaycation from "../assets/images/homeAwaykitchen2.png";

export default function StaycationNewcastle() {
    const staycationFeatures = [
        {
            title: "Self-Catering Ease",
            description: "Fully equipped kitchens with everything you need to cook your favorite meals, just like at home.",
            icon: "🍳"
        },
        {
            title: "Space to Relax",
            description: "Ample living areas and multiple bedrooms, perfect for families or groups spending time together.",
            icon: "🛋️"
        },
        {
            title: "Dog Friendly",
            description: "Don't leave your furry friend behind! Select apartments are pet-friendly so the whole family can join.",
            icon: "🐾"
        },
        {
            title: "Special Touches",
            description: "Celebrate in style with our optional extras like prosecco, chocolates, or breakfast packs.",
            icon: "🍾"
        }
    ];

    return (
        <>
            <Head>
                <title>Staycation Apartments Newcastle | Week2Week</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${imageCation.src}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                    Staycation Newcastle
                </h1>
            </section>

            {/* Search Bar */}
            <section className="relative z-20 -mt-10 mb-16">
                <ApartmentSearch />
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Your Perfect Newcastle Staycation" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        Looking for a change of scenery? Our Newcastle staycation apartments offer the ultimate
                        'home from home' experience. Located in the most vibrant parts of the city, from the
                        luxury of the Quayside to the leafy suburbs of Gosforth, you're never far from the action.
                    </p>
                    <p>
                        Avoid the restrictions of a single hotel room. With a Week2Week apartment, you get
                        your own kitchen, living room, and private bedrooms. It's the perfect way to enjoy
                        quality time with family and friends while exploring everything the North East has to offer.
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="bg-light-gray py-20">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {staycationFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-b-4 border-gold">
                                <div className="text-4xl mb-6">{feature.icon}</div>
                                <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">{feature.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lifestyle Section */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="flex-1 rounded-sm overflow-hidden shadow-lg aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${imageStaycation.src}')` }} />
                    <div className="flex-1 space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Everything You Need</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Our apartments come fully loaded with free Wi-Fi, smart TVs, and all the essential amenities
                            you'd expect. Many of our properties also feature private balconies or garden access,
                            providing that extra bit of space to breathe and relax during your city break.
                        </p>
                        <div className="flex gap-4">
                            <Button href="/find-apartments">Search Locations</Button>
                            <Button variant="outline" href="/guest-perks">Guest Perks</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Celebration/Gift Section */}
            <section className="bg-primary py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold">Making Your Stay Special</h2>
                    <p className="font-body text-lg text-gray-200 leading-relaxed">
                        Visiting for a birthday, anniversary, or just a special treat? We can arrange for prosecco,
                        artisan chocolates, fresh flowers, or even a full breakfast pack to be waiting for you
                        on arrival. Just let our team know when you book!
                    </p>
                    <div className="pt-4">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors" href="/contact">
                            Inquire About Extras
                        </Button>
                    </div>
                </div>
            </section>

            {/* Location Links */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark">Explore Our Neighborhoods</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {['Newcastle City Centre', 'Jesmond', 'Gosforth', 'Quayside', 'Tynemouth'].map((loc) => (
                            <a
                                key={loc}
                                href={`/locations/${loc.toLowerCase().replace(/ /g, '-')}`}
                                className="px-6 py-3 bg-light-gray rounded-full text-primary-dark font-heading font-semibold hover:bg-primary hover:text-white transition-colors"
                            >
                                {loc}
                            </a>
                        ))}
                    </div>
                    <p className="font-body text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        From the bustling Quayside with its bars and restaurants to the historic charm of Gosforth,
                        we have the perfect base for your Newcastle exploration.
                    </p>
                </div>
            </section>
        </>
    );
}
