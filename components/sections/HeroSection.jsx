import BgImage from "../../assets/images/BrownModern(3).png";

import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-fixed min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center justify-center"
            style={{
                backgroundImage: `url('${BgImage.src}')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 leading-tight">
                    Find your ideal
                    <br /> <br />
                    <span className="text-white/90">
                        serviced apartment
                    </span>
                </h1>
                <p className="text-base md:text-lg font-body mb-8 leading-relaxed opacity-90">
                    Hand-picked serviced apartments for all your corporate
                    <br className="hidden md:block" /> and staycation needs in the
                    Newcastle upon Tyne area.
                </p>
                <Link
                    href="/find-apartments"
                    className="inline-block bg-primary hover:bg-primary-dark text-white font-heading font-semibold text-base md:text-lg px-10 py-4 rounded transition-colors"
                >
                    Search Apartments
                </Link>
            </div>
        </section>
    );
}
