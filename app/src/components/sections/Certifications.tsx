"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * Certifications Section
 * Premium redesign with scroll reveal effects, gradient accents,
 * and refined image compositions.
 */

const Certifications = () => {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden relative">
      {/* Subtle background decorations */}
      <div className="absolute top-[10%] right-0 w-[400px] h-[400px] rounded-full opacity-[0.03] bg-[#e11d73] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-0 w-[300px] h-[300px] rounded-full opacity-[0.03] bg-[#8b5cf6] blur-3xl pointer-events-none" />

      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-24 md:gap-32">

          {/* First Row: Global Certification Courses */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Image Composition - Left */}
            <div className="relative flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative max-w-[450px] w-full aspect-[4/3] flex items-center justify-center group">
                {/* Gradient accent border */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#e11d73]/10 to-[#8b5cf6]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="https://muzigal.com/images/certificates.png"
                    alt="Certifications"
                    width={500}
                    height={400}
                    className="object-contain w-full h-full drop-shadow-xl"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 z-20 bg-white rounded-2xl shadow-lg border border-[#e2e8f0] p-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f59e0b] to-[#d97706] flex items-center justify-center">
                    <span className="text-white text-[14px]">🏆</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0f172a]">Globally Recognized</p>
                    <p className="text-[10px] text-[#64748b]">Trinity, ABRSM & more</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="flex-1 max-w-[500px]">
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#e11d73] mb-4">
                Certifications
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.2] text-[#0f172a] mb-5">
                Prepare confidently for global certification courses
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#64748b] mb-8">
                We prepare you for various certification courses like{' '}
                <a href="/learn-music?certificates[]=1" className="text-[#e11d73] hover:underline font-semibold transition-colors">Trinity</a>,{' '}
                <a href="/learn-music?certificates[]=3" className="text-[#e11d73] hover:underline font-semibold transition-colors">ABRSM</a> and{' '}
                <a href="/learn-music?certificates[]=2" className="text-[#e11d73] hover:underline font-semibold transition-colors">Rockschool</a>
              </p>
              <Link
                href="/find-an-academy"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white font-semibold text-[14px] px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-[0_4px_20px_rgba(225,29,115,0.3)] hover:scale-[1.02] group"
              >
                Find an Academy
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Second Row: Learning Goals (Alternated) */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
            {/* Image Composition - Right */}
            <div className="relative flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative max-w-[450px] w-full aspect-[4/3] flex items-center justify-center group">
                {/* Gradient accent border */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#8b5cf6]/10 to-[#e11d73]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src="https://muzigal.com/images/learningGoals.png"
                    alt="Learning Goals"
                    width={500}
                    height={400}
                    className="object-contain w-full h-full drop-shadow-xl"
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -left-4 z-20 bg-white rounded-2xl shadow-lg border border-[#e2e8f0] p-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
                    <span className="text-white text-[14px]">🎯</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#0f172a]">Personalized Goals</p>
                    <p className="text-[10px] text-[#64748b]">Tailored just for you</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Left */}
            <div className="flex-1 max-w-[550px]">
              <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#8b5cf6] mb-4">
                Learning Goals
              </span>
              <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.2] text-[#0f172a] mb-5">
                Whatever are your learning goals, we have a teacher just for you
              </h2>
              <p className="text-[15px] leading-[1.8] text-[#64748b] mb-8">
                We help you with various learning goals like{' '}
                <a href="/learn-music?learningGoals[]=1" className="text-[#e11d73] hover:underline font-semibold transition-colors">Preparing for an Event</a>,{' '}
                <a href="/learn-music?learningGoals[]=1" className="text-[#e11d73] hover:underline font-semibold transition-colors">Learning Popular Songs</a>,{' '}
                <a href="/learn-music?learningGoals[]=2" className="text-[#e11d73] hover:underline font-semibold transition-colors">Music Theory</a> and{' '}
                <a href="/learn-music?learningGoals[]=2" className="text-[#e11d73] hover:underline font-semibold transition-colors">Improve your Technique</a>
              </p>
              <Link
                href="/find-an-academy"
                className="inline-flex items-center gap-2 text-[#e11d73] font-semibold text-[15px] hover:gap-3 transition-all duration-300 group"
              >
                Find an Academy
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;