import Head from "next/head";
import SectionHeading from "../components/ui/SectionHeading";

const sections = [
    {
        title: "1. Introduction",
        content: "These Terms and Conditions govern your use of the Week2Week Serviced Apartments website and our booking services. By accessing our website or making a booking, you agree to be bound by these terms. Please read them carefully before proceeding.",
    },
    {
        title: "2. Bookings & Reservations",
        content: "All reservations are subject to availability and confirmation by Week2Week. A booking is only confirmed once you have received written confirmation from us. We reserve the right to refuse any booking at our discretion. A deposit may be required to secure your reservation.",
    },
    {
        title: "3. Pricing & Payment",
        content: "All prices are quoted in Pounds Sterling (GBP) and are inclusive of VAT where applicable. Full payment is required prior to arrival unless otherwise agreed in writing. We accept payment by bank transfer, credit card, and debit card. Prices are subject to change without notice until a booking is confirmed.",
    },
    {
        title: "4. Cancellation Policy",
        content: "Cancellations must be made in writing to hello@week2week.co.uk. Our standard cancellation policy requires a minimum of 7 days' notice for a full refund. Cancellations made with less than 7 days' notice may be subject to a cancellation charge equivalent to one week's rental. Extended stay bookings may be subject to different cancellation terms as specified at the time of booking.",
    },
    {
        title: "5. Arrival & Departure",
        content: "Standard check-in time is from 3pm and check-out is by 10am unless otherwise agreed. Early check-ins and late check-outs can be arranged subject to availability and may incur an additional charge. Guests are responsible for collecting keys and following the check-in procedure as detailed in their booking confirmation.",
    },
    {
        title: "6. Use of the Property",
        content: "Our apartments are for residential use only. Subletting or further renting of the property is strictly prohibited. Guests are responsible for keeping the property clean and in the same condition as at arrival. Smoking is strictly prohibited in all our properties. Pets are only permitted in designated pet-friendly apartments and are subject to a prior agreement and additional deposit.",
    },
    {
        title: "7. Liability",
        content: "Week2Week accepts no liability for any loss, damage, theft, or injury to guests or their personal property during their stay, except where such liability cannot be excluded by law. Guests are strongly advised to obtain appropriate travel and personal property insurance prior to their stay.",
    },
    {
        title: "8. Privacy",
        content: "We process your personal data in accordance with our Privacy Policy, which is available on our website. By making a booking, you consent to the processing of your data as described in that policy.",
    },
    {
        title: "9. Governing Law",
        content: "These Terms and Conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.",
    },
    {
        title: "10. Contact",
        content: "If you have any questions about these Terms and Conditions, please contact us at hello@week2week.co.uk or call us on 0191 261 4600.",
    },
];

export default function TermsAndConditions() {
    return (
        <>
            <Head>
                <title>Terms & Conditions | Week2Week Serviced Apartments</title>
                <meta name="description" content="Terms and Conditions for Week2Week Serviced Apartments — bookings, cancellations, payments, and property use policies." />
            </Head>

            {/* Hero */}
            <section className="w-full h-[220px] bg-primary-dark flex items-center justify-center relative mt-[90px] md:mt-[120px]">
                <h1 className="font-heading text-3xl md:text-4xl font-bold text-white text-center px-6">Terms & Conditions</h1>
            </section>

            {/* Content */}
            <section className="py-20 max-w-4xl mx-auto px-6">
                <div className="text-center mb-12">
                    <SectionHeading title="Our Terms of Service" />
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
