import { useTrial } from "@/contexts/trial.context";
import { Check } from "lucide-react";
import { TRIAL_GRADE_GROUPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Grade = () => {
  const { onTrialDataChange, trialData } = useTrial();

  return (
    <div className="overflow-y-auto space-y-4 no-scrollbar">
      {TRIAL_GRADE_GROUPS.map(({ label, items }) => (
        <div key={label}>
          <p className="text-[10px] font-black tracking-widest uppercase mb-2 text-[#C4BDB6]">
            {label}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {items.map((grade) => {
              const selected = trialData.level === grade;
              return (
                <button
                  key={grade}
                  onClick={() => onTrialDataChange("level", grade)}
                  className={cn(
                    "py-3 px-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-1 border",
                    selected
                      ? "bg-primary text-white border-primary"
                      : "bg-white border-border text-muted-foreground hover:bg-muted-foreground/5",
                  )}
                >
                  <span className="truncate">{grade}</span>
                  {selected && <Check size={12} className="shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grade;
