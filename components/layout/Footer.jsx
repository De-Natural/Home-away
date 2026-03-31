
import logo from '../../assets/images/companylogo.jpg'
import { Icon } from '@iconify/react';
import Image from "next/image";
import Link from "next/link";
import {
    footerApartments,
    footerCompany,
    socialLinks,
} from "../../data/navigation";


function SocialIcon({ icon }) {
    const icons = {
        facebook: <Icon icon="logos:facebook" className='w-10 h-10'/>,
        x: <Icon icon="prime:twitter" className='w-5 h-5 text-white'/>,
        linkedin: <Icon icon="skill-icons:linkedin" className='w-10 h-10 rounded-full'/>,
        instagram: <Icon icon="skill-icons:instagram" className='w-10 h-10 rounded-full'/>,
        tiktok: <Icon icon="ph:tiktok-logo-thin" className='w-8 h-8'/>,
    };
    return icons[icon] || null;
}

export default function Footer() {
    return (
        <footer className="bg-white">
            {/* Main Footer */}
            <div className="border-t border-border-gray">
                <div className="max-w-container mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Column 1: Apartments */}
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-primary-dark mb-5">
                                Apartments
                            </h3>
                            <ul className="space-y-2.5">
                                {footerApartments.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="text-primary hover:text-primary-dark transition-colors font-body text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: Company */}
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-primary-dark mb-5">
                                Company
                            </h3>
                            <ul className="space-y-2.5">
                                {footerCompany.map((link, index) => (
                                    <li key={`${link.href}-${index}`}>
                                        <Link
                                            href={link.href}
                                            className="text-primary hover:text-primary-dark transition-colors font-body text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Contact Us */}
                        <div>
                            <h3 className="text-2xl font-bold font-heading text-primary-dark mb-5">
                                Contact Us
                            </h3>
                            <div className="space-y-3 text-sm font-body text-body-text">
                                <p>
                                    <a
                                        href="tel:+447405076376"
                                        className="hover:text-primary transition-colors"
                                    >
                                        +44 7405 076376
                                    </a>
                                </p>
                                <p>
                                    <a
                                        href="mailto:idealhome046@gmail.com"
                                        className="hover:text-primary transition-colors"
                                    >
                                        idealhom046@gmail.com
                                    </a>
                                </p>
                                <p>
                                    Ideal home Serviced Apartments,
                                    <br />
                                    Ouseburn Gateway, 163 City Road,
                                    <br />
                                    Newcastle upon Tyne, NE1 2BE
                                </p>
                            </div>

                            {/* Newsletter */}
                            <div className="mt-6">
                                <p className="text-sm font-semibold text-primary-dark mb-3">
                                    Sign up for our newsletter and stay informed
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="flex-1 border border-border-gray px-3 py-2 text-sm font-body rounded-l focus:outline-none focus:border-primary"
                                    />
                                    <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r transition-colors">
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <label className="flex items-start gap-2 mt-3 text-xs text-body-text">
                                    <input type="checkbox" className="mt-0.5" />
                                    <span>
                                        By ticking this box you are agreeing to receiving marketing
                                        communications from us as outlined in our Privacy Policy.
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border-gray">
                <div className="max-w-container mx-auto px-6 py-8">
                    {/* Logo */}
                    <div className="flex justify-center mb-6">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="ideal home Serviced Apartments"
                                className="h-12 md:h-16 lg:h-20 w-auto"
                                width={80}
                                height={80}
                            />
                        </Link>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-border-gray mb-6" />

                    {/* Social Icons */}
                    <div className="flex justify-center gap-3 mb-6">
                        {socialLinks.map((social) => (
                            <a
                                key={social.icon}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-primary-dark hover:bg-primary text-white flex items-center justify-center transition-colors"
                                aria-label={social.label}
                            >
                                <SocialIcon icon={social.icon} />
                            </a>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p className="text-center text-sm text-body-text font-body">
                        &copy; Ideal home Serviced Apartments 2024 | Website Crafted by{" "}
                        <a
                            href="https://ballsymedia.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary-dark transition-colors"
                        >
                            Stanley Innocent
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
