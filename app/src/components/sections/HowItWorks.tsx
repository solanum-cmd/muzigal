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
  },
  {
    id: 2,
    title: "Schedule in seconds",
    description:
      "Take classes anytime. Find the perfect time from your busy schedule.",
    image: "https://muzigal.com/images/scheduler.png",
    alt: "Scheduler Interface",
  },
  {
    id: 3,
    title: "Connect with teacher",
    description:
      "When it’s class time, interact with your teacher through our comprehensive video platform. Rewatch your lessons or clear your doubts using our messenger.",
    image: "https://muzigal.com/images/connect-class.png",
    alt: "Connect with Teacher",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-[80px] overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <h2 className="text-[32px] font-bold text-black text-center mb-10 leading-[1.3]">
          Learn music anytime from anywhere
        </h2>

        {/* Progress Navigation */}
        <div className="relative flex justify-center items-center mb-16 max-w-[600px] mx-auto">
          {/* Connecting Line Background */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#e0e0e0] -translate-y-1/2 z-0" />
          
          <div className="relative z-10 flex justify-between w-full">
            {steps.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={cn(
                  "w-12 h-12 rounded-full border flex items-center justify-center text-lg font-medium transition-all duration-300",
                  activeStep === index
                    ? "bg-white border-navy text-navy shadow-md scale-110"
                    : "bg-[#f0f2f5] border-[#e0e0e0] text-[#6b7280] hover:border-navy hover:text-navy"
                )}
              >
                {step.id}
              </button>
            ))}
          </div>
        </div>

        {/* Content Slider Area */}
        <div className="max-w-[800px] mx-auto text-center">
          <div className="min-h-[500px] transition-opacity duration-300 ease-in-out">
            <h3 className="text-[24px] font-semibold text-black mb-4 leading-[1.4]">
              {steps[activeStep].title}
            </h3>
            <p className="text-[16px] text-[#132742] mb-10 max-w-[600px] mx-auto leading-[1.6]">
              {steps[activeStep].description}
            </p>

            <div className="relative mb-12 flex justify-center">
              <div className="relative w-full max-w-[600px] aspect-[16/10] animate-in fade-in zoom-in duration-500">
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].alt}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </div>

            <div className="flex justify-center">
              <a 
                href="https://online.muzigal.com/learn-music" 
                className="inline-block bg-raspberry hover:opacity-90 text-white font-semibold py-3 px-8 rounded-[4px] decoration-0 transition-all"
              >
                Book a Free Trial
              </a>
            </div>
          </div>
        </div>

        {/* Dots Pagination (Mirroring original slick-dots style) */}
        <div className="flex justify-center gap-2 mt-8">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                activeStep === index ? "bg-raspberry w-6" : "bg-[#e0e0e0]"
              )}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </section>
  );
}