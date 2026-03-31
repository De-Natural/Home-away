

import Button from "../ui/Button";

export default function PropertyManagement() {
    return (
        <section
            className="relative py-16 md:py-24 bg-cover bg-center bg-primary-dark"
            // style={{
            //     backgroundImage:
            //         "url('https://week2week.co.uk/wp-content/uploads/2024/05/Team-new-2-min.jpg')",
            // }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-dark/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-around mx-auto px-6 text-center">
                <div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-heading text-white mb-4">
                        Are you a property owner?
                    </h2>
                    <p className="text-white/90 font-body text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                        Looking to get a return on your investment? We can help you maximise
                        your property&apos;s earning potential through our professional
                        property management service.
                    </p>
                </div>
               <Button className="h-14 w-48 bg-primary flex items-center justify-center text-white" href="/property-investment-2" variant="primary">
                    Learn More
                </Button> 
            </div>
              
        </section>
    );
}
