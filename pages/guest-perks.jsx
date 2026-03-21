import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import GuestPerksImage2 from "../assets/images/BrownModern(8).png";
import { Icon } from "@iconify/react";

export default function GuestPerks() {
    const inApartmentPerks = [
        {
            title: "Welcome Pack",
            description: "A selection of tea, coffee, milk, and biscuits waiting for you upon arrival.",
            icon: <Icon icon="proicons:coffee-hot" width="48" height="48" />
        },
        {
            title: "Meet & Greet",
            description: "A personal check-in service to show you around and answer any local questions.",
            icon: "👋"
        },
        {
            title: "24/7 Support",
            description: "Our local team is always on hand to help with any queries during your stay.",
            // icon: "📞"
            icon: <Icon icon="glyphs-poly:phone-add" width="48" height="48" />
        },
        {
            title: "Fully Equipped",
            description: "Kitchens with everything you need, from appliances to utensils, for a true home-from-home.",
            icon: "🍳"
        }
    ];

    const exclusivePerks = [
        {
            title: "Local Attractions",
            category: "Culture",
            description: "Exclusive discounts at Newcastle Castle, Beamish Museum, and more.",
            // icon: "🏰"
            icon: <Icon icon="noto:castle" width="48" height="48" />
        },
        {
            title: "Dining Out",
            category: "Food & Drink",
            description: "Handpicked discounts at award-winning local restaurants and bars.",
            // icon: "🍽️"
            icon: <Icon icon="noto:fork-and-knife-with-plate" width="48" height="48" />
        },
        {
            title: "Wellbeing & Fitness",
            category: "Lifestyle",
            description: "Access to swim and gym facilities, plus discounts on wellbeing activities.",
            // icon: "🧘"
            icon: <Icon icon="noto:person-in-lotus-position" width="48" height="48" />
        },
        {
            title: "Coastal Adventures",
            category: "Activity",
            description: "Unique experiences like paddleboarding, kayaking, and beach sauna pods.",
            // icon: "🏄"
            icon: <Icon icon="noto:person-surfing" width="48" height="48" />
        }
    ];

    return (
        <>
            <Head>
                <title>Guest Perks & Exclusive Discounts Newcastle | Week2Week</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${GuestPerksImage2.src}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Guest Perks
                </h1>
            </section>

            {/* Introduction */}
            <section className="py-20 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="More Than Just a Place to Stay" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        At Week2Week, we want your stay in Newcastle to be truly memorable. That's why we go
                        above and beyond to provide extra value through our handpicked guest perks.
                    </p>
                    <p>
                        From the moment you arrive and receive our welcome pack, to the exclusive discounts
                        you'll enjoy at local businesses, we're here to enhance every aspect of your experience.
                    </p>
                </div>
            </section>

            {/* In-Apartment Perks Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark mb-4 italic text-gold">Standard Home Comforts</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto">
                            Included with every stay to ensure you have everything you need from day one.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {inApartmentPerks.map((perk, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-6">{perk.icon}</div>
                                <h3 className="font-heading text-lg font-bold text-primary-dark mb-3">{perk.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{perk.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Exclusive Perks Section */}
            <section className="py-24 bg-white">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark italic">"Week2Week Perks"</h2>
                        <p className="font-body text-gray-600 max-w-2xl mx-auto">
                            Unlock exclusive discounts and experiences across the North East by staying with us.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {exclusivePerks.map((perk, idx) => (
                            <div key={idx} className="flex items-start gap-6 p-8 border border-light-gray rounded-sm hover:border-gold transition-colors">
                                <div className="text-5xl shrink-0">{perk.icon}</div>
                                <div className="space-y-2">
                                    <span className="font-body text-gold font-bold text-xs uppercase tracking-widest">{perk.category}</span>
                                    <h3 className="font-heading text-xl font-bold text-primary-dark">{perk.title}</h3>
                                    <p className="font-body text-gray-600 text-sm leading-relaxed">{perk.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dog Friendly Section */}
            <section className="bg-primary-dark py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-10">
                    <h2 className="font-heading text-3xl font-bold italic">Dog Friendly Stays</h2>
                    <p className="font-body text-lg text-gray-300 leading-relaxed">
                        We know that a family trip isn't complete without your furry friends.
                        Select apartments are dog-friendly, and we can even provide local maps of
                        the best coastal and park walks in the area.
                    </p>
                    <div className="pt-4">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-colors" href="/find-apartments">
                            Find Dog Friendly Apartments
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white">
                <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark italic">Ready to Experience the Perks?</h2>
                    <p className="font-body text-gray-600 leading-relaxed">
                        Book your stay today and start planning your Newcastle adventure with our exclusive guest benefits.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button href="/find-apartments">Search All Apartments</Button>
                        <Button variant="outline" href="/contact">Inquire About Group Stays</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
