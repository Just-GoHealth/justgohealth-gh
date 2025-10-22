"use client";

import { useState } from "react";
import Details from "./Details";
import MenalHealth from "./MentalHealth";
import { TrialProvider } from "@/contexts/trial.context";

import { X } from "lucide-react";
export default function Trial({
  setShowTrialModal,
}: {
  setShowTrialModal?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [step, setStep] = useState(0);

  return (
    <TrialProvider>
      <div className="w-full h-screen fixed z-50 top-0 left-0 bg-white/50 flex items-center justify-center px-4 md: px-24  lg:right-8 lg:bottom-8">
        <button
          onClick={() => setShowTrialModal && setShowTrialModal(false)}
          className="bg-[red] h-10 flex items-center justify-center w-10 hover:cursor-pointer hover:bg-[red]/70 absolute top-4 rounded-full right-4"
        >
          <X className="text-white" />
        </button>
        {step == 0 && <Details setTrialStep={setStep} />}
        {step == 1 && <MenalHealth />}
      </div>
    </TrialProvider>
  );
}
