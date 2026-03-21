import Head from "next/head";
import Link from "next/link";
import Button from "../../components/ui/Button";
import blogImg1 from "../../assets/images/cooperate-group-image.png";
import blogImg2 from "../../assets/images/FreelanceCreative PortfolioWebsite(5).png";
import blogImg3 from "../../assets/images/hospital.png";
import blogImg4 from "../../assets/images/homeAway10.png";
import blogImg5 from "../../assets/images/homeAwaykitchen2.png";
import blogImg6 from "../../assets/images/FreelanceCreative PortfolioWebsite(6).png";

/* ── all posts data (shared source of truth) ─────────────────────── */
const posts = [
    {
        slug: "the-professionalisation-of-flexible-accommodation",
        title: "The Professionalisation of Flexible Accommodation",
        date: "15/11/2025",
        category: "Industry Insights",
        image: blogImg1,
        content: [
            "Regulation, corporate demand and the future of short stays by Claire Parry, Director of Ideal home Serviced Apartments.",
            "Q: Short, mid and extended accommodation has grown rapidly over the last decade. How has the sector changed?",
            "It's changed enormously — and for the better. When I started in this industry over 20 years ago, serviced apartments were relatively unknown. Hotels were the default for anyone staying away from home, whether for business or leisure.",
            "Today, the serviced apartment sector is a recognised, professional industry with its own standards, accreditation bodies, and a growing customer base that spans corporate travellers, contractors, relocating families, and leisure guests.",
            "The key drivers have been regulation and rising expectations. Guests now expect hotel-quality service with the added benefits of space, privacy, and the comforts of home. That's exactly what we deliver at Ideal home.",
            "We've invested heavily in our properties, our team, and our processes to ensure every stay meets the highest standards. From our Gold accreditation by Quality in Tourism to our membership of ASAP, we're committed to leading the way in professional flexible accommodation.",
        ],
    },
    {
        slug: "a-festive-newcastle-getaway-with-ideal-home",
        title: "A Festive Newcastle Getaway with Ideal home",
        date: "01/12/2024",
        category: "Local Guide",
        image: blogImg2,
        content: [
            "Newcastle at Christmas is something special. The streets sparkle, the city centre hums with festive buzz and there's a real sense of togetherness in the air.",
            "Whether you're visiting for a winter city break, coming home to see family, or attending one of the many events taking place across the region, Ideal home has the perfect base for your festive getaway.",
            "Our city centre apartments put you right in the heart of the action. Step outside and you'll find yourself surrounded by the famous Newcastle Christmas Market, spectacular light displays, and world-class shopping at Eldon Square and the Metrocentre.",
            "For a magical evening, take a stroll along the Quayside to see the Tyne Bridge illuminated against the winter sky, or catch a show at the Theatre Royal — a Newcastle Christmas tradition.",
            "After a busy day exploring, come back to the warmth and comfort of your own apartment. Cook a cosy meal in your fully equipped kitchen, curl up on the sofa with a festive film, or simply enjoy the peace and quiet of having your own space.",
            "Book your festive stay with Ideal home and experience the magic of Christmas in Newcastle.",
        ],
    },
    {
        slug: "your-home-away-from-home-during-hospital-visits-and-medical-training",
        title: "Your Home Away from Home During Hospital Visits and Medical Training",
        date: "23/10/2025",
        category: "Hospital Stays",
        image: blogImg3,
        content: [
            "When you or a loved one are undergoing medical treatment, finding the right place to stay can make all the difference. At Ideal home Serviced Apartments, we understand that comfort, convenience, and peace of mind are essential — especially when you're far from home.",
            "Our apartments are located close to major hospitals in the North East, including the Royal Victoria Infirmary (RVI), Freeman Hospital, and the Great North Children's Hospital. This means less time travelling and more time focusing on what matters most.",
            "Unlike a hotel room, our serviced apartments give you a real home environment. You'll have a fully equipped kitchen to prepare meals that suit your dietary needs, a comfortable living area to relax in, and the privacy of your own space to rest and recover.",
            "We also cater for medical professionals undertaking training placements. Our flexible booking terms mean you can stay for as long as you need — whether that's a week, a month, or longer — without being locked into rigid contracts.",
            "Many of our guests tell us that having a proper home base during a difficult time made a real difference to their wellbeing. That's why we go the extra mile to ensure every apartment is spotlessly clean, well-maintained, and stocked with everything you need.",
            "If you're planning a hospital visit or medical stay in Newcastle, get in touch with our team. We'll help you find the perfect apartment close to your hospital, and we'll take care of everything else so you can focus on getting better.",
        ],
    },
    {
        slug: "why-flexible-accommodation-is-the-future",
        title: "Why Flexible Accommodation is the Future",
        date: "05/09/2024",
        category: "Industry Insights",
        image: blogImg4,
        content: [
            "The landscape of business travel and temporary accommodation has shifted dramatically. Where once business trips were synonymous with hotels, short stays, and rigid schedules, a new model has emerged — one that prioritises flexibility, comfort, and value.",
            "Flexible accommodation — serviced apartments, apart-hotels, and professionally managed short-lets — is growing faster than any other segment of the hospitality industry.",
            "There are several reasons for this shift. First, modern travellers expect more. They want space to work, cook, and relax. A hotel room with a kettle and a minibar simply doesn't cut it for stays of more than a night or two.",
            "Second, businesses are increasingly cost-conscious. Serviced apartments typically offer significant savings compared to hotels, especially for extended stays. When you factor in the cost of meals, laundry, and other extras that are included in a serviced apartment, the value proposition is compelling.",
            "Third, the rise of remote and hybrid working has blurred the lines between business and leisure travel. People are no longer tied to a single office, and they're looking for accommodation that supports their lifestyle — not just a place to sleep.",
            "At Ideal home, we've been at the forefront of this trend for over two decades. Our apartments are designed to be a true home from home, with everything our guests need to live, work, and relax in comfort.",
        ],
    },
    {
        slug: "work-stays-made-easy-with-ideal-home",
        title: "Work Stays Made Easy with Ideal home",
        date: "12/07/2024",
        category: "Business Travel",
        image: blogImg5,
        content: [
            "Whether you're on a short-term project or a months-long contract, finding the right work-stay can be challenging. At Ideal home, we believe working professionals deserve more than just a place to sleep — they deserve a space where they can truly switch off after a long day.",
            "Our serviced apartments are specifically designed with the working traveller in mind. Every apartment features high-speed Wi-Fi, a dedicated workspace, and a fully equipped kitchen — so you can maintain your routine and stay productive throughout your stay.",
            "We work with some of the biggest names in construction, engineering, and professional services to provide high-quality accommodation for their teams. Our account management service means one point of contact, simplified billing, and the flexibility to scale up or down as project needs change.",
            "Location matters too. Our apartments are in prime locations across Newcastle, with easy access to major business parks, construction sites, and transport links. Whether your team is working at the Helix site, the Quayside, or further afield, we have you covered.",
            "We also understand that after a long day on site, the last thing you want is a sterile hotel room. Our apartments offer a genuine home-from-home experience with comfortable living spaces, on-site parking at selected locations, and the freedom to come and go as you please.",
            "Get in touch with our corporate team to discuss your project requirements and discover why leading businesses choose Ideal home for their accommodation needs.",
        ],
    },
    {
        slug: "escape-to-tynemouth-and-south-shields-for-a-stay-near-newcastle",
        title: "Escape to Tynemouth and South Shields for a Stay Near Newcastle",
        date: "20/05/2024",
        category: "Local Guide",
        image: blogImg6,
        content: [
            "Enjoy the best of the coast and countryside. Whether you're heading to the North East coast to visit family, friends, or for work, there's no better place to stay than with Ideal home.",
            "Tynemouth and South Shields offer a stunning coastal escape just a short Metro ride from Newcastle city centre. With golden sandy beaches, dramatic clifftop walks, and a thriving food scene, it's no wonder these seaside towns are among the most popular destinations in the North East.",
            "Tynemouth's famous Longsands beach is a haven for surfers and swimmers alike, while the picturesque Tynemouth Priory and Castle offers breathtaking views across the mouth of the River Tyne. Don't miss the weekly Tynemouth Market, held in the historic Metro station — a treasure trove of local produce, vintage finds, and artisan crafts.",
            "Just across the river, South Shields boasts the magnificent Sandhaven Beach and the lively Ocean Road, famous for its diverse restaurants and independent shops. The town is also home to Arbeia Roman Fort, one of the best-preserved Roman sites in Britain.",
            "Whether you're planning a relaxing weekend getaway, a family holiday, or need a base while working in the area, our coastal apartments offer everything you need. Enjoy the fresh sea air during the day and come home to the comfort of your own apartment in the evening.",
            "Contact our team to find out more about our coastal properties and start planning your North East escape today.",
        ],
    },
];

