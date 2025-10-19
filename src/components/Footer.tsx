'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/images/Beehive Wellness- Logo.svg"
                alt="Beehive Wellness"
                width={150}
                height={60}
                className="h-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Restoring health and wellness through personalized lung and IV therapy treatments. 
              Your journey to better health starts here.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-white flex-shrink-0" size={18} />
                <a
                  href="tel:4374302442"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (647) 801-2442
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-white flex-shrink-0" size={18} />
                <a
                  href="mailto:info@beehivewellness.ca"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@beehivewellness.ca
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('testimonials');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Lung Therapy</span>
              </li>
              <li>
                <span className="text-gray-300">IV Therapy</span>
              </li>
              <li>
                <span className="text-gray-300">Combined Therapy</span>
              </li>
              <li>
                <span className="text-gray-300">Health Consultation</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-inter font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="text-white flex-shrink-0" size={18} />
                <a
                  href="tel:4374302442"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (647) 801-2442
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-white flex-shrink-0" size={18} />
                <a
                  href="mailto:info@beehivewellness.ca"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@beehivewellness.ca
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-white mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">
                    Serving Brampton & Scarborough<br />
                    Greater Toronto Area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Beehive Wellness. All rights reserved.
              <br />
              <span className="text-white text-sm font-medium hover:text-pigment-blue transition-colors duration-200">Powered by The Creative Horse ❤️</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 mb-4 md:mb-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Accessibility
              </a>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/beehive.wellness/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top */}
        <div className="text-center mt-8">
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}
