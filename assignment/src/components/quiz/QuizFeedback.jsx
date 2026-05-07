export default function QuizFeedback({
    q,
    selected,
    showBot,
    showCorrect,
    showExplanation,
    wrong,
    correct,
    onCloseCorrect,
    onCloseExplanation,
}) {
    return (
        <>
            {showBot && (
                <img
                    src={wrong}
                    alt="bot"
                    className="absolute bottom-10 left-20 w-36 h-[150px] z-10 animate-fadeIn"
                />
            )}
            {showCorrect && (
                <img
                    src={correct}
                    alt="correct"
                    className="absolute bottom-10 right-10 w-36 h-[150px] z-10 animate-fadeIn"
                />
            )}
            {showCorrect && (
                <div className="
    absolute bottom-24 right-40
    w-[415px] h-[220px]
    p-6
    rounded-2xl
    backdrop-blur-xl
    bg-gradient-to-br from-[#0f172a]/90 to-[#020617]/80
    border border-[#1f2937]
    shadow-2xl
    animate-fadeIn
  ">
                    {/* CLOSE */}
                   <button
  onClick={onCloseCorrect}
  className="absolute top-3 right-3 h-10 w-10 flex items-center justify-center text-[#94a3b8] hover:text-white text-2xl"
>
  ×
</button>

                    <p className="mt-2 font-semibold text-base text-center">
                        Your Right
                    </p>

                    <p className="text-base font-light mt-6 text-[#F8FAFC] leading-6 text-center">
                        <span className="font-semibold text-[#F8FAFC] text-base">Explanation: </span>

                        {
                            q.options.find((opt) => opt.isCorrect).explanation
                        }
                    </p>
                </div>
            )}
            {/* 🔹 AI EXPLANATION */}
            {showExplanation && (
                <div className="
    absolute bottom-24 left-40
    w-[415px] h-[319px]
    p-6
    rounded-2xl
    backdrop-blur-xl
    bg-gradient-to-br from-[#0f172a]/90 to-[#020617]/80
    border border-[#1f2937]
    shadow-2xl
    animate-fadeIn
  ">
                    {/* CLOSE */}
                    <button
                        onClick={onCloseExplanation}
                        className="absolute top-3 right-3 text-[#94a3b8] hover:text-white text-3xl"
                    >
                        ×
                    </button>

                    <p className="mt-4 font-semibold text-base">
                        Incorrect
                    </p>

                    <p className="text-base font-light  mt-6 text-[#F8FAFC] leading-6">
                        {selected !== null && !q.options[selected].isCorrect
                            ? q.options[selected].explanation
                            : ""}
                    </p>

                    <p className="mt-6 text-base text-white text-center font-semibold">
                        Correct Answer:{" "}
                        {q.options.find((opt) => opt.isCorrect).text}
                    </p>

                    <p className="mt-6 text-base font-light text-[#F8FAFC] text-center">
                        <span className="font-semibold text-[#F8FAFC] text-base">Explanation: </span>
                        {
                            q.options.find((opt) => opt.isCorrect).explanation
                        }
                    </p>
                </div>
            )}
        </>
    );
}
