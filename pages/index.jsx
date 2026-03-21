// index.jsx
// Homepage — assembles all homepage sections in order matching week2week.co.uk.

import Head from "next/head";
import HeroSection from "../components/sections/HeroSection";
import IconBar from "../components/sections/IconBar";
import WelcomeSection from "../components/sections/WelcomeSection";
import PrimeLocations from "../components/sections/PrimeLocations";
import MapSection from "../components/sections/MapSection";
import WhyChoose from "../components/sections/WhyChoose";
import Testimonials from "../components/sections/Testimonials";
import PropertyManagement from "../components/sections/PropertyManagement";
import Accreditations from "../components/sections/Accreditations";
import LatestNews from "../components/sections/LatestNews";

export default function Home() {
    return (
        <>
            <Head>
                <title>Serviced Apartments Newcastle | Week2Week</title>
            </Head>

            {/* Spacer for fixed header */}
            <div className="h-[100px] md:h-[120px]" />

            <HeroSection />
            <IconBar />
            <WelcomeSection />
            <PrimeLocations />
            <MapSection />
            <WhyChoose />
            <Testimonials />
            <PropertyManagement />
            <Accreditations />
            <LatestNews />
        </>
    );
}
