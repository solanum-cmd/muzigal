"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trash2, ShieldCheck, ChevronRight, Lock, Plus, Minus, Info } from "lucide-react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

// Mock cart data
const mockCart = [
  {
    id: 1,
    teacherId: 1,
    teacherName: "Sarah Jenkins",
    subject: "Piano",
    price: 1500,
    type: "Trial Class",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200"
  }
];

export default function CartPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState(mockCart);
  
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const taxes = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + taxes;

  const handleRemove = (id: number) => {
    setCartItems(items => items.filter(i => i.id !== id));
  };

  const handleCheckout = () => {
    router.push('/payment');
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-6 max-w-[1200px]">
          
          <div className="mb-8 flex items-center gap-2 text-[14px] font-semibold text-[#64748b]">
            <Link href="/" className="hover:text-[#0f172a] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#0f172a]">Cart</span>
          </div>

          <h1 className="text-[32px] font-bold text-[#0f172a] mb-8">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1">
                <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] overflow-hidden">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-[#f1f5f9] last:border-0 group">
                      {/* Image */}
                      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-[#e2e8f0]">
                        <Image
                          src={item.image}
                          alt={item.teacherName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Details */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <span className="inline-block px-2.5 py-1 bg-[#fce7f3] text-[#e11d73] text-[11px] font-bold uppercase tracking-wider rounded-md mb-2">
                              {item.type}
                            </span>
                            <h3 className="text-[18px] font-bold text-[#0f172a]">{item.teacherName}</h3>
                            <p className="text-[#64748b] text-[14px] mt-1">{item.subject} • 1 Session (60 mins)</p>
                          </div>
                          <button 
                            onClick={() => handleRemove(item.id)}
                            className="p-2 text-[#94a3b8] hover:text-[#ef4444] hover:bg-[#fee2e2] rounded-xl transition-colors"
                            title="Remove item"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-[#f8fafc] rounded-xl p-1 border border-[#e2e8f0]">
                            <button className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f172a] hover:bg-white rounded-lg transition-colors cursor-not-allowed opacity-50"><Minus size={14} /></button>
                            <span className="text-[14px] font-semibold text-[#0f172a] w-4 text-center">1</span>
                            <button className="w-8 h-8 flex items-center justify-center text-[#64748b] hover:text-[#0f172a] hover:bg-white rounded-lg transition-colors cursor-not-allowed opacity-50"><Plus size={14} /></button>
                          </div>
                          <div className="text-[20px] font-bold text-[#0f172a]">
                            ₹{item.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:w-[400px]">
                <div className="bg-white rounded-3xl border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] p-6 sticky top-24">
                  <h2 className="text-[20px] font-bold text-[#0f172a] mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6 text-[15px]">
                    <div className="flex justify-between text-[#64748b]">
                      <span>Subtotal ({cartItems.length} items)</span>
                      <span className="font-semibold text-[#0f172a]">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between text-[#64748b]">
                      <div className="flex items-center gap-1.5">
                        <span>Taxes (GST 18%)</span>
                        <Info size={14} className="text-[#94a3b8]" />
                      </div>
                      <span className="font-semibold text-[#0f172a]">₹{taxes}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-[#e2e8f0] flex justify-between items-end">
                      <div>
                        <span className="block text-[14px] text-[#64748b] font-medium mb-1">Total Amount</span>
                        <span className="text-[24px] font-bold text-[#0f172a]">₹{total}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleCheckout}
                    className="w-full h-14 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white rounded-2xl font-bold text-[16px] flex items-center justify-center gap-2 hover:shadow-[0_8px_25px_rgba(225,29,115,0.25)] transition-all active:scale-[0.98] group"
                  >
                    Proceed to Checkout
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="mt-6 flex flex-col gap-4">
                    <div className="flex items-center justify-center gap-2 text-[#10b981] text-[13px] font-semibold bg-[#10b981]/10 py-2.5 rounded-xl">
                      <ShieldCheck size={18} />
                      100% Secure Payment
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-[#94a3b8] text-[12px]">
                      <Lock size={12} />
                      SSL encrypted connection
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#e2e8f0] p-16 flex flex-col items-center justify-center text-center shadow-sm max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6">
                <Image src="https://muzigal.com/images/cart-empty.svg" width={48} height={48} alt="Empty Cart" className="opacity-50" />
              </div>
              <h3 className="text-[24px] font-bold text-[#0f172a] mb-3">Your cart is empty</h3>
              <p className="text-[#64748b] text-[16px] max-w-[400px] mb-8">
                Looks like you haven&apos;t added any classes to your cart yet. Discover expert teachers and start your musical journey.
              </p>
              <Link 
                href="/learn-music"
                className="bg-[#0f172a] text-white px-8 py-3.5 rounded-xl font-bold text-[15px] hover:bg-[#1e293b] hover:shadow-lg transition-all"
              >
                Find a Teacher
              </Link>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
