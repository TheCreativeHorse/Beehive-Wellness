'use client';

import { Shield, Users, Clock, MapPin, CheckCircle } from 'lucide-react';
import { CardSpotlight } from '@/components/ui/card-spotlight';

const reasons = [
  {
    icon: Shield,
    title: 'Experienced Medical Team',
    description: 'Our staff has medical and naturopathic backgrounds with years of experience in holistic health care.'
  },
  {
    icon: Users,
    title: 'Personalized Care',
    description: 'Every treatment is tailored to your specific health needs and wellness goals.'
  },
  {
    icon: Clock,
    title: 'Easy Booking',
    description: 'Call or book online within minutes. We make it simple to start your wellness journey.'
  },
  {
    icon: MapPin,
    title: 'Two Convenient Locations',
    description: 'Serving Brampton & Scarborough with consistent, high-quality care at both locations.'
  },
  {
    icon: CheckCircle,
    title: 'Evidence-Based Therapies',
    description: 'All our treatments are backed by research and designed for long-term health benefits.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-deep-charcoal mb-4">
            Why Choose Beehive Wellness?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We&apos;re committed to providing exceptional care that puts your health and wellness first
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.slice(0, 3).map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <CardSpotlight key={index} className="h-auto text-center">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-pigment-blue rounded-full mb-6 mx-auto">
                  <IconComponent className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-inter font-semibold text-white mb-4 relative z-20">
                  {reason.title}
                </h3>

                <p className="text-white/90 leading-relaxed relative z-20">
                  {reason.description}
                </p>
              </CardSpotlight>
            );
          })}
        </div>

        {/* Bottom Row - Centered */}
        <div className="flex justify-center mt-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {reasons.slice(3).map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <CardSpotlight key={index + 3} className="h-auto text-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-pigment-blue rounded-full mb-6 mx-auto">
                    <IconComponent className="text-white" size={32} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-inter font-semibold text-white mb-4 relative z-20">
                    {reason.title}
                  </h3>

                  <p className="text-white/90 leading-relaxed relative z-20">
                    {reason.description}
                  </p>
                </CardSpotlight>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
