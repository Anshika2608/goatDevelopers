import React from "react";
import { Check } from "lucide-react";

export default function TermCard({ item, index, isSelected, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`group flex items-center justify-between px-6 py-4 rounded-2xl cursor-pointer transition-all border h-20  ${
        isSelected
          ? "bg-[#111827] border-white/5"
          : "bg-transparent border-[#67779C]/10"
      }`}
    >
      {/* LEFT CONTENT */}
      <div className="flex items-center gap-6">
        {/* NUMBER */}
        <span className="text-white w-5 text-base font-semibold">
          {index + 1}
        </span>

        {/* TITLE + DESC */}
        <div className="flex items-center gap-12">
          <p className="text-white w-40 text-base font-semibold">
            {item.title}
          </p>
          <p className="text-[13px] text-[#99A1AF] max-w-[260px] truncate">
            {item.desc}
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">
        {/* TOP TAG */}
        {item.top && (
          <span
            className={`text-[11px] px-3 py-1 rounded-full font-medium transition-all ${
              isSelected
                ? "bg-[#064E3B] text-[#34D399] border border-[#065F46]"
                : "bg-[#0F172A] text-[#38BDF8] border border-[#1E293B]"
            }`}
          >
            Top 15
          </span>
        )}

        {/* STATUS DOT */}
        <div className="flex items-center justify-center w-5 h-5">
          {isSelected ? (
            <div className="w-5 h-5 rounded-full border-[1.5px] border-[#34D399] flex items-center justify-center">
              <Check size={12} className="text-[#34D399]" strokeWidth={3} />
            </div>
          ) : (
            <div className="w-[10px] h-[10px] rounded-full bg-[#334155]" />
          )}
        </div>
      </div>
    </div>
  );
}
