"use client";

import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";

interface FranchiseEnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function FranchiseEnquiryModal({ isOpen, onClose }: FranchiseEnquiryModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    type: "franchise",
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to submit enquiry");
            }

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({ name: "", phone: "", email: "", message: "" });
            }, 2000);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-6">
                    <h2 className="text-[20px] font-bold text-[#132742] mb-1">Apply for Franchise</h2>
                    <p className="text-[13px] text-[#6b7280] mb-6">Join the Muzigal network</p>

                    {success ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-3xl">
                                ✓
                            </div>
                            <h3 className="text-xl font-bold text-[#132742] mb-2">Thank You!</h3>
                            <p className="text-gray-600">Your application has been received. Our team will contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[13px] font-semibold text-[#132742] mb-1.5">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#132742] mb-1.5">Phone Number</label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#132742] mb-1.5">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#132742] mb-1.5">Message (Optional)</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={3}
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                    placeholder="Tell us about your interest..."
                                />
                            </div>

                            {error && <p className="text-red-500 text-[13px] text-center">{error}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-[#d63384] hover:bg-[#b5296e] text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                {loading && <Loader2 size={16} className="animate-spin" />}
                                Submit Application
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
