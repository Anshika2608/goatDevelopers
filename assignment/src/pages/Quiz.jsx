import { useState } from "react";
import { quizData } from "../data/quixData";
import wrong from "../assets/wrong.png"
import correct from "../assets/correct.png"
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import QuizBackground from "../components/quiz/QuizBackground";
import QuizFeedback from "../components/quiz/QuizFeedback";
import QuizNavigation from "../components/quiz/QuizNavigation";
import QuizOptions from "../components/quiz/QuizOptions";
import QuizProgress from "../components/quiz/QuizProgress";

export default function Quiz() {
    const [currentQ, setCurrentQ] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showBot, setShowBot] = useState(false);
    const [showCorrect, setShowCorrect] = useState(false);
    const [showExplanation, setShowExplanation] = useState(false);
    const [answers, setAnswers] = useState([]);
    const q = quizData[currentQ];
    const total = quizData.length;
 const navigate = useNavigate();
    const handleSelect = (index) => {
        setSelected(index);

        const isCorrect = q.options[index].isCorrect;

        setAnswers((prev) => {
            const updated = [...prev];
            updated[currentQ] = isCorrect;
            return updated;
        });

        if (isCorrect) {
            setScore((prev) => prev + 1);
            setShowCorrect(true);
            setShowBot(false);
            setShowExplanation(false);
        } else {
            setShowCorrect(false);
            setShowBot(true);

            setTimeout(() => {
                setShowExplanation(true);
            }, 700);
        }
    };

    const handleNext = () => {
        setSelected(null);
        setShowExplanation(false);
        setShowBot(false);   // ✅ reset bot
        setShowCorrect(false);
        if (currentQ < total - 1) {
            setCurrentQ((prev) => prev + 1);
        } else {
            navigate("/result", {
                state: {
                    score,
                    total
                }
            });
        }
    };

    const handleBack = () => {
        if (currentQ > 0) {
            setCurrentQ((prev) => prev - 1);
            setSelected(null);
            setShowExplanation(false);
            setShowBot(false);   // ✅ reset bot
            setShowCorrect(false);
        }
    };

    return (
        <div className="h-screen bg-transparent text-white flex flex-col items-center justify-center relative">
            <QuizBackground />
            {/* 🔹 BACK BUTTON */}
            <button
                onClick={handleBack}
                className="absolute left-16 top-16 text-[#A5B4D6] hover:text-white"
            >
                <ArrowLeft size={22} />
            </button>

            {/* 🔹 PROGRESS LINES */}
            <QuizProgress currentQ={currentQ} answers={answers} />

            {/* 🔹 QUESTION */}
            {/* 🔹 QUESTION */}
            <h2 className="absolute top-52 text-[33px] max-w-2xl text-center">
                {q.question}
            </h2>

            {/* 🔹 OPTIONS */}
            <QuizOptions q={q} selected={selected} onSelect={handleSelect} />

            <QuizNavigation
                currentQ={currentQ}
                selected={selected}
                onBack={handleBack}
                onNext={handleNext}
            />

            <QuizFeedback
                q={q}
                selected={selected}
                showBot={showBot}
                showCorrect={showCorrect}
                showExplanation={showExplanation}
                wrong={wrong}
                correct={correct}
                onCloseCorrect={() => setShowCorrect(false)}
                onCloseExplanation={() => setShowExplanation(false)}
            />
        </div>
    );
}
