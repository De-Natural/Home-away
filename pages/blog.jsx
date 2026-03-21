import Head from "next/head";
import Button from "../components/ui/Button";
import blogImg1 from "../assets/images/cooperate-group-image.png";
import blogImg2 from "../assets/images/FreelanceCreative PortfolioWebsite(5).png";
import blogImg3 from "../assets/images/hospital.png";
import blogImg4 from "../assets/images/homeAway10.png";
import blogImg5 from "../assets/images/homeAwaykitchen2.png";
import blogImg6 from "../assets/images/FreelanceCreative PortfolioWebsite(6).png";
import heroBg from "../assets/images/FreelanceCreative PortfolioWebsite(4).png";

const posts = [
    {
        slug: "the-professionalisation-of-flexible-accommodation",
        title: "The Professionalisation of Flexible Accommodation",
        excerpt:
            "Regulation, corporate demand and the future of short stays by Claire Parry, Director of Ideal home Serviced Apartments. Q: Short, mid and extended accommodation has grown rapidly over the last decade. How has the sector changed? It's changed enormously — and...",
        image: blogImg1,
    },
    {
        slug: "a-festive-newcastle-getaway-with-ideal-home",
        title: "A Festive Newcastle Getaway with Ideal home",
        excerpt:
            "Newcastle at Christmas is something special. The streets sparkle, the city centre hums with festive buzz and there's a real sense of togetherness in the air. Whether you're visiting for a winter city break, coming home to see family, or...",
        image: blogImg2,
    },
    {
        slug: "your-home-away-from-home-during-hospital-visits-and-medical-training",
        title: "Your Home Away from Home During Hospital Visits and Medical Training",
        excerpt:
            "When you or a loved one are undergoing medical treatment, finding the right place to stay can make all the difference. At Ideal home Serviced Apartments, we understand that comfort, convenience, and peace of mind are essential — especially when your...",
        image: blogImg3,
    },
    {
        slug: "why-flexible-accommodation-is-the-future",
        title: "Why Flexible Accommodation is the Future",
        excerpt:
            "The landscape of business travel and temporary accommodation has shifted dramatically. Where once business trips were synonymous with hotels, short stays, and rigid schedules....",
        image: blogImg4,
    },
    {
        slug: "work-stays-made-easy-with-ideal-home",
        title: "Work Stays Made Easy with Ideal home",
        excerpt:
            "Whether you're on a short-term project or a months-long contract, finding the right work-stay can be challenging. At Ideal home, we believe working professionals deserve more than just a place to sleep — they deserve a space where they can...",
        image: blogImg5,
    },
    {
        slug: "escape-to-tynemouth-and-south-shields-for-a-stay-near-newcastle",
        title: "Escape to Tynemouth and South Shields for a Stay Near Newcastle",
        excerpt:
            "Enjoy the best of the coast and countryside. Whether you're heading to the North East coast to visit family, friends, or for work, there's no better place to stay with Ideal home...",
        image: blogImg6,
    },
];

export default function Blog() {
    return (
        <>
            <Head>
                <title>Blog | Ideal home Serviced Apartments Newcastle</title>
                <meta
                    name="description"
                    content="Latest news, local guides, travel tips, and insights from the Ideal home Serviced Apartments team in Newcastle."
                />
            </Head>

            {/* Hero Banner */}
            <section
                className="w-full h-[280px] md:h-[360px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{
                    backgroundImage: `url('${heroBg.src}')`,
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-center">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
                        Blog
                    </h1>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="py-16 md:py-20 bg-white">
                <div className="max-w-container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                        {posts.map((post, idx) => (
                            <article key={idx} className="flex flex-col">
                                {/* Card Image */}
                                <div className="overflow-hidden">
                                    <img
                                        src={post.image.src}
                                        alt={post.title}
                                        className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="pt-5 flex flex-col flex-1">
                                    <h2 className="font-heading text-xl md:text-[22px] font-bold text-primary-dark leading-snug mb-4 hover:text-primary transition-colors cursor-pointer">
                                        {post.title}
                                    </h2>
                                    <p className="font-body text-gray-500 text-[15px] leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div>
                                        <Button
                                            href={`/blog/${post.slug}`}
                                            variant="dark"
                                            className="!text-sm !px-7 !py-2.5"
                                        >
                                            Read More
                                        </Button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <nav
                        className="mt-16 flex items-center justify-center font-body text-sm"
                        aria-label="Blog pagination"
                    >
                        <span className="font-bold text-primary-dark px-2">1</span>
                        <span className="text-gray-300 px-1">|</span>
                        <a href="#" className="text-primary hover:text-primary-dark px-2 transition-colors">2</a>
                        <span className="text-gray-300 px-1">|</span>
                        <span className="text-gray-400 px-2">…</span>
                        <span className="text-gray-300 px-1">|</span>
                        <a href="#" className="text-primary hover:text-primary-dark px-2 transition-colors">14</a>
                        <span className="text-gray-300 px-1">|</span>
                        <a href="#" className="text-primary hover:text-primary-dark px-2 font-semibold transition-colors">
                            Next page
                        </a>
                    </nav>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary/10 py-16 md:py-20 px-6 text-center">
                <div className="max-w-3xl mx-auto space-y-4">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary">
                        Looking for help with your apartment search?
                    </h2>
                    <p className="font-heading text-lg md:text-xl text-primary-dark font-semibold">
                        Our Team is here to help
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="/contact" variant="primary">
                            Contact Us
                        </Button>
                        <Button href="/find-apartments" variant="outline">
                            Browse Apartments
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
