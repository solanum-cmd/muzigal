"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";

/**
 * ExpertConsultation Component
 * Premium redesign with glassmorphic form, gradient accents.
 */
export default function ExpertConsultation() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCallMe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Calling number:", phoneNumber);
    alert(`Thank you! We will call ${phoneNumber} shortly.`);
    setPhoneNumber("");
  };

  return (
    <section className="py-20 md:py-24 px-6 bg-white w-full relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.03] bg-[#e11d73] blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] w-full mx-auto text-center">
        {/* Section Header */}
        <span className="inline-block text-[12px] font-bold uppercase tracking-[0.12em] text-[#e11d73] mb-3">
          Expert Guidance
        </span>
        <h2 className="text-[28px] md:text-[34px] font-bold text-[#0f172a] leading-tight mb-3">
          New to music learning? Speak to our experts
        </h2>
        <p className="text-[#64748b] text-[15px] max-w-md mx-auto mb-10 leading-relaxed">
          Get personalized guidance from our music education consultants
        </p>

        {/* Lead Gen Form Container */}
        <div className="flex justify-center w-full">
          <form
            onSubmit={handleCallMe}
            className="flex items-center w-full max-w-[520px] h-[56px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(15,23,42,0.08)] border border-[#e2e8f0] transition-all duration-300 focus-within:shadow-[0_8px_30px_rgba(225,29,115,0.1)] focus-within:border-[#fce7f3]"
          >
            {/* Country Selector */}
            <div className="flex items-center px-4 border-r border-[#e2e8f0] h-full cursor-pointer hover:bg-[#f8fafc] transition-colors shrink-0">
              <div className="flex items-center gap-2">
                <span className="relative w-[20px] h-[14px]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/in-24.svg"
                    alt="India Flag"
                    fill
                    className="object-contain"
                  />
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Input */}
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 h-full px-4 text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none border-none bg-transparent"
              required
            />

            {/* CTA Button */}
            <button
              type="submit"
              className="h-full px-6 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white font-semibold text-[14px] transition-all duration-300 hover:opacity-90 active:scale-[0.98] flex items-center gap-2 shrink-0"
            >
              <Phone size={15} />
              Call Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
