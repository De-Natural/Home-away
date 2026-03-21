import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
    {
        title: "1. Who We Are",
        content: "Week2Week Serviced Apartments ('we', 'us', 'our') is the data controller for the personal information collected through this website and our booking services. Our registered address is: Collingwood Buildings, 38 Collingwood Street, Newcastle upon Tyne, NE1 1JF.",
    },
    {
        title: "2. What Data We Collect",
        content: "We collect information you provide when making an enquiry or booking: your name, email address, phone number, stay dates, and any specific requirements. We may also collect data automatically through cookies and analytics tools, such as your IP address, browser type, and pages visited.",
    },
    {
        title: "3. How We Use Your Data",
        content: "We use your personal data to: process and manage your booking; communicate with you before, during, and after your stay; respond to enquiries and complaints; send relevant marketing communications (where you have opted in); improve our website and services; and comply with our legal obligations.",
    },
    {
        title: "4. Legal Basis for Processing",
        content: "We process your data on the following legal bases: contract performance (to fulfil your booking); legitimate interests (to improve our services and prevent fraud); consent (for marketing communications); and legal obligation (to comply with applicable law).",
    },
    {
        title: "5. Sharing Your Data",
        content: "We do not sell your personal data to third parties. We may share your data with trusted service providers who assist in operating our business (such as payment processors, email providers, or property management systems), all of whom are bound by appropriate data processing agreements.",
    },
    {
        title: "6. Data Retention",
        content: "We retain your personal data only for as long as necessary for the purposes described in this policy and to comply with legal obligations. Booking records are typically retained for 7 years in line with HMRC requirements. Marketing data is retained until you withdraw your consent.",
    },
    {
        title: "7. Your Rights",
        content: "Under UK GDPR, you have the right to: access the personal data we hold about you; correct inaccurate data; request erasure of your data; object to processing; restrict processing; and data portability. To exercise any of these rights, please contact us at hello@week2week.co.uk.",
    },
    {
        title: "8. Cookies",
        content: "Our website uses cookies to improve your experience and analyse traffic. You can control cookies through your browser settings. By continuing to use our website you consent to our use of cookies in accordance with this policy.",
    },
    {
        title: "9. Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the updated policy on our website with a revised date. Your continued use of our services after any changes constitutes your acceptance of the updated policy.",
    },
    {
        title: "10. Contact Us",
        content: "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact our Data Protection contact at: hello@week2week.co.uk or by writing to us at Collingwood Buildings, 38 Collingwood Street, Newcastle upon Tyne, NE1 1JF.",
    },
];

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy | Week2Week Serviced Apartments</title>
                <meta name="description" content="Week2Week's Privacy Policy — how we collect, use, and protect your personal data in accordance with UK GDPR." />
            </Head>

            {/* Hero */}
            <section className="w-full h-[220px] bg-primary-dark flex items-center justify-center relative mt-[90px] md:mt-[120px]">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white text-center px-6">Privacy Policy</h1>
            </section>

            {/* Content */}
            <section className="py-20 max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <SectionHeading title="How We Handle Your Data" />
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
