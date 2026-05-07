import { useLocation, useNavigate } from "react-router-dom";
import { Shield, Check } from "lucide-react";

export default function Result() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const score = state?.score || 0;
    const total = state?.total || 5;

    return (
        <div className="flex items-center justify-center text-white relative">

            {/* 🌌 SAME QUIZ BACKGROUND */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[#0E0D12]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.1),transparent_60%)] blur-2xl" />
            </div>

            {/* MAIN WRAPPER */}
            <div className="w-[672px] text-center pt-10">

                {/* ICON + TITLE */}
                <Shield className="mx-auto mb-4 text-blue-500" size={80} />

                <h1 className="text-[40px] mb-8">
                    Fortress Foundations Complete
                </h1>

                {/* SCORE CARD */}
                <div className="rounded-2xl border border-[#67779C] p-8 backdrop-blur-xl bg-[#020617]/60">

                    {/* SCORE CIRCLE */}
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-blue-500 flex items-center justify-center text-xl font-semibold">
                        {score}/{total}
                    </div>

                    <p className="text-[#E5E7EB] text-[19px] leading-6 px-9">
                        You now understand the structural forces that shape money,
                        banking, and digital assets.
                    </p>

                    <p className="mt-4 text-[#8EC5FF] text-sm">
                        Most people never learn this. You did.
                    </p>

                    <p className="mt-2 text-white text-xl font-semibold">
                        You are no longer financially unaware.
                    </p>
                </div>

                {/* SECOND CARD */}
                <div className="mt-5 rounded-2xl border border-[#1f2937] p-6 backdrop-blur-xl    
bg-[linear-gradient(180deg,rgba(22,36,86,0.5)_0%,rgba(15,23,43,0.5)_100%)] text-left">

                    <p className="font-semibold mb-3 text-[23px]">
                        ✨ Ready to Go Deeper?
                    </p>
                    <p className="font-semibold text-base text-[#D1D5DC] mt-2 ">You've mastered the fundamentals. This is where awareness becomes strategy.</p>

                    <ul className="text-sm text-[#A5B4D6] space-y-3 mt-4">
                        {[
                            "Strategic layers beneath every term",
                            "Macro trend analysis",
                            "Real-world case breakdowns",
                            "Risk mapping tools",
                            "Scenario simulations",
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3">

                                {/* ICON CIRCLE */}
                                <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                                    <Check size={12} className="text-blue-400" strokeWidth={3} />
                                </div>

                                {/* TEXT */}
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* BUTTONS */}
                <div className="mt-6 space-y-3">

                    <button className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 font-semibold text-[19px]">
                        Upgrade to Sentinel
                    </button>

                    <button
                        onClick={() => navigate("/")}
                        className="w-full h-12 rounded-xl border border-[#1f2937] text-[#A5B4D6] hover:text-white font-semibold text-base"
                    >
                        Explore More First
                    </button>
                </div>
                <p className="text-[13px] text-[#99A1AF] mt-4">
                    You can continue exploring at your current level. When you're ready, deeper clarity will be here.
                </p>
                {/* FOOTER TEXT */}
                <p className="text-[13px] text-[#8EC5FF] mt-6 mb-10">
                    Clarity compounds. Confusion costs.
                </p>
            </div>
        </div>
    );
}