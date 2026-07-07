"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { toast } from "sonner";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const instruments = [
  { id: "acoustic-guitar", name: "Acoustic Guitar", icon: "🎸" },
  { id: "piano", name: "Piano", icon: "🎹" },
  { id: "keyboard", name: "Keyboard", icon: "🎹" },
  { id: "western-vocal", name: "Western Vocal", icon: "🎤" },
  { id: "violin", name: "Violin", icon: "🎻" },
  { id: "drums", name: "Drums", icon: "🥁" },
  { id: "ukulele", name: "Ukulele", icon: "🎸" },
  { id: "flute", name: "Flute", icon: "🎺" },
  { id: "carnatic-vocal", name: "Carnatic Vocal", icon: "🎤" },
];

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, refreshUser } = useAuth();
  
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<"login" | "register">("login");
  
  // Form state
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
  // Preferences state
  const [selectedInstrument, setSelectedInstrument] = useState("");
  const [skillLevel, setSkillLevel] = useState("");

  useEffect(() => {
    if (user) {
      const redirect = searchParams?.get('redirect') || '/';
      router.push(redirect);
    }
  }, [user, router, searchParams]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (mode === "login") {
        const res = await fetch("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ phone }),
        });
        const data = await res.json();
        
        if (!res.ok) throw new Error(data.error || "Login failed");
        
        await refreshUser();
        toast.success("Successfully logged in!");
        // Navigation handled by useEffect
      } else {
        // Only validate basic info, move to preferences
        if (phone && firstName && lastName) {
          setStep(2);
        } else {
          toast.error("Please fill all required fields");
        }
      }
    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCompleteRegistration = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          firstName,
          lastName,
          email,
          instrument: selectedInstrument,
          skillLevel
        }),
      });
      const data = await res.json();
      
      if (!res.ok) throw new Error(data.error || "Registration failed");
      
      await refreshUser();
      toast.success("Registration completed!");
      setStep(3); // Success state
      setTimeout(() => {
        const redirect = searchParams?.get('redirect') || '/';
        router.push(redirect);
      }, 2000);
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 bg-[#f8fafc] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
        
        {/* Animated Orbs */}
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[#e11d73] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" />
        <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#8b5cf6] rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Mesh Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Auth Card Container */}
      <div className="relative z-10 w-full max-w-[1000px] bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side - Brand & Info */}
        <div className="w-full md:w-[45%] bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
              <path d="M0,0 L100,100 M100,0 L0,100" stroke="white" strokeWidth="0.5" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <Image
              src="https://muzigal.com/images/logo.svg"
              width={140}
              height={40}
              alt="Muzigal"
              className="brightness-0 invert mb-12"
            />
            
            <h2 className="text-[28px] md:text-[32px] font-bold text-white leading-tight mb-4">
              Start your musical journey today.
            </h2>
            <p className="text-[#94a3b8] text-[15px] leading-relaxed">
              Join thousands of students learning from expert teachers worldwide. Flexible schedules, personalized lessons, and guaranteed progress.
            </p>
          </div>

          <div className="relative z-10 mt-12 md:mt-0">
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-md">
              <div className="flex -space-x-2 shrink-0">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1e293b] bg-gradient-to-br from-[#e11d73] to-[#8b5cf6] flex items-center justify-center text-[10px] font-bold text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-white text-[13px] font-medium">Join 10,000+ students</p>
                <div className="flex text-[#f59e0b] text-[10px] mt-0.5">
                  ★★★★★
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Forms */}
        <div className="w-full md:w-[55%] bg-white p-8 md:p-12 relative flex flex-col">
          
          {/* Step 1: Login / Register Basic Info */}
          {step === 1 && (
            <div className="animate-fade-in flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-2">
                  {mode === "login" ? "Welcome back" : "Create an account"}
                </h3>
                <p className="text-[#64748b] text-[14px]">
                  {mode === "login" 
                    ? "Enter your phone number to access your account." 
                    : "Fill in your details to get started."}
                </p>
              </div>

              <form onSubmit={handleAuth} className="space-y-4 flex-grow">
                {mode === "register" && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-semibold text-[#0f172a]">First Name</label>
                      <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[14px] text-[#0f172a] focus:bg-white focus:border-[#e11d73] focus:ring-4 focus:ring-[#e11d73]/10 transition-all outline-none"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-semibold text-[#0f172a]">Last Name</label>
                      <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[14px] text-[#0f172a] focus:bg-white focus:border-[#e11d73] focus:ring-4 focus:ring-[#e11d73]/10 transition-all outline-none"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                )}
                
                {mode === "register" && (
                  <div className="space-y-1.5">
                    <label className="text-[13px] font-semibold text-[#0f172a]">Email Address (Optional)</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[14px] text-[#0f172a] focus:bg-white focus:border-[#e11d73] focus:ring-4 focus:ring-[#e11d73]/10 transition-all outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                )}
                
                <div className="space-y-1.5">
                  <label className="text-[13px] font-semibold text-[#0f172a]">Phone Number</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-[48px] px-4 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] text-[14px] text-[#0f172a] focus:bg-white focus:border-[#e11d73] focus:ring-4 focus:ring-[#e11d73]/10 transition-all outline-none"
                    placeholder="9876543210"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-[48px] mt-6 bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(225,29,115,0.25)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none group"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {mode === "login" ? "Sign In" : "Continue"}
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center text-[13px] text-[#64748b]">
                {mode === "login" ? (
                  <>Don&apos;t have an account? <button onClick={() => setMode("register")} className="text-[#e11d73] font-bold hover:underline">Sign up</button></>
                ) : (
                  <>Already have an account? <button onClick={() => setMode("login")} className="text-[#e11d73] font-bold hover:underline">Sign in</button></>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Preferences (Register Only) */}
          {step === 2 && (
            <div className="animate-slide-in-right flex flex-col h-full">
              <button 
                onClick={() => setStep(1)}
                className="w-8 h-8 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all mb-6"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <h3 className="text-[24px] font-bold text-[#0f172a] mb-2">What do you want to learn?</h3>
                <p className="text-[#64748b] text-[14px]">Select your primary instrument to help us personalize your experience.</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
                {instruments.map((inst) => (
                  <button
                    key={inst.id}
                    type="button"
                    onClick={() => setSelectedInstrument(inst.name)}
                    className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all duration-200 ${
                      selectedInstrument === inst.name
                        ? "border-[#e11d73] bg-[#fce7f3]/50 shadow-[0_4px_12px_rgba(225,29,115,0.1)] scale-[1.02]"
                        : "border-[#e2e8f0] bg-white hover:border-[#cbd5e1] hover:bg-[#f8fafc]"
                    }`}
                  >
                    <span className="text-[28px] mb-2">{inst.icon}</span>
                    <span className={`text-[12px] font-semibold text-center ${selectedInstrument === inst.name ? "text-[#e11d73]" : "text-[#64748b]"}`}>
                      {inst.name}
                    </span>
                  </button>
                ))}
              </div>

              <div className="space-y-3 mb-8">
                <label className="text-[13px] font-semibold text-[#0f172a]">Your Experience Level</label>
                <div className="flex gap-2 bg-[#f8fafc] p-1 rounded-xl border border-[#e2e8f0]">
                  {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                    <button
                      key={level}
                      onClick={() => setSkillLevel(level)}
                      className={`flex-1 py-2 rounded-lg text-[13px] font-semibold transition-all ${
                        skillLevel === level 
                          ? "bg-white text-[#0f172a] shadow-sm" 
                          : "text-[#64748b] hover:text-[#0f172a]"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleCompleteRegistration}
                disabled={isLoading || !selectedInstrument || !skillLevel}
                className="w-full h-[48px] mt-auto bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 hover:shadow-[0_8px_20px_rgba(225,29,115,0.25)] transition-all active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  "Complete Registration"
                )}
              </button>
            </div>
          )}

          {/* Step 3: Success State */}
          {step === 3 && (
            <div className="animate-scale-in flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(16,185,129,0.3)]">
                <Check className="w-10 h-10 text-white" strokeWidth={3} />
              </div>
              <h3 className="text-[28px] font-bold text-[#0f172a] mb-3">You&apos;re all set!</h3>
              <p className="text-[#64748b] text-[15px] max-w-[280px] mx-auto">
                Your account has been created successfully. Redirecting you to the platform...
              </p>
              
              <div className="mt-8 flex gap-2">
                <span className="w-2 h-2 rounded-full bg-[#e11d73] animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#8b5cf6] animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f8fafc]"><div className="w-8 h-8 border-4 border-[#e11d73] border-t-transparent rounded-full animate-spin" /></div>}>
      <LoginForm />
    </React.Suspense>
  );
}
