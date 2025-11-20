import React from "react";
import { Button } from "@/components/ui/button";
import Duration from "./Duration";
import { useTrial } from "@/contexts/trial.context";
import { Check } from "lucide-react";

const reasons = [
  ["WASSCE", "BECE", "NSMQ", "Exam/Quiz", "GPA/CWA", "INTERVIEW", "DEFENSE"],
  [
    "BREAKUP",
    "FAILURE",
    "DEATH",
    "After A Loss",
    "STRESS",
    "GRIEF",
    "REJECTION",
  ],
];

const Reason = () => {
  const {
    onTrialDataChange,
    innerStep: step,
    setInnerStep: setStep,
    trialData,
  } = useTrial();
  // const [step, setStep] = useState(innerStep || 0);

  const handleReasonSelect = (reason: string) => {
    onTrialDataChange("reasonForLockin", reason);
    setStep((prev) => ++prev);
  };
  return (
    <>
      {step == 0 && (
        <div className="w-full h-auto pb-4 flex flex-col items-center justify-start">
          <h3 className="text-3xl md:text-5xl font-black text-black/90">
            Why are you locking in right now?
          </h3>
          <div className="w-full flex flex-col md:flex-row items-center justify-center  gap-4 md:gap-8 mt-8">
            {/** Use a schools array of objects so each campus has an id and a name */}
            {reasons.map((s: string[], index: number) => (
              <Button
                key={index}
                onClick={() => handleReasonSelect(s[3])}
                variant="outline"
                disabled={index == 1}
                className={`p-4 md:p-12 h-46 w-46 md:w-64 md:h-64 xl:h-78 xl:w-78 text-xl font-bold ${
                  trialData.reasonForLockin == s[3]
                    ? "bg-[#2bb573] text-white  hover:bg-[#2bb573] hover:text-white border-white gap-2 border-8 ring-8 ring-[#2bb573] hover:text-white"
                    : "gap-2 md:gap-6 bg-black/90 text-white hover:bg-[#2bb573]/70 hover:text-white/50"
                } cursor-not-allowed flex flex-col items-center justify-center hover:cursor-pointer rounded-full`}
              >
                {trialData.reasonForLockin != s[3] && (
                  <>
                    <p className="text-sm md:text-base">{s[0]}</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm md:text-base">{s[1]}</p>
                      <p className="text-sm md:text-base">{s[2]}</p>
                    </div>
                    <p className="text-2xl md:text-4xl font-black">{s[3]}</p>
                    <div className="flex items-center justify-between w-full">
                      <p className="text-sm md:text-base">{s[4]}</p>
                      <p className="text-sm md:text-base">{s[5]}</p>
                    </div>
                    <p className="text-sm md:text-base">{s[6]}</p>
                  </>
                )}
                {trialData.reasonForLockin == s[3] && (
                  <>
                    <p className="text-2xl md:text-4xl font-black">{s[3]}</p>
                    <Check className="!w-16 !h-16 md:w-36 md:h-36 text-white" />
                  </>
                )}
              </Button>
            ))}
          </div>
        </div>
      )}
      {step == 1 && <Duration />}
    </>
  );
};

export default Reason;
