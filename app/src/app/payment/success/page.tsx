"use client";

import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
            <Header />

            <div className="flex-1 flex items-center justify-center px-6 py-10">
                <div className="bg-white p-10 rounded-2xl shadow-xl max-w-[450px] w-full text-center">
                    <div className="w-20 h-20 bg-[#d1fae5] rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check size={40} className="text-[#10b981]" />
                    </div>
                    <h1 className="text-[28px] font-bold text-[#132742] mb-3">Payment Successful!</h1>
                    <p className="text-[#6b7280] mb-8">
                        Thank you for your purchase. Your order has been placed successfully.
                    </p>

                    <div className="space-y-3">
                        <Link href="https://shop.muzigal.com/" target="_blank">
                            <button className="w-full bg-[#d63384] hover:bg-[#b5296e] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2">
                                Continue Shopping <ArrowRight size={18} />
                            </button>
                        </Link>
                        <Link href="/">
                            <button className="w-full text-[#6b7280] font-semibold py-3 transition-colors hover:text-[#132742]">
                                Back to Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
