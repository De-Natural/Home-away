
import { Icon } from "@iconify/react";

const features = [
    {
        icon: <Icon icon="svg-spinners:wifi" width="48" height="48" />,
        title: "Free Wifi",
        desc: "Our serviced apartments have free Wifi. You will be connected when you stay with us.",
        alt: "free wifi",
    },
    {
        
        icon: <Icon icon="material-symbols:lightbulb-outline" width="48" height="48" />,
        title: "Utilities",
        desc: "All utilities are covered in our serviced apartments. Giving you one less thing to worry about.",
        alt: "all utilities",
    },
    {
        icon: <Icon icon="fa6-solid:kitchen-set" width="48" height="48" />,
        title: "Fully Equipped Kitchen",
        desc: "You will love our fully equipped kitchens allowing you to cook your favourite meals away from home.",
        alt: "fully equipped kitchens",
    },
    {
        icon: <Icon icon="streamline-kameleon-color:towel" width="48" height="48" />,
        title: "En Suite Bathrooms",
        desc: "Relax and unwind in our fully equipped apartment bathrooms. We ensure our guests are fully comfortable when staying with us.",
        alt: "en suite bathrooms",
    },
    {
        icon: <Icon icon="openmoji:broom" width="48" height="48" />,
        title: "Housekeeping",
        desc: "Keeping our serviced apartments clean and tidy is paramount. You will have an immaculate apartment with clean sheets no matter what!",
        alt: "housekeeping",
    },
    {
        icon: <Icon icon="streamline-ultimate-color:car-4" width="48" height="48" />,
        title: "Parking",
        desc: "We understand the importance of having parking available at your location. This is why we have selected apartments with suitable parking.",
        alt: "parking",
    },
    {
        icon: <Icon icon="twemoji:house-with-garden" width="48" height="48" />,
        title: "Fully Furnished",
        desc: "All of our apartments are fully furnished to a high standard. Move in and feel at home from day one.",
        alt: "fully furnished",
    },
    {
        icon: <Icon icon="solar:phone-calling-linear" width="48" height="48" />,
        title: "24/7 Support",
        desc: "We are here for you around the clock. Our dedicated team is available 24/7 to ensure your stay is perfect.",
        alt: "24/7 support",
    },
];

export default function WhyChoose({ heading }) {
    return (
        <section className="py-10 md:py-20">
            <div className="max-w-container mx-auto px-6">
                {heading && heading}

                {/* Features Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-l border-border-gray">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="group relative border-r border-b border-border-gray p-6 md:p-8 text-center flex flex-col items-center overflow-hidden cursor-default"
                        >
                            {/* Default content: icon + title */}
                            <div className="transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2 flex flex-col items-center">
                                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-4 text-primary bg-primary/5 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <div className="w-10 h-0.5 bg-border-gray mb-4" />
                                <h5 className="font-heading font-semibold text-sm md:text-base text-primary-dark">
                                    {feature.title}
                                </h5>
                            </div>

                            {/* Hover overlay: description */}
                            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center px-4 md:px-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                <p className="text-xs text-primary-dark font-body leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
