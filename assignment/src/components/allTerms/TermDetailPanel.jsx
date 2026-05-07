import React from "react";
import { Bookmark, Download, Maximize2, TrendingUp } from "lucide-react";

export default function TermDetailPanel({ tabs, activeTab, onTabChange, data }) {
  return (
    <div className="w-[454px] flex-shrink-0  rounded-[24px] border border-white/5 p-8 flex flex-col h-[700px] shadow-2xl">
      <div className="flex justify-between mb-12 border-b border-white/5 pb-0">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => onTabChange(tab.key)}
            className={`text-[12px] pb-3 relative transition-colors font-medium ${
              activeTab === tab.key
                ? "text-white"
                : "text-[#64748B] hover:text-white"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-white rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex flex-col items-center text-center mt-2 mb-10">
        <div className="mb-6 text-white">
          <TrendingUp size={44} strokeWidth={1.5} />
        </div>

        <h2 className="text-[32px] text-white mb-3 tracking-wide">{data.title}</h2>
        <p className="text-[#F8FAFC] text-[14px]">{data.subtitle}</p>
      </div>

      <div className="flex-1 overflow-y-auto no-scrollbar">
        {data.type === "two-column" && (
          <div className="grid grid-cols-2 gap-8 text-[13.5px]">
            <div>
              <p className="font-semibold text-white mb-3 text-base">Why It Matters</p>
              <p className="text-[#F8FAFC] leading-relaxed">{data.why}</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-3 text-base">Fortress Insight</p>
              <p className="text-[#F8FAFC] leading-relaxed">{data.insight}</p>
            </div>
          </div>
        )}

        {data.type === "single" && (
          <p className="text-[#94A3B8] text-[13.5px] leading-relaxed max-w-[400px]">
            {data.content}
          </p>
        )}

        {data.type === "ai" && (
          <pre className="text-[#94A3B8] text-[13.5px] leading-relaxed whitespace-pre-wrap font-sans">
            {data.content}
          </pre>
        )}
      </div>

      <div className="flex justify-center gap-12 mt-auto pt-6 text-[#64748B]">
        <Bookmark className="cursor-pointer hover:text-white transition-colors" size={20} />
        <Maximize2 className="cursor-pointer hover:text-white transition-colors" size={20} />
        <Download className="cursor-pointer hover:text-white transition-colors" size={20} />
      </div>
    </div>
  );
}
