"use client";
import { sendTrialRequest } from "@/actions/trial.action";
import { ITrial, ITrialResponse } from "@/types/trial.interface";
import React, { useCallback, useState } from "react";

type TrialContextType = {
  step: number;
  innerStep: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  onTrialDataChange: (property: string, value: string | number) => void;
  prev: () => void;
  next: () => void;
  isFullNameError: boolean;
  setIsFullNameError: React.Dispatch<React.SetStateAction<boolean>>;
  trialData: ITrial;
  done: () => void;
  setInnerStep: React.Dispatch<React.SetStateAction<number>>;
  trialResponse: ITrialResponse;
  cleanUpTrial: () => void;
  isLoading: boolean;
  error: string | null;
};

const TrialContext = React.createContext<TrialContextType | undefined>(
  undefined,
);

export function TrialProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [step, setStep] = useState<number>(0);
  const [innerStep, setInnerStep] = useState<number>(0);
  const [isFullNameError, setIsFullNameError] = useState(true);

  const [trialResponse, setTrialResponse] = useState<ITrialResponse>(
    {} as ITrialResponse,
  );
  const [trialData, setTrialData] = useState<ITrial>({} as ITrial);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onTrialDataChange = useCallback(
    (property: string, value: number | string) => {
      setTrialData((prev) => ({ ...prev, [property]: value }));
    },
    [],
  );

  const cleanUpTrial = () => {
    setInnerStep(0);
    setStep(0);
    setTrialData({} as ITrial);
  };

  const prev = () => {
    if (step === 0 && innerStep === 0) return;

    if (innerStep > 0) {
      setInnerStep(innerStep - 1);
    } else {
      const prevStep = step - 1;

      // Look up the max inner steps for the step we are going backward to
      const stepLimits: Record<number, number> = {
        0: 0,
        1: 1,
        2: 3,
        3: 4,
        4: 5,
        5: 4,
      };

      setStep(prevStep);
      setInnerStep(stepLimits[prevStep] || 0);
    }
  };

  const next = () => {
    const stepLimits: Record<number, number> = {
      0: 0, // Campus: 1 sub-step
      1: 1, // Reason & Duration: 2 sub-steps
      2: 3, // Profile: 4 sub-steps
      3: 4, // Mental Health: 5 sub-steps
      4: 5, // Exam Anxiety: 6 sub-steps
      5: 4, // Exam Prep: 5 sub-steps
    };

    const maxInner = stepLimits[step] || 0;

    if (innerStep < maxInner) {
      setInnerStep((prev) => prev + 1);
    } else {
      setInnerStep(0);
      setStep((prev) => prev + 1);
    }
  };

  const done = async () => {
    setIsLoading(true);
    try {
      setError(null);

      const normalizedData = {
        ...trialData,
        campus: Number(trialData.campus),
        age: Number(trialData.age),
      };

      const response = await sendTrialRequest(normalizedData);

      setTrialResponse(response);
      // Set next step
      setIsLoading(false);
      setStep(6);
    } catch (e) {
      console.log(e);
      setError((e as Error).message);
    } finally {
      setIsLoading(false);
    }
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
        isFullNameError,
        setIsFullNameError,
        next,
        trialResponse,
        cleanUpTrial,
        isLoading,
        error,
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
