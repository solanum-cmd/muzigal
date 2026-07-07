"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function TeacherConversion() {
  const benefits = [
    "Set your own schedule",
    "Teach students globally",
    "Guaranteed payments",
    "Dedicated support team"
  ];

  return (
    <section className="w-full relative overflow-hidden py-24 md:py-32">
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-[#020617]" />
      
      {/* Mesh gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-[#1e293b] to-transparent opacity-50" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#e11d73] rounded-full blur-[120px] opacity-10" />
        <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-[#8b5cf6] rounded-full blur-[100px] opacity-[0.08]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 md:p-14 lg:p-16 relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Content Left */}
            <div className="w-full lg:w-1/2 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="text-[12px] font-semibold text-[#fce7f3] tracking-wider uppercase">
                  For Educators
                </span>
              </div>
              
              <h2 className="text-[32px] md:text-[44px] font-bold text-white leading-[1.1] mb-6 tracking-tight">
                Turn your passion for music into a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f472b6] to-[#e11d73]">
                  thriving career
                </span>
              </h2>
              
              <p className="text-[#94a3b8] text-[16px] md:text-[18px] mb-10 leading-relaxed max-w-[480px]">
                Join our community of over 400+ expert teachers. Manage your classes, 
                reach students globally, and grow your income with zero platform fees.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#e11d73]" />
                    <span className="text-white/80 text-[14px] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="https://muzigal.com/become-a-teacher"
                  target="_blank"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white px-8 py-4 rounded-xl font-bold text-[15px] transition-all duration-300 shadow-[0_0_40px_rgba(225,29,115,0.3)] hover:shadow-[0_0_60px_rgba(225,29,115,0.5)] hover:scale-[1.02] group"
                >
                  Apply as a Teacher
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <span className="text-[#64748b] text-[13px] font-medium hidden sm:block">
                  Only takes 2 minutes
                </span>
              </div>
            </div>

            {/* Image Right */}
            <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px] aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent z-10" />
                
                <Image
                  src="https://muzigal.com/images/become-teacher.png"
                  alt="Become a Muzigal Teacher"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 500px"
                />

                {/* Floating Earnings Card */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-[12px] font-medium uppercase tracking-wider mb-1">Average Monthly Earnings</p>
                      <p className="text-white text-[24px] font-bold">₹45,000<span className="text-white/50 text-[14px] font-medium">/mo</span></p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
                      <span className="text-white text-[20px]">💰</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}