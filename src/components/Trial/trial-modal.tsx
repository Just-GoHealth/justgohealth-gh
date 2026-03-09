import { IModalData } from "@/types/trial.interface";
import { useTrial } from "@/contexts/trial.context";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface IData extends IModalData {
  isLast: boolean;
  isComplete?: boolean;
  accent?: string;
}

const TrialModal = ({
  title,
  description,
  options,
  property,
  accent = "#993399",
  icon: Icon,
}: IData) => {
  const { onTrialDataChange, trialData } = useTrial();

  const handleSelect = (value: string) => {
    onTrialDataChange(property, value);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4 py-10">
      {/* Icon bubble */}
      {Icon && (
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm"
          style={{ color: accent }}
        >
          {Icon ? (
            <Icon size={28} strokeWidth={2.5} />
          ) : (
            (title.match(/\p{Emoji}/u)?.[0] ?? null)
          )}
        </div>
      )}

      <h2 className="text-2xl md:text-3xl xl:text-4xl font-black text-center leading-tight mb-3 pt-2 tracking-tight">
        {title.replace(/\p{Emoji}/gu, "").trim()}
      </h2>

      <p className="text-sm md:text-base text-center max-w-md leading-relaxed text-[#78716C]">
        {description}
      </p>

      <div
        className={cn(
          "w-full max-w-sm mt-8 grid gap-2.5 ",
          options.length === 2 ? "grid-cols-2" : "grid-cols-1",
        )}
      >
        {options.map((option, i) => {
          const selected = trialData[property] === option;
          return (
            <button
              key={i}
              onClick={() => handleSelect(option)}
              className={cn(
                "relative w-full py-3.5 px-5 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-between group h-12",
                selected
                  ? "text-white -translate-y-px"
                  : "bg-white border-[#E8E4DF] border-[1.5px] text-[#44403C] shadow-[0_1px_4px_rgba(0,0,0,0.06)] translate-y-0",
              )}
              style={{
                backgroundColor: selected ? accent : undefined,
                borderColor: selected ? accent : undefined,
                boxShadow: selected ? `0 4px 16px ${accent}35` : undefined,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              <span>{option}</span>
              {selected ? (
                <span className="w-5 h-5 rounded-full bg-white/25 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-white" />
                </span>
              ) : (
                <span className="w-5 h-5 rounded-full border border-[#D4CFC9] shrink-0 group-hover:border-current transition-colors" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrialModal;
