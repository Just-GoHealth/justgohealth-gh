import React from "react";
import { Button } from "@/components/ui/button";
import { IModalData } from "@/types/trial.interface";
import { useTrial } from "@/contexts/trial.context";
interface IData extends IModalData {
  isLast: boolean;
  isComplete?: boolean;
}

const TrialModal = ({
  title,
  description,
  options,
  property,
  isLast,
  isComplete,
}: IData) => {
  const { onTrialDataChange, setInnerStep, setStep, trialData } = useTrial();

  const handleSelect = (id: string) => {
    onTrialDataChange(property, id);
    if (isLast) {
      if (!isComplete) {
        setStep((prev) => ++prev);
        setInnerStep(0);
        return;
      }

      // Let the done button take care if isComplete is true
    } else {
      setInnerStep((prev) => ++prev);
    }
  };
  return (
    <div className="w-ful  h-full flex flex-col items-center justify-start py-3">
      <h3 className="text-[26px] text-center md:text-7xl 2xl:text-[90px] md:mb-4 font-bold text-black">
        {title}
      </h3>
      <p className="max-w-[90%)] text-xl mt-2 md:mt-0 md:text-4xl font-medium text-black/90 text-center">
        {description}
      </p>
      <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-10">
        {/** Use a schools array of objects so each campus has an id and a name */}
        {options.map((s: string, index: number) => (
          <Button
            onClick={() => handleSelect(s)}
            key={index}
            variant="outline"
            className={`w-full py-4 h-20 text-xl font-bold ${
              trialData[property] === s
                ? "bg-[#2bb573] text-white  hover:bg-[#2bb573] hover:text-white"
                : "bg-black text-white hover:bg-[#2bb573]/70 hover:text-white/50"
            } hover:cursor-pointer rounded-full`}
          >
            {s}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TrialModal;
