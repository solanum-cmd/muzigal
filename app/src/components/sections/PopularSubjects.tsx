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
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-[80px] w-full relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-[-100px] w-1/2 h-full bg-blob-pattern opacity-10 pointer-events-none" />
      
      <div className="container mx-auto max-w-[1200px] px-6">
        <h2 className="text-[32px] font-bold text-black mb-10 text-center">
          Popular Subjects
        </h2>

        <div className="relative group">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full border border-border shadow-sm hover:shadow-md transition-shadow text-navy/40 hover:text-navy hidden md:flex"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-white rounded-full border border-border shadow-sm hover:shadow-md transition-shadow text-navy/40 hover:text-navy hidden md:flex"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* We duplicate the subjects content to allow more scrolling if needed, 
                though usually, it's a fixed grid or carousel */}
            <div className="grid grid-rows-3 grid-flow-col gap-6 w-max">
              {subjects.map((subject) => (
                <a
                  key={subject.id}
                  href={`/learn-music?subjectId=${subject.id}`}
                  className="block group/card"
                >
                  <div className="flex items-center gap-4 bg-white border border-border rounded-lg p-4 w-[280px] h-[92px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-md transition-all duration-300 transform group-hover/card:-translate-y-1">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#f0f2f5] overflow-hidden">
                      <Image
                        src={subject.icon}
                        alt={subject.name}
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[16px] font-semibold text-black ">
                        {subject.name}
                      </span>
                      <span className="text-[14px] text-black ">
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
                <div className="flex items-center gap-4 bg-white border border-border rounded-lg p-4 w-[280px] h-[92px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-md transition-all duration-300 transform group-hover/card:-translate-y-1">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-[#f0f2f5] overflow-hidden">
                    <Image
                      src="https://muzigal.com/images/more-subjects.png"
                      alt="More"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[16px] font-semibold text-navy">
                      & more
                    </span>
                  </div>
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