"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SlideData {
  title: string;
  button: string;
  src: string;
}

interface CarouselProps {
  slides: SlideData[];
  autoScroll?: boolean;
  autoScrollInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  slidesToShow?: number;
}

export default function Carousel({
  slides,
  autoScroll = true,
  autoScrollInterval = 4000,
  showDots = true,
  showArrows = true,
  slidesToShow = 4,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Calculate total number of slides
  const totalSlides = Math.ceil(slides.length / slidesToShow);

  // Auto scroll effect
  useEffect(() => {
    if (!autoScroll || isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => 
        prevSlide >= totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, autoScrollInterval);

    return () => clearInterval(interval);
  }, [autoScroll, autoScrollInterval, isHovered, totalSlides]);

  const goToPrevious = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide <= 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToNext = () => {
    setCurrentSlide((prevSlide) => 
      prevSlide >= totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative overflow-hidden rounded-lg">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${totalSlides * 100}%`
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const slideImages = slides.slice(slideIndex * slidesToShow, (slideIndex + 1) * slidesToShow);
            return (
              <div
                key={slideIndex}
                className="flex-shrink-0 w-full px-2"
              >
                <div className="grid grid-cols-4 gap-4">
                  {slideImages.map((slide, imageIndex) => (
                    <div
                      key={`${slideIndex}-${imageIndex}`}
                      className="relative group"
                    >
                      <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={slide.src}
                          alt={slide.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                          onError={(e) => {
                            console.error('Image failed to load:', slide.src);
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <div className="text-center text-white">
                          <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
                          <button className="bg-pigment-blue text-white px-4 py-2 rounded-md hover:bg-pigment-blue/90 transition-colors">
                            {slide.button}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {showDots && (
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide
                  ? "bg-pigment-blue scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
