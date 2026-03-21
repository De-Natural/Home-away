// Testimonials.jsx
// Auto-sliding Google-Reviews-style carousel with prev/next controls.

import { useEffect, useRef, useState } from "react";

const reviews = [
    {
        text: "Fantastic apartment, really well equipped and in a great location. The team were very helpful and responsive. Highly recommend!",
        author: "Sarah M.",
        date: "2025-10-15",
        rating: 5,
        avatar: null, // set to an image URL/import to show a real photo
    },
    {
        text: "Fantastic apartment, really well equipped and in a great location. The team were very helpful and responsive. Highly recommend!",
        author: "Sarah M.",
        date: "2025-10-15",
        rating: 5,
        avatar: null, // set to an image URL/import to show a real photo
    },
    {
        text: "We had a wonderful stay. The apartment was spotless and had everything we needed. Will definitely be booking again.",
        author: "James T.",
        date: "2025-09-27",
        rating: 5,
        avatar: null,
    },
    {
        text: "We had a wonderful stay. The apartment was spotless and had everything we needed. Will definitely be booking again.",
        author: "James T.",
        date: "2025-09-27",
        rating: 5,
        avatar: null,
    },
    {
        text: "Excellent service from start to finish. The apartment exceeded our expectations. Perfect for our business trip to Newcastle.",
        author: "Rebecca L.",
        date: "2025-08-30",
        rating: 5,
        avatar: null,
    },
    {
        text: "Amazing location, beautifully furnished and very clean. Communication was smooth throughout. Would absolutely stay again!",
        author: "David K.",
        date: "2025-07-20",
        rating: 5,
        avatar: null,
    },
    {
        text: "Amazing location, beautifully furnished and very clean. Communication was smooth throughout. Would absolutely stay again!",
        author: "David K.",
        date: "2025-07-20",
        rating: 5,
        avatar: null,
    },
    {
        text: "Great value for money. The apartment had everything we needed for a week-long stay. The host was incredibly accommodating.",
        author: "Emma W.",
        date: "2025-06-14",
        rating: 5,
        avatar: null,
    },
];

/** Google-palette colours for the initial-fallback avatar */
const AVATAR_COLORS = [
    "#4285F4",
    "#EA4335",
    "#34A853",
    "#FBBC05",
    "#8E44AD",
    "#16A085",
];

function getAvatarColor(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return AVATAR_COLORS[Math.abs(hash) % AVATAR_COLORS.length];
}

function Avatar({ src, name }) {
    if (src) {
        return (
            <img
                src={src}
                alt={name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
            />
        );
    }
    const initial = name ? name.charAt(0).toUpperCase() : "?";
    const bg = getAvatarColor(name || "?");
    return (
        <span
            className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base select-none flex-shrink-0"
            style={{ backgroundColor: bg }}
            aria-label={name}
        >
            {initial}
        </span>
    );
}

function Stars({ count, size = "w-4 h-4" }) {
    return (
        <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`${size} ${i < count ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

/** Google "G" logo mark */
function GoogleG() {
    return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 flex-shrink-0" aria-label="Google">
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    );
}

const VISIBLE = 4; // cards visible at once on desktop
const AUTO_INTERVAL = 4000; // ms between auto-slides

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [expanded, setExpanded] = useState(null);
    const timerRef = useRef(null);
    const total = reviews.length;
    const maxStart = total - VISIBLE;

    const startTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrent((prev) => (prev >= maxStart ? 0 : prev + 1));
        }, AUTO_INTERVAL);
    };

    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, []);

    const go = (dir) => {
        setCurrent((prev) => {
            const next = prev + dir;
            if (next < 0) return maxStart;
            if (next > maxStart) return 0;
            return next;
        });
        startTimer();
    };

    return (
        <section className="py-10 md:py-16 bg-light-gray overflow-hidden">
            <div className=" mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-12">

                    {/* ── Left panel: rating summary ── */}
                    <div className="flex-shrink-0 flex flex-col items-center justify-center text-center w-40">
                        <p className="text-2xl font-heading font-extrabold text-primary-dark leading-none mb-1">
                            Excellent
                        </p>
                        <Stars count={5} size="w-6 h-6" />
                        <p className="text-xs font-body text-body-text mt-2">
                            Based on{" "}
                            <span className="font-semibold text-primary-dark">
                                {reviews.length * 13}
                            </span>{" "}
                            reviews
                        </p>
                        {/* Google branding */}
                        <div className="mt-3 flex items-center gap-1">
                            <GoogleG />
                            <span className="text-sm font-bold text-[#4285F4]">G</span>
                            <span className="text-sm font-bold text-[#EA4335]">o</span>
                            <span className="text-sm font-bold text-[#FBBC05]">o</span>
                            <span className="text-sm font-bold text-[#4285F4]">g</span>
                            <span className="text-sm font-bold text-[#34A853]">l</span>
                            <span className="text-sm font-bold text-[#EA4335]">e</span>
                        </div>
                    </div>

                    {/* ── Carousel ── */}
                    <div className="relative flex-1 flex items-center gap-2 min-w-0">

                        {/* Prev arrow */}
                        <button
                            onClick={() => go(-1)}
                            aria-label="Previous reviews"
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-border-gray shadow flex items-center justify-center hover:bg-gray-50 transition z-10"
                        >
                            <svg className="w-4 h-4 text-primary-dark" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Track */}
                        <div className="overflow-hidden flex-1 min-w-0">
                            <div
                                className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(calc(-${current} * (100% / ${VISIBLE}) - ${current} * (1rem / ${VISIBLE})))` }}
                            >
                                {reviews.map((review, i) => {
                                    const isExpanded = expanded === i;
                                    const TRUNCATE = 120;
                                    const short = review.text.length > TRUNCATE
                                        ? review.text.slice(0, TRUNCATE) + "…"
                                        : review.text;

                                    return (
                                        <div
                                            key={i}
                                            className="bg-white rounded-xl p-5 shadow-sm border border-border-gray flex-shrink-0 flex flex-col"
                                            style={{ width: `calc((100% - ${VISIBLE - 1}rem) / ${VISIBLE})` }}
                                        >
                                            {/* Header: avatar + name + Google G */}
                                            <div className="flex items-center justify-between gap-2 mb-3">
                                                <div className="flex items-center gap-2 min-w-0">
                                                    <Avatar src={review.avatar} name={review.author} />
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-heading font-semibold text-primary-dark truncate">
                                                            {review.author}
                                                        </p>
                                                        <p className="text-xs text-body-text font-body">
                                                            {review.date}
                                                        </p>
                                                    </div>
                                                </div>
                                                <GoogleG />
                                            </div>

                                            {/* Stars */}
                                            <Stars count={review.rating} size="w-4 h-4" />

                                            {/* Review text */}
                                            <p className="text-sm text-body-text font-body mt-3 leading-relaxed flex-1">
                                                {isExpanded ? review.text : short}
                                            </p>

                                            {review.text.length > TRUNCATE && (
                                                <button
                                                    onClick={() => setExpanded(isExpanded ? null : i)}
                                                    className="text-xs text-[#4285F4] hover:underline mt-2 text-left font-medium"
                                                >
                                                    {isExpanded ? "Show less" : "Read more"}
                                                </button>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Next arrow */}
                        <button
                            onClick={() => go(1)}
                            aria-label="Next reviews"
                            className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-border-gray shadow flex items-center justify-center hover:bg-gray-50 transition z-10"
                        >
                            <svg className="w-4 h-4 text-primary-dark" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>


            </div>
        </section>
    );
}
