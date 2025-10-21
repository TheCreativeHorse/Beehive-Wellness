"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Phone } from 'lucide-react';

export default function Header() {
  const navItems = [
    {
      name: "Services",
      link: "#services",
    },
    {
      name: "Our Team",
      link: "#team",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToForm = () => {
    const element = document.getElementById('booking-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="flex-shrink-0">
          <NavbarLogo>
            <img
              src="/images/Beehive Wellness- Logo.svg"
              alt="Beehive Wellness"
              className="h-16 w-auto filter brightness-0 invert"
              onError={(e) => {
                console.error('Failed to load logo');
                e.currentTarget.style.display = 'none';
              }}
            />
          </NavbarLogo>
        </div>
        <div className="flex-1 flex justify-center">
          <NavItems items={navItems} />
        </div>
        <div className="flex-shrink-0 flex items-center space-x-2 lg:space-x-3">
          <a
            href="tel:+16478012442"
            className="hidden sm:flex items-center space-x-2 px-3 lg:px-4 py-2 bg-white text-pigment-blue rounded-button hover:bg-gray-100 transition-colors duration-200 font-medium text-sm lg:text-base"
          >
            <Phone size={16} />
            <span>Call: (647) 801-2442</span>
          </a>
          <a
            href="tel:+16478012442"
            className="sm:hidden flex items-center space-x-1 px-2 py-2 bg-white text-pigment-blue rounded-button hover:bg-gray-100 transition-colors duration-200 font-medium text-sm"
          >
            <Phone size={14} />
            <span>Call</span>
          </a>
          <NavbarButton 
            variant="primary"
            onClick={scrollToForm}
            className="flex items-center space-x-2 text-sm lg:text-base"
          >
            <span>Book Now</span>
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo>
            <img
              src="/images/Beehive Wellness- Logo.svg"
              alt="Beehive Wellness"
              className="h-12 w-auto filter brightness-0 invert"
              onError={(e) => {
                console.error('Failed to load mobile logo');
                e.currentTarget.style.display = 'none';
              }}
            />
          </NavbarLogo>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <button
              key={`mobile-link-${idx}`}
              onClick={() => scrollToSection(item.link.replace('#', ''))}
              className="relative text-neutral-600 dark:text-neutral-300 text-left w-full py-2"
            >
              <span className="block">{item.name}</span>
            </button>
          ))}
          <div className="flex w-full flex-col gap-3 pt-4">
            <a
              href="tel:+16478012442"
              className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-white text-pigment-blue rounded-button hover:bg-gray-100 transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone size={18} />
              <span>Call: (647) 801-2442</span>
            </a>
            <NavbarButton
              onClick={() => {
                scrollToForm();
                setIsMobileMenuOpen(false);
              }}
              variant="primary"
              className="w-full flex items-center justify-center space-x-2"
            >
              <span>Book Now</span>
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
