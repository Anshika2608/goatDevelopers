import React, { useState } from "react";
import { essentials } from "../data/essentials";
import Tabs from "../components/journey/Tabs";
import SidebarSteps from "../components/journey/SidebarSteps";
import MainCard from "../components/journey/MainCard";
import BottomActions from "../components/journey/BottomActions";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom";
export default function Journey() {
    const [activeTab, setActiveTab] = useState(0);
    const [activeStep, setActiveStep] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [visitedTabs, setVisitedTabs] = useState([0]);

    const current = essentials[activeTab];
    const step = current.steps[activeStep];
    const navigate = useNavigate();
    // 👉 when quiz opens, reset journey (optional but clean)
    const handleOpenQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div className="bg-transparent text-white relative h-[calc(100vh-80px)] overflow-hidden">
            <div className="absolute inset-0 -z-10">
                {/* Base (very dark) */}
                <div className="absolute inset-0 bg-[#0E0D12]" />

                {/* Subtle blue glow (center-right) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_65%,rgba(37,99,235,0.1),transparent_60%)] blur-2xl" />


            </div>

            {/* HEADING */}
            <div className="text-center pt-4">
                <h1 className="text-4xl text-[#F8FAFC]">
                    Start with these 15 essentials
                </h1>
            </div>

            {/* TABS */}
            <Tabs
                activeTab={activeTab}
                visitedTabs={visitedTabs}
                setActiveTab={(i) => {
                    setActiveTab(i);
                    setActiveStep(0);

                    // mark visited
                    setVisitedTabs((prev) =>
                        prev.includes(i) ? prev : [...prev, i]
                    );
                }}
            />

            {/* MAIN CONTENT */}
            <div className="flex flex-col items-center mt-10">
                <div className="flex justify-center gap-24">

                    {/* SIDEBAR */}
                    <SidebarSteps
                        activeStep={activeStep}
                        expanded={expanded}
                        setActiveStep={(i) => {
                            setActiveStep(i);
                            if (i === 0) setExpanded(true);
                        }}
                    />

                    {/* CARD + BUTTONS */}
                    <div className="flex flex-col items-center w-[950px]">

                        <MainCard
                            step={step}
                            steps={current.steps}
                            title={current.title}
                            currentIndex={activeTab}
                            total={essentials.length}
                            icon={current.icon}
                            expanded={expanded}
                            setExpanded={setExpanded}
                            activeStep={activeStep}
                        />

                        {/* ACTION BUTTONS */}
                        <div className="mt-2 flex flex-col justify-center items-center gap-3">
                            <BottomActions
                                activeStep={activeStep}
                                setActiveStep={setActiveStep}
                                activeTab={activeTab}
                                setActiveTab={(nextTab) => {
                                    setActiveTab(nextTab);
                                    setActiveStep(0);
                                    

                                    setVisitedTabs((prev) =>
                                        [...new Set([...prev, activeTab, nextTab])]
                                    );
                                }}
                                totalTabs={essentials.length}
                                onFinish={() => navigate("/quiz")}   // ✅ THIS IS KEY
                            />
                            <button
                                onClick={() => navigate("/all-terms")} // change route if needed
                                className="text-[#A5B4D6] text-base text-light hover:text-white transition-all  gap-1"
                            >
                                Explore all 50 terms →
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
