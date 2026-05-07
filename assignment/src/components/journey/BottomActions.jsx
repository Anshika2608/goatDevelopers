import { ArrowRight, ArrowLeft } from "lucide-react";

export default function BottomActions({
    activeStep,
    setActiveStep,
    activeTab,
    setActiveTab,
    totalTabs,
    onFinish
}) {
    return (
        <div className="flex gap-10 justify-center items-center mt-6">

            {/* NOT CLEAR */}
            <button
                onClick={() => {
                    // move to previous tab
                    if (activeTab > 0) {
                        setActiveTab(activeTab - 1);
                        setActiveStep(0);
                    }
                }}
                className="px-6 py-3 h-12 w-36 rounded-full bg-[#0f172a] flex items-center gap-2 text-base"
            >
                <ArrowLeft size={16} />
                Not clear
            </button>

            {/* GOT IT */}
            <button
                onClick={() => {
                    
                    if (activeTab === totalTabs - 1) {
                        onFinish();
                        return;
                    }

                    setActiveTab(activeTab + 1); // ✅ use value, not prev
                }}
                className="px-6 py-3 w-36 h-12 rounded-full bg-[#0f172a] flex items-center justify-center gap-2 text-base cursor-pointer"
            >
                Got it
                <ArrowRight size={16} />
            </button>

        </div>
    );
}
