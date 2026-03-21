// ApartmentCard.jsx
// Listing card with image carousel, "Read More" navigation, and "Book Now" modal.

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ─── Booking Modal ────────────────────────────────────────────────────────────
function BookingModal({ apartment, onClose }) {
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
    };

    // Close on Escape key
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[999] bg-black/60 flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors z-10"
                    aria-label="Close"
                >
                    ✕
                </button>

                {sent ? (
                    <div className="flex flex-col items-center justify-center py-24 px-8 text-center space-y-4">
                        <span className="text-5xl">✅</span>
                        <h3 className="font-heading text-2xl font-bold text-primary-dark">Message Sent!</h3>
                        <p className="font-body text-gray-600 text-sm">We'll be in touch shortly about your enquiry.</p>
                        <button onClick={onClose} className="mt-4 px-8 py-3 bg-primary text-white rounded-full font-heading font-bold text-sm hover:bg-primary-dark transition-colors">
                            Close
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="p-8">
                        <h2 className="font-heading text-xl font-bold text-primary-dark mb-8 uppercase tracking-wide">
                            Book — {apartment.title}
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-5">
                                {/* Full Name */}
                                <div>
                                    <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text" required value={form.fullName}
                                        onChange={(e) => set("fullName", e.target.value)}
                                        className="w-full border-0 bg-gray-100 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email" required value={form.email}
                                        onChange={(e) => set("email", e.target.value)}
                                        className="w-full border-0 bg-gray-100 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Contact Number</label>
                                    <input
                                        type="tel" value={form.phone}
                                        onChange={(e) => set("phone", e.target.value)}
                                        className="w-full border-0 bg-gray-100 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>

                                {/* Dates */}
                                <div className="flex items-center gap-4">
                                    <div>
                                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Start Date</label>
                                        <input type="date" value={form.startDate} onChange={(e) => set("startDate", e.target.value)}
                                            className="border-0 bg-gray-100 rounded px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">End Date</label>
                                        <input type="date" value={form.endDate} onChange={(e) => set("endDate", e.target.value)}
                                            className="border-0 bg-gray-100 rounded px-3 py-2 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                                        />
                                    </div>
                                </div>

                                {/* Date Options */}
                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide text-gray-600 cursor-pointer">
                                        <input type="checkbox" checked={form.flexibleDates} onChange={(e) => set("flexibleDates", e.target.checked)} className="accent-primary" />
                                        Flexible on Dates
                                    </label>
                                    <label className="flex items-center gap-2 text-xs font-heading uppercase tracking-wide text-gray-600 cursor-pointer">
                                        <input type="checkbox" checked={form.firstAvailable} onChange={(e) => set("firstAvailable", e.target.checked)} className="accent-primary" />
                                        First Available Dates
                                    </label>
                                </div>

                                {/* Apartment Size */}
                                <div>
                                    <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Apartment Size</label>
                                    <select
                                        value={form.apartmentSize} onChange={(e) => set("apartmentSize", e.target.value)}
                                        className="w-full border-0 bg-gray-100 rounded px-4 py-3 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
                                    >
                                        {["Studio", "1 Bedroom", "2 Bedrooms", "3 Bedrooms", "4+ Bedrooms"].map((s) => (
                                            <option key={s}>{s}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Travel Type */}
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
                                {/* Message */}
                                <div className="flex-1 flex flex-col">
                                    <label className="block font-heading font-bold text-xs uppercase tracking-widest text-gray-700 mb-2">Message</label>
                                    <textarea
                                        value={form.message} onChange={(e) => set("message", e.target.value)}
                                        className="flex-1 w-full border-0 bg-gray-100 rounded px-4 py-3 text-sm font-body resize-none focus:outline-none focus:ring-2 focus:ring-primary min-h-[220px]"
                                    />
                                </div>

                                {/* Newsletter */}
                                <label className="flex items-start gap-2 cursor-pointer">
                                    <input type="checkbox" checked={form.newsletter} onChange={(e) => set("newsletter", e.target.checked)} className="accent-primary mt-0.5 shrink-0" />
                                    <span className="text-xs font-body text-gray-600 leading-relaxed">
                                        Please keep me updated on Week2Week's latest news and offers.{" "}
                                        <Link href="/privacy-policy" className="underline text-primary hover:text-primary-dark">
                                            View our privacy policy
                                        </Link>.
                                    </span>
                                </label>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-dark text-white font-heading font-bold text-sm uppercase tracking-widest py-4 rounded-full transition-colors"
                                >
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

// ─── Apartment Card ───────────────────────────────────────────────────────────
export default function ApartmentCard({ apartment }) {
    const images = apartment.images || (apartment.image ? [apartment.image] : []);
    const [current, setCurrent] = useState(0);
    const [showModal, setShowModal] = useState(false);

    const getImgSrc = (img) => (typeof img === "string" ? img : img?.src);

    const prev = useCallback(() => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length]);
    const next = useCallback(() => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length]);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(next, 3000);
        return () => clearInterval(timer);
    }, [next, images.length]);

    return (
        <>
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow duration-300 mb-8 max-w-5xl mx-auto">
                {/* Carousel */}
                <div className="relative w-full md:w-[45%] aspect-[16/10] md:aspect-auto overflow-hidden">
                    <div
                        className="flex h-full transition-transform duration-500 ease-in-out"
                        style={{
                            width: `${images.length * 100}%`,
                            transform: `translateX(-${current * (100 / images.length)}%)`,
                        }}
                    >
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={getImgSrc(img)}
                                alt={`${apartment.title} — image ${idx + 1}`}
                                className="object-cover h-full flex-shrink-0"
                                style={{ width: `${100 / images.length}%` }}
                            />
                        ))}
                    </div>

                    {images.length > 1 && (
                        <>
                            <button onClick={prev} aria-label="Previous image"
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center shadow transition-colors z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={next} aria-label="Next image"
                                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-primary/80 hover:bg-primary text-white flex items-center justify-center shadow transition-colors z-10">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold font-heading text-primary leading-tight mb-4">
                            {apartment.title}
                        </h3>
                        <p className="text-body-text font-body text-sm md:text-base leading-relaxed mb-6 line-clamp-3">
                            {apartment.excerpt}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {/* Read More → property detail page */}
                        <Link
                            href={apartment.href}
                            className="px-6 py-2 text-xs md:text-sm uppercase tracking-wider rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-heading font-bold transition-colors"
                        >
                            Read More
                        </Link>

                        {/* Book Now → opens modal */}
                        <button
                            onClick={() => setShowModal(true)}
                            className="px-6 py-2 text-xs md:text-sm uppercase tracking-wider rounded-full bg-primary text-white hover:bg-primary-dark font-heading font-bold transition-colors"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Booking Modal */}
            {showModal && (
                <BookingModal apartment={apartment} onClose={() => setShowModal(false)} />
            )}
        </>
    );
}
