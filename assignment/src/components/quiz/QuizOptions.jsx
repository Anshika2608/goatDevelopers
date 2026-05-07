import {
    Check,
    Droplet,
    Minus,
    TrendingDown,
    TrendingUp,
} from "lucide-react";

const optionIcons = [
    TrendingUp,
    Minus,
    TrendingDown,
    Droplet
];

export default function QuizOptions({ q, selected, onSelect }) {
    return (
        <div className="grid grid-cols-2 mt-80 gap-10 ">
            {q.options.map((opt, i) => {
                const Icon = optionIcons[i];

                return (
                    <button
  key={i}
  onClick={() => onSelect(i)}
  className={`relative
    h-24 w-56
    rounded-xl border transition-all 
    flex items-center px-4 gap-3   /* 👈 important */

    ${
      selected === i
        ? q.options[i].isCorrect
          ? "border-green-500"
          : "border-red-500"
        : "border-[#2a334a]"
    }
  `}
>
  {/* LEFT ICON (fixed) */}
  <div className="flex-shrink-0 text-[#A5B4D6]">
    <Icon size={22} strokeWidth={1.5} />
  </div>

  {/* TEXT (flexible, wraps properly) */}
  <span className="flex-1 text-sm text-left leading-5">
    {opt.text}
  </span>

  {/* CHECK (top-right) */}
  {selected !== null && q.options[i].isCorrect && (
    <Check
      size={18}
      className="text-green-500 absolute top-2 right-2"
    />
  )}
</button>
                );
            })}
        </div>
    );
}
