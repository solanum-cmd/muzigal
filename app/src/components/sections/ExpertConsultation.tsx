"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

/**
 * ExpertConsultation Component
 *
 * Clones the "Speak to our experts" lead generation section with an 
 * international phone number input field and a "Call Me" button.
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
    <section className="py-[80px] px-6 bg-white w-full flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full text-center">
        {/* Section Heading */}
        <h2 className="text-[32px] font-bold text-black leading-[1.3] mb-8 font-sans">
          New to music learning? Speak to our experts
        </h2>

        {/* Lead Gen Form Container */}
        <div className="flex justify-center w-full">
          <form
            onSubmit={handleCallMe}
            className="flex items-center w-full max-w-[500px] h-[54px] bg-white border border-[#E0E0E0] rounded-[4px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
          >
            {/* Country Selector / Flag Container */}
            <div className="flex items-center px-4 border-r border-[#E0E0E0] h-full cursor-pointer hover:bg-gray-50 transition-colors shrink-0">
              <div className="flex items-center gap-2">
                {/* Provided Indian Flag Asset */}
                <span className="relative w-[20px] h-[14px]">
                  <Image
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7a0a4157-60ba-4281-905f-75b4412e621a-muzigal-com/assets/svgs/in-24.svg"
                    alt="India Flag"
                    fill
                    className="object-contain"
                  />
                </span>
                <ChevronDown className="w-4 h-4 text-[#6b7280]" strokeWidth={2.5} />
              </div>
            </div>

            {/* Input Field */}
            <input
              type="tel"
              placeholder="Enter Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="flex-1 h-full px-4 text-[16px] text-[#132742] placeholder:text-[#6b7280] outline-none border-none font-sans relative z-10 bg-transparent"
              required
            />

            {/* Call Me CTA Button */}
            <button
              type="submit"
              className="h-full px-8 bg-[#d63384] text-white font-semibold text-[16px] transition-opacity hover:opacity-90 active:scale-[0.98] font-sans relative z-10"
            >
              Call Me
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
