"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const countryCodes = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+60", flag: "🇲🇾", name: "Malaysia" },
];

const instruments = [
  { name: "Guitar", icon: "🎸" },
  { name: "Piano", icon: "🎹" },
  { name: "Keyboard", icon: "🎹" },
  { name: "Drums", icon: "🥁" },
  { name: "Violin", icon: "🎻" },
  { name: "Flute", icon: "🪈" },
  { name: "Vocals", icon: "🎤" },
  { name: "Tabla", icon: "🥁" },
  { name: "Saxophone", icon: "🎷" },
  { name: "Trumpet", icon: "🎺" },
  { name: "Ukulele", icon: "🎸" },
  { name: "Sitar", icon: "🎸" },
];

const experienceLevels = ["Complete Beginner", "Some Experience", "Intermediate", "Advanced"];
const teachingLanguages = ["English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi"];
const ageGroups = ["3-5 years", "5-10 years", "10-20 years", "20-50 years", "50+ years"];

type Step = "phone" | "profile" | "subject" | "preferences" | "success";

export default function LoginPage() {
  const { refreshUser } = useAuth();
  const [step, setStep] = useState<Step>("phone");
  const [countryCode, setCountryCode] = useState(countryCodes[0]);
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleInstrument = (name: string) => {
    setSelectedInstruments((prev) =>
      prev.includes(name) ? prev.filter((i) => i !== name) : [...prev, name]
    );
  };

  const stepNumber = { phone: 1, profile: 2, subject: 3, preferences: 4, success: 5 }[step];
  const totalSteps = 4;

  const handlePhoneSubmit = async () => {
    if (phone.length < 10) return;
    setLoading(true);
    try {
      // Check if user exists
      const res = await fetch('/api/auth/check-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.exists) {
          // User exists, login directly
          const loginRes = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ phone })
          });

          if (loginRes.ok) {
            await refreshUser();
            window.location.href = '/';
          } else {
            alert("Login failed");
          }
        } else {
          // User doesn't exist, go to profile creation
          setStep("profile");
        }
      } else {
        alert("Something went wrong");
      }
    } catch (e) {
      console.error(e);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#132742] to-[#0d1f36] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4">
        <Link href="/">
          <Image src="https://muzigal.com/images/logo.svg" width={120} height={36} alt="Muzigal" className="brightness-0 invert" />
        </Link>
        {step !== "phone" && step !== "success" && (
          <button
            onClick={() => {
              const prev: Record<Step, Step> = { phone: "phone", profile: "phone", subject: "profile", preferences: "subject", success: "preferences" };
              setStep(prev[step]);
            }}
            className="flex items-center gap-1 text-white/70 hover:text-white text-[14px] transition-colors"
          >
            <ChevronLeft size={16} /> Back
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {step !== "success" && (
        <div className="px-6 pb-2">
          <div className="max-w-[420px] mx-auto">
            <div className="flex gap-1.5">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-all duration-500 ${i + 1 <= stepNumber ? "bg-[#d63384]" : "bg-white/20"
                    }`}
                />
              ))}
            </div>
            <p className="text-white/50 text-[12px] mt-1.5">Step {stepNumber} of {totalSteps}</p>
          </div>
        </div>
      )}

      {/* Card */}
      <div className="flex-1 flex items-start justify-center px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[420px] p-8">

          {/* STEP 1: Phone */}
          {step === "phone" && (
            <div>
              <h2 className="text-[24px] font-bold text-[#132742] mb-1">Welcome to Muzigal</h2>
              <p className="text-[#6b7280] text-[14px] mb-8">Enter your mobile number to get started</p>

              <label className="text-[13px] font-semibold text-[#132742] block mb-2">Mobile Number</label>
              <div className="flex gap-2 mb-6">
                <div className="relative">
                  <select
                    value={countryCode.code}
                    onChange={(e) => setCountryCode(countryCodes.find((c) => c.code === e.target.value) || countryCodes[0])}
                    className="appearance-none border border-[#e0e0e0] rounded-lg pl-3 pr-7 py-3 text-[14px] text-[#132742] bg-white focus:outline-none focus:border-[#d63384] min-w-[90px]"
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.code}>{c.flag} {c.code}</option>
                    ))}
                  </select>
                  <ChevronRight size={13} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280] rotate-90 pointer-events-none" />
                </div>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="flex-1 border border-[#e0e0e0] rounded-lg px-4 py-3 text-[15px] text-[#132742] focus:outline-none focus:border-[#d63384]"
                />
              </div>

              <button
                onClick={handlePhoneSubmit}
                disabled={phone.length < 10 || loading}
                className="w-full bg-[#d63384] hover:bg-[#b5296e] disabled:bg-[#f0a8c8] text-white font-bold py-3.5 rounded-xl text-[16px] transition-colors"
              >
                {loading ? "Checking..." : "Continue"}
              </button>

              <p className="text-[12px] text-[#6b7280] text-center mt-4">
                By continuing, you agree to our{" "}
                <a href="#" className="text-[#d63384] hover:underline">Terms</a> &{" "}
                <a href="#" className="text-[#d63384] hover:underline">Privacy Policy</a>
              </p>
            </div>
          )}

          {/* STEP 2: Profile */}
          {step === "profile" && (
            <div>
              <h2 className="text-[24px] font-bold text-[#132742] mb-1">Create your profile</h2>
              <p className="text-[#6b7280] text-[14px] mb-7">Tell us a little about yourself</p>

              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[12px] font-semibold text-[#132742] block mb-1.5">First Name</label>
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384]"
                    />
                  </div>
                  <div>
                    <label className="text-[12px] font-semibold text-[#132742] block mb-1.5">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[12px] font-semibold text-[#132742] block mb-1.5">Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384]"
                  />
                </div>
              </div>

              <button
                onClick={async () => {
                  if (firstName && lastName && email) {
                    setLoading(true);
                    try {
                      const res = await fetch('/api/auth/register', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ phone, firstName, lastName, email })
                      });

                      if (res.ok) {
                        await refreshUser();
                        setStep("subject");
                      } else {
                        alert("Registration failed");
                      }
                    } catch (e) {
                      console.error(e);
                      alert("Error registering");
                    } finally {
                      setLoading(false);
                    }
                  }
                }}
                disabled={!firstName || !lastName || !email || loading}
                className="w-full bg-[#d63384] hover:bg-[#b5296e] disabled:bg-[#f0a8c8] text-white font-bold py-3.5 rounded-xl text-[16px] transition-colors"
              >
                {loading ? "Registering..." : "Continue"}
              </button>
            </div>
          )}

          {/* STEP 3: Subject Selection */}
          {step === "subject" && (
            <div>
              <h2 className="text-[24px] font-bold text-[#132742] mb-1">What do you want to learn?</h2>
              <p className="text-[#6b7280] text-[14px] mb-6">Select one or more instruments</p>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {instruments.map((inst) => (
                  <button
                    key={inst.name}
                    onClick={() => toggleInstrument(inst.name)}
                    className={`flex flex-col items-center gap-1.5 py-3 px-2 rounded-xl border-2 transition-all ${selectedInstruments.includes(inst.name)
                      ? "border-[#d63384] bg-[#fce4ef]"
                      : "border-[#e0e0e0] bg-white hover:border-[#d63384]/50"
                      }`}
                  >
                    <span className="text-[24px]">{inst.icon}</span>
                    <span className="text-[12px] font-semibold text-[#132742] text-center">{inst.name}</span>
                    {selectedInstruments.includes(inst.name) && (
                      <Check size={12} className="text-[#d63384]" />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={() => selectedInstruments.length > 0 && setStep("preferences")}
                disabled={selectedInstruments.length === 0}
                className="w-full bg-[#d63384] hover:bg-[#b5296e] disabled:bg-[#f0a8c8] text-white font-bold py-3.5 rounded-xl text-[16px] transition-colors"
              >
                Continue ({selectedInstruments.length} selected)
              </button>
            </div>
          )}

          {/* STEP 4: Preferences */}
          {step === "preferences" && (
            <div>
              <h2 className="text-[24px] font-bold text-[#132742] mb-1">Your Preferences</h2>
              <p className="text-[#6b7280] text-[14px] mb-6">Help us match you with the right teacher</p>

              <div className="space-y-5 mb-6">
                {/* Experience */}
                <div>
                  <label className="text-[13px] font-bold text-[#132742] block mb-2">Experience Level</label>
                  <div className="grid grid-cols-2 gap-2">
                    {experienceLevels.map((l) => (
                      <button
                        key={l}
                        onClick={() => setSelectedLevel(l)}
                        className={`py-2 px-3 rounded-lg border-2 text-[13px] font-medium transition-all ${selectedLevel === l ? "border-[#d63384] bg-[#fce4ef] text-[#d63384]" : "border-[#e0e0e0] text-[#132742] hover:border-[#d63384]/50"
                          }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Language */}
                <div>
                  <label className="text-[13px] font-bold text-[#132742] block mb-2">Preferred Language</label>
                  <div className="flex flex-wrap gap-2">
                    {teachingLanguages.map((l) => (
                      <button
                        key={l}
                        onClick={() => setSelectedLanguage(l)}
                        className={`py-1.5 px-3 rounded-full border text-[13px] font-medium transition-all ${selectedLanguage === l ? "border-[#d63384] bg-[#fce4ef] text-[#d63384]" : "border-[#e0e0e0] text-[#132742] hover:border-[#d63384]/50"
                          }`}
                      >
                        {l}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Age */}
                <div>
                  <label className="text-[13px] font-bold text-[#132742] block mb-2">Age Group</label>
                  <div className="flex flex-wrap gap-2">
                    {ageGroups.map((a) => (
                      <button
                        key={a}
                        onClick={() => setSelectedAge(a)}
                        className={`py-1.5 px-3 rounded-full border text-[13px] font-medium transition-all ${selectedAge === a ? "border-[#d63384] bg-[#fce4ef] text-[#d63384]" : "border-[#e0e0e0] text-[#132742] hover:border-[#d63384]/50"
                          }`}
                      >
                        {a}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={() => (selectedLevel && selectedLanguage && selectedAge) && setStep("success")}
                disabled={!selectedLevel || !selectedLanguage || !selectedAge}
                className="w-full bg-[#d63384] hover:bg-[#b5296e] disabled:bg-[#f0a8c8] text-white font-bold py-3.5 rounded-xl text-[16px] transition-colors"
              >
                Find My Teacher
              </button>
            </div>
          )}

          {/* SUCCESS */}
          {step === "success" && (
            <div className="text-center py-4">
              <div className="w-20 h-20 bg-[#d1fae5] rounded-full flex items-center justify-center mx-auto mb-6">
                <Check size={36} className="text-[#10b981]" />
              </div>
              <h2 className="text-[26px] font-bold text-[#132742] mb-2">You&apos;re all set, {firstName}!</h2>
              <p className="text-[#6b7280] text-[15px] mb-3">
                We&apos;re matching you with the best {selectedInstruments.join(", ")} teachers
              </p>
              <div className="bg-[#f8f9fb] rounded-xl p-4 mb-8 text-left space-y-2">
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6b7280]">Level:</span>
                  <span className="font-semibold text-[#132742]">{selectedLevel}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6b7280]">Language:</span>
                  <span className="font-semibold text-[#132742]">{selectedLanguage}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className="text-[#6b7280]">Age Group:</span>
                  <span className="font-semibold text-[#132742]">{selectedAge}</span>
                </div>
              </div>
              <Link
                href="/learn-music"
                className="block w-full bg-[#d63384] hover:bg-[#b5296e] text-white font-bold py-3.5 rounded-xl text-[16px] transition-colors"
              >
                Browse Matched Teachers
              </Link>
              <Link href="/" className="block mt-3 text-[14px] text-[#6b7280] hover:text-[#132742]">
                Back to Home
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
