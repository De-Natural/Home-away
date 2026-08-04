// index.jsx
// Homepage — assembles all homepage sections in order matching Ideal home.co.uk.

import Head from "next/head";
import HeroSection from "../components/sections/HeroSection";
import IconBar from "../components/sections/IconBar";
import WelcomeSection from "../components/sections/WelcomeSection";
import PrimeLocations from "../components/sections/PrimeLocations";
import MapSection from "../components/sections/MapSection";
import WhyChoose from "../components/sections/WhyChoose";
import SectionHeading from "../components/ui/SectionHeading";
import Testimonials from "../components/sections/Testimonials";
import PropertyManagement from "../components/sections/PropertyManagement";
import Accreditations from "../components/sections/Accreditations";
import LatestNews from "../components/sections/LatestNews";

export default function Home() {
    return (
        <>
            <Head>
                <title>Serviced Apartments Newcastle | Ideal home</title>
            </Head>

            {/* Spacer for fixed header */}
            <div className="h-[100px] md:h-[120px]" />
            <div className="h-32 w-32 rounded-full fixed bottom-4 left-4 z-50 bg-primary-dark text-white flex items-center justify-center"> 
                <p className="text-center font-semibold">Flexible <br /> Cancellation</p>
            </div>
            <HeroSection />
            <IconBar />
            <WelcomeSection />
            <PrimeLocations />
            <MapSection />
            <WhyChoose heading={<SectionHeading className="mb-10">Why Choose Ideal home</SectionHeading>} />
            <Testimonials />
            <PropertyManagement />
            {/* <Accreditations /> */}
            <LatestNews />
        </>
    );
}
