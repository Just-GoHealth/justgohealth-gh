import React from "react";
import { Button } from "@/components/ui/button";
import { useTrial } from "@/contexts/trial.context";

const durations = [
  ["24", "Hours"],
  ["7", "Days"],
  ["3", "Weeks"],
];

const Duration = () => {
  const { onTrialDataChange, setStep, setInnerStep, trialData } = useTrial();

  const handleSelect = (id: string) => {
    onTrialDataChange("timeToExam", id);
    setStep((prev) => ++prev);
    setInnerStep(0);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <h3 className="text-5xl font-black text-black/90">
        How long before the exam/quiz?
      </h3>
      <div className="w-full flex items-center justify-center  gap-10 mt-16">
        {/** Use a schools array of objects so each campus has an id and a name */}
        {durations.map((s: string[], index: number) => (
          <Button
            key={index}
            onClick={() => handleSelect(`${s[0]} ${s[1]}`)}
            variant="outline"
            className={`p-12 h-56 w-56 text-xl font-bold  ${
              trialData.timeToExam == `${s[0]} ${s[1]}`
                ? "bg-[#2bb573] text-white hover:bg-[#2bb573] border-white border-8 ring-8 ring-[#2bb573] hover:text-white"
                : "bg-black/90 text-white hover:bg-[#2bb573]/70 hover:text-white/50"
            } gap-3 flex flex-col items-center justify-center hover:cursor-pointer text-white hover:bg-[#2bb573] hover:text-white rounded-full`}
          >
            <p className="text-7xl font-black">{s[0]}</p>
            <p>{s[1]}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Duration;
