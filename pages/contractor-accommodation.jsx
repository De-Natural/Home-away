import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import Button from "../components/ui/Button";
import ContractorImage from "../assets/images/contractorBg.png";
import image1 from "../assets/images/image-337.png";
import image2 from "../assets/images/bedroom3.jpg";
import { Icon } from "@iconify/react";

export default function ContractorAccommodation() {
    const amenities = [
        { name: "Free Wifi", icon: <Icon icon="fluent-color:wifi-20" width="48" height="48" /> },
        { name: "Utilities Included", icon: "💡" },
        { name: "Fully Equipped Kitchen", icon: <Icon icon="fa7-solid:kitchen-set" width="48" height="48" /> },
        { name: "Weekly Housekeeping", icon: <Icon icon="openmoji:broom" width="48" height="48" /> },
        { name: "Fresh Linen & Towels", icon: <Icon icon="streamline-kameleon-color:towel" width="48" height="48" /> },
        { name: "24/7 Support", icon: <Icon icon="glyphs-poly:phone-add" width="48" height="48" /> }
    ];

    return (
        <>
            <Head>
                <title>Contractor Accommodation & Serviced Apartments | Ideal home</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${ContractorImage.src}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg uppercase tracking-wider">
                    Contractor Accommodation
                </h1>
            </section>

            {/* Search Bar */}
            <section className="relative z-20 -mt-10 mb-16">
                <ApartmentSearch />
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Contractor Accommodation" />
                <h3 className="font-heading text-gold text-xl md:text-2xl font-semibold mt-4 mb-8">
                    Ideal accommodation – No more take-aways
                </h3>
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600">
                    <p>
                        At Week2Week we have many years' experience in sourcing national accommodation for contractors
                        and project managers for stays ranging from as little as one week to as long as several years.
                    </p>
                    <p>
                        Our serviced apartments and houses provide a "home from home" environment, giving project teams
                        the space and comfort they need after a hard day's work. It's a cost-effective alternative to
                        cramped hotel rooms, allowing teams to cook their own meals and relax in private living areas.
                    </p>
                </div>
            </section>

            {/* Value Prop Alternating Sections */}
            <section className="bg-light-gray py-20">
                <div className="max-w-container mx-auto px-6 space-y-20">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 space-y-6">
                            <h3 className="font-heading text-2xl font-bold text-primary-dark">Working away from home?</h3>
                            <p className="font-body text-gray-600 leading-relaxed">
                                We understand the challenges of being away from home for long periods. That's why we offer
                                accommodation that prioritises comfort, privacy, and convenience. Our properties are fully
                                furnished and move-in ready, making it easier for project teams to settle in and focus on
                                their work.
                            </p>
                            <Button href="/find-apartments">Search Apartments</Button>
                        </div>
                        <div className="flex-1 rounded-sm overflow-hidden shadow-lg aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${image1.src}')` }} />
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col-reverse md:flex-row items-center gap-12">
                        <div className="flex-1 rounded-sm overflow-hidden shadow-lg aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${image2.src}')` }} />
                        <div className="flex-1 space-y-6">
                            <h3 className="font-heading text-2xl font-bold text-primary-dark">Cost-Effective Solutions</h3>
                            <p className="font-body text-gray-600 leading-relaxed">
                                Compared to booking multiple hotel rooms, our serviced apartments offer significant savings,
                                especially for groups and long-term stays. With internal laundry facilities and fully equipped kitchens,
                                you can also save on high restaurant bills and laundry services.
                            </p>
                            <Button variant="outline" href="/contact">Enquire About Pricing</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fully Loaded Amenities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6">
                    <SectionHeading title="Fully Loaded Apartments" />
                    <div className="grid grid-cols-2 md:grid-cols-3 mt-16 border-t border-l border-gray-200">
                        {amenities.map((item, idx) => (
                            <div key={idx} className="border-b border-r border-gray-200 p-10 flex flex-col items-center justify-center text-center group hover:bg-light-gray transition-colors">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="font-heading text-sm font-semibold text-primary-dark tracking-wide uppercase">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Section */}
            <section className="bg-primary-dark py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-white font-heading font-semibold text-2xl md:text-3xl italic leading-relaxed mb-10">
                        "We have used Week2Week for many years to house our project teams. The cost savings compared
                        to hotels are substantial, but more importantly, the morale of our staff is much higher
                        when they have a 'home' to go back to. Their service is second to none."
                    </h2>
                    <p className="text-gold font-heading font-bold uppercase tracking-widest text-sm">Managing Director, Technical Project Company</p>
                </div>
            </section>

            {/* Coverage Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark">National Coverage</h2>
                    <p className="font-body text-gray-600 leading-relaxed">
                        While we are experts in the Newcastle and North East area, we also have an extensive network
                        of trusted partners across the UK. This means we can source the same high-quality
                        accommodation for your team, wherever your next project takes you.
                    </p>
                    <div className="pt-4">
                        <Button href="/contact">Talk To Our Team</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
