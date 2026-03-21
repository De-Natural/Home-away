// WelcomeSection.jsx
// "Serviced Apartments Newcastle" intro section with description text
// and "Celebrating 25 Years" badge on the right.

import SectionHeading from "../ui/SectionHeading";

export default function WelcomeSection() {
    return (
        <section className="py-10 md:py-16">
            <div className="max-w-container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Text Content */}
                    <div className="flex-1">
                        <SectionHeading as="h1" className="mb-6">
                            Serviced Apartments Newcastle
                        </SectionHeading>
                        <p className="text-center text-body-text font-body text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                            Week2Week Serviced Apartments is a family run business based in
                            Newcastle City Centre. Founded in 2000, we are the original
                            serviced apartments provider in Newcastle upon Tyne. We provide you
                            with the luxury of a hotel suite with the amenities you would
                            expect from your own home. We accommodate both short and longer
                            stays, so whether you are looking for a few days, weeks, or months;
                            for business or leisure, we have the perfect serviced apartment for
                            you. Our hand-picked apartments are in popular locations in and
                            around Newcastle city centre. A warm welcome awaits at Week 2 Week
                            Serviced Apartments.
                        </p>
                    </div>

                    {/* 25 Years Badge */}
                    <div className="flex-shrink-0">
                        <img
                            src="https://week2week.co.uk/wp-content/uploads/2025/05/week2week_25years_transparent-1-300x300.png"
                            alt="Celebrating 25 years"
                            className="w-32 md:w-40 lg:w-48 h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
