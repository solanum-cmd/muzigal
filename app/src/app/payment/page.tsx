"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, Wallet, Building2, Check, Lock, ShieldCheck, ArrowLeft, Loader2, Info } from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// Simplified Mock Cart for Payment display
const mockCart = [
  { id: 1, name: "Piano Trial Class with Sarah Jenkins", price: 1500 }
];

export default function PaymentPage() {
  const router = useRouter();
  const [method, setMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const subtotal = mockCart.reduce((acc, item) => acc + item.price, 0);
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + taxes;

  const handlePayment = async () => {
    setIsProcessing(true);
    toast.info("Processing payment securely...", { duration: 2000 });
    
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setIsProcessing(false);
    toast.success("Payment successful!");
    router.push("/payment/success");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 py-10">
        <div className="container mx-auto px-6 max-w-[1000px]">
          
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#64748b] hover:text-[#0f172a] transition-colors mb-6 font-semibold text-[14px]"
          >
            <ArrowLeft size={16} />
            Back to Cart
          </button>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Payment Methods */}
            <div className="flex-1">
              <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] p-6 md:p-8">
                <h2 className="text-[24px] font-bold text-[#0f172a] mb-2">Payment Details</h2>
                <p className="text-[#64748b] text-[14px] mb-8">Complete your purchase securely.</p>
                
                <div className="space-y-4 mb-8">
                  {/* Card Method */}
                  <label className={`block relative border rounded-2xl p-4 cursor-pointer transition-all duration-200 ${method === 'card' ? 'border-[#e11d73] bg-[#fce7f3]/30 shadow-sm' : 'border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-[#f8fafc]'}`}>
                    <input type="radio" name="payment_method" value="card" checked={method === 'card'} onChange={() => setMethod('card')} className="sr-only" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method === 'card' ? 'bg-[#e11d73] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                          <CreditCard size={20} />
                        </div>
                        <div>
                          <h4 className={`font-bold text-[15px] ${method === 'card' ? 'text-[#e11d73]' : 'text-[#0f172a]'}`}>Credit / Debit Card</h4>
                          <p className="text-[13px] text-[#64748b]">Visa, Mastercard, RuPay</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'card' ? 'border-[#e11d73] bg-[#e11d73]' : 'border-[#cbd5e1]'}`}>
                        {method === 'card' && <Check size={14} className="text-white" />}
                      </div>
                    </div>
                    
                    {method === 'card' && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wider">Card Number</label>
                          <div className="relative">
                            <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-[48px] px-4 pl-11 rounded-xl border border-[#e2e8f0] bg-white text-[14px] focus:border-[#e11d73] focus:ring-2 focus:ring-[#e11d73]/10 outline-none transition-all font-mono" />
                            <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wider">Expiry Date</label>
                            <input type="text" placeholder="MM/YY" className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-white text-[14px] focus:border-[#e11d73] focus:ring-2 focus:ring-[#e11d73]/10 outline-none transition-all font-mono" />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wider">CVV</label>
                            <div className="relative">
                              <input type="password" placeholder="•••" maxLength={3} className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-white text-[14px] focus:border-[#e11d73] focus:ring-2 focus:ring-[#e11d73]/10 outline-none transition-all font-mono" />
                              <Info size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
                            </div>
                          </div>
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wider">Name on Card</label>
                          <input type="text" placeholder="John Doe" className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-white text-[14px] focus:border-[#e11d73] focus:ring-2 focus:ring-[#e11d73]/10 outline-none transition-all" />
                        </div>
                      </div>
                    )}
                  </label>

                  {/* UPI Method */}
                  <label className={`block relative border rounded-2xl p-4 cursor-pointer transition-all duration-200 ${method === 'upi' ? 'border-[#e11d73] bg-[#fce7f3]/30 shadow-sm' : 'border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-[#f8fafc]'}`}>
                    <input type="radio" name="payment_method" value="upi" checked={method === 'upi'} onChange={() => setMethod('upi')} className="sr-only" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method === 'upi' ? 'bg-[#e11d73] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                          <Wallet size={20} />
                        </div>
                        <div>
                          <h4 className={`font-bold text-[15px] ${method === 'upi' ? 'text-[#e11d73]' : 'text-[#0f172a]'}`}>UPI</h4>
                          <p className="text-[13px] text-[#64748b]">GPay, PhonePe, Paytm</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'upi' ? 'border-[#e11d73] bg-[#e11d73]' : 'border-[#cbd5e1]'}`}>
                        {method === 'upi' && <Check size={14} className="text-white" />}
                      </div>
                    </div>
                    {method === 'upi' && (
                      <div className="mt-6 animate-fade-in">
                        <div className="space-y-1.5">
                          <label className="text-[12px] font-semibold text-[#0f172a] uppercase tracking-wider">UPI ID</label>
                          <input type="text" placeholder="username@upi" className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-white text-[14px] focus:border-[#e11d73] focus:ring-2 focus:ring-[#e11d73]/10 outline-none transition-all" />
                        </div>
                        <p className="text-[12px] text-[#64748b] mt-3">A payment request will be sent to this UPI ID.</p>
                      </div>
                    )}
                  </label>

                  {/* Net Banking Method */}
                  <label className={`block relative border rounded-2xl p-4 cursor-pointer transition-all duration-200 ${method === 'netbanking' ? 'border-[#e11d73] bg-[#fce7f3]/30 shadow-sm' : 'border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-[#f8fafc]'}`}>
                    <input type="radio" name="payment_method" value="netbanking" checked={method === 'netbanking'} onChange={() => setMethod('netbanking')} className="sr-only" />
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${method === 'netbanking' ? 'bg-[#e11d73] text-white' : 'bg-[#f1f5f9] text-[#64748b]'}`}>
                          <Building2 size={20} />
                        </div>
                        <div>
                          <h4 className={`font-bold text-[15px] ${method === 'netbanking' ? 'text-[#e11d73]' : 'text-[#0f172a]'}`}>Net Banking</h4>
                          <p className="text-[13px] text-[#64748b]">All major Indian banks</p>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${method === 'netbanking' ? 'border-[#e11d73] bg-[#e11d73]' : 'border-[#cbd5e1]'}`}>
                        {method === 'netbanking' && <Check size={14} className="text-white" />}
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary & Pay */}
            <div className="lg:w-[380px]">
              <div className="bg-[#0f172a] rounded-3xl p-6 text-white relative overflow-hidden shadow-xl sticky top-24">
                {/* Decorative Gradients */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#e11d73] rounded-full blur-[80px] opacity-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#8b5cf6] rounded-full blur-[80px] opacity-20 pointer-events-none" />
                
                <h3 className="text-[20px] font-bold mb-6 relative z-10">Summary</h3>
                
                <div className="space-y-4 mb-6 text-[14px] relative z-10">
                  {mockCart.map(item => (
                    <div key={item.id} className="flex justify-between items-start gap-4">
                      <span className="text-[#94a3b8] leading-relaxed line-clamp-2">{item.name}</span>
                      <span className="font-semibold whitespace-nowrap">₹{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 py-4 border-y border-white/10 mb-6 text-[14px] relative z-10">
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Subtotal</span>
                    <span className="text-white">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#94a3b8]">
                    <span>Taxes (18%)</span>
                    <span className="text-white">₹{taxes}</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mb-8 relative z-10">
                  <span className="text-[15px] font-medium text-[#94a3b8]">Total Amount</span>
                  <span className="text-[28px] font-bold text-white leading-none">₹{total}</span>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full h-14 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2 hover:shadow-[0_8px_25px_rgba(225,29,115,0.3)] transition-all active:scale-[0.98] disabled:opacity-80 disabled:pointer-events-none relative z-10 group"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Lock size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                      Pay ₹{total}
                    </>
                  )}
                </button>

                <div className="mt-6 flex items-center justify-center gap-2 text-[#94a3b8] text-[12px] relative z-10">
                  <ShieldCheck size={16} className="text-[#10b981]" />
                  <span>Payments are secure and encrypted.</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
