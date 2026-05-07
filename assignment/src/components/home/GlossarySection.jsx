import React from "react";
import GlossaryCard from "./GlossaryCard";
import { useNavigate } from "react-router-dom";
import { Coins, LineChart, Shield, Wallet, PiggyBank, Bitcoin, ArrowRight } from "lucide-react";

export default function GlossarySection() {
    const navigate = useNavigate();
    return (
        <div className="relative bg-transparent text-white py-10 h-[calc(100vh-80px)]">

            {/* 🌌 Background Glow */}
            <div className="absolute inset-0 -z-10">
                {/* Base (very dark) */}
                <div className="absolute inset-0 bg-[#0E0D12]" />

                {/* Subtle blue glow (center-right) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_65%,rgba(37,99,235,0.1),transparent_60%)] blur-2xl" />


            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

                {/* Heading */}
                <h1 className="text-4xl mb-4 text-[#F8FAFC]">
                    Beginner Glossary
                </h1>
                <div className="mb-12">
                    <p className="text-[#A5B4D6] max-w-xl mx-auto text-xl ">
                        Learn how money works — clearly and without confusion.
                    </p>
                    <p className="text-[#A5B4D6] text-xl" >Master the basics of finance step by step.</p>
                </div>



                <div className="flex justify-center">
                    <div className="grid grid-cols-3 gap-13.5">
                        <GlossaryCard icon={<Coins size={32} strokeWidth={1.5} />} title="Money & Economy" />
                        <GlossaryCard icon={<LineChart size={32} strokeWidth={1.5} />} title="Markets & Investing" />
                        <GlossaryCard icon={<Shield size={32} strokeWidth={1.5} />} title="Risk & Protection" />
                        <GlossaryCard icon={<Wallet size={32} strokeWidth={1.5} />} title="Banking" />
                        <GlossaryCard icon={<PiggyBank size={32} strokeWidth={1.5} />} title="Assets & Wealth" />
                        <GlossaryCard icon={<Bitcoin size={32} strokeWidth={1.5} />} title="Crypto" />
                    </div>
                </div>
                {/* CTA */}
                <p className="text-[24px] text-[#F8FAFC] my-5 mt-12">
                    Build confidence in how money works
                </p>

                <button
                    onClick={() => navigate("/journey")}
                    className="
    px-6 py-3 rounded-xl
    bg-gradient-to-r from-[#3b82f6] to-[#60a5fa]
    text-white 
    shadow-lg
    hover:scale-105 transition
    mx-auto
    h-14 w-3xs font-semibold text-lg
    flex items-center justify-center gap-2
  "
                >
                    Star your journey
                    <ArrowRight size={24} strokeWidth={2} className="mt-1" />
                </button>

            </div>
        </div>
    );
}