import React, { useEffect, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Bookmark,
    Download,
    TrendingUp,
    X,
} from "lucide-react";

const tabs = [
    { key: "beginner", label: "Beginner" },
    { key: "intermediate", label: "Intermediate" },
    { key: "strategic", label: "Strategic" },
    { key: "ai", label: "AI Explanation" },
];

const TermModal = ({
    term,
    termData,
    currentIndex,
    totalCount,
    onClose,
    onPrevious,
    onNext,
}) => {
    const [activeTab, setActiveTab] = useState("beginner");
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        setIsRevealed(false);
        setActiveTab("beginner");
    }, [term?.id]);

    if (!term || !termData) return null;

    const data = termData[activeTab] || termData.beginner;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[7px]" />

            <button
                type="button"
                onClick={onClose}
                className="absolute right-[9%] top-[11%] z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[#88A0D4]/70 text-[#A8B8E8] transition-colors hover:border-white hover:text-white"
            >
                <X size={18} strokeWidth={1.5} />
            </button>

            <button
                type="button"
                onClick={onPrevious}
                className="absolute left-[10%] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#7184B5]/80 text-[#9CAFE5] transition-colors hover:border-white hover:text-white"
            >
                <ArrowLeft size={18} strokeWidth={1.5} />
            </button>

            <button
                type="button"
                onClick={onNext}
                className="absolute right-[10%] top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#7184B5]/80 text-[#9CAFE5] transition-colors hover:border-white hover:text-white"
            >
                <ArrowRight size={18} strokeWidth={1.5} />
            </button>

            <div
                onClick={() => {
                    if (!isRevealed) setIsRevealed(true);
                }}
                className={`relative z-10  rounded-[28px] border border-white/[0.03] bg-[#0D1323] px-8 py-8 text-white shadow-[0_26px_80px_rgba(0,0,0,0.55)]  h-[560px] w-[1040px] ${!isRevealed ? "cursor-pointer" : ""}`}
            >
                <div className="absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_20%_0%,rgba(61,76,112,0.22),transparent_42%),radial-gradient(circle_at_85%_18%,rgba(15,30,54,0.35),transparent_48%)]" />

                <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between text-[10px] text-[#7585AD]">
                        <span className="text-[#67779C] text-[13px]">Economy</span>
                        <Bookmark size={14} strokeWidth={1.4} className="text-[#67779C] text-[13px]" />
                    </div>

                    <div className={`${isRevealed ? "-mt-5" : "mt-[100px]"} flex flex-1 flex-col items-center text-center text-[#67779C] text-[13px] transition-all duration-300`}>
                        <TrendingUp
                            className="mt-8 text-white"
                            size={56}
                            strokeWidth={1.8}
                        />

                        <h2 className="mt-5 text-[33px] leading-none text-white">
                            {data.title || term.title}
                        </h2>
                        <p className="mt-6 text-base font-light text-[#F8FAFC]">
                            {term.desc || data.subtitle}
                        </p>

                        {isRevealed && (
                            <>
                                <div className="mt-8 flex items-center gap-7">
                                    {tabs.map((tab) => (
                                        <button
                                            key={tab.key}
                                            type="button"
                                            onClick={() => setActiveTab(tab.key)}
                                            className={`relative pb-2 text-xs transition-colors ${activeTab === tab.key
                                                ? "text-white"
                                                : "text-[#67779C] hover:text-white"
                                                }`}
                                        >
                                            {tab.label}
                                            {activeTab === tab.key && (
                                                <span className="absolute bottom-0 left-0 h-px w-full bg-white" />
                                            )}
                                        </button>
                                    ))}
                                </div>

                                <div className="mt-10 w-full max-w-[420px] text-left flex-1 flex flex-col overflow-hidden">
                                    {data.type === "two-column" && (
                                        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 text-[13px]">
                                            <div>
                                                <p className="mb-3 font-semibold text-white">Why It Matters</p>
                                                <p className="leading-relaxed text-[#F8FAFC] text-base font-light">{data.why}</p>
                                            </div>
                                            <div className="mt-4 h-20 w-px bg-white/10" />
                                            <div>
                                                <p className="mb-3 font-semibold text-white">Fortress Insight</p>
                                                <p className="leading-relaxed text-[#F8FAFC] text-base font-light">{data.insight}</p>
                                            </div>
                                        </div>
                                    )}

                                    {data.type === "single" && (
                                        <p className="text-[16px] font-light leading-relaxed text-[#F8FAFC]">
                                            {data.content}
                                        </p>
                                    )}

                                    {data.type === "ai" && (
                                        <div className="max-h-[220px] overflow-y-auto pr-2 no-scrollbar">
                                            <pre className="whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-[#F8FAFC]">
                                                {data.content}
                                            </pre>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="relative z-10 flex items-center justify-between text-[#7F91BF]">
                        <Download size={15} strokeWidth={1.5} />
                        {!isRevealed && (
                            <span className="absolute left-1/2 -translate-x-1/2 text-[10px]">
                                tap to learn
                            </span>
                        )}
                        <span className="text-[10px]">
                            {currentIndex}/{totalCount}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermModal;
