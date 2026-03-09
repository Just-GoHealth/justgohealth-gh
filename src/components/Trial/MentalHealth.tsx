"use client";
import { useTrial } from "@/contexts/trial.context";
import {
  GENERAL_MENTAL_HEALTH_MODAL_DATA,
  GENERAL_MENTAL_HEALTH_ACCENTS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import TrialModal from "./trial-modal";

export default function MentalHealth() {
  const { innerStep } = useTrial();
  const N = GENERAL_MENTAL_HEALTH_MODAL_DATA.length;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center gap-1.5 mb-2 shrink-0">
        <div className="flex items-center gap-1.5">
          {GENERAL_MENTAL_HEALTH_MODAL_DATA.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === innerStep ? "w-6" : "w-1.5",
              )}
              style={{
                backgroundColor:
                  i <= innerStep ? GENERAL_MENTAL_HEALTH_ACCENTS[i] : "#E8E4DF",
              }}
            />
          ))}
        </div>
        <span className="ml-auto text-xs font-semibold text-muted-foreground">
          {innerStep + 1} / {N}
        </span>
      </div>

      <div className="flex-1 overflow-hidden">
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            width: `${N * 100}%`,
            transform: `translateX(-${innerStep * (100 / N)}%)`,
          }}
        >
          {GENERAL_MENTAL_HEALTH_MODAL_DATA.map((d, i) => (
            <div
              key={i}
              className="h-full overflow-y-auto rounded-3xl relative no-scrollbar"
              style={{ width: `${100 / N}%` }}
            >
              <TrialModal
                {...d}
                isLast={i === N - 1}
                accent={GENERAL_MENTAL_HEALTH_ACCENTS[i]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
