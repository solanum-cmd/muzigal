"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import TeacherJoinModal from '../ui/TeacherJoinModal';

/**
 * TeacherConversion Section
 * 
 * This component clones the dark purple section at the bottom of the page
 * featuring the "Teach music, empower students worldwide" headline, 
 * circular teacher action photos, and the "Join Muzigal Family" CTA button.
 */
export default function TeacherConversion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const assets = [
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/images/fb-review-2902516480006762-1630651737-12.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/images/fb-review-4420449024713333-1630905670-13.jpg",
    "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/images/fb-review-1216941278775428-1631788903-14.jpg"
  ];

  return (
    <section className="relative w-full bg-[#1a0b2e] py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Main Heading Text */}
        <div className="text-center mb-10">
          <h2 className="text-white text-[32px] md:text-[40px] font-bold leading-[1.2] mb-4">
            Teach music, empower students worldwide
          </h2>
          <p className="text-white/80 text-[18px] font-medium">
            Join Muzigal to shape the future of music education
          </p>
        </div>

        {/* Circular Action Photos */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-12">
          {/* Circular Image Container 1 */}
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-[#301a4e] shadow-xl">
            <Image
              src={assets[0]}
              alt="Music Teacher Session 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 180px, 220px"
            />
          </div>

          {/* Center Image - Slightly different shape or focus */}
          <div className="relative w-[220px] h-[220px] md:w-[260px] md:h-[180px] rounded-[40px] overflow-hidden border-4 border-[#301a4e] shadow-xl">
            <Image
              src={assets[1]}
              alt="Music Teacher Session 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 220px, 260px"
            />
          </div>

          {/* Circular Image Container 3 */}
          <div className="relative w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-4 border-[#301a4e] shadow-xl">
            <Image
              src={assets[2]}
              alt="Music Teacher Session 3"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 180px, 220px"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block bg-[#d63384] text-white font-semibold text-[16px] py-[14px] px-[36px] rounded-[4px] hover:opacity-90 transition-opacity duration-300 ga-teacher-cta"
          >
            Join Muzigal Family
          </button>
        </div>
      </div>

      {/* Background Decorative Elements - Subtle Blob/Circle Pattern */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#301a4e] rounded-full opacity-20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-150px] right-[-50px] w-[400px] h-[400px] bg-[#d63384] rounded-full opacity-10 blur-3xl pointer-events-none"></div>

      <TeacherJoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}