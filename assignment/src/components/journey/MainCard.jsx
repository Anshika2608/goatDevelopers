import { Download, Bookmark } from "lucide-react";
import { motion } from "framer-motion";

export default function MainCard({
    step,
    steps,
    title,
    currentIndex,
    total,
    icon,
    expanded,
    setExpanded,
    activeStep
}) {
    const Icon = icon;

    return (
        <div
            onClick={() => {
                if (activeStep === 0) setExpanded(!expanded);
            }}
            className="
        w-[960px] h-[480px]
        rounded-[40px] p-10
        relative cursor-pointer
        bg-[linear-gradient(135deg,#15141B_0%,#111827_100%)]
        shadow-[0_20px_60px_rgba(0,0,0,0.6)]
      "
        >
            {/* TOP ROW */}
            <div className="flex justify-between items-center mb-6">
                <p className="text-[#67779C] text-sm">Economy</p>

                <button
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#67779C] hover:text-white transition"
                >
                    <Bookmark size={18} />
                </button>
            </div>

            {/* MAIN AREA */}
            <div className="relative h-full w-full">

                {/* ================= STEP 0 ================= */}
                {activeStep === 0 && (
                    <motion.div
                        animate={{ y: expanded ? -90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center gap-1 mt-20 text-center"
                    >
                        {Icon && (
                            <div className="text-[#8FA2C7]">
                                <Icon size={32} strokeWidth={1.5} />
                            </div>
                        )}

                        <h2 className="text-[33px] text-[#F8FAFC]">{title}</h2>

                        <p className="text-[#A5B4D6] max-w-md leading-7">
                            {steps?.[0]?.content}
                        </p>
                    </motion.div>
                )}

                {/* ================= FIXED HEADER (STEP 1,2) ================= */}
                {activeStep !== 0 && activeStep !== 3 && (
                    <div className="absolute -top-10 left-0 w-full flex flex-col items-center text-center">

                        {Icon && (
                            <div className="text-[#8FA2C7] mb-1">
                                <Icon size={32} strokeWidth={1.5} />
                            </div>
                        )}

                        <h2 className="text-[33px] text-[#F8FAFC]">{title}</h2>

                        <p className="text-[#A5B4D6] max-w-md text-base font-light leading-7">
                            {steps?.[0]?.content}
                        </p>
                    </div>
                )}

                {/* ================= INSIGHT ================= */}
                {expanded && activeStep === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: -40 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 flex justify-center gap-12"
                    >
                        <div className="text-left">
                            <h3 className="text-white mb-2 text-sm font-semibold">
                                Why It Matters
                            </h3>
                            <p className="text-[#F8FAFC] max-w-[240px] text-sm -mr-10">
                                {steps?.[1]?.left}
                            </p>
                        </div>

                        <div className="w-px mt-4 h-16 bg-[#2a334a]" />

                        <div className="text-left">
                            <h3 className="text-white mb-2 text-sm font-semibold">
                                Fortress Insight
                            </h3>
                            <p className="text-[#F8FAFC] max-w-[240px] text-sm">
                                {steps?.[1]?.right}
                            </p>
                        </div>
                    </motion.div>
                )}

                {/* ================= INTERMEDIATE ================= */}
                {activeStep === 1 && (
                    <div className="absolute top-36 left-0 w-full flex justify-center">
                        <div className="max-w-[520px] text-left">

                            <h3 className="text-white mb-4 text-base font-semibold">
                                Intermediate
                            </h3>

                            <p className="text-[#F8FAFC] text-base font-light leading-7">
                                {steps?.[2]?.content}
                            </p>

                        </div>
                    </div>
                )}

                {/* ================= STRATEGIC ================= */}
                {activeStep === 2 && (
                    <div className="absolute top-36 left-0 w-full flex justify-center">
                        <div className="max-w-[520px] text-left">

                            <h3 className="text-white mb-4 text-base font-semibold">
                                Strategic
                            </h3>

                            <p className="text-[#F8FAFC] text-base font-light leading-7">
                                {steps?.[3]?.content}
                            </p>

                        </div>
                    </div>
                )}

                {/* ================= AI SCREEN ================= */}
                {activeStep === 3 && (
                    <>
                        {/* SMALL HEADER */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex gap-2 items-center text-[#F8FAFC]">
                            <h2 className="text-[19px] text-[#F8FAFC]">{title}</h2>
                            {Icon && <Icon size={20} />}
                        </div>

                        {/* CONTENT */}
                        <div className="absolute top-8 left-0 w-full flex justify-center">
                            <div className="w-full max-w-[850px] px-10">

                                <div
                                    className="
                    h-[350px]
                    overflow-y-scroll
                    pr-3
                    
                    [scrollbar-width:none]
                    [-ms-overflow-style:none]
                  "
                                    style={{ WebkitOverflowScrolling: "touch" }}
                                >
                                    <h3 className="text-white mb-4 text-lg text-[#F8FAFC]">
                                        {steps?.[4]?.content?.heading}
                                    </h3>

                                    <div className="space-y-2 text-[#F8FAFC] text-sm leading-7">
                                        {steps?.[4]?.content?.sections?.map((sec, i) => (
                                            <div key={i}>
                                                <p className="text-white">{sec.title}</p>
                                                <p>{sec.text}</p>
                                                <ul className="list-disc pl-5">
                                                    {sec.points.map((p, idx) => (
                                                        <li key={idx}>{p}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>

                     {/* TEXT FADE (TOP LAYER) */}
<div className="
  pointer-events-none
  absolute bottom-0 left-1/2 -translate-x-1/2
  w-[calc(100%+80px)]   /* 🔥 FORCE FULL WIDTH */
  h-[52px]
  rounded-b-[40px]
  bg-gradient-to-t
  from-[#0b1220]
  to-transparent
  opacity-80
"/>

{/* GLASS BLUR (BOTTOM LAYER) */}
<div className="
  pointer-events-none
  absolute bottom-0 left-1/2 -translate-x-1/2
  w-[calc(100%+80px)]   /* 🔥 SAME WIDTH */
  h-[52px]
  rounded-b-[40px]
  backdrop-blur-[2px]
  bg-gradient-to-t
  from-[#0b1220]/90
  via-[#0b1220]/50
  to-transparent
"/>
                    </>
                )}

            </div>

            {/* BOTTOM ROW */}
            <div className="absolute bottom-5 left-0 w-full px-10 flex justify-between items-center">
                <button
                    onClick={(e) => e.stopPropagation()}
                    className="text-[#67779C] hover:text-white transition"
                >
                    <Download size={18} />
                </button>

                <div className="text-[#67779C] text-sm mr-4">
                    {currentIndex + 1}/{total}
                </div>
            </div>
        </div>
    );
}