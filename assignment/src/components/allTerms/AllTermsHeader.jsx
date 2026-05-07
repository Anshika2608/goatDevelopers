import React from "react";
import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function AllTermsHeader() {
  const navigate = useNavigate();
  return (

    <div className="flex flex-col gap-4 mb-6">
      {/* TOP ROW (Back Button) */}
      <button
        onClick={() => navigate("/journey")}
        className="w-12 h-12 rounded-2xl border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors cursor-pointer"
      >
        <ArrowLeft className="text-[#94A3B8]" size={22} />
      </button>

      {/* SECOND ROW (Heading + Search) */}
      <div className="flex items-center justify-between">
        {/* HEADING */}
        <h1 className="text-[28px] text-white">
          Browse all 50 financial concepts
        </h1>

        {/* SEARCH */}
        <div className="relative w-[240px] flex-shrink-0 mt-2">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
            size={16}
          />
          <input
            className="w-full bg-transparent border border-white/10 rounded-full pl-11 pr-4 py-2.5 outline-none text-[13px] text-white placeholder-[#64748B] focus:border-white/20 transition-colors"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
}
