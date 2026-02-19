"use client";

import React from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
    const router = useRouter();

    const handlePaymentSuccess = async () => {
        // Clear cart via API
        await fetch('/api/cart', { method: 'DELETE' });
        router.push('/payment/success');
    };

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
            <Header />

            <div className="flex-1 flex items-center justify-center px-6 py-10">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-[400px] w-full text-center">
                    <h1 className="text-[24px] font-bold text-[#132742] mb-2">Payment</h1>
                    <p className="text-[#6b7280] mb-6">Scan the QR code to pay</p>

                    <div className="bg-gray-100 p-4 rounded-xl mb-6 inline-block">
                        {/* Placeholder for QR Code */}
                        <div className="w-[200px] h-[200px] bg-white flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
                            <span className="text-gray-400 font-semibold">QR CODE</span>
                        </div>
                    </div>

                    <p className="text-[#132742] font-medium mb-6">UPI ID: muzigal@bank</p>

                    <button
                        onClick={handlePaymentSuccess}
                        className="w-full bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                        <CheckCircle size={20} /> I have made the payment
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}
