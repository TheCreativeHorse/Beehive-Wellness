'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, User } from 'lucide-react';
import { LayoutTextFlip } from '@/components/ui/layout-text-flip';

interface FormData {
  name: string;
  phone: string;
  service: string;
  location: string;
  time: string;
}

export default function Hero() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    location: '',
    time: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          service: '',
          location: '',
          time: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Booking error:', result.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-primary w-full" style={{ paddingTop: '80px' }}>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/pexels-tara-winstead-8849272.jpg"
          alt="Wellness therapy session"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-pigment-blue/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white lg:pr-8">

            <h1 className="mb-8 leading-relaxed">
              <LayoutTextFlip
                text="Restore Your Health with"
                words={["Lung Therapy", "IV Therapy"]}
                className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold leading-relaxed"
              />
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Personalized care in Brampton & Scarborough—Book your wellness session today.
            </p>

            {/* Click to Call */}
            <div className="flex items-center space-x-4 mb-8">
              <a
                href="tel:+16478012442"
                className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200"
              >
                <Phone size={24} />
                <span className="text-lg font-semibold">(647) 801-2442</span>
              </a>
            </div>
          </div>

          {/* Right Content - Booking Form */}
          <div id="booking-form" className="bg-white rounded-card p-8 shadow-2xl">
            <h2 className="text-2xl font-inter font-bold text-deep-charcoal mb-6 text-center">
              Book Your Appointment
            </h2>

            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                Thank you! We&apos;ll contact you within 24 hours.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                There was an error submitting your request. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep-charcoal mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-pigment-blue focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-deep-charcoal mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={20} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-pigment-blue focus:border-transparent transition-all duration-200"
                    placeholder="(647) 801-2442"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-deep-charcoal mb-2">
                  Service Interest *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-pigment-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="">Select a service</option>
                  <option value="lung-therapy">Lung Therapy</option>
                  <option value="iv-therapy">IV Therapy</option>
                  <option value="combined-therapy">Combined Therapy</option>
                  <option value="consultation">Full Health Consultation</option>
                </select>
              </div>

              {/* Location and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-deep-charcoal mb-2">
                    Preferred Location *
                  </label>
                  <select
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-pigment-blue focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="">Select location</option>
                    <option value="brampton">Brampton</option>
                    <option value="scarborough">Scarborough</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-deep-charcoal mb-2">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-button focus:ring-2 focus:ring-pigment-blue focus:border-transparent transition-all duration-200 appearance-none bg-white"
                  >
                    <option value="">Select time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-white py-4 rounded-button font-inter font-semibold text-lg uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Booking...' : 'Book Your Appointment'}
              </button>

              {/* Privacy Note */}
              <p className="text-sm text-gray-600 text-center">
                * Your information is secure and confidential
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
