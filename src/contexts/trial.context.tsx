"use client";
import { ITrial } from "@/types/trial.interface";
import React, { useState } from "react";

type TrialContextType = {
  step: number;
  innerStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onTrialDataChange: (property: string, value: string | number) => void;
  prev: (currentStep: number) => void;
  trialData: ITrial;
  done: () => void;
  setInnerStep: React.Dispatch<React.SetStateAction<number>>;
};

const TrialContext = React.createContext<TrialContextType | undefined>(
  undefined
);

export function TrialProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [step, setStep] = useState<number>(1);
  const [innerStep, setInnerStep] = useState<number>(0);

  const [trialData, setTrialData] = useState<ITrial>({
    campus: "",
    reasonForLockin: "",
    timeToExam: "",
    fullName: "",
    age: 0,
    sex: "",
    level: "",
    feelingDepressed: "",
    lossOfInterest: "",
    feelingLonely: "",
    suicidalThoughts: "",
    suicidalPlans: "",
    examWorrying: "",
    sleepProblems: "",
    fearOfFailure: "",
    feelingNervous: "",
    sweatingOrHeartRacing: "",
    stomachUpset: "",
    motivationToStudy: "",
    focusWhileStudying: "",
    activeStudying: "",
    activeRecall: "",
    lastMinuteStudying: "",
  });

  const onTrialDataChange = (property: string, value: number | string) => {
    setTrialData((prev) => ({ ...prev, [property]: value }));
  };

  const prev = (currentStep: number) => {
    // Check the step and then set the last inner step of the previous component
    if (step === 0) return;
    if (currentStep > 0) {
      setInnerStep(currentStep - 1);
    }

    // console.log(currentStep);
    if (currentStep == 0) {
      // Check current step and setInnerStep as required
      if (step == 1) setInnerStep(0);
      if (step == 2) setInnerStep(1);
      if (step == 3) setInnerStep(3);
      if (step == 4) setInnerStep(4);
      if (step == 5) setInnerStep(5);
      setStep(step - 1);
    }
  };

  const done = () => {
    console.log(trialData);
  };

  return (
    <TrialContext.Provider
      value={{
        step,
        setStep,
        onTrialDataChange,
        setInnerStep,
        prev,
        done,
        innerStep,
        trialData,
      }}
    >
      {children}
    </TrialContext.Provider>
  );
}

export function useTrial() {
  const ctx = React.useContext(TrialContext);
  if (!ctx) throw new Error("useTrial must be used within a TrialProvider");
  return ctx;
}
