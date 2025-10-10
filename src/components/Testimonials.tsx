'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Dr. Sany is the most caring and compassionate doctor. She listens carefully and truly wants the best for her patients.",
    author: "Patient Review",
    rating: 5
  },
  {
    id: 2,
    text: "I felt very comfortable and understood throughout my consultation. The treatments have made a big difference in my energy levels.",
    author: "Sarah M.",
    rating: 5
  },
  {
    id: 3,
    text: "Professional, knowledgeable, and kind. The team at Beehive Wellness takes time to explain everything clearly.",
    author: "James K.",
    rating: 5
  },
  {
    id: 4,
    text: "I came in for IV therapy and walked out feeling refreshed and rejuvenated. Highly recommended!",
    author: "Priya R.",
    rating: 5
  },
  {
    id: 5,
    text: "The clinic atmosphere is welcoming and the staff is exceptional. Booking was easy and quick.",
    author: "Ahmed L.",
    rating: 5
  },
  {
    id: 6,
    text: "I've been to both the Brampton and Scarborough locations—both offer consistent, high-quality care.",
    author: "Melissa T.",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} id="testimonials" className="py-section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-deep-charcoal mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real experiences from patients who have transformed their health with our care
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-card p-6 shadow-card card-hover"
            >
              {/* Quote Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4 mx-auto">
                <Quote className="text-white" size={24} />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-honey-gold fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <p className="text-deep-charcoal font-semibold text-center">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-white rounded-card p-6 shadow-card mx-4">
              {/* Quote Icon */}
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-full mb-4 mx-auto">
                <Quote className="text-white" size={24} />
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="text-honey-gold fill-current" size={20} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed italic">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </p>

              {/* Author */}
              <p className="text-deep-charcoal font-semibold text-center">
                — {testimonials[currentIndex].author}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-pigment-blue hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-pigment-blue hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-pigment-blue' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Join hundreds of satisfied patients who have improved their health with us
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
            Start Your Wellness Journey
          </button>
        </div>
      </div>
    </section>
  );
}
