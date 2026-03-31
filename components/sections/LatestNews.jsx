
// import blog1 from '../../assets/images/blog1.webp'
// import blog2 from '../../assets/images/blog2.webp'
import blog3 from '../../assets/images/FreelanceCreative PortfolioWebsite(4).png'
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";

const articles = [
    {
        title: "Best Things to Do in Newcastle",
        excerpt:
            "Discover the top attractions and activities in Newcastle upon Tyne, from cultural landmarks to vibrant nightlife.",
        image:
            blog3.src,
        href: "/blog",
    },
    {
        title: "Why Choose Serviced Apartments Over Hotels",
        excerpt:
            "Find out why more business and leisure travellers are choosing serviced apartments for their stays.",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/Newcastle-City-Centre-min.jpg",
        href: "/blog",
    },
    {
        title: "A Guide to Newcastle Quayside",
        excerpt:
            "Explore the beautiful Newcastle Quayside area — restaurants, bars, and stunning architecture.",
        image:
            "https://week2week.co.uk/wp-content/uploads/2024/03/Newcastle-Quayside-min.jpg",
        href: "/blog",
    },
];

export default function LatestNews() {
    return (
        <section className="py-10 md:py-16">
            <div className="max-w-container mx-auto px-6">
                <SectionHeading className="mb-10">Latest News</SectionHeading>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {articles.map((article, i) => (
                        <Link
                            key={i}
                            href={article.href}
                            className="group block overflow-hidden rounded-lg shadow-sm border border-border-gray hover:shadow-md transition-shadow"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-5">
                                <h4 className="font-heading font-bold text-base text-primary-dark mb-2 group-hover:text-primary transition-colors">
                                    {article.title}
                                </h4>
                                <p className="text-sm text-body-text font-body leading-relaxed">
                                    {article.excerpt}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Button href="/blog" variant="outline">
                        View All Articles
                    </Button>
                </div>
            </div>
        </section>
    );
}
