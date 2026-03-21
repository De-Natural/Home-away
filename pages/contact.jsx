import Head from "next/head";
import { useState } from "react";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import imageContact from "../assets/images/contact us.png";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    const contactMethods = [
        { icon: "📞", label: "Hotline", value: "+44 7405 076376", note: "Mon – Fri, 9am – 5pm" },
        { icon: "✉️", label: "Email", value: "idealhom046@gmail.com", note: "We aim to reply within 24 hours" },
        { icon: "📍", label: "Address", value: "No 31 copper walks way walsall", note: "" },
    ];

    return (
        <>
            <Head>
                <title>Contact Us | Ideal home Serviced Apartments Newcastle</title>
                <meta name="description" content="Get in touch with Ideal home for serviced apartment enquiries, group bookings, and property management in Newcastle." />
            </Head>

            {/* Hero */}
            <section
                className="w-full h-[300px] md:h-[380px] bg-cover bg-center flex items-center justify-center relative mt-[90px] md:mt-[120px]"
                style={{ backgroundImage: `url('${imageContact.src}')` }}
            >
                <div className="absolute inset-0 bg-black/50" />
                <h1 className="relative z-10 font-heading text-4xl md:text-5xl font-bold text-white text-center px-6 drop-shadow-lg">
                    Contact Us
                </h1>
            </section>

            {/* Contact Methods */}
            <section className="py-20 bg-white">
                <div className="max-w-container mx-auto px-6">
                    <div className="text-center mb-16">
                        <SectionHeading title="Get in Touch" />
                        <p className="font-body text-gray-600 mt-4 max-w-2xl mx-auto">
                            We'd love to hear from you. Whether you have a question about an apartment,
                            need a bespoke quote for a group booking, or want to discuss property management,
                            our friendly team is always here to help.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {contactMethods.map((c, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center p-8 bg-light-gray rounded-sm">
                                <span className="text-4xl mb-4">{c.icon}</span>
                                <p className="font-body text-xs uppercase tracking-widest text-gold font-bold mb-2">{c.label}</p>
                                <p className="font-heading font-bold text-primary-dark text-base">{c.value}</p>
                                {c.note && <p className="font-body text-gray-500 text-xs mt-1">{c.note}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-heading text-2xl font-bold text-primary-dark text-center mb-10 italic">Send Us a Message</h2>
                        {submitted ? (
                            <div className="bg-green-50 border border-green-200 text-green-800 rounded-sm p-10 text-center space-y-4">
                                <div className="text-5xl">✅</div>
                                <h3 className="font-heading text-xl font-bold">Thank You!</h3>
                                <p className="font-body text-sm">Your message has been sent. We&apos;ll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-body text-sm font-semibold text-primary-dark mb-2" htmlFor="contact-name">Full Name *</label>
                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-semibold text-primary-dark mb-2" htmlFor="contact-email">Email Address *</label>
                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-body text-sm font-semibold text-primary-dark mb-2" htmlFor="contact-phone">Phone Number</label>
                                        <input
                                            id="contact-phone"
                                            name="phone"
                                            type="tel"
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors"
                                            placeholder="07700 000000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-sm font-semibold text-primary-dark mb-2" htmlFor="contact-subject">Subject *</label>
                                        <select
                                            id="contact-subject"
                                            name="subject"
                                            required
                                            value={form.subject}
                                            onChange={handleChange}
                                            className="w-full border border-gray-300 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors bg-white"
                                        >
                                            <option value="">Select a subject...</option>
                                            <option>General Enquiry</option>
                                            <option>Apartment Availability</option>
                                            <option>Group / Corporate Booking</option>
                                            <option>Contractor Accommodation</option>
                                            <option>Property Management</option>
                                            <option>Feedback / Complaint</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-body text-sm font-semibold text-primary-dark mb-2" htmlFor="contact-message">Message *</label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        rows={6}
                                        required
                                        value={form.message}
                                        onChange={handleChange}
                                        className="w-full border border-gray-300 rounded-sm px-4 py-3 font-body text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                                        placeholder="Tell us about your requirements, preferred dates, number of guests, etc."
                                    />
                                </div>
                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="inline-block bg-primary text-white font-heading font-bold uppercase tracking-widest text-xs px-10 py-4 rounded-sm hover:bg-primary-dark transition-colors"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="bg-light-gray py-24">
                <div className="max-w-container mx-auto px-6 text-center space-y-6">
                    <h2 className="font-heading text-2xl font-bold text-primary-dark">Find Our Office</h2>
                    <p className="font-body text-gray-600">No 31 copper walks way walsall ws1 2nd</p>
                    <div className="w-full h-[400px] rounded-sm overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center">
                        <iframe
                            title="Week2Week Office Location"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.7694706!2d-1.6174!3d54.9725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e70c8a8cfde8b%3A0x1a0f0f0f0f0f0f0f!2sCollingwood%20St%2C%20Newcastle%20upon%20Tyne!5e0!3m2!1sen!2suk!4v1"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
