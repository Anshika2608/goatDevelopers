import React, { useState } from "react";
import "../index.css";
import { mockTerms } from "../data/mockTerms";
import { termDetails } from "../data/termDetails";
import AllTermsHeader from "../components/allTerms/AllTermsHeader";
import AllTermsSidebar from "../components/allTerms/AllTermsSidebar";
import TermDetailPanel from "../components/allTerms/TermDetailPanel";
import TermList from "../components/allTerms/TermList";
import TermModal from "../components/allTerms/TermModal";

export default function AllTerms() {
  const [selected, setSelected] = useState(mockTerms[0]);
  const [activeTab, setActiveTab] = useState("beginner");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { key: "beginner", label: "Beginner" },
    { key: "intermediate", label: "Intermediate" },
    { key: "strategic", label: "Strategic" },
    { key: "ai", label: "AI Explanation" },
  ];

  const currentTermData = termDetails[selected.title] || termDetails["Inflation"];
  const data = currentTermData[activeTab] || currentTermData["beginner"];
  const selectedIndex = mockTerms.findIndex((term) => term.id === selected.id);

  const openTerm = (term) => {
    setSelected(term);
    setIsModalOpen(true);
  };

  const showPreviousTerm = () => {
    const previousIndex = selectedIndex <= 0 ? mockTerms.length - 1 : selectedIndex - 1;
    setSelected(mockTerms[previousIndex]);
  };

  const showNextTerm = () => {
    const nextIndex = selectedIndex >= mockTerms.length - 1 ? 0 : selectedIndex + 1;
    setSelected(mockTerms[nextIndex]);
  };

  return (
    <div className="h-screen text-white relative overflow-hidden bg-[#0B0E14] font-sans pt-5">
      <div className="flex h-full w-full pt-8 pl-4 pr-10">
        <AllTermsSidebar />

        <div className="flex-1 flex gap-10 min-w-0 mx-4">
          <div className="flex-1 flex flex-col min-w-0 max-w-[800px]">
            <AllTermsHeader />

            <p className="text-[#A5B4D6] text-xs mb-6 ">
              Foundations of money and economics
            </p>

            <TermList terms={mockTerms} selected={selected} onSelect={openTerm} />
          </div>

          <TermDetailPanel
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
            data={data}
          />
        </div>
      </div>

      {isModalOpen && (
        <TermModal
          term={selected}
          termData={currentTermData}
          currentIndex={(selectedIndex % 15) + 1}
          totalCount={15}
          onClose={() => setIsModalOpen(false)}
          onPrevious={showPreviousTerm}
          onNext={showNextTerm}
        />
      )}
    </div>
  );
}
