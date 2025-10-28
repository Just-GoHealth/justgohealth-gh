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
  undefined
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
    {} as ITrialResponse
  );
  const [trialData, setTrialData] = useState<ITrial>({} as ITrial);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onTrialDataChange = useCallback(
    (property: string, value: number | string) => {
      setTrialData((prev) => ({ ...prev, [property]: value }));
    },
    []
  );

  const cleanUpTrial = () => {
    setInnerStep(0);
    setStep(0);
    setTrialData({} as ITrial);
  };

  const prev = () => {
    // Check the step and then set the last inner step of the previous component
    if (step === 0) return;
    if (innerStep > 0) {
      setInnerStep(innerStep - 1);
    }

    // console.log(innerStep);
    if (innerStep == 0) {
      // Check current step and setInnerStep as required
      if (step == 1) setInnerStep(0);
      if (step == 2) setInnerStep(1);
      if (step == 3) setInnerStep(3);
      if (step == 4) setInnerStep(4);
      if (step == 5) setInnerStep(5);
      setStep(step - 1);
    }
  };

  const moveToNextStep = () => {
    setInnerStep(0);
    setStep((prev) => ++prev);
  };

  const moveToNextInnerStep = () => {
    setInnerStep((prev) => ++prev);
  };
  const next = () => {
    // We skipped the first step which is 0 and started with step 1 because step
    const data = [
      [0, 0],
      [1, 1],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 5],
    ];

    for (let i = 0; i < data.length; i++) {
      if (step == data[i][0]) {
        if (innerStep == data[i][1]) moveToNextStep();
        else moveToNextInnerStep();
        break;
      }
    }
  };

  const done = async () => {
    setIsLoading(true);
    try {
      setError(null);
      const response = await sendTrialRequest(trialData);

      setTrialResponse(response);
      // Set next step
      setIsLoading(false);
      setStep(6);
    } catch (e) {
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
