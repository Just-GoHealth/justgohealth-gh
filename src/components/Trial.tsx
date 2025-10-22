"use client";

import { useState } from "react";
import Details from "./Details";
import MenalHealth from "./MentalHealth";
import { TrialProvider } from "@/contexts/trial.context";

export default function Trial() {
  const [step, setStep] = useState(0);

  return (
    <TrialProvider>
      {step == 0 && <Details setTrialStep={setStep} />}
      {step == 1 && <MenalHealth />}
    </TrialProvider>
  );
}
