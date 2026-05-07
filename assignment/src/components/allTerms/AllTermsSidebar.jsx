import React from "react";

const learnItems = ["Banking", "Crypto", "Structures", "Global"];
const progressItems = ["Needs Review", "Completed"];
const personalItems = ["Saved", "Downloads"];

function SidebarSection({ title, children, className = "" }) {
  return (
    <>
      <p
        className={`text-[11px] tracking-[0.15em] font-medium text-[#64748B] mb-4 pl-3 ${className}`}
      >
        {title}
      </p>
      {children}
    </>
  );
}

function SidebarItem({ children, className = "" }) {
  return (
    <div
      className={`flex items-center px-3 py-2.5 text-[#A5B4D6] hover:text-white cursor-pointer transition-colors ${className}`}
    >
      {children}
    </div>
  );
}

export default function AllTermsSidebar() {
  return (
    <div className="w-[200px] flex-shrink-0 flex flex-col px-6 border rounded-2xl border-[#67779C]/10 h-[700px] py-4 ml-4">
      {/* LEARN */}
      <SidebarSection title="LEARN">
        <div className="space-y-1 text-[13px] mb-8">
          {/* ACTIVE ITEM */}
          <div className="flex items-center px-3 py-2.5 bg-[#1A2235] rounded-lg relative cursor-pointer group">
            <div className="w-[3px] h-5 bg-white absolute left-0 rounded-r-full"></div>
            <span className="text-white font-medium">Economy</span>
          </div>

          {learnItems.map((item) => (
            <SidebarItem key={item} className="ml-4">
              {item}
            </SidebarItem>
          ))}
        </div>
      </SidebarSection>

      {/* PROGRESS */}
      <SidebarSection title="PROGRESS" className="mt-4">
        <div className="space-y-1 text-[13px] mb-8 ml-4">
          {progressItems.map((item) => (
            <SidebarItem key={item}>{item}</SidebarItem>
          ))}
        </div>
      </SidebarSection>

      {/* PERSONAL */}
      <SidebarSection title="PERSONAL" className="mt-4">
        <div className="space-y-1 text-[13px] ml-4">
          {personalItems.map((item) => (
            <SidebarItem key={item} className=" ">
              {item}
            </SidebarItem>
          ))}
        </div>
      </SidebarSection>
    </div>
  );
}
