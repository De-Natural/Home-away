// WhyChoose.jsx
// "Why Choose Week2Week" section with 8 feature icons in a 4x2 grid.
// Each icon has a title, divider, and short description.

import SectionHeading from "../ui/SectionHeading";

const features = [
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_1.png",
        title: "Free Wifi",
        desc: "Our serviced apartments have free Wifi. You will be connected when you stay with us.",
        alt: "free wifi",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_2-111x111.png",
        title: "Utilities",
        desc: "All utilities are covered in our serviced apartments. Giving you one less thing to worry about.",
        alt: "all utilities",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_3-112x112.png",
        title: "Fully Equipped Kitchen",
        desc: "You will love our fully equipped kitchens allowing you to cook your favourite meals away from home.",
        alt: "fully equipped kitchens",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_4-112x112.png",
        title: "En Suite Bathrooms",
        desc: "Relax and unwind in our fully equipped apartment bathrooms. We ensure our guests are fully comfortable when staying with us.",
        alt: "en suite bathrooms",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_5-112x112.png",
        title: "Housekeeping",
        desc: "Keeping our serviced apartments clean and tidy is paramount. You will have an immaculate apartment with clean sheets no matter what!",
        alt: "housekeeping",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_6.png",
        title: "Parking",
        desc: "We understand the importance of having parking available at your location. This is why we have selected apartments with suitable parking.",
        alt: "parking",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_7-112x112.png",
        title: "Fully Furnished",
        desc: "All of our apartments are fully furnished to a high standard. Move in and feel at home from day one.",
        alt: "fully furnished",
    },
    {
        icon: "https://week2week.co.uk/wp-content/uploads/2017/08/icon_8-112x112.png",
        title: "24/7 Support",
        desc: "We are here for you around the clock. Our dedicated team is available 24/7 to ensure your stay is perfect.",
        alt: "24/7 support",
    },
];

export default function WhyChoose() {
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-container mx-auto px-6">
                <SectionHeading className="mb-10">
                    Why Choose Ideal home
                </SectionHeading>

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border-gray">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="border-r border-b border-border-gray p-6 md:p-8 text-center flex flex-col items-center"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4">
                                <img
                                    src={feature.icon}
                                    alt={feature.alt}
                                    className="w-16 h-16 md:w-20 md:h-20 object-contain"
                                />
                            </div>
                            <div className="w-10 h-0.5 bg-border-gray mb-4" />
                            <h5 className="font-heading font-semibold text-sm md:text-base text-primary-dark mb-3">
                                {feature.title}
                            </h5>
                            <p className="text-xs md:text-sm text-body-text font-body leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
