"use client";

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

/**
 * Certifications Section
 * Clones the alternating layout section showcasing global certifications and learning goals.
 * Features overlapping image compositions, bold headings, and text links.
 * 
 * Theme: light
 * Primary Navy: #132742
 * Accent Pink: #D63384
 */

const Certifications = () => {
  return (
    <section className="py-[80px] bg-white overflow-hidden">
      <div className="container max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col gap-[100px]">
          
          {/* First Row: Global Certification Courses */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Image Composition - Left */}
            <div className="relative flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative max-w-[450px] w-full aspect-[4/3] flex items-center justify-center">
                {/* Visual elements based on screenshots show overlapping images */}
                <div className="relative z-10 w-full h-full transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://muzigal.com/images/certificates.png"
                    alt="Certifications"
                    width={500}
                    height={400}
                    className="object-contain w-full h-full drop-shadow-xl"
                    priority
                  />
                </div>
                {/* Decorative blob background pattern mentioned in design system */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blob-pattern opacity-40 -z-10 pointer-events-none"></div>
              </div>
            </div>

            {/* Content - Right */}
            <div className="flex-1 max-w-[500px]">
              <h2 className="text-[32px] font-bold leading-[1.3] text-[#132742] mb-6">
                Prepare confidently for global certification courses
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#132742] mb-8">
                We prepare you for various certification courses like{' '}
                <a href="/learn-music?certificates[]=1" className="text-[#D63384] hover:underline font-medium">Trinity</a>,{' '}
                <a href="/learn-music?certificates[]=3" className="text-[#D63384] hover:underline font-medium">ABRSM</a> and{' '}
                <a href="/learn-music?certificates[]=2" className="text-[#D63384] hover:underline font-medium">Rockschool</a>
              </p>
              <a 
                href="https://muzigal.com/find-an-academy" 
                className="inline-flex items-center gap-2 text-[#D63384] font-semibold text-[16px] hover:translate-x-1 transition-transform"
              >
                Find an Academy
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Second Row: Learning Goals (Alternated) */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-20">
            {/* Image Composition - Right */}
            <div className="relative flex-1 w-full flex justify-center lg:justify-end">
              <div className="relative max-w-[450px] w-full aspect-[4/3] flex items-center justify-center">
                <div className="relative z-10 w-full h-full transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="https://muzigal.com/images/learningGoals.png"
                    alt="Learning Goals"
                    width={500}
                    height={400}
                    className="object-contain w-full h-full drop-shadow-xl"
                  />
                </div>
                {/* Decorative background shadow/circle element as seen in screenshots */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#fcf1f6] rounded-full filter blur-3xl opacity-50 -z-10"></div>
              </div>
            </div>

            {/* Content - Left */}
            <div className="flex-1 max-w-[550px]">
              <h2 className="text-[32px] font-bold leading-[1.3] text-[#132742] mb-6">
                Whatever are your learning goals, we have a teacher just for you
              </h2>
              <p className="text-[16px] leading-[1.7] text-[#132742] mb-8">
                We help you with various learning goals like{' '}
                <a href="/learn-music?learningGoals[]=1" className="text-[#D63384] hover:underline font-medium">Preparing for an Event</a>,{' '}
                <a href="/learn-music?learningGoals[]=1" className="text-[#D63384] hover:underline font-medium">Learning Popular Songs</a>,{' '}
                <a href="/learn-music?learningGoals[]=2" className="text-[#D63384] hover:underline font-medium">Music Theory</a> and{' '}
                <a href="/learn-music?learningGoals[]=2" className="text-[#D63384] hover:underline font-medium">Improve your Technique</a>
              </p>
              <a 
                href="https://muzigal.com/find-an-academy" 
                className="inline-flex items-center gap-2 text-[#D63384] font-semibold text-[16px] hover:translate-x-1 transition-transform"
              >
                Find an Academy
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Certifications;