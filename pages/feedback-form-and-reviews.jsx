import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import imageCenter from "../assets/images/testimonyImage.png";

const reviews = [
    {
        name: "Sarah M.",
        rating: 5,
        date: "February 2025",
        location: "Newcastle City Centre",
        text: "Absolutely loved our stay. The apartment was spotlessly clean, beautifully furnished, and the team were incredibly helpful from start to finish. We'll be back!",
    },
    {
        name: "James T.",
        rating: 5,
        date: "January 2025",
        location: "Jesmond",
        text: "Week2Week have been our go-to for contractor accommodation for over 3 years. The quality is consistently excellent and the pricing is very competitive. Highly recommended.",
    },
    {
        name: "Linda & David K.",
        rating: 5,
        date: "December 2024",
        location: "Tynemouth",
        text: "We stayed in Tynemouth for a week while visiting family and the apartment was the perfect base. Stunning location, spacious apartment, and a lovely welcome pack waiting for us.",
    },
    {
        name: "Dr. Rachel F.",
        rating: 5,
        date: "November 2024",
        location: "Newcastle Quayside",
        text: "I needed accommodation close to the RVI for a six-week stint. The Quayside apartment had an incredible view and everything I needed. The 24/7 support line was reassuring too.",
    },
    {
        name: "Mark B., Operations Manager",
        rating: 5,
        date: "October 2024",
        location: "Gateshead Quays",
        text: "We booked 4 apartments simultaneously for our project team. Week2Week handled everything seamlessly – the admin was straightforward and the accommodation was superb.",
    },
    {
        name: "Emma J.",
        rating: 4,
        date: "September 2024",
        location: "Newcastle City Centre",
        text: "Great central location and a very comfortable, well-equipped apartment. The weekly housekeeping was a very welcome touch. Would definitely book again.",
    },
];

function StarRating({ rating }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? "text-gold" : "text-gray-300"}>★</span>
            ))}
        </div>
    );
}

export default function FeedbackAndReviews() {
    return (
        <>
            <Head>
                <title>Guest Reviews & Testimonials | Ideal home Serviced Apartments</title>
                <meta name="description" content="Read verified guest reviews and testimonials for Ideal home serviced apartments in Newcastle and the North East." />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[300px] md:h-[380px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${imageCenter.src}')` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Guest Reviews
                </h1>
            </section>

            {/* Rating Overview */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <SectionHeading title="What Our Guests Say" />
                    <p className="font-body text-gray-600 mt-6 max-w-2xl mx-auto leading-relaxed">
                        We are proud of the relationships we build with our guests — many of whom return year after year.
                        Here's what some of them have to say about staying with Ideal home.
                    </p>
                    <div className="mt-12 flex justify-center gap-12 flex-wrap">
                        <div className="text-center">
                            <p className="font-heading text-6xl font-bold text-primary-dark">4.9</p>
                            <StarRating rating={5} />
                            <p className="font-body text-gray-500 text-xs mt-2 uppercase tracking-widest">Average Rating</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-6xl font-bold text-primary-dark">500+</p>
                            <p className="font-body text-gray-500 text-xs mt-4 uppercase tracking-widest">5-Star Reviews</p>
                        </div>
                        <div className="text-center">
                            <p className="font-heading text-6xl font-bold text-primary-dark">25+</p>
                            <p className="font-body text-gray-500 text-xs mt-4 uppercase tracking-widest">Years of Service</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((r, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow flex flex-col gap-4">
                                <StarRating rating={r.rating} />
                                <p className="font-body text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                                <div className="border-t border-light-gray pt-4">
                                    <p className="font-heading font-bold text-primary-dark text-sm">{r.name}</p>
                                    <p className="font-body text-gray-500 text-xs">{r.location} · {r.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback CTA */}
            <section className="bg-primary-dark py-20 px-6 text-center text-white">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="font-heading text-3xl font-bold italic">Had a Stay with Us?</h2>
                    <p className="font-body text-gray-300 leading-relaxed">
                        We love to hear from our guests. Your feedback helps us continually improve our service
                        and properties. Please share your experience.
                    </p>
                    <div className="flex justify-center gap-4 flex-wrap">
                        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary" href="/contact">
                            Leave Feedback
                        </Button>
                        <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white" href="/find-apartments">
                            Book Your Next Stay
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
