"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

/**
 * Hero Section Component
 * Premium redesign with animated gradient background, floating elements,
 * text reveal animation, and glowing CTA.
 */

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden text-white min-h-[560px] md:min-h-[620px] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-bg-animated" />

      {/* Decorative mesh elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large glow orb - top right */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, rgba(225, 29, 115, 0.4) 0%, transparent 70%)',
          }}
        />
        {/* Small glow orb - bottom left */}
        <div
          className="absolute -bottom-[10%] -left-[5%] w-[400px] h-[400px] rounded-full opacity-15"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
          }}
        />
        {/* Floating music note decorations */}
        <div className="absolute top-[15%] right-[15%] text-white/5 text-[120px] animate-float select-none">♪</div>
        <div className="absolute bottom-[20%] left-[8%] text-white/5 text-[80px] animate-float select-none" style={{ animationDelay: '1s' }}>♫</div>
        <div className="absolute top-[40%] right-[5%] text-white/5 text-[60px] animate-float select-none" style={{ animationDelay: '2s' }}>♬</div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1240px] py-16 md:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Column: Content */}
          <div className={`w-full lg:w-1/2 flex flex-col items-start space-y-8 ${mounted ? 'animate-slide-in-left' : 'opacity-0'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
              <span className="text-[12px] font-semibold text-white/80 tracking-wide">500+ Students Learning This Week</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold leading-[1.1] tracking-tight max-w-[520px]">
              Start learning from the{' '}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#f472b6] to-[#e11d73] bg-clip-text text-transparent">best music</span>
              </span>
              {' '}teachers.
            </h1>

            <p className="text-white/60 text-[16px] md:text-[18px] leading-relaxed max-w-[440px]">
              Discover expert music instructors, flexible scheduling, and personalized lessons from anywhere in the world.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/find-an-academy"
                className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white px-8 py-4 rounded-xl font-semibold text-[15px] transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,115,0.3)] hover:shadow-[0_8px_30px_rgba(225,29,115,0.4)] hover:scale-[1.03] active:scale-[0.98]"
              >
                Find An Academy
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/learn-music"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-[15px] text-white/90 border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
              >
                Browse Teachers
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#e11d73] to-[#8b5cf6] border-2 border-[#0f172a] flex items-center justify-center text-[10px] font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-[13px] text-white/50">
                <span className="text-white/80 font-semibold">10,000+</span> students enrolled
              </div>
            </div>
          </div>

          {/* Right Column: Image Collage */}
          <div className={`w-full lg:w-1/2 flex justify-center lg:justify-end ${mounted ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative w-full max-w-[480px]">
              {/* Glow behind image */}
              <div className="absolute inset-0 -m-8 rounded-3xl bg-gradient-to-br from-[#e11d73]/20 to-[#8b5cf6]/20 blur-3xl" />

              {/* Main Image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="https://muzigal.com/images/banner-frame.png"
                  alt="Student and Teachers Learning Music"
                  width={432}
                  height={417}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Floating stat card - top right */}
              <div className="absolute -top-4 -right-4 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-xl animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#10b981]/20 flex items-center justify-center">
                    <span className="text-[14px]">🎵</span>
                  </div>
                  <div>
                    <p className="text-white/90 text-[12px] font-bold">400+ Teachers</p>
                    <p className="text-white/50 text-[10px]">Verified & Expert</p>
                  </div>
                </div>
              </div>

              {/* Floating stat card - bottom left */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-xl animate-float" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                    <span className="text-[14px]">⭐</span>
                  </div>
                  <div>
                    <p className="text-white/90 text-[12px] font-bold">4.8 Rating</p>
                    <p className="text-white/50 text-[10px]">Trusted Platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] bg-gradient-to-t from-[#f8fafc] to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;