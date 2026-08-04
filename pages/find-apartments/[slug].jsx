// pages/find-apartments/[slug].jsx
import Head from "next/head";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { Icon } from "@iconify/react";
import { apartments } from "../../data/apartments";
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
    const { image, ...rest } = apartment;
    const serialisable = {
        ...rest,
        images: (apartment.images || (image ? [image] : [])).map((img) =>
            typeof img === "string" ? img : img.src
        ),
    };
    return { props: { apartment: serialisable } };
}

// ─── Facilities data ──────────────────────────────────────────
const facilitiesData = [
    "Fully equipped kitchen",
    "Washing machine & dryer",
    "En suite bathroom",
    "Weekly housekeeping, linen & towel service",
    "Secure entry access",
    "Free WiFi",
    "Heating",
    "Digital Freeview TV",
    "Cot and high-chairs available",
    "24-hour emergency reception",
];

// ─── Sticky Nav Tab ────────────────────────────────────────────
function StickyNav({ activeSection }) {
    const tabs = [
        { id: "overview", label: "Overview" },
        { id: "gallery", label: "Gallery" },
        { id: "facilities", label: "Facilities" },
        { id: "location", label: "Location" },
        { id: "book", label: "Book" },
    ];

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            const offset = 180;
            const top = el.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: "smooth" });
        }
    };

    return (
        <nav className="sticky top-[90px] md:top-[120px] z-30 flex justify-center py-4 bg-white/90 backdrop-blur-sm border-b border-border-gray">
            <div className="flex items-center gap-0 bg-primary rounded-full overflow-hidden shadow-md">
                {tabs.map((tab, i) => {
                    const isBook = tab.id === "book";
                    const isActive = activeSection === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => scrollTo(tab.id)}
                            className={`relative px-5 md:px-8 py-3 text-sm font-heading font-semibold transition-colors duration-200
                                ${isBook
                                    ? "bg-white text-primary-dark hover:bg-gray-100 rounded-full mx-1 my-1 px-6"
                                    : isActive
                                        ? "text-white/100 underline underline-offset-4"
                                        : "text-white/80 hover:text-white"
                                }
                            `}
                        >
                            {tab.label}
                            {!isBook && i < tabs.length - 2 && (
                                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-px bg-white/30" />
                            )}
                        </button>
                    );
                })}
            </div>
        </nav>
    );
}

