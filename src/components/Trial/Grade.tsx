import React from "react";
import { Button } from "../ui/button";
import { useTrial } from "@/contexts/trial.context";

const Grade = () => {
  const grades = ["1", "2", "3", "4", "5", "6"];

  const { onTrialDataChange, trialData, setStep, setInnerStep } = useTrial();
  const handleGradeChange = (grade: string) => {
    // Handle grade change logic here
    onTrialDataChange("level", grade);
    setStep((prev) => ++prev);
    setInnerStep(0);
  };
  return (
    <div>
      <h3 className="text-2xl md:text-5xl  xl:text-[60px] 2xl:text-[80px] text-black/90 leading-2xl md:eading-[80px] font-black mb-6">
        What level or form are you currently in?
      </h3>

      <div className="w-full md:w-4/5 grid grid-cols-3 md:flex items-center justify-start gap-4">
        {grades.map((grade: string) => (
          <Button
            key={grade}
            onClick={() => handleGradeChange(grade)}
            variant="outline"
            className={`h-18 md:h-20 w-18 md:w-20 text-xl font-bold bg-white/90 gap-3 flex flex-col items-center justify-center hover:cursor-pointer text-black border-3 ${
              trialData.level == grade
                ? "bg-[#2bb573] border-[#2bb573] text-white hover:bg-[#2bb573] hover:text-white"
                : "hover:border-[#2bb573] border-black hover:bg-[#2bb573] hover:text-white"
            } rounded-full`}
          >
            <p className="text-xl font-black">{grade}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Grade;
