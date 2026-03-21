// MapSection.jsx
// "Find North East Apartments" section with a static map placeholder.
// The original site uses Google Maps with custom markers.

import SectionHeading from "../ui/SectionHeading";

export default function MapSection() {
    return (
        <section className="py-10 md:py-16 bg-light-gray">
            <div className="max-w-container mx-auto px-6">
                <SectionHeading className="mb-4">
                    Find North East Apartments
                </SectionHeading>
                <p className="text-center text-body-text font-body text-sm md:text-base mb-6 max-w-2xl mx-auto">
                    Simply click a map pin to view an apartment or to learn more about
                    that location.
                </p>

                {/* Map Legend */}
                <div className="flex justify-center gap-6 mb-8">
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-primary inline-block" />
                        <span className="text-sm font-body text-primary-dark">
                            W2W Apartments
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-gold inline-block" />
                        <span className="text-sm font-body text-gold">
                            Places of Interest
                        </span>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
                <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d73219.42867965487!2d-1.6950781!3d54.9781283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487d857e0c6f64cd%3A0xbe09a80c03f18403!2sNewcastle+upon+Tyne!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Newcastle upon Tyne Map"
                    />
                </div>
            </div>
        </section>
    );
}
