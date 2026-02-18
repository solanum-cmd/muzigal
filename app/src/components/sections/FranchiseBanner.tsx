"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * FranchiseBanner Component
 * 
 * A pixel-perfect clone of the dark blue franchise section.
 * Features:
 * - Navy Blue background (#132742)
 * - Custom slider for academy images
 * - "Apply for Franchise" CTA button (Raspberry Pink #D63384)
 * - Responsive layout matching the design system
 */
const FranchiseBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  // Auto-slide functionality (optional but standard for these components)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const academyImages = [
    "https://muzigal.com/images/academy1.png",
    "https://muzigal.com/images/academy1.png", // Fallback if other images aren't in assets
    "https://muzigal.com/images/academy1.png",
    "https://muzigal.com/images/academy1.png",
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#132742] py-20 md:py-24">
      {/* Background patterns could be added here if needed to match the 'blob' aesthetic */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {/* Abstract background curve/blob as seen in screenshots */}
        <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl lg:block hidden"></div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        
        {/* Left Content Column */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[1.2] font-display">
            Passionate about music education
          </h2>
          <p className="text-white/80 text-xl font-normal leading-relaxed">
            Bring Muzigal to your city
          </p>
          <div className="pt-4">
            <a 
              href="https://landing.muzigal.com/mz/franchise" 
              className="inline-block bg-[#D63384] hover:bg-[#c22d76] text-white font-semibold text-base py-3.5 px-8 rounded transition-colors duration-300 ga_webFranchiseApply"
            >
              Apply for Franchise
            </a>
          </div>
        </div>

        {/* Right Slider Column */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[460/320] w-full max-w-[500px] ml-auto">
            {/* Image Frame/Container with Rounded Corners matching screenshot */}
            <div className="relative h-full w-full rounded-[40px] overflow-hidden shadow-2xl z-10">
              <div 
                className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {academyImages.map((src, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <Image
                      src={src}
                      alt="Muzigal Academy"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 500px"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative element behind the image - matching the 'steps' or 'blob' visual style */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-white/10 rounded-[40px] -z-0"></div>

            {/* Slider Dots */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === i ? 'bg-[#D63384] w-6' : 'bg-white/30'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseBanner;