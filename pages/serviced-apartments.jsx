
import Head from "next/head";
import { useState } from "react";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import SectionHeading from "../components/ui/SectionHeading";
import CoverImage from "../assets/images/house_model_modern_architecture.png";
import LeisureImg from "../assets/images/LeisureImage.png";
import BusinessImg from "../assets/images/business-image.avif";
import CorporateImg from "../assets/images/cooperate-group-image.png";
import ContractorImg from "../assets/images/contractorImg.png";
import Bed2 from "../assets/images/bedroom2.jpg";
import Bed3 from "../assets/images/bedroom3.jpg";
import Bed4 from "../assets/images/bedroom4.jpg";
import Bed5 from "../assets/images/bedroom5.jpg";
import Bed6 from "../assets/images/bedroom6.jpg";
import { Icon } from "@iconify/react";

export default function ServicedApartments() {
    const [activeTab, setActiveTab] = useState("Leisure");

    const tabsData = [
        {
            id: "Leisure",
            label: "Leisure 🧳",
            title: "Apartments for Leisure",
            text: [
                "If you are considering a much-needed leisure break in the Newcastle upon Tyne area either alone, with a partner or with your family, then Week2Week can provide you with a beautiful apartment that will meet your needs. We have apartments close by to all of the local attractions at the centre of it all.",
                "Our serviced apartments provide you with a home from home feel coupled with the benefits of a luxury hotel giving you the advantages of both experiences.",
                "Week2Week Serviced Apartments offer a range of 1, 2, 3 and 4 – 5 bedroom options all with ample space and additional rooms you wouldn't usually get when staying at a hotel and all for affordable prices."
            ],
            image: LeisureImg
        },
        {
            id: "Business",
            label: "Business 📈",
            title: "Apartments for Business",
            text: [
                "Are you traveling for business and need a comfortable, productive space? Our serviced apartments offer the perfect environment to work, relax, and recharge.",
                "Enjoy high-speed Wi-Fi, dedicated workspaces, and central locations that make commuting to meetings a breeze. We cater to the specific needs of modern business travelers."
            ],
            image: BusinessImg
        },
        {
            id: "Corporate",
            label: "Corporate Groups 👥",
            title: "Apartments for Corporate Groups",
            text: [
                "Finding suitable accommodation for a group of colleagues can be challenging. We offer spacious multi-bedroom apartments and multiple apartments in the same building.",
                "Keep your team together while allowing everyone their own private bedroom and bathroom space. A cost-effective and collaborative alternative to multiple hotel rooms."
            ],
            image: CorporateImg
        },
        {
            id: "Contractor",
            label: "Contractor 🛠️",
            title: "Apartments for Contractors",
            text: [
                "Working on a long-term project in the North East? Our contractor accommodation provides a practical and comfortable base for your workforce.",
                "With fully equipped kitchens, laundry facilities, and comfortable living areas, your team can relax after a hard day's work. We offer flexible terms for project-based stays."
            ],
            image: ContractorImg
        }
    ];

    const amenities = [
        { name: "Free Wifi", icon: <Icon icon="fluent-color:wifi-20" width="48" height="48" /> },
        { name: "Utilities Included", icon: "💡" },
        { name: "Fully Equipped Kitchen", icon: <Icon icon="fa7-solid:kitchen-set" width="48" height="48" /> },
        { name: "Modern Bathrooms", icon: "🛁" },
        { name: "Housekeeping", icon: <Icon icon="openmoji:broom" width="48" height="48" /> },
        { name: "Parking Available", icon: <Icon icon="fluent-emoji-flat:minibus" width="48" height="48" /> },
        { name: "Fully Furnished", icon: <Icon icon="fluent-emoji-flat:bed" width="48" height="48" /> },
        { name: "24/7 Support", icon: <Icon icon="glyphs-poly:phone-add" width="48" height="48" /> }
    ];

    const instagramImages = [
        Bed2, Bed3, Bed4, Bed5, Bed6
    ];

    const activeTabData = tabsData.find(t => t.id === activeTab);

    return (
        <>
            <Head>
                <title>Serviced Apartments Newcastle | Week2Week</title>
            </Head>

            {/* Hero Banner */}
            <section
                className="w-full h-[400px] md:h-[500px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url(${CoverImage.src})` }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
                    Serviced Apartments
                </h1>
            </section>

            {/* Search Bar - overlapping banner */}
            <section className="relative z-20 -mt-16 mb-20">
                <ApartmentSearch />
            </section>

            {/* Intro Section */}
            <section className="max-w-4xl mx-auto px-6 text-center pb-20 relative">
                <SectionHeading title="Beautiful Serviced Apartments" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        Serviced apartments are what we do. That perfect mix of the cleanliness and intimacy you
                        would expect from a hotel room but with the added space and comfort you would expect
                        from your very own home.
                    </p>
                    <p>
                        Including furnishings, maid service and amenities that go above and beyond that of a hotel, a
                        fully serviced apartment from Week2Week is the logical, cost effective choice for short or long
                        stays no matter your reason for visiting the <strong>north east</strong> of England or any worldwide cities in
                        our reach.
                    </p>
                </div>

                {/* Flexible Cancellation Badge */}
                <div className="fixed bottom-5 left-5 z-50 hidden lg:flex items-center justify-center w-28 h-28 rounded-full bg-primary text-white font-heading font-bold text-sm text-center leading-tight shadow-lg">
                    Flexible<br />Cancellation
                </div>
            </section>

            {/* Interactive Tabs */}
            <section className=" px-6 py-12 bg-light-gray">
                {/* Tab Headers */}
                <div className="flex flex-col md:flex-row w-full divide-y md:divide-y-0 md:divide-x divide-white/20">
                    {tabsData.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-4 px-6 text-center font-heading font-semibold text-sm transition-colors duration-300 ${activeTab === tab.id
                                ? "bg-white text-primaryborder-t-2 border-primary"
                                : "bg-primary-dark text-white hover:bg-primary"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="bg-white p-8 md:p-12 shadow-sm min-h-[400px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            {activeTabData?.text.map((para, idx) => (
                                <p key={idx} className="text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600">
                                    {para}
                                </p>
                            ))}
                        </div>
                        {activeTabData?.image && (
                            <div
                                className="w-full aspect-[4/3] bg-cover bg-center bg-gray-200 rounded-sm"
                                style={{ backgroundImage: `url(${activeTabData.image.src})` }}
                            />
                        )}
                    </div>
                </div>
            </section>

            {/* Amenities Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6">
                    <SectionHeading title="Fully Loaded Apartments" />
                    <div className="grid grid-cols-2 md:grid-cols-4 mt-16 border-t border-l border-gray-200">
                        {amenities.map((item, idx) => (
                            <div key={idx} className="border-b border-r border-gray-200 p-10 flex flex-col items-center justify-center text-center group hover:bg-light-gray transition-colors">
                                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h4 className="font-heading text-sm font-semibold text-primary-dark">{item.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Instagram Feed */}
            <section className="pt-10 pb-20">
                <div className="h-40 mb-10 flex flex-col items-center justify-center gap-8 text-center bg-primary-dark">
                    <h2 className="text-xl md:text-2xl font-heading font-semibold text-white">“Staff couldn’t have been more helpful; the apartment was perfect”</h2>
                    <p className="text-xs md:text-sm font-body text-white">Home away from home by idealhome for Corporate Client</p>
                </div>
                
                <div className="flex w-full gap-4 mb-10">
                    {instagramImages.map((src, idx) => (
                        <div key={idx} className="w-1/2 md:w-1/5 aspect-square relative group overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${src.src})` }}
                            />
                            <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/60 transition-colors duration-300 flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300 text-3xl">
                                    📷
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mb-10 relative">
                    <div className="absolute left-0 right-0 top-1/2 h-px bg-gray-200 -z-10" />
                    <h2 className="inline-block bg-white px-6 font-heading font-semibold text-2xl text-primary-dark">
                        Follow us on Instagram
                    </h2>
                </div>
            </section>
        </>
    );
}
