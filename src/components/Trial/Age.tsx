import { useTrial } from "@/contexts/trial.context";
import { TRIAL_AGE_RANGES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Age = () => {
  const { onTrialDataChange, trialData } = useTrial();

  return (
    <div className="flex-1 overflow-y-auto pr-1 no-scrollbar max-h-95">
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {TRIAL_AGE_RANGES.map((age) => {
          const selected = trialData.age === age;
          return (
            <button
              key={age}
              onClick={() => onTrialDataChange("age", age)}
              className={cn(
                "py-3 rounded-xl font-bold text-sm transition-all duration-200 border flex flex-col items-center justify-center gap-1",
                selected
                  ? "bg-primary text-white border-primary shadow-[0_4px_12px_rgba(153,51,153,0.3)]"
                  : "bg-white border-border text-muted-foreground hover:bg-muted-foreground/5",
              )}
            >
              <span className="text-xs opacity-60 font-medium">Age</span>
              <span className="text-base">{age}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Age;
