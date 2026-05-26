

import Button from "../ui/Button";

export default function PropertyManagement() {
    return (
        <section
            className="relative py-16 md:py-24 bg-cover bg-center bg-primary-dark"
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary-dark/70" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-around mx-auto px-6 text-center">
                <div className="flex flex-col items-start">
                    
                    <p className="text-white text-justify font-body text-base md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed">
                        Are you a <b>property owner</b>? Looking to get a <b>return </b> on your <b>investment?</b> We can help you maximise
                        your property&apos;s earning potential through our professional 
                         <b>property management service</b>.
                    </p>
                </div>
               <Button className="h-14 w-48 bg-variant flex items-center justify-center text-primary-dark" href="/property-investment-2">
                    Learn More
                </Button> 
            </div>
              
        </section>
    );
}