export default function BlogPost({ slug }) {
    const postIndex = posts.findIndex((p) => p.slug === slug);
    const post = posts[postIndex];

    /* 404 fallback */
    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center mt-[120px]">
                <p className="font-heading text-xl text-gray-500">Post not found</p>
            </div>
        );
    }

    const prevPost = postIndex > 0 ? posts[postIndex - 1] : null;
    const nextPost = postIndex < posts.length - 1 ? posts[postIndex + 1] : null;

    return (
        <>
            <Head>
                <title>{post.title} | Ideal home Blog</title>
                <meta name="description" content={post.content[0]} />
            </Head>

            {/* Hero Image */}
            <section
                className="w-full h-[300px] md:h-[420px] bg-cover bg-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${post.image.src}')` }}
            >
                <div className="absolute inset-0 bg-black/35" />
            </section>

            {/* Title Card (overlapping hero) */}
            <div className="relative z-10 max-w-3xl mx-auto -mt-24 px-6">
                <div className="bg-white rounded-sm shadow-xl px-8 py-10 md:px-14 md:py-12 text-center">
                    {/* Breadcrumb */}
                    <Link
                        href="/blog"
                        className="font-body text-primary text-xs uppercase tracking-widest font-semibold hover:text-primary-dark transition-colors"
                    >
                        ← Blog
                    </Link>

                    <h1 className="font-heading text-2xl md:text-4xl font-bold text-primary-dark leading-tight mt-4 mb-4">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-center gap-4 text-sm font-body text-gray-400">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span className="text-primary font-semibold">{post.category}</span>
                    </div>
                </div>
            </div>

            {/* Article Body */}
            <article className="max-w-3xl mx-auto px-6 py-16 md:py-20">
                <div className="space-y-6 font-body text-gray-600 text-[16px] md:text-[17px] leading-[1.85]">
                    {post.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>

                {/* Social Share */}
                <div className="mt-14 pt-8 border-t border-gray-200">
                    <p className="font-heading text-sm font-bold text-primary-dark uppercase tracking-wider mb-4">
                        Share this article
                    </p>
                    <div className="flex gap-3">
                        <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#1877F2] text-white text-xs font-semibold px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                        >
                            Facebook
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(post.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                        >
                            X / Twitter
                        </a>
                        <a
                            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#0A66C2] text-white text-xs font-semibold px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </article>

            {/* Previous / Next Posts */}
            <section className="grid grid-cols-1 md:grid-cols-2">
                {prevPost ? (
                    <Link
                        href={`/blog/${prevPost.slug}`}
                        className="group relative h-64 md:h-72 bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url('${prevPost.image.src}')` }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
                        <div className="relative z-10 text-center px-6">
                            <p className="font-heading text-white text-lg md:text-xl font-bold leading-snug mb-3">
                                {prevPost.title}
                            </p>
                            <span className="inline-block border border-white/60 text-white text-xs font-body px-4 py-2 rounded-sm hover:bg-white/10 transition-colors">
                                Previous Blog
                            </span>
                        </div>
                    </Link>
                ) : (
                    <div className="h-64 md:h-72 bg-gray-100" />
                )}

                {nextPost ? (
                    <Link
                        href={`/blog/${nextPost.slug}`}
                        className="group relative h-64 md:h-72 bg-cover bg-center flex items-center justify-center"
                        style={{ backgroundImage: `url('${nextPost.image.src}')` }}
                    >
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors" />
                        <div className="relative z-10 text-center px-6">
                            <p className="font-heading text-white text-lg md:text-xl font-bold leading-snug mb-3">
                                {nextPost.title}
                            </p>
                            <span className="inline-block border border-white/60 text-white text-xs font-body px-4 py-2 rounded-sm hover:bg-white/10 transition-colors">
                                Next Blog
                            </span>
                        </div>
                    </Link>
                ) : (
                    <div className="h-64 md:h-72 bg-gray-100" />
                )}
            </section>
        </>
    );
}

export async function getServerSideProps(context) {
    return {
        props: {
            slug: context.params.slug,
        },
    };
}
