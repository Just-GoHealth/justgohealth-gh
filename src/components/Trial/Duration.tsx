import { useTrial } from "@/contexts/trial.context";
import { Check, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { EXAM_DURATIONS } from "@/lib/constants";

const Duration = () => {
  const { onTrialDataChange, trialData, next } = useTrial();

  const handleSelect = (value: string) => {
    onTrialDataChange("timeToExam", value);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        <Clock size={14} className="text-primary" />
        <p className="text-xs font-bold tracking-widest uppercase text-primary">
          Time Frame
        </p>
      </div>
      <h3 className="text-2xl font-medium leading-tight mb-8 mt-1 tracking-[-0.02em]">
        How long until your exam?
      </h3>

      <div className="flex-1 flex items-center justify-start -mx-6 px-6 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex justify-between w-full pb-8">
          {EXAM_DURATIONS.map(({ label, value, icon: Icon, color, bg }) => {
            const selected = trialData.timeToExam === value;
            return (
              <button
                key={value}
                onClick={() => handleSelect(value)}
                className={cn(
                  "relative flex flex-col items-center justify-between p-5 rounded-4xl transition-all duration-500 group",
                  "w-32 md:w-36 aspect-3/4 shrink-0",
                  "border-2 text-center",
                )}
                style={{
                  backgroundColor: selected ? bg : "#FFFFFF",
                  borderColor: selected ? color : "#F0EDE8",
                  boxShadow: selected
                    ? `0 16px 32px ${color}15, inset 0 0 0 1px ${color}20`
                    : "0 4px 12px rgba(0,0,0,0.03)",
                }}
              >
                {/* Visual indicator of selection */}
                <div
                  className={cn(
                    "absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
                    selected ? "scale-100 opacity-100" : "scale-50 opacity-0",
                  )}
                  style={{ backgroundColor: color }}
                >
                  <Check size={12} className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-transform duration-500 group-hover:scale-110",
                      selected ? "bg-white shadow-md" : "bg-[#FAF8F4]",
                    )}
                  >
                    <Icon
                      size={24}
                      style={{ color: selected ? color : "#A8A29E" }}
                      strokeWidth={2.5}
                    />
                  </div>
                  <div>
                    <p
                      className="text-xs font-black leading-tight mb-0.5"
                      style={{ color: selected ? color : "#1C1917" }}
                    >
                      {label}
                    </p>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-[#A8A29E]">
                      {value}
                    </p>
                  </div>
                </div>

                {/* Bottom line decorator */}
                <div
                  className={cn(
                    "w-6 h-0.5 rounded-full transition-all duration-500",
                    selected
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-50",
                  )}
                  style={{ backgroundColor: color }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {/* Hint for scrolling */}
      <div className="flex items-center gap-2 mt-4 text-[#A8A29E] text-[10px] font-bold uppercase tracking-widest animate-pulse">
        <div className="h-px flex-1 bg-linear-to-r from-transparent to-[#F0EDE8]" />
        Scroll to explore
        <div className="h-px flex-1 bg-linear-to-l from-transparent to-[#F0EDE8]" />
      </div>
    </div>
  );
};

export default Duration;
