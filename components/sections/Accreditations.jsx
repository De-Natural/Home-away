
import cert3 from '../../assets/images/certificate3.webp'
import cert4 from '../../assets/images/certificate4.webp'
import Image from 'next/image';

export default function Accreditations() {
    const logos = [
        {
            src: cert3,
            alt: "ASAP Member",
            width: "w-24 md:w-64",
        },
        {
            src: cert4,
            alt: "Quality in Tourism",
            width: "w-16 md:w-64",
        },
        {
            src: cert3,
            alt: "North East England Chamber of Commerce",
            width: "w-32 md:w-64",
        },
        {
            src: cert4,
            alt: "NewcastleGateshead Proud Partner",
            width: "w-32 md:w-64",
        },
    ];

    return (
        <section className="py-10 md:py-14">
            <div className="mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-20 md:gap-14">
                    {logos.map((logo) => (
                        <Image
                            key={logo.alt}
                            src={logo.src}
                            alt={logo.alt}
                            className={`${logo.width} h-auto object-contain opacity-80 hover:opacity-100 transition-opacity`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
