'use client';

import { Heart, Droplets, Activity, Stethoscope } from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-white mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

const services = [
  {
    icon: Heart,
    title: 'Lung Therapy',
    description: 'Strengthen your lungs and improve oxygen flow through safe, non-invasive treatments. Designed for individuals with chronic respiratory issues or anyone seeking to enhance overall lung health.',
    features: ['Non-invasive treatment', 'Improved oxygen flow', 'Respiratory health support']
  },
  {
    icon: Droplets,
    title: 'IV Therapy',
    description: 'Replenish your body with essential vitamins and nutrients directly into the bloodstream. Boosts energy, supports immunity, and promotes faster recovery.',
    features: ['Direct nutrient delivery', 'Energy boost', 'Immune system support']
  },
  {
    icon: Activity,
    title: 'Combined Therapy',
    description: 'Experience the full benefits of both Lung and IV Therapy. A holistic approach to restore vitality, strengthen immunity, and optimize overall wellness.',
    features: ['Holistic approach', 'Comprehensive treatment', 'Optimal wellness']
  },
  {
    icon: Stethoscope,
    title: 'Full Health Consultation',
    description: 'A personalized session with our experienced naturopathic team to assess your health needs and recommend the right therapy plan.',
    features: ['Personalized assessment', 'Expert consultation', 'Custom treatment plan']
  }
];

export default function Services() {
  const scrollToForm = () => {
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-deep-charcoal mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive wellness solutions designed to restore your health and vitality
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <CardSpotlight key={index} className="h-full flex flex-col min-h-[500px]">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-pigment-blue rounded-full mb-6 mx-auto">
                  <IconComponent className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-inter font-semibold text-white mb-4 text-center relative z-20">
                  {service.title}
                </h3>

                <p className="text-white/90 mb-6 leading-relaxed relative z-20 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 relative z-20">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckIcon />
                      <p className="text-white ml-2">{feature}</p>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={scrollToForm}
                  className="w-full bg-pigment-blue text-white py-3 px-4 rounded-button font-inter font-semibold text-sm uppercase tracking-wide hover:bg-pigment-blue/90 transition-colors duration-200 relative z-20"
                >
                  Book Now
                </button>
              </CardSpotlight>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Not sure which service is right for you?
          </p>
          <button
            onClick={scrollToForm}
            className="btn-primary text-white px-8 py-4 rounded-button font-inter font-semibold text-lg uppercase tracking-wide"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
