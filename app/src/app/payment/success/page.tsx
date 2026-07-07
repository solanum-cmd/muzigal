"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Calendar, Video, ArrowRight, Download } from "lucide-react";

export default function PaymentSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Confetti effect could go here if we added a confetti library
    // For now, we'll just show the success page
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center font-sans p-6 relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
        
        {/* Animated Orbs */}
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#e11d73] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" />
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#10b981] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 w-full max-w-[600px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden">
        
        {/* Success Header */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 flex flex-col items-center text-center relative overflow-hidden">
          {/* Confetti/Rays Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_30deg,white_30deg_60deg)] animate-spin-slow" />
          </div>

          <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)] animate-scale-in">
            <Check size={48} className="text-white" strokeWidth={3} />
          </div>
          
          <h1 className="relative z-10 text-[32px] font-bold text-white mb-2">Payment Successful!</h1>
          <p className="relative z-10 text-[#94a3b8] text-[16px] max-w-[300px]">
            Your booking is confirmed. We&apos;ve sent the details to your registered email.
          </p>
        </div>

        {/* Details & Next Steps */}
        <div className="p-8 md:p-10">
          
          <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-2xl p-6 mb-8">
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-[#e2e8f0]">
              <div>
                <p className="text-[13px] text-[#64748b] font-medium uppercase tracking-wider mb-1">Order ID</p>
                <p className="text-[15px] font-bold text-[#0f172a]">#MZ-948271</p>
              </div>
              <button className="text-[#e11d73] hover:text-[#be185d] transition-colors" title="Download Receipt">
                <Download size={20} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-[#64748b] text-[14px]">Amount Paid</span>
                <span className="font-bold text-[#0f172a] text-[14px]">₹1,770</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748b] text-[14px]">Payment Method</span>
                <span className="font-semibold text-[#0f172a] text-[14px]">Credit Card ending in 4242</span>
              </div>
            </div>
          </div>

          <h3 className="text-[18px] font-bold text-[#0f172a] mb-4">What happens next?</h3>
          
          <div className="space-y-6 mb-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#fce7f3] text-[#e11d73] flex items-center justify-center shrink-0">
                <Calendar size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-[15px]">Schedule your class</h4>
                <p className="text-[#64748b] text-[14px] mt-1 leading-relaxed">
                  Go to your dashboard to select a suitable time slot with your teacher.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#e0e7ff] text-[#6366f1] flex items-center justify-center shrink-0">
                <Video size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0f172a] text-[15px]">Join the session</h4>
                <p className="text-[#64748b] text-[14px] mt-1 leading-relaxed">
                  The meeting link will be available in your dashboard 15 minutes before class.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-[#f1f5f9]">
            <Link 
              href="/"
              className="flex-1 h-[48px] bg-[#f8fafc] text-[#0f172a] rounded-xl font-bold text-[14px] flex items-center justify-center hover:bg-[#f1f5f9] transition-colors border border-[#e2e8f0]"
            >
              Back to Home
            </Link>
            <Link 
              href="#"
              className="flex-1 h-[48px] bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(225,29,115,0.25)] transition-all active:scale-[0.98] group"
            >
              Go to Dashboard
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
