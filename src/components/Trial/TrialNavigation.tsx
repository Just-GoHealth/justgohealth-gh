import { useTrial } from "@/contexts/trial.context";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import { ITrial } from "@/types/trial.interface";

const steps = [
  ["campus"],
  ["reasonForLockin", "timeToExam"],
  ["fullName", "age", "sex", "level"],
  [
    "lossOfInterest",
    "feelingDepressed",
    "feelingLonely",
    "suicidalThoughts",
    "suicidalPlans",
  ],
  [
    "examWorrying",
    "sleepProblems",
    "fearOfFailure",
    "feelingNervous",
    "sweatingOrHeartRacing",
    "stomachUpset",
  ],
  [
    "motivationToStudy",
    "focusWhileStudying",
    "activeStudying",
    "activeRecall",
    "lastMinuteStudying",
  ],
];

const TrialNavigation = () => {
  const {
    step,
    innerStep,
    trialData,
    next,
    prev,
    isFullNameError,
    done,
    isLoading,
  } = useTrial();

  const trialStepKey = steps[step]?.[innerStep] as keyof ITrial;
  const trialStepValue = trialData[trialStepKey];

  const canAdvance =
    !(step === 5 && innerStep === 4) &&
    ((trialStepKey !== "fullName" && trialStepValue) ||
      (trialStepKey === "fullName" && !isFullNameError));

  const showDone =
    step === 5 && innerStep === 4 && trialData.lastMinuteStudying;

  return (
    <div
      className="absolute bottom-0 left-0 right-0 px-6 md:px-10 py-5 flex items-center justify-between"
      style={{
        background: "linear-gradient(to top, #FAF8F4 65%, transparent)",
        pointerEvents: "none",
      }}
    >
      {/* Prev */}
      <button
        onClick={() => prev()}
        disabled={step === 0}
        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm"
        style={{
          backgroundColor: step === 0 ? "#F5F2EE" : "#FFFFFF",
          color: step === 0 ? "#C8C3BD" : "#44403C",
          cursor: step === 0 ? "not-allowed" : "pointer",
          pointerEvents: "auto",
          border: "1.5px solid #E8E4DF",
        }}
      >
        <ChevronLeft size={17} />
      </button>

      {/* Done */}
      {showDone && (
        <button
          disabled={isLoading}
          onClick={() => done()}
          className="flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm transition-all duration-200"
          style={{
            background: isLoading
              ? "#E8E4DF"
              : "linear-gradient(135deg, #993399, #C654C6)",
            color: isLoading ? "#A89F96" : "#FFFFFF",
            cursor: isLoading ? "not-allowed" : "pointer",
            pointerEvents: "auto",
          }}
        >
          {isLoading ? (
            <Loader2 size={15} className="animate-spin" />
          ) : (
            <Check size={15} />
          )}
          {isLoading ? "Analysing…" : "See My Results"}
        </button>
      )}

      {/* Next */}
      {canAdvance ? (
        <button
          onClick={() => next()}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #993399, #C654C6)",
            color: "#FFFFFF",
            cursor: "pointer",
            pointerEvents: "auto",
            boxShadow: "0 4px 16px rgba(153,51,153,0.3)",
          }}
        >
          <ChevronRight size={17} />
        </button>
      ) : (
        <div className="w-10 h-10" />
      )}
    </div>
  );
};

export default TrialNavigation;
