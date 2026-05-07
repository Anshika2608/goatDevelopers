import { essentials } from "../../data/essentials";

export default function Tabs({ activeTab, setActiveTab, visitedTabs }) {
    return (
        <div className="flex justify-center mt-9">
            <div className="flex gap-6 max-w-6xl">

                {essentials.map((item, i) => {
                    const words = item.title.split(" ");

                    return (
                        <button
                            key={i}
                            onClick={() => setActiveTab(i)}
                            className="flex flex-col items-center gap-1 transition"
                        >
                            {/* TOP LINE */}
                            <div
                                className={`
    h-[2px] w-14 transition-all duration-300
    ${activeTab === i
                                        ? "bg-blue-500"                 // active
                                        : visitedTabs?.includes(i)
                                            ? "bg-[#002A85]"                // visited 👈 ONLY THIS CHANGE
                                            : "bg-[#192339]"                // default
                                    }
  `}
                            />

                            {/* TEXT (2 LINES) */}
                            <div className="text-[11px] text-center leading-tight">
                                <span
                                    className={
                                        activeTab === i
                                            ? "text-white"
                                            : "text-[#192339]"
                                    }
                                >
                                    {words[0]}
                                </span>

                                {words.length > 1 && (
                                    <div  className={
                                        activeTab === i
                                            ? "text-white"
                                            : "text-[#192339]"
                                    }>
                                        {words.slice(1).join(" ")}
                                    </div>
                                )}
                            </div>
                        </button>
                    );
                })}

            </div>
        </div>
    );
}
