// pages/find-apartments/[slug].jsx
// Dynamic property detail page — matches each apartment's href slug.

import Head from "next/head";
import { apartments } from "../../data/apartments";
import Button from "../../components/ui/Button";
import SectionHeading from "../../components/ui/SectionHeading";

export async function getStaticPaths() {
    const paths = apartments.map((apt) => ({
        params: { slug: apt.href.split("/").pop() },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const apartment = apartments.find(
        (apt) => apt.href.split("/").pop() === params.slug
    );
    // Destructure out `image` (may be undefined) so we don't pass it to props
    const { image, ...rest } = apartment;
    const serialisable = {
        ...rest,
        images: (apartment.images || (image ? [image] : [])).map((img) =>
            typeof img === "string" ? img : img.src
        ),
    };
    return { props: { apartment: serialisable } };
}

export default function ApartmentDetail({ apartment }) {
    const firstImage = apartment.images?.[0] ?? "";

    return (
        <>
            <Head>
                <title>{apartment.title} | Week2Week</title>
                <meta name="description" content={apartment.excerpt} />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[380px] md:h-[500px] bg-cover bg-center flex items-end justify-start relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url(${firstImage})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
                <div className="relative z-10 p-8 md:p-14 space-y-2">
                    <span className="text-gold font-body text-xs uppercase tracking-widest">{apartment.type} · {apartment.location}</span>
                    <h1 className="font-heading text-2xl md:text-4xl font-bold text-white drop-shadow-lg max-w-2xl leading-tight">
                        {apartment.title}
                    </h1>
                </div>
            </section>

            {/* Content */}
            <section className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
                {/* Main */}
                <div className="md:col-span-2 space-y-8">
                    <SectionHeading title="About This Property" />
                    <p className="font-body text-gray-600 text-sm md:text-base leading-relaxed">
                        {apartment.excerpt}
                    </p>
                    <p className="font-body text-gray-600 text-sm leading-relaxed">
                        This property is fully furnished and serviced, offering a home-from-home experience in one of the North East's most sought-after locations. All utilities are included and our team is available around the clock to ensure your stay is as comfortable as possible.
                    </p>

                    {/* Gallery Strip */}
                    {apartment.images?.length > 1 && (
                        <div className="grid grid-cols-3 gap-3 mt-6">
                            {apartment.images.map((src, i) => (
                                <div
                                    key={i}
                                    className="aspect-[4/3] bg-cover bg-center rounded-sm"
                                    style={{ backgroundImage: `url(${src})` }}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    <div className="bg-light-gray p-6 rounded-sm space-y-4">
                        <h3 className="font-heading font-bold text-primary-dark text-lg">Property Details</h3>
                        <ul className="space-y-3 text-sm font-body text-gray-600">
                            <li className="flex justify-between"><span className="font-semibold">Type</span><span>{apartment.type}</span></li>
                            <li className="flex justify-between"><span className="font-semibold">Location</span><span>{apartment.location}</span></li>
                            <li className="flex justify-between"><span className="font-semibold">Bedrooms</span><span>{apartment.bedrooms === 0 ? "Studio" : apartment.bedrooms}</span></li>
                        </ul>
                    </div>
                    <Button href="/contact" variant="primary" className="w-full text-center justify-center">
                        Enquire Now
                    </Button>
                    <Button href="/find-apartments" variant="outline" className="w-full text-center justify-center">
                        Back to Listings
                    </Button>
                </div>
            </section>
        </>
    );
}
