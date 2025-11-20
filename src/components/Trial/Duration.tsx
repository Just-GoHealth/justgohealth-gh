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
    <div className="w-full h-auto pb-12 flex flex-col items-center justify-start">
      <h3 className="text-3xl md:text-5xl font-black text-black/90">
        How long before the exam/quiz?
      </h3>
      <div className="w-full flex flex-col md:flex-row items-center justify-center  gap-4 md:gap-10 mt-6 md:mt-16">
        {/** Use a schools array of objects so each campus has an id and a name */}
        {durations.map((s: string[], index: number) => (
          <Button
            key={index}
            onClick={() => handleSelect(`${s[0]} ${s[1]}`)}
            variant="outline"
            className={`p-4 md:p-12 h-36 w-36 p-12 md:h-48 md:w-48 xl:h-56 xl:w-56 text-xl font-bold  ${
              trialData.timeToExam == `${s[0]} ${s[1]}`
                ? "bg-[#2bb573] text-white hover:bg-[#2bb573] border-white border-8 ring-8 ring-[#2bb573] hover:text-white"
                : "bg-black/90 text-white hover:bg-[#2bb573]/70 hover:text-white/50"
            } gap-3 flex flex-col items-center justify-center hover:cursor-pointer text-white hover:bg-[#2bb573] hover:text-white rounded-full`}
          >
            <p className="text-4xl md:text-7xl font-black">{s[0]}</p>
            <p className="text-xs md:text-base">{s[1]}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Duration;
