import { ArrowLeft, ArrowRight } from "lucide-react";

export default function QuizNavigation({ currentQ, selected, onBack, onNext }) {
    return (
        <div className="mt-14 flex gap-32">
            {/* PREVIOUS */}
            {currentQ > 0 && (
                <button
                    onClick={onBack}
                    className="w-14 h-14 rounded-[20px] border border-[#192339] flex items-center justify-center hover:border-white"
                >
                    <ArrowLeft size={32} />
                </button>
            )}

            {/* NEXT */}
            <button
                onClick={onNext}
                disabled={selected === null}
                className={`
      w-14 h-14 rounded-[20px] border flex items-center justify-center transition-all
      ${selected === null
                        ? "border-[#2a334a] text-[#2a334a] cursor-not-allowed opacity-50"
                        : "border-[#192339] hover:border-white hover:text-white"
                    }
    `}
            >
                <ArrowRight size={32} />
            </button>
        </div>
    );
}
