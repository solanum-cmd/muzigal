"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rishi",
    role: "Piano Student",
    text: "Muzigal has completely transformed my musical journey. The teachers are incredibly talented and the flexible scheduling makes it so easy to learn at my own pace.",
    avatar: "https://muzigal.com/images/defaultUser.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya",
    role: "Vocal Student",
    text: "I've been learning Hindustani vocals for 6 months now. The platform is seamless, and my teacher's guidance has been exceptional. Highly recommend it!",
    avatar: "https://muzigal.com/images/defaultUser.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Vikram",
    role: "Guitar Student",
    text: "Finding a good guitar teacher was always a struggle until I found Muzigal. The one-on-one sessions are interactive and highly productive.",
    avatar: "https://muzigal.com/images/defaultUser.png",
    rating: 4,
  },
];

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.8 : scrollLeft + clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#f8fafc] py-20 md:py-28 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/60 to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/60 to-transparent pointer-events-none z-10" />
      
      <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.03] bg-[#8b5cf6] blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#e11d73] mb-3">
              Testimonials
            </span>
            <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f172a] leading-tight max-w-[400px]">
              What our students are saying
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 flex items-center justify-center bg-white rounded-full border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all duration-300 text-[#64748b] hover:text-[#e11d73] hover:border-[#fce7f3]"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 flex items-center justify-center bg-white rounded-full border border-[#e2e8f0] shadow-sm hover:shadow-md transition-all duration-300 text-[#64748b] hover:text-[#e11d73] hover:border-[#fce7f3]"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-hide snap-x snap-mandatory"
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="min-w-[320px] md:min-w-[400px] max-w-[420px] bg-white rounded-3xl p-8 border border-[#e2e8f0]/60 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] transition-all duration-300 snap-center group flex flex-col h-full"
            >
              {/* Quote Icon */}
              <div className="text-[40px] text-[#fce7f3] leading-none mb-4 font-serif">
                &ldquo;
              </div>
              
              {/* Text */}
              <p className="text-[#334155] text-[15px] leading-[1.8] flex-grow mb-8 relative z-10">
                {testimonial.text}
              </p>
              
              <div className="flex items-center justify-between mt-auto border-t border-[#f1f5f9] pt-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:border-[#fce7f3] transition-colors">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0f172a] text-[15px]">{testimonial.name}</h4>
                    <span className="text-[12px] text-[#64748b]">{testimonial.role}</span>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex gap-0.5 bg-[#fef3c7] px-2.5 py-1.5 rounded-full">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={10} className="fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}