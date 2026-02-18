"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nikshit Reddy",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/images/nikshith-reddy-kompally-8.jpg",
    text: "I highly recommend Muzigal Academy in Kompally for its vibrant learning environment. The academy hosts numerous events t...",
  },
  {
    id: 2,
    name: "Omsa",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/images/omsa-hrbr-9.jpg",
    text: "My experience at Muzigal in HRBR Layout, Bengaluru has been fantastic. The instructors are highly skilled and passionate...",
  },
  {
    id: 3,
    name: "Ananya Maheshwari",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/images/fb-review-3255043117939870-1602567515-10.jpg",
    text: "She is a versatile singer and a great music teacher. She has a great hold on Western, Indian contemporary, semi-classic...",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-[80px] bg-[#FFF5F8] overflow-hidden">
      {/* Background Watermark Pattern Inspired by High Level Design */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-blob-pattern" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-[32px] font-bold text-[#132742] text-center mb-12">
          Students Speaks
        </h2>

        <div className="relative max-w-[1200px] mx-auto">
          {/* Slider Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="flex flex-col items-center text-center transition-all duration-300"
              >
                <div className="relative w-[100px] h-[100px] mb-6">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h5 className="text-[18px] font-semibold text-[#132742] mb-3">
                  {testimonial.name}
                </h5>
                <p className="text-[14px] leading-[1.6] text-[#6b7280] max-w-[280px]">
                  {testimonial.text}
                </p>
                <button className="text-[12px] font-semibold text-[#d63384] mt-2 border-none bg-transparent cursor-pointer hover:underline">
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 text-[#132742] opacity-30 hover:opacity-100 transition-opacity hidden xl:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 text-[#132742] opacity-30 hover:opacity-100 transition-opacity hidden xl:block"
            aria-label="Next testimonial"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>

        {/* Mobile View Indicators (Visible on Small Screens) */}
        <div className="flex justify-center gap-2 mt-8 md:hidden">
          {testimonials.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === currentIndex ? "bg-[#d63384]" : "bg-[#e0e0e0]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;