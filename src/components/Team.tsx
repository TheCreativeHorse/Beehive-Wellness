'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Dr. Sany Seifi',
    title: 'Clinic Director / Owner',
    credentials: 'ND (AB), Bs Pharm, PhD',
    image: '/images/Dr Sany.jpg',
    description: 'Leading our clinic with extensive experience in naturopathic medicine and pharmaceutical sciences.'
  },
  {
    name: 'Dr. Farhad Esmaelbeigi',
    title: 'Naturopathic Doctor',
    credentials: 'MD, General Surgeon, Cancer Fellowship in Iran',
    image: '/images/Dr. Farhad  - 22.jpg',
    description: 'Bringing surgical expertise and specialized cancer care knowledge to our naturopathic practice.'
  },
  {
    name: 'Dr. Sean Kerr',
    title: 'Chiropractor',
    credentials: 'DC',
    image: '/images/Dr Sean Kerr Dc.jpg',
    description: 'Specializing in chiropractic care to support your musculoskeletal health and overall wellness.'
  },
  {
    name: 'Dr. Maryam Jahanshahi',
    title: 'Naturopathic Doctor',
    credentials: 'BSc, MSc, ND',
    image: '/images/Dr Maryam Jahansahi.jpg',
    description: 'Combining advanced scientific training with naturopathic principles for comprehensive patient care.'
  }
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible - could add animations here
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-deep-charcoal mb-4">
            Our Expert Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our experienced healthcare professionals dedicated to your wellness journey
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card-hover bg-white rounded-card p-6 shadow-card text-center"
            >
              {/* Doctor Photo */}
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, (max-width: 1024px) 250px, 300px"
                  loading="lazy"
                />
              </div>

              {/* Doctor Info */}
              <h3 className="text-xl font-inter font-semibold text-deep-charcoal mb-2">
                {member.name}
              </h3>

              <h4 className="text-lg font-inter font-medium text-pigment-blue mb-2">
                {member.title}
              </h4>

              <p className="text-sm text-honey-gold font-medium mb-4">
                {member.credentials}
              </p>

              <p className="text-gray-600 text-sm leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ready to meet our team and start your wellness journey?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('booking-form');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary text-white px-8 py-4 rounded-button font-inter font-semibold text-lg uppercase tracking-wide"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
