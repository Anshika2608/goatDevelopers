import { quizData } from "../../data/quixData";

export default function QuizProgress({ currentQ, answers }) {
    return (
        <div className="absolute top-20 flex gap-3">
            {quizData.map((_, i) => (
                <div
                    key={i}
                    className={`
              h-[2px] w-14 transition-all duration-300
              ${i === currentQ
                            ? "bg-blue-500"
                            : answers[i] === true
                                ? "bg-green-500"
                                : answers[i] === false
                                    ? "bg-red-500"
                                    : "bg-[#2a334a]"
                        }
            `}
                />
            ))}
        </div>
    );
}
