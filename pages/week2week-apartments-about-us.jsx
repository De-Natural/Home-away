// week2week-apartments-about-us.jsx
import Head from "next/head";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import SectionHeading from "../components/ui/SectionHeading";
import Accreditations from "../components/sections/Accreditations";
import { teamMembers } from "../data/team";

export default function AboutUs() {
    const values = [
        { title: "Love What We Do", icon: "🤍" },
        { title: "Provide Quality", icon: "🏅" },
        { title: "Build Lasting Relationships", icon: "🤝" },
        { title: "Forward Thinking", icon: "⚙️" },
        { title: "Integrity & Transparency", icon: "⭕" },
        { title: "Openness", icon: "🚪" },
    ];

    return (
        <>
            <Head>
                <title>Who We Are | Week2Week Serviced Apartments</title>
            </Head>

            {/* Spacer for fixed header */}
            <div className="h-[100px] md:h-[120px]" />

            {/* Search Bar matching the design */}
            <section className="relative z-20 pt-10">
                <ApartmentSearch />
            </section>

            {/* Intro Section */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="Your Home from Home" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                        {/* Faint background logo graphic like in design */}
                        <svg viewBox="0 0 100 100" className="w-[300px] h-[300px]" fill="currentColor">
                            <path d="M50 0 C77.6 0 100 22.4 100 50 C100 77.6 77.6 100 50 100 C22.4 100 0 77.6 0 50 C0 22.4 22.4 0 50 0 Z" />
                        </svg>
                    </div>
                    <p>
                        Week2Week Serviced Accommodation was established over 24 years ago and is the original serviced
                        accommodation provider based in Newcastle. We are a Gold Standard Quality Accredited Company,
                        offering high quality hotel alternative accommodation, in key locations in and around Newcastle city
                        centre and across the UK via our partner networks.
                    </p>
                    <p>
                        As a family run business, we are a local team with expert local knowledge. We pride ourselves on our
                        excellent customer service and operate a personal meet and greet check-in service and offer 24/7
                        guest support.
                    </p>
                    <p>
                        Week2Week accommodate short, mid and extended stays for both business and leisure travellers. We
                        offer a flexible booking policy, giving guests added peace of mind. Over recent years, we have become
                        the preferred 'home from home' choice of accommodation for corporate travellers, contractors and
                        relocations as our apartments and houses provide the perfect blend of workspace and relaxation.
                    </p>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-light-gray py-20">
                <div className="max-w-container mx-auto px-6">
                    <SectionHeading title="Our Values" />
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 mt-16 text-center">
                        {values.map((val, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <span className="text-5xl text-primary mb-6">{val.icon}</span>
                                <div className="w-20 h-px bg-primary mb-4" />
                                <h4 className="font-body text-sm font-semibold tracking-wide uppercase text-gray-800">
                                    {val.title}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial Banner */}
            <section className="bg-primary-dark py-24 px-6 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-white font-heading font-semibold text-2xl md:text-3xl leading-snug mb-8">
                        "Very efficient service received and always there to help whenever required.
                        went out of their way to help in any way possible and would recommend them
                        to anyone"
                    </h2>
                    <p className="text-white/80 font-body text-sm">Week2Week Corporate Client</p>
                </div>
            </section>

            {/* Meet the Team */}
            <section className="py-20 max-w-container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-gray-500 font-body leading-relaxed">
                        Week2Week Serviced Apartments is about more than our range of prime location
                        apartments in the North East of England. It's the people behind the scenes who give us our
                        unique approach to accommodation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {teamMembers.map((member, idx) => (
                        <div key={idx} className="flex flex-col">
                            {/* Member Image placeholder (using a subtle gray box if image fails) */}
                            <div className="aspect-[4/3] w-full bg-gray-200 mb-8 rounded-sm overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${member.image})` }} />

                            <div className="space-y-6 text-body-text font-body text-sm leading-relaxed">
                                {member.bio.map((para, pIdx) => (
                                    <p key={pIdx} dangerouslySetInnerHTML={{ __html: para }} />
                                ))}
                                <p className="font-bold">Fun Facts:</p>
                                <p>{member.funFacts}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Accreditations */}
            <Accreditations />
        </>
    );
}
