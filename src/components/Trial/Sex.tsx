import { useTrial } from "@/contexts/trial.context";
import { Check } from "lucide-react";
import { TRIAL_SEX_OPTIONS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const Sex = () => {
  const { onTrialDataChange, trialData } = useTrial();

  return (
    <div className="flex flex-col gap-2.5">
      {TRIAL_SEX_OPTIONS.map(({ label, emoji, color }) => {
        const selected = trialData.sex === label;
        return (
          <button
            key={label}
            onClick={() => onTrialDataChange("sex", label)}
            className={cn(
              "w-full py-4 px-5 rounded-2xl text-left font-semibold text-base transition-all duration-200 flex items-center gap-4 border",
              selected
                ? ""
                : "bg-white border-border text-muted-foreground hover:bg-muted-foreground/5",
            )}
            style={{
              backgroundColor: selected ? `${color}12` : undefined,
              borderColor: selected ? color : undefined,
              color: selected ? color : undefined,
            }}
          >
            <span className="text-xl w-7 text-center">{emoji}</span>
            <span className="flex-1">{label}</span>
            {selected && <Check size={15} />}
          </button>
        );
      })}
    </div>
  );
};

export default Sex;
