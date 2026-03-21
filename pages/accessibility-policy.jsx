import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
    {
        title: "Our Commitment to Accessibility",
        content: "Week2Week Serviced Apartments is committed to ensuring that our website and services are accessible to everyone, including people with disabilities. We strive to meet and exceed the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA and continually work to improve the accessibility of our digital content.",
    },
    {
        title: "What We've Done",
        content: "We have taken the following steps to improve accessibility: Used semantic HTML to improve screen reader compatibility; Ensured all images have descriptive alternative text; Maintained sufficient colour contrast across all pages; Made our website fully keyboard-navigable; Avoided using motion that could cause discomfort for users with vestibular disorders.",
    },
    {
        title: "Known Issues",
        content: "We are aware that some older PDF documents and third-party embedded content (such as maps) may not fully meet our accessibility standards. We are working to address these issues and provide alternative formats where possible.",
    },
    {
        title: "Third-Party Content",
        content: "Some content on our website is provided by third parties, including embedded maps, social media feeds, and external booking widgets. While we work with our partners to ensure accessibility, we cannot guarantee the accessibility of third-party content.",
    },
    {
        title: "Feedback & Contact",
        content: "We welcome feedback on the accessibility of our website. If you experience any barriers to accessing our content or services, or if you require information in an alternative format, please contact us at: hello@week2week.co.uk or call 0191 261 4600. We aim to respond to accessibility enquiries within 5 working days.",
    },
    {
        title: "Enforcement Procedure",
        content: "If you are not satisfied with our response, you can contact the Equality Advisory and Support Service (EASS). The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018.",
    },
];

export default function AccessibilityPolicy() {
    return (
        <>
            <Head>
                <title>Accessibility Policy | Week2Week Serviced Apartments</title>
                <meta name="description" content="Week2Week's commitment to making our website and services accessible to all users, including those with disabilities." />
            </Head>

            {/* Hero */}
            <section className="w-full h-[220px] bg-primary-dark flex items-center justify-center relative mt-[90px] md:mt-[120px]">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white text-center px-6">Accessibility Policy</h1>
            </section>

            {/* Content */}
            <section className="py-20 max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <SectionHeading title="Accessibility for All" />
                    <p className="font-body text-gray-500 text-sm mt-4">Last updated: January 2025</p>
                </div>
                <div className="space-y-10">
                    {sections.map((s, idx) => (
                        <div key={idx} className="border-b border-light-gray pb-10 last:border-0">
                            <h2 className="font-heading text-xl font-bold text-primary-dark mb-4">{s.title}</h2>
                            <p className="font-body text-gray-600 text-sm leading-relaxed">{s.content}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
