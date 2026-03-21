import Head from "next/head";
import { apartments } from "../data/apartments";
import ApartmentSearch from "../components/ui/ApartmentSearch";
import ApartmentCard from "../components/ui/ApartmentCard";
import CoverImage from "../assets/images/home-away-11.png";

export default function FindApartments() {
    return (
        <>
            <Head>
                <title>Find Apartments | Week2Week</title>
            </Head>

            {/* Spacer for fixed header */}
            <div className="h-[100px] md:h-[120px]" />

            {/* Banner */}
            <section
                className="relative h-[250px] md:h-[350px] bg-cover bg-center flex items-center justify-center pt-10 bg-primary-dark"
                style={{ backgroundImage: `url(${CoverImage.src})` }}
            >
                <div className="absolute inset-0 bg-black/30" />
                <h1 className="relative z-10 text-white font-heading font-bold text-3xl md:text-5xl lg:text-3xl text-center drop-shadow-lg">
                    Find Apartments
                </h1>
            </section>

            {/* Search Section */}
            <section className="relative z-20">
                <ApartmentSearch />
            </section>

            {/* Intro Text */}
            <section className="py-10 md:py-16">
                <div className="max-w-container mx-auto px-6 text-center">
                    <h2 className="text-xl font-heading font-bold text-primary-dark mb-6 border-b-2 border-primary inline-block pb-2">
                        Apartment Search
                    </h2>
                    {/* <p className="text-body-text font-body text-sm md:text-base max-w-3xl mx-auto hidden md:block">
                        Explore our collection of hand-picked serviced apartments in Newcastle and the North East.
                    </p> */}
                </div>
            </section>

            {/* Listings Section */}
            <section className="pb-20">
                <div className="max-w-container mx-auto px-6">
                    <div className="space-y-4">
                        {apartments.map((apartment) => (
                            <ApartmentCard key={apartment.id} apartment={apartment} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
