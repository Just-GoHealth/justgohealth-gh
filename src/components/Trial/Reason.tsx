import { useTrial } from "@/contexts/trial.context";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { LOCK_IN_REASONS } from "@/lib/constants";
import Duration from "./Duration";

const Reason = () => {
  const { onTrialDataChange, innerStep, trialData, next } = useTrial();

  const handleReasonSelect = (reason: string) => {
    onTrialDataChange("reasonForLockin", reason);
  };

  if (innerStep === 1) return <Duration />;

  return (
    <div className="w-full h-full flex flex-col">
      <p className="text-xs font-bold tracking-widest uppercase mb-1 text-primary">
        Your Reason
      </p>
      <h3 className="text-2xl  font-medium leading-tight mb-6 mt-1  tracking-[-0.02em]">
        Why are you locking in?
      </h3>

      <div className="flex flex-col md:flex-row gap-12 md:gap-32 flex-1 items-center justify-center">
        {LOCK_IN_REASONS.map(
          ({ tags, primary, emoji, color, lightBg, ringColor, desc }) => {
            const selected = trialData.reasonForLockin === primary;
            return (
              <button
                key={primary}
                onClick={() => handleReasonSelect(primary)}
                className="relative flex flex-col items-center justify-center text-center transition-all duration-300 group w-[clamp(180px,38%,240px)] aspect-square rounded-full shrink-0 p-5 hover:bg-transparent!"
                style={{
                  backgroundColor: selected ? `${color}12` : lightBg,
                  border: `3px solid ${selected ? color : ringColor}`,
                  boxShadow: selected
                    ? `0 0 0 8px ${color}15, 0 16px 48px ${color}25`
                    : `0 0 0 6px ${ringColor}, 0 4px 20px rgba(0,0,0,0.07)`,
                }}
              >
                {/* Floating tag chips — orbit the circle */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300",
                    selected ? "opacity-0" : "opacity-100",
                  )}
                >
                  {tags.slice(0, 6).map((tag, ti) => {
                    // Evenly distribute around the circle edge
                    const angle = (ti / 6) * 360 - 90;
                    const rad = (angle * Math.PI) / 180;
                    // Position as %, offset from center (50%) + radius (52% to sit just outside)
                    const x = 50 + 56 * Math.cos(rad);
                    const y = 50 + 56 * Math.sin(rad);
                    return (
                      <span
                        key={tag}
                        className="absolute text-[9px] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap border"
                        style={{
                          left: `${x}%`,
                          top: `${y}%`,
                          transform: "translate(-50%, -50%)",
                          backgroundColor: `${color}15`,
                          color: color,
                          borderColor: `${color}25`,
                        }}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Center content */}
                <div className="relative z-10 flex flex-col items-center gap-2">
                  {selected ? (
                    <>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center mb-1"
                        style={{ backgroundColor: `${color}20` }}
                      >
                        <Check size={22} strokeWidth={3} style={{ color }} />
                      </div>
                      <span className="text-3xl leading-none mb-1">
                        {emoji}
                      </span>
                      <p
                        className="text-base font-black leading-tight"
                        style={{ color }}
                      >
                        {primary}
                      </p>
                      <p className="text-[10px] font-medium leading-tight px-2 text-[#78716C]">
                        {desc}
                      </p>
                    </>
                  ) : (
                    <>
                      <span className="text-3xl leading-none mb-1">
                        {emoji}
                      </span>
                      <p className="text-base font-black leading-tight text-[#1C1917]">
                        {primary}
                      </p>
                      <p className="text-[10px] font-medium leading-tight px-2 text-[#78716C]">
                        {desc}
                      </p>
                    </>
                  )}
                </div>
              </button>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Reason;
