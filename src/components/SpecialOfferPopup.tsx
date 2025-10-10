'use client';

import { useState, useEffect } from 'react';
import { Gift, Clock, X } from 'lucide-react';

export default function SpecialOfferPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasSeenPopup, setHasSeenPopup] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup in this session
    const seenPopup = sessionStorage.getItem('beehive-offer-popup-seen');
    
    if (!seenPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // 2 second delay

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    setIsVisible(false);
    setHasSeenPopup(true);
    // Remember that user has seen the popup in this session
    sessionStorage.setItem('beehive-offer-popup-seen', 'true');
  };

  const scrollToForm = () => {
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closePopup();
  };

  if (!isVisible || hasSeenPopup) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-gradient-to-br from-pigment-blue/20 to-white/80 z-50 flex items-center justify-center p-4"
        onClick={closePopup}
      >
        {/* Popup Content */}
        <div 
          className="bg-white rounded-card p-6 md:p-8 shadow-2xl text-center text-deep-charcoal max-w-md w-full relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={closePopup}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close popup"
          >
            <X size={24} />
          </button>

          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-16 bg-pigment-blue rounded-full mb-4 mx-auto">
            <Gift className="text-white" size={32} />
          </div>

          {/* Header */}
          <h2 className="text-2xl md:text-3xl font-inter font-bold text-deep-charcoal mb-3">
            Limited-Time Offer for New Patients
          </h2>

          {/* Offer Details */}
          <div className="mb-6">
            <p className="text-lg md:text-xl text-deep-charcoal mb-3">
              Book today and receive{' '}
              <span className="text-pigment-blue font-bold text-2xl">20% off</span>{' '}
              your first IV or Lung Therapy session.
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              <Clock size={18} />
              <span className="font-medium text-sm">Limited time offer - Book now!</span>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-pigment-blue rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="font-inter font-semibold text-deep-charcoal mb-1 text-sm">Book Online</h3>
              <p className="text-gray-600 text-xs">Quick and easy booking</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-pigment-blue rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="font-inter font-semibold text-deep-charcoal mb-1 text-sm">Get Discount</h3>
              <p className="text-gray-600 text-xs">20% off first session</p>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 bg-pigment-blue rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="font-inter font-semibold text-deep-charcoal mb-1 text-sm">Start Healing</h3>
              <p className="text-gray-600 text-xs">Begin wellness journey</p>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="bg-pigment-blue text-white px-8 py-3 rounded-button font-inter font-semibold text-lg uppercase tracking-wide hover:bg-pigment-blue/90 transition-colors duration-200 w-full mb-4"
          >
            Claim Your Discount & Book Appointment
          </button>

          {/* Terms */}
          <p className="text-xs text-gray-500">
            * Offer valid for new patients only. Cannot be combined with other offers. 
            Expires 30 days from booking date.
          </p>

          {/* Close Button Alternative */}
          <button
            onClick={closePopup}
            className="text-gray-500 hover:text-gray-700 text-sm underline mt-2"
          >
            Maybe later
          </button>
        </div>
      </div>
    </>
  );
}
