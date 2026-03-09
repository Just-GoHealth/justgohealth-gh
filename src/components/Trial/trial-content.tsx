"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { useTrial } from "@/contexts/trial.context";
import { TrialContentProps } from "@/types/trial.interface";
import HealthResults from "./HealthResults";
import Details from "./Details";
import MentalHealth from "./MentalHealth";
import ExamAnxiety from "./ExamAnxiety";
import ExamPreparation from "./ExamPreparation";
import TrialNavigation from "./TrialNavigation";
import { StepHeader } from "./step-header";
import { ProgressBar } from "./progress-bar";
import { SectionTitle } from "./section-title";

export const TrialContent = ({
  setShowTrialModal,
  schools,
}: TrialContentProps) => {
  const { step, error } = useTrial();

  useEffect(() => {
    if (!error) return;
    toast(error, { className: "text-red-500" });
  }, [error]);

  const handleClose = () => setShowTrialModal?.(false);

  /* Results — full screen */
  if (step === 6) {
    return (
      <div className="fixed inset-0 z-50">
        <HealthResults />
      </div>
    );
  }

  return (
    /* Backdrop */
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 md:px-10 xl:px-20 py-6 backdrop-blur-2xl">
      {/* Card */}
      <div className="w-full max-w-5xl flex flex-col overflow-hidden relative bg-card rounded-4xl h-[min(90dvh,700px)]">
        {/* Step header */}
        <StepHeader current={step} onClose={handleClose} />

        {/* Progress bar */}
        <ProgressBar step={step} />

        {/* Section title */}
        <SectionTitle step={step} />

        {/* Content area */}
        <div className="flex-1 min-h-0 px-6 md:px-10 pb-20 overflow-hidden">
          {step < 3 && <Details schools={schools} />}
          {step === 3 && <MentalHealth />}
          {step === 4 && <ExamAnxiety />}
          {step === 5 && <ExamPreparation />}
        </div>

        {/* Nav */}
        <TrialNavigation />
      </div>
    </div>
  );
};
