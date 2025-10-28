import React from "react";
import { Button } from "@/components/ui/button";
import { useTrial } from "@/contexts/trial.context";
import { ISchool } from "@/types/school.interface";

const dummySchools = [
  { id: "campus-a", name: "Campus A" },
  { id: "campus-b", name: "Campus B" },
  { id: "campus-c", name: "Campus C" },
  { id: "campus-d", name: "Campus D" },
  { id: "campus-e", name: "Campus E" },
  { id: "campus-f", name: "Campus F" },
];

const School = ({ schools }: { schools: ISchool[] }) => {
  const { onTrialDataChange, setStep, setInnerStep, trialData } = useTrial();

  const handleSelect = (id: string) => {
    onTrialDataChange("campus", id);
    setStep((prev) => ++prev);
    setInnerStep(0);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-start">
      <h3 className="text-3xl md:text-5xl font-black text-black/80">
        Select your current campus:{" "}
      </h3>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 mt-12">
        {/** Use a schools array of objects so each campus has an id and a name */}
        {(schools?.length ? schools : dummySchools).map((s) => (
          <Button
            onClick={() => handleSelect("" + s.id)}
            key={s.id}
            variant="outline"
            className={`w-full py-4 h-12 md:h-20 text-sm md:text-xl font-bold ${
              trialData.campus === "" + s.id
                ? "bg-[#2bb573] text-white  hover:bg-[#2bb573] hover:text-white"
                : "bg-black text-white hover:bg-[#2bb573]/70 hover:text-white/50"
            } hover:cursor-pointer rounded-full`}
          >
            {s.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default School;
