"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

/**
 * FranchiseBanner Component
 * Premium redesign with gradient background, modern slider, and refined CTA.
 */
const FranchiseBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const academyImages = [
    "https://muzigal.com/images/academy1.png",
    "https://muzigal.com/images/academy1.png",
    "https://muzigal.com/images/academy1.png",
    "https://muzigal.com/images/academy1.png",
  ];

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />

      {/* Mesh overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 bottom-0 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -right-20 top-0 w-[400px] h-[400px] rounded-full bg-[#e11d73]/10 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

        {/* Left Content Column */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-[12px] font-semibold text-white/80 tracking-wide">
            🏫 Franchise Opportunity
          </span>

          <h2 className="text-white text-[30px] md:text-[40px] font-bold leading-[1.15] tracking-tight">
            Passionate about{' '}
            <span className="bg-gradient-to-r from-[#f472b6] to-[#e11d73] bg-clip-text text-transparent">
              music education
            </span>
          </h2>
          <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-[400px]">
            Bring Muzigal to your city and transform lives through the power of music
          </p>
          <div className="pt-2">
            <a
              href="https://landing.muzigal.com/mz/franchise"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white font-semibold text-[15px] py-3.5 px-8 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,115,0.3)] hover:shadow-[0_8px_30px_rgba(225,29,115,0.4)] hover:scale-[1.02] active:scale-[0.98] group"
            >
              Apply for Franchise
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center text-[14px]">✓</div>
              <span className="text-white/50 text-[13px]">Low Investment</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center text-[14px]">✓</div>
              <span className="text-white/50 text-[13px]">Full Support</span>
            </div>
          </div>
        </div>

        {/* Right Slider Column */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-[460/320] w-full max-w-[500px] ml-auto">
            {/* Image container */}
            <div className="relative h-full w-full rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10">
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

            {/* Decorative border */}
            <div className="absolute -bottom-3 -left-3 w-full h-full border border-white/10 rounded-3xl -z-0" />

            {/* Progress bar instead of dots */}
            <div className="absolute -bottom-10 left-0 right-0 flex gap-2 z-20 px-4">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className="flex-1 h-1 rounded-full overflow-hidden bg-white/20 transition-all duration-300"
                  aria-label={`Go to slide ${i + 1}`}
                >
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      activeSlide === i
                        ? 'w-full bg-gradient-to-r from-[#e11d73] to-[#f472b6]'
                        : 'w-0 bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseBanner;