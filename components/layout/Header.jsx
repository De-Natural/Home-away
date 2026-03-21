import logo from '../../assets/images/companylogo.jpg'
import { Icon } from '@iconify/react'; 
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { primeLocations, whatWeDo, company } from "../../data/navigation";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
            {/* Top Announcement Bar */}
            <div className="bg-primary-dark text-white text-center py-2 px-4">
                <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wide font-heading">
                    Accommodation Experts for Extended Stays - Projects, Relocation,
                    Business Travel - Short-term and Long-term
                </h4>
            </div>

            {/* Main Header Row */}
            <div className="max-w-container mx-auto px-4">
                <div className="flex items-center justify-between py-3 md:py-4">
                    {/* Left: Reservation Hotline */}
                    <div className="hidden md:flex items-center gap-3 flex-1">
                        <div className="text-primary-dark">
                            <Icon icon="mdi:phone" width="24" height="24" />
                        </div>
                        <div>
                            <a
                                href="tel:+441912813129"
                                className="text-primary-dark hover:text-primary transition-colors"
                            >
                                <span className="block text-xs font-body text-body-text">
                                    Reservation hotline
                                </span>
                                <span className="block text-sm font-semibold font-heading">
                                    +44 7405 076376
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Center: Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Ideal home Serviced Apartments Newcastle Logo"
                                className="h-12 md:h-16 lg:h-20 w-auto"
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>

                    {/* Right: CTA + Language + Hamburger */}
                    <div className="flex items-center gap-2 md:gap-4 flex-1 justify-end">
                        <Link
                            href="/contact"
                            className="hidden sm:inline-block bg-primary hover:bg-primary-dark text-white text-xs md:text-sm font-semibold font-heading py-2 px-3 md:px-5 rounded transition-colors"
                        >
                            <span className="hidden lg:inline">Enquire </span>Now
                        </Link>

                        {/* Language Selector */}
                        <div className="hidden md:flex items-center">
                            <img
                                src="https://week2week.co.uk/wp-content/uploads/2017/08/flag_uk.jpg"
                                alt="English"
                                className="w-8 h-5 object-cover rounded-sm"
                            />
                            <svg
                                className="w-4 h-4 ml-1 text-body-text"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>

                        {/* Hamburger Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
                            aria-label="Toggle navigation menu"
                        >
                            <span
                                className={`block w-7 h-0.5 bg-primary-dark transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                    }`}
                            />
                            <span
                                className={`block w-7 h-0.5 bg-primary-dark transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                    }`}
                            />
                            <span
                                className={`block w-7 h-0.5 bg-primary-dark transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                    }`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Full-Screen Overlay Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 transition-all duration-500 overflow-y-auto ${menuOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-4"
                    }`}
                style={{ top: "0" }}
            >
                {/* Close Button */}
                <div className="absolute top-5 right-5">
                    <button
                        onClick={() => setMenuOpen(false)}
                        className="w-10 h-10 flex items-center justify-center text-primary-dark hover:text-primary"
                        aria-label="Close menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu Content */}
                <div className="max-w-container mx-auto px-6 pt-20 pb-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {/* Column 1: Prime Locations */}
                        <div>
                            <h3 className="text-lg font-bold font-heading text-primary-dark mb-4 pb-2 border-b-2 border-primary">
                                Prime Locations
                            </h3>
                            <ul className="space-y-3">
                                {primeLocations.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="text-body-text hover:text-primary transition-colors font-body text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2: What We Do */}
                        <div>
                            <h3 className="text-lg font-bold font-heading text-primary-dark mb-4 pb-2 border-b-2 border-primary">
                                What We Do
                            </h3>
                            <ul className="space-y-3">
                                {whatWeDo.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="text-body-text hover:text-primary transition-colors font-body text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Company */}
                        <div>
                            <h3 className="text-lg font-bold font-heading text-primary-dark mb-4 pb-2 border-b-2 border-primary">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {company.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="text-body-text hover:text-primary transition-colors font-body text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
