import React from "react";
import { Button } from "../ui/button";
import { useTrial } from "@/contexts/trial.context";

const Age = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const ages = [
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
  ];

  const { onTrialDataChange, trialData } = useTrial();
  const handleAgeChange = (age: string) => {
    // Handle age change logic here
    onTrialDataChange("age", age);
    setStep((prev) => ++prev);
  };
  return (
    <div>
      <h3 className="text-3xl md:text-[60px] 2xl:text-[80px] text-black/90 font-black mb-6">
        How old are you this year?
      </h3>

      <div className="w-full grid grid-cols-3 md:grid-cols-12 items-center justify-between gap-4">
        {ages.map((age: string, index: number) => (
          <Button
            key={age}
            onClick={() => handleAgeChange(age)}
            variant="outline"
            className={`h-18 md:h-16 md:w-16 2xl:h-20 w-18 2xl:w-20 text-xl font-bold bg-white/90 gap-3 flex flex-col items-center justify-center hover:cursor-pointer text-black border-3 ${
              trialData.age == +age
                ? "bg-[#2bb573] border-[#2bb573] text-white hover:bg-[#2bb573] hover:text-white"
                : "hover:border-[#2bb573] border-black hover:bg-[#2bb573] hover:text-white"
            } rounded-full`}
          >
            <p className="text-xl font-black">
              {index == 0 && "-"}
              {age}
              {index == ages.length - 1 && "+"}
            </p>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Age;
