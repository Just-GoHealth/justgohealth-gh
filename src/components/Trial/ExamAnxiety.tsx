"use client";
import { useTrial } from "@/contexts/trial.context";
import { useIsMobile } from "../../hooks/use-mobile";
import {
  EXAM_ANXIETY_MODAL_DATA,
  EXAM_ANXIETY_ACCENTS,
  EXAM_ANXIETY_BGS,
} from "@/lib/constants";
import { cn } from "@/lib/utils";
import TrialModal from "./trial-modal";

export default function ExamAnxiety() {
  const { innerStep } = useTrial();
  const isMobile = useIsMobile();
  const N = EXAM_ANXIETY_MODAL_DATA.length;

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex items-center gap-1.5 mb-7 shrink-0">
        <div className="flex items-center gap-1.5">
          {EXAM_ANXIETY_MODAL_DATA.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === innerStep ? "w-6" : "w-1.5",
              )}
              style={{
                backgroundColor:
                  i <= innerStep ? EXAM_ANXIETY_ACCENTS[i] : "#E8E4DF",
              }}
            />
          ))}
        </div>
        <span className="ml-auto text-xs font-semibold text-muted-foreground">
          {innerStep + 1} / {N}
        </span>
      </div>

      <div className="flex-1 overflow-x-hidden min-h-0">
        <div
          className="w-[600%] md:w-[575%] h-full flex items-stretch md:gap-2 transition-all duration-300 ease-in-out"
          style={{ marginLeft: `-${innerStep * (isMobile ? 100 : 95.8)}%` }}
        >
          {EXAM_ANXIETY_MODAL_DATA.map((d, i) => (
            <div
              key={i}
              className="w-1/6 h-full overflow-y-auto rounded-3xl relative no-scrollbar pb-2"
            >
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl" />
              <TrialModal
                isComplete={i === N - 1}
                {...d}
                isLast={i === N - 1}
                accent={EXAM_ANXIETY_ACCENTS[i]}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
