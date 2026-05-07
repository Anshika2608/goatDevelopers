export default function QuizBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            {/* Base (very dark) */}
            <div className="absolute inset-0 bg-[#0E0D12]" />

            {/* Subtle blue glow (center-right) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_95%_55%,rgba(37,99,235,0.1),transparent_60%)] blur-2xl" />
        </div>
    );
}
