"use client";

import React, { useState } from "react";
import { X, Loader2 } from "lucide-react";

interface TeacherJoinModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const instruments = [
    "Guitar", "Piano", "Keyboard", "Drums", "Violin", "Flute", "Vocals", "Tabla"
];

const experienceLevels = [
    "0-2 Years", "2-5 Years", "5-10 Years", "10+ Years"
];

export default function TeacherJoinModal({ isOpen, onClose }: TeacherJoinModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        instrument: "",
        experience: "",
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
                    type: "teacher_join",
                    message: `Instrument: ${formData.instrument}, Experience: ${formData.experience}. ${formData.message}`
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Failed to submit application");
            }

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({ name: "", phone: "", email: "", instrument: "", experience: "", message: "" });
            }, 3000);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-xl w-full max-w-md overflow-hidden relative animate-in fade-in zoom-in duration-200 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <X size={20} />
                </button>

                <div className="p-6">
                    <h2 className="text-[22px] font-bold text-[#132742] mb-1">Join Muzigal Family</h2>
                    <p className="text-[13px] text-[#6b7280] mb-6">Teach music and empower students worldwide</p>

                    {success ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600 text-3xl">
                                ✓
                            </div>
                            <h3 className="text-xl font-bold text-[#132742] mb-2">Application Sent!</h3>
                            <p className="text-gray-600">Our team will review your profile and contact you shortly.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-[13px] font-semibold text-[#132742] mb-1">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#132742] mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                        placeholder="Mobile number"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#132742] mb-1">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                        placeholder="Email address"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#132742] mb-1">Instrument</label>
                                    <select
                                        required
                                        value={formData.instrument}
                                        onChange={(e) => setFormData({ ...formData, instrument: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384] bg-white"
                                    >
                                        <option value="">Select</option>
                                        {instruments.map(i => <option key={i} value={i}>{i}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-[13px] font-semibold text-[#132742] mb-1">Experience</label>
                                    <select
                                        required
                                        value={formData.experience}
                                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                        className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384] bg-white"
                                    >
                                        <option value="">Select</option>
                                        {experienceLevels.map(e => <option key={e} value={e}>{e}</option>)}
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#132742] mb-1">Message (Optional)</label>
                                <textarea
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    rows={2}
                                    className="w-full px-4 py-2.5 rounded-lg border border-[#e0e0e0] text-[14px] focus:outline-none focus:border-[#d63384] focus:ring-1 focus:ring-[#d63384]"
                                    placeholder="Tell us why you want to join..."
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
