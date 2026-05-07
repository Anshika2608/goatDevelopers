import React from "react";

export default function GlossaryCard({ icon, title }) {
  return (
  <div className="
  w-60 h-44 
  rounded-2xl 
  flex flex-col items-center justify-center gap-4

bg-gradient-to-br from-[#15141B] to-[#111827]
  backdrop-blur-md

  shadow-[0_20px_60px_rgba(0,0,0,0.6)]
  
  transition duration-300
">
      <div className="text-white  mb-4">{icon}</div>
      <p className="text-[#cbd5f5] text-sm">{title}</p>
    </div>
  );
}