// ─── Image Gallery Carousel ────────────────────────────────────
function GalleryCarousel({ images, title }) {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            // Calculate scroll amount based on the width of the first child + gap
            const firstChild = scrollRef.current.firstChild;
            const itemWidth = firstChild ? firstChild.offsetWidth : 300;
            const gap = 16; // gap-4 is 16px
            const amount = itemWidth + gap;
            
            scrollRef.current.scrollBy({
                left: direction === "left" ? -amount : amount,
                behavior: "smooth",
            });
        }
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="relative group">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Scroll left"
            >
                <Icon icon="mdi:chevron-left" width="28" height="28" />
            </button>

            {/* Images */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 py-4"
            >
                {images.map((src, i) => (
                    <div
                        key={i}
                        className="flex-shrink-0 w-72 md:w-80 lg:w-96 aspect-[4/3] rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 snap-center first:ml-auto last:mr-auto"
                    >
                        <img
                            src={src}
                            alt={`${title} — image ${i + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-primary flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 hover:scale-110"
                aria-label="Scroll right"
            >
                <Icon icon="mdi:chevron-right" width="28" height="28" />
            </button>
        </div>
    );
}

// ─── Booking Form ─────────────────────────────────────────────
function BookingForm({ apartmentTitle }) {
    const [form, setForm] = useState({
        fullName: "", email: "", phone: "",
        startDate: "", endDate: "",
        flexibleDates: false, firstAvailable: false,
        apartmentSize: "Studio",
        corporateTravel: false, leisureTravel: false,
        message: "", newsletter: false,
    });
    const [sent, setSent] = useState(false);
    const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        toast.success(`Booking inquiry for ${apartmentTitle} sent successfully!`, {
            duration: 5000,
        });
    };

    if (sent) {
        return (
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <span className="text-5xl">✅</span>
                <h3 className="font-heading text-2xl font-bold text-primary-dark">Message Sent!</h3>
                <p className="font-body text-gray-600 text-sm">We&apos;ll be in touch shortly about your enquiry.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-5">
                    <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Full Name</label>
                        <input type="text" required value={form.fullName} onChange={(e) => set("fullName", e.target.value)}
                            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
                        <input type="email" required value={form.email} onChange={(e) => set("email", e.target.value)}
                            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Contact Number</label>
                        <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)}
                            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex-1">
                            <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Start Date</label>
                            <input type="date" value={form.startDate} onChange={(e) => set("startDate", e.target.value)}
                                className="w-full bg-gray-100 border-0 rounded px-3 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                        <div className="flex-1">
                            <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">End Date</label>
                            <input type="date" value={form.endDate} onChange={(e) => set("endDate", e.target.value)}
                                className="w-full bg-gray-100 border-0 rounded px-3 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide text-gray-600 cursor-pointer">
                            <input type="checkbox" checked={form.flexibleDates} onChange={(e) => set("flexibleDates", e.target.checked)} className="accent-primary" />
                            Flexible on Dates
                        </label>
                        <label className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide text-gray-600 cursor-pointer">
                            <input type="checkbox" checked={form.firstAvailable} onChange={(e) => set("firstAvailable", e.target.checked)} className="accent-primary" />
                            First Available
                        </label>
                    </div>
                    <div>
                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Apartment Size</label>
                        <select value={form.apartmentSize} onChange={(e) => set("apartmentSize", e.target.value)}
                            className="w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary">
                            {["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"].map((s) => (
                                <option key={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-6">
                        <label className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide text-gray-600 cursor-pointer">
                            <input type="checkbox" checked={form.corporateTravel} onChange={(e) => set("corporateTravel", e.target.checked)} className="accent-primary" />
                            Corporate Travel
                        </label>
                        <label className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide text-gray-600 cursor-pointer">
                            <input type="checkbox" checked={form.leisureTravel} onChange={(e) => set("leisureTravel", e.target.checked)} className="accent-primary" />
                            Leisure Travel
                        </label>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col space-y-5">
                    <div className="flex-1 flex flex-col">
                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Message</label>
                        <textarea value={form.message} onChange={(e) => set("message", e.target.value)}
                            className="flex-1 w-full bg-gray-100 border-0 rounded px-4 py-3 text-sm font-body resize-none focus:outline-none focus:ring-2 focus:ring-primary min-h-[260px]" />
                    </div>
                    <label className="flex items-start gap-2 cursor-pointer">
                        <input type="checkbox" checked={form.newsletter} onChange={(e) => set("newsletter", e.target.checked)} className="accent-primary mt-0.5 shrink-0" />
                        <span className="text-xs font-body text-gray-600 leading-relaxed">
                            Please keep me updated on Ideal Home&apos;s latest news and offers.{" "}
                            <Link href="/privacy-policy" className="underline text-primary hover:text-primary-dark">
                                View our privacy policy
                            </Link>.
                        </span>
                    </label>
                    <button type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-colors">
                        Send Message
                    </button>
                </div>
            </div>
        </form>
    );
}

// ─── Main Page ────────────────────────────────────────────────
export default function ApartmentDetail({ apartment }) {
    const firstImage = apartment.images?.[0] ?? "";
    const [activeSection, setActiveSection] = useState("overview");
    const [lightboxIdx, setLightboxIdx] = useState(null);

    // Track which section is in view
    useEffect(() => {
        const sections = ["overview", "gallery", "facilities", "location", "book"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-200px 0px -60% 0px", threshold: 0 }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head>
                <title>{`${apartment.title} | Ideal home`}</title>
                <meta name="description" content={apartment.excerpt} />
            </Head>

            {/* ── Hero Image ───────────────────────────────────── */}
            <section
                className="w-full h-[400px] md:h-[550px] bg-cover bg-center mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url(${firstImage})` }}
            />

            {/* ── Sticky Section Nav ───────────────────────────── */}
            <StickyNav activeSection={activeSection} />

            {/* ── Overview Section ─────────────────────────────── */}
            <section id="overview" className="bg-white py-12 md:py-16">
                <div className="max-w-container mx-auto px-6">
                    {/* Title */}
                    <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-primary-dark text-center mb-8">
                        {apartment.title}
                    </h1>

                    {/* Divider */}
                    <div className="w-20 h-0.5 bg-border-gray mx-auto mb-8" />

                    {/* Property Info Icons */}
                    <div className="flex flex-wrap justify-center gap-8 md:gap-14 mb-12">
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="mdi:map-marker-outline" width="36" height="36" className="text-primary" />
                            <span className="text-sm font-body text-body-text">{apartment.location}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="mdi:wheelchair-accessibility" width="36" height="36" className="text-gray-400" />
                            <span className="text-sm font-body text-body-text">Accessibility policy</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="mdi:bed-king-outline" width="36" height="36" className="text-primary" />
                            <span className="text-sm font-body text-body-text">
                                {apartment.bedrooms === 0 ? "Studio" : `${apartment.bedrooms} bedroom${apartment.bedrooms > 1 ? "s" : ""}`}
                            </span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <Icon icon="mdi:shower" width="36" height="36" className="text-gray-400" />
                            <span className="text-sm font-body text-body-text">1 bathroom</span>
                        </div>
                    </div>

                    {/* Description + Side Image */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* Description Text */}
                        <div className="space-y-4">
                            <p className="font-body text-body-text text-sm md:text-base leading-relaxed">
                                {apartment.excerpt}
                            </p>
                            <p className="font-body text-body-text text-sm leading-relaxed">
                                The lower level features a fully equipped modern kitchen, perfect for
                                preparing your favourite meals, and a spacious living area where you
                                can unwind after a busy day. Upstairs, the bedroom provides a
                                peaceful retreat with quality furnishings and plenty of natural light.
                            </p>
                            <p className="font-body text-body-text text-sm leading-relaxed">
                                With lift access, secure entry, and an allocated parking space, the
                                apartment is designed for a hassle-free stay. Everything from weekly
                                housekeeping to all utilities and free WiFi is included — so you can
                                settle in and feel right at home from the moment you arrive.
                            </p>
                        </div>

                        {/* Side Image + View All Images */}
                        <div className="relative">
                            {apartment.images?.[1] ? (
                                <img
                                    src={apartment.images[1]}
                                    alt={`${apartment.title} interior`}
                                    className="w-full aspect-[4/3] object-cover rounded-sm shadow-md"
                                />
                            ) : (
                                <img
                                    src={firstImage}
                                    alt={`${apartment.title} interior`}
                                    className="w-full aspect-[4/3] object-cover rounded-sm shadow-md"
                                />
                            )}
                            {/* View all images button */}
                            <button
                                onClick={() => setLightboxIdx(0)}
                                className="absolute bottom-0 left-0 right-0 bg-primary/90 hover:bg-primary text-white font-heading font-semibold text-sm py-3 px-6 flex items-center gap-2 transition-colors"
                                style={{ clipPath: "polygon(0 0, 85% 0, 90% 100%, 0% 100%)" }}
                            >
                                <Icon icon="mdi:image-multiple-outline" width="20" height="20" />
                                View all images
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Gallery Section ──────────────────────────────── */}
            <section id="gallery" className="bg-light-gray py-12 md:py-16">
                <div className="max-w-container mx-auto px-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark text-center mb-10">
                        Apartment Gallery
                    </h2>
                    <GalleryCarousel images={apartment.images} title={apartment.title} />
                </div>
            </section>

            {/* ── Facilities Section ───────────────────────────── */}
            <section id="facilities" className="bg-primary-dark py-12 md:py-16">
                <div className="max-w-container mx-auto px-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white text-center mb-10">
                        Apartment Facilities
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-3xl mx-auto">
                        {facilitiesData.map((item, i) => (
                            <div key={i} className="flex items-center gap-3 py-2">
                                <Icon icon="mdi:check-bold" width="22" height="22" className="text-primary flex-shrink-0" />
                                <span className="font-body text-white/90 text-sm md:text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Location Section ─────────────────────────────── */}
            <section id="location" className="bg-white py-12 md:py-16">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* Map placeholder */}
                        <div className="w-full aspect-[4/3] bg-gray-200 rounded-sm overflow-hidden shadow-md">
                            <iframe
                                title="Apartment Location"
                                src={`https://www.google.com/maps?q=${encodeURIComponent(apartment.location + ", Newcastle upon Tyne")}&output=embed`}
                                className="w-full h-full border-0"
                                loading="lazy"
                                allowFullScreen
                            />
                        </div>

                        {/* Location Info */}
                        <div className="space-y-6">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark">
                                Location
                            </h2>
                            <div className="space-y-1 font-body text-body-text text-sm md:text-base">
                                <p>Ideal Home Serviced Apartments</p>
                                <p>{apartment.title.split(",")[0]}</p>
                                <p>Newcastle upon Tyne</p>
                            </div>
                            <div>
                                <h3 className="font-heading text-xl font-bold text-primary-dark mb-3">
                                    Distances
                                </h3>
                                <ul className="space-y-2 font-body text-body-text text-sm">
                                    <li className="flex items-center gap-2">
                                        <Icon icon="mdi:train" width="18" height="18" className="text-primary" />
                                        Newcastle Central Station — 0.5 miles
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="mdi:hospital-building" width="18" height="18" className="text-primary" />
                                        RVI Hospital — 1.2 miles
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="mdi:airplane" width="18" height="18" className="text-primary" />
                                        Newcastle Airport — 7 miles
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Icon icon="mdi:shopping" width="18" height="18" className="text-primary" />
                                        Eldon Square — 0.3 miles
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Book This Apartment ──────────────────────────── */}
            <section id="book" className="bg-white py-12 md:py-16 border-t border-border-gray">
                <div className="max-w-container mx-auto px-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-dark text-center mb-4">
                        Book This Apartment
                    </h2>
                    <p className="text-center font-body text-body-text text-sm md:text-base mb-10">
                        Call our apartment team directly on{" "}
                        <a href="tel:+447405076376" className="text-primary font-semibold hover:text-primary-dark transition-colors">
                            +44 7405 076376
                        </a>
                        <br />
                        or <span className="text-primary font-semibold uppercase">leave your details</span> below and we will get straight back to you.
                    </p>

                    <BookingForm apartmentTitle={apartment.title} />
                </div>
            </section>

            {/* ── Share This Apartment ─────────────────────────── */}
            <section className="bg-primary-dark py-10 md:py-14">
                <div className="max-w-container mx-auto px-6 text-center">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-8">
                        Share this apartment
                    </h2>
                    <div className="flex justify-center gap-5">
                        {[
                            { icon: "mdi:facebook", label: "Facebook" },
                            { icon: "mdi:twitter", label: "Twitter" },
                            { icon: "mdi:google-plus", label: "Google+" },
                            { icon: "mdi:linkedin", label: "LinkedIn" },
                        ].map((social) => (
                            <button
                                key={social.label}
                                className="w-12 h-12 rounded-full border-2 border-white/40 text-white/80 hover:bg-white hover:text-primary-dark flex items-center justify-center transition-colors duration-300"
                                aria-label={`Share on ${social.label}`}
                            >
                                <Icon icon={social.icon} width="22" height="22" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Back to Listings ──────────────────────────────── */}
            <section className="bg-light-gray py-8">
                <div className="max-w-container mx-auto px-6 text-center">
                    <Link
                        href="/find-apartments"
                        className="inline-flex items-center gap-2 font-heading font-semibold text-sm text-primary hover:text-primary-dark transition-colors"
                    >
                        <Icon icon="mdi:arrow-left" width="18" height="18" />
                        Back to all apartments
                    </Link>
                </div>
            </section>

            {/* ── Lightbox ─────────────────────────────────────── */}
            {lightboxIdx !== null && apartment.images?.length > 0 && (
                <div
                    className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setLightboxIdx(null)}
                >
                    <button
                        onClick={() => setLightboxIdx(null)}
                        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        aria-label="Close lightbox"
                    >
                        <Icon icon="mdi:close" width="24" height="24" />
                    </button>

                    {/* Prev */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIdx((prev) =>
                                prev === 0 ? apartment.images.length - 1 : prev - 1
                            );
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        aria-label="Previous image"
                    >
                        <Icon icon="mdi:chevron-left" width="28" height="28" />
                    </button>

                    {/* Image */}
                    <img
                        src={apartment.images[lightboxIdx]}
                        alt={`${apartment.title} — image ${lightboxIdx + 1}`}
                        className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />

                    {/* Next */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setLightboxIdx((prev) =>
                                prev === apartment.images.length - 1 ? 0 : prev + 1
                            );
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                        aria-label="Next image"
                    >
                        <Icon icon="mdi:chevron-right" width="28" height="28" />
                    </button>

                    {/* Counter */}
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-body text-sm">
                        {lightboxIdx + 1} / {apartment.images.length}
                    </span>
                </div>
            )}
        </>
    );
}
