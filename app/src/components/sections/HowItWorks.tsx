"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: 1,
    title: "Find the best teacher",
    description:
      "Choose from over 400+ online teachers. Use filters to narrow your search and find the perfect fit",
    image: "https://muzigal.com/images/teachers-card-image.png",
    alt: "Teacher Cards",
    icon: "🔍",
    color: "from-[#e11d73] to-[#be185d]",
  },
  {
    id: 2,
    title: "Schedule in seconds",
    description:
      "Take classes anytime. Find the perfect time from your busy schedule.",
    image: "https://muzigal.com/images/scheduler.png",
    alt: "Scheduler Interface",
    icon: "📅",
    color: "from-[#8b5cf6] to-[#7c3aed]",
  },
  {
    id: 3,
    title: "Connect with teacher",
    description:
      "When it's class time, interact with your teacher through our comprehensive video platform. Rewatch your lessons or clear your doubts using our messenger.",
    image: "https://muzigal.com/images/connect-class.png",
    alt: "Connect with Teacher",
    icon: "🎥",
    color: "from-[#10b981] to-[#059669]",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden relative">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-[50%] w-[600px] h-[600px] rounded-full opacity-[0.02] bg-[#e11d73] blur-3xl pointer-events-none -translate-x-1/2" />

      <div className="container mx-auto max-w-[1200px] px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#e11d73] mb-3">
            How It Works
          </span>
          <h2 className="text-[28px] md:text-[36px] font-bold text-[#0f172a] leading-tight mb-3">
            Learn music anytime from anywhere
          </h2>
          <p className="text-[#64748b] text-[15px] max-w-md mx-auto leading-relaxed">
            Three simple steps to start your musical journey
          </p>
        </div>

        {/* Step Timeline */}
        <div className="relative flex justify-center items-center mb-16 max-w-[600px] mx-auto">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-[#e2e8f0] -translate-y-1/2 z-0 rounded-full" />
          {/* Active line progress */}
          <div
            className="absolute top-1/2 left-[12%] h-[2px] bg-gradient-to-r from-[#e11d73] to-[#be185d] -translate-y-1/2 z-[1] rounded-full transition-all duration-500"
            style={{ width: `${(activeStep / (steps.length - 1)) * 76}%` }}
          />

          <div className="relative z-10 flex justify-between w-full">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className="flex flex-col items-center gap-2 group"
              >
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-[20px] transition-all duration-500 border-2",
                    activeStep === index
                      ? `bg-gradient-to-br ${step.color} border-transparent text-white shadow-lg scale-110`
                      : activeStep > index
                      ? "bg-white border-[#e11d73] text-[#e11d73]"
                      : "bg-[#f8fafc] border-[#e2e8f0] text-[#94a3b8] hover:border-[#e11d73]/30"
                  )}
                >
                  {activeStep > index ? '✓' : step.icon}
                </div>
                <span
                  className={cn(
                    "text-[12px] font-semibold transition-colors duration-300 hidden md:block",
                    activeStep === index ? "text-[#0f172a]" : "text-[#94a3b8]"
                  )}
                >
                  Step {step.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Slider Area */}
        <div className="max-w-[800px] mx-auto">
          <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 border border-[#e2e8f0]/60">
            <div className="text-center">
              <h3 className="text-[22px] md:text-[26px] font-bold text-[#0f172a] mb-3 leading-[1.3]">
                {steps[activeStep].title}
              </h3>
              <p className="text-[15px] text-[#64748b] mb-10 max-w-[550px] mx-auto leading-[1.7]">
                {steps[activeStep].description}
              </p>

              <div className="relative mb-8 flex justify-center">
                <div className="relative w-full max-w-[550px] aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-[#e2e8f0]/60">
                  <Image
                    src={steps[activeStep].image}
                    alt={steps[activeStep].alt}
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                    className="bg-white"
                  />
                </div>
              </div>

              <a
                href="https://online.muzigal.com/learn-music"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white font-semibold py-3.5 px-8 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(225,29,115,0.25)] hover:shadow-[0_8px_30px_rgba(225,29,115,0.35)] hover:scale-[1.02] active:scale-[0.98] group"
              >
                Book a Free Trial
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Step Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                activeStep === index ? "bg-gradient-to-r from-[#e11d73] to-[#be185d] w-8" : "bg-[#e2e8f0] w-2 hover:bg-[#cbd5e1]"
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}