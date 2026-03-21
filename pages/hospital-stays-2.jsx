import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import Button from "../components/ui/Button";
import HospitalImage from "../assets/images/hospital.png";
import image1 from "../assets/images/hospitalClose.png";

export default function HospitalStays() {
    const hospitalBenefits = [
        {
            title: "Home Comforts",
            description: "Fully equipped kitchens and comfortable living areas provide a sense of normalcy during stressful times.",
            icon: "🏠"
        },
        {
            title: "Reduced Stress",
            description: "Proximity to major Newcastle hospitals reduces travel time and stress for families and patients.",
            icon: "🧘"
        },
        {
            title: "Flexible Stays",
            description: "We understand that medical schedules can change. We offer flexible check-in times and extendable stays.",
            icon: "📅"
        },
        {
            title: "Peaceful Recovery",
            description: "Our quiet apartments offer the perfect environment for recuperation and respite care.",
            icon: "🤫"
        }
    ];

    const hospitals = [
        "Freeman Hospital",
        "Royal Victoria Infirmary (RVI)",
        "Newcastle Dental Hospital",
        "Nuffield Health Newcastle",
        "Queen Elizabeth Hospital (QE)",
        "Great North Children's Hospital"
    ];

    return (
        <>
            <Head>
                <title>Hospital Stays & Patient Support Accommodation Newcastle | Week2Week</title>
            </Head>

            {/* Hero Section */}
            <section
                className="w-full h-[350px] md:h-[450px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${HospitalImage.src}')` }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Comfortable Accommodation for Hospital Stays
                </h1>
            </section>

            {/* Search Bar */}
            <section className="relative z-20 -mt-10 mb-16">
                <ApartmentSearch />
            </section>

            {/* Introduction Section */}
            <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 text-center">
                <SectionHeading title="A Compassionate Home Away From Home" />
                <div className="space-y-6 text-body-text font-body text-sm md:text-base leading-relaxed text-gray-600 mt-8">
                    <p>
                        Week2Week Serviced Apartments offers a comfortable and flexible alternative to hotel
                        accommodation for those requiring a stay near Newcastle's major hospitals.
                        We provide the extra space and privacy that patients and their families need
                        during medical treatments or recovery.
                    </p>
                    <p>
                        Our dedicated team is here to support you, providing a stress-free environment
                        so you can focus on what's most important: your health and your loved ones.
                    </p>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="bg-light-gray py-20">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {hospitalBenefits.map((benefit, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-all border-l-4 border-primary">
                                <div className="text-4xl mb-6">{benefit.icon}</div>
                                <h3 className="font-heading text-xl font-bold text-primary-dark mb-4">{benefit.title}</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hospital Proximity Section */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="font-heading text-3xl font-bold text-primary-dark">Close to Leading Healthcare</h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            Our apartments are strategically located across the city to provide quick and easy
                            access to Newcastle's primary healthcare facilities and hospitals.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {hospitals.map((hospital) => (
                                <div key={hospital} className="flex items-center gap-3 text-body-text font-body-semibold text-sm">
                                    <span className="w-2 h-2 bg-primary rounded-full" />
                                    {hospital}
                                </div>
                            ))}
                        </div>
                        <div className="pt-4">
                            <Button href="/contact">Enquire About Proximity</Button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-sm overflow-hidden shadow-lg aspect-video bg-cover bg-center bg-gray-200" style={{ backgroundImage: `url('${image1.src}')` }} />
                </div>
            </section>

            {/* Support Message Section */}
            <section className="bg-primary py-24 px-6 text-center text-white">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">"We're Here for You and Your Family"</h2>
                    <p className="font-body text-lg text-gray-200 leading-relaxed">
                        Whether you're an NHS professional, a patient undergoing treatment, or a family member
                        offering support, we provide more than just a place to sleep. We provide a sanctuary.
                    </p>
                    <div className="flex justify-center gap-8 pt-4">
                        <div className="text-center">
                            <div className="text-3xl font-bold">24/7</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">Support</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold">Gold</div>
                            <div className="text-xs uppercase tracking-widest text-gray-400">Accredited</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Support Section */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark italic">Stress-Free Stay Planning</h2>
                    <p className="font-body text-gray-600 leading-relaxed">
                        Planning a hospital-related stay can be overwhelming. Let our family-run team
                        take some of the weight off your shoulders. We can help with flexible check-ins,
                        give you local advice, and ensure your apartment has everything you need to be comfortable.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button href="/contact">Talk to Our Team</Button>
                        <Button variant="outline" href="/find-apartments">View Local Apartments</Button>
                    </div>
                </div>
            </section>
        </>
    );
}
