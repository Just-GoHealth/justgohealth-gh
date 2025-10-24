import React from "react";
import { Button } from "../ui/button";
import { useTrial } from "@/contexts/trial.context";

const Sex = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const sexOptions = ["Male", "Female"];

  const { onTrialDataChange, trialData } = useTrial();
  const handleSexChange = (sex: string) => {
    // Handle sex change logic here
    onTrialDataChange("sex", sex);
    setStep((prev) => ++prev);
  };
  return (
    <div>
      <h3 className="text-3xl md:text-[80px] text-black/90 font-black mb-6">
        What&apos;s your biological sex?
      </h3>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
        {sexOptions.map((sex: string) => (
          <Button
            key={sex}
            onClick={() => handleSexChange(sex)}
            variant="outline"
            className={`w-full md:w-1/2 py-4 h-20 text-xl font-bold ${
              trialData.sex === sex
                ? "bg-[#2bb573] text-white  hover:bg-[#2bb573] hover:text-white"
                : "bg-black text-white hover:bg-[#2bb573]/70 hover:text-white/50"
            } hover:cursor-pointer rounded-full`}
          >
            <p className="text-xl md:text-4xl font-black uppercase">{sex}</p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sex;
