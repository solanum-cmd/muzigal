"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Subject {
  id: string;
  name: string;
  count: string;
  icon: string;
}

const subjects: Subject[] = [
  {
    id: "34",
    name: "Mandolin",
    count: "1 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/mandolin-2.svg",
  },
  {
    id: "35",
    name: "Clarinet",
    count: "2 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/clarinet-3.svg",
  },
  {
    id: "2",
    name: "Acoustic Guitar",
    count: "135 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/acoustic-guitar-4.svg",
  },
  {
    id: "9",
    name: "Piano",
    count: "130 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/piano-5.svg",
  },
  {
    id: "10",
    name: "Keyboard",
    count: "81 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/keyboard-6.svg",
  },
  {
    id: "12",
    name: "Western Vocal",
    count: "43 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/western-vocal-7.svg",
  },
  {
    id: "7",
    name: "Violin",
    count: "32 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/violin-8.svg",
  },
  {
    id: "37",
    name: "Carnatic Violin",
    count: "2 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/carnatic-violin-9.svg",
  },
  {
    id: "17",
    name: "Drums",
    count: "102 Teachers",
    icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/drums-10.svg",
  },
];

const PopularSubjects: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.6 : scrollLeft + clientWidth * 0.6;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-24 w-full relative overflow-hidden bg-[#f8fafc]">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-[0.04] bg-[#e11d73] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full opacity-[0.04] bg-[#8b5cf6] blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#e11d73] mb-3">
            Explore Instruments
          </span>
          <h2 className="text-[32px] md:text-[38px] font-bold text-[#0f172a] leading-tight">
            Popular Subjects
          </h2>
          <p className="text-[#64748b] text-[16px] mt-3 max-w-md mx-auto leading-relaxed">
            Choose from a wide range of instruments taught by expert teachers
          </p>
        </div>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-3 md:-left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full border border-[#e2e8f0] shadow-md hover:shadow-lg transition-all duration-300 text-[#64748b] hover:text-[#e11d73] hover:border-[#fce7f3] opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronLeft size={20} strokeWidth={2} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-3 md:-right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-white rounded-full border border-[#e2e8f0] shadow-md hover:shadow-lg transition-all duration-300 text-[#64748b] hover:text-[#e11d73] hover:border-[#fce7f3] opacity-0 group-hover:opacity-100 hidden md:flex"
          >
            <ChevronRight size={20} strokeWidth={2} />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          >
            <div className="grid grid-rows-3 grid-flow-col gap-4 w-max">
              {subjects.map((subject, index) => (
                <a
                  key={subject.id}
                  href={`/learn-music?subjectId=${subject.id}`}
                  className="block group/card"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative flex items-center gap-4 bg-white border border-[#e2e8f0] rounded-2xl p-4 w-[280px] h-[92px] transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:shadow-[0_8px_30px_rgba(225,29,115,0.08)] group-hover/card:border-[#fce7f3] overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#fce7f3]/0 to-[#fce7f3]/0 group-hover/card:from-[#fce7f3]/30 group-hover/card:to-transparent transition-all duration-300 rounded-2xl" />

                    <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#f1f5f9] to-[#e2e8f0] group-hover/card:from-[#fce7f3] group-hover/card:to-[#fce7f3]/50 transition-all duration-300 overflow-hidden">
                      <Image
                        src={subject.icon}
                        alt={subject.name}
                        width={36}
                        height={36}
                        className="object-contain relative z-10"
                      />
                    </div>
                    <div className="flex flex-col relative z-10">
                      <span className="text-[15px] font-semibold text-[#0f172a] group-hover/card:text-[#e11d73] transition-colors duration-200">
                        {subject.name}
                      </span>
                      <span className="text-[13px] text-[#64748b]">
                        {subject.count}
                      </span>
                    </div>
                  </div>
                </a>
              ))}

              {/* Special "& more" card */}
              <a
                href="/learn-music"
                className="block group/card"
              >
                <div className="relative flex items-center gap-4 bg-gradient-to-r from-[#fce7f3] to-[#fce7f3]/60 border border-[#fce7f3] rounded-2xl p-4 w-[280px] h-[92px] transition-all duration-300 group-hover/card:-translate-y-1 group-hover/card:shadow-[0_8px_30px_rgba(225,29,115,0.12)] overflow-hidden">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/80">
                    <Image
                      src="https://muzigal.com/images/more-subjects.png"
                      alt="More"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-[#e11d73]">
                      & more
                    </span>
                    <span className="text-[13px] text-[#e11d73]/60">
                      Explore all
                    </span>
                  </div>
                  <ChevronRight size={18} className="ml-auto text-[#e11d73] group-hover/card:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularSubjects;