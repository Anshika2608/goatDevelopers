import { BookOpen, LineChart, FlaskConical, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function SidebarSteps({ activeStep, setActiveStep, expanded }) {
  const icons = [
    <BookOpen />,
    <LineChart />,
    <FlaskConical />,
    <ShieldCheck />
  ];

  return (
    <motion.div
      animate={{
        x: expanded ? 60 : 0,   // 👈 moves right on expand
        opacity: 1
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col justify-center mb-20 gap-8 text-[#5b6b8c]"
    >
      {icons.map((icon, i) => (
        <button
          key={i}
          onClick={() => setActiveStep(i)}
          className={`
            transition
            ${activeStep === i ? "text-white" : ""}
          `}
        >
          {icon}
        </button>
      ))}
    </motion.div>
  );
}