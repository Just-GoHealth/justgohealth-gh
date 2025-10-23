"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTrial } from "@/contexts/trial.context";

import { IModalData } from "@/types/trial.interface";
import TrialModal from "./TrialModal";

const data: IModalData[] = [
  {
    title: "Loss of Interest ",
    description:
      "In the past 2 weeks, how often do you have little interest or pleasure in doing things?",
    options: ["Not At All", "A few days ", "Sometimes", "Almost everyday"],
    property: "lossOfInterest",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Feeling Depressed",
    description:
      "In the past 2 weeks, how often do you feel sad, down or hopeless? ",
    options: ["Not At All", "A few days ", "Sometimes", "Almost everyday"],
    property: "feelingDepressed",
    bgColor: "bg-[#ECF1F9]",
  },
  {
    title: "Loneliness",
    description: "In the past 2 weeks, how often do you feel lonely? ",
    options: ["Never", "Sometimes", "Often", "Always"],
    property: "feelingLonely",
    bgColor: "bg-[#F6F9E6]",
  },
  {
    title: "Suicidal Thoughts ",
    description:
      "In the last month, have you wished you were dead or actually had thoughts of killing yourself? ",
    options: ["Yes", "No"],
    property: "suicidalThoughts",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Suicide Plans/Attempts",
    description:
      "In the last month, have you had plans or tried to kill yourself?",
    options: ["Yes", "No"],
    property: "suicidalPlans",
    bgColor: "bg-[#ECF1F9]",
  },
];
export default function MentalHealth() {
  const { step, prev, innerStep, done } = useTrial(); // 0..2

  const handlePrev = () => {
    prev(innerStep);
  };
  return (
    <div className="w-full bg-white p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-5xl">General Mental Health</h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {innerStep + 1} /{5}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[475%] h-full  flex items-stretch transition-all gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${innerStep * 95}%` }}
        >
          {data.map((d, index: number) => (
            <div
              className={`rounded-[20px] w-1/5 ${d.bgColor} p-8`}
              key={index}
            >
              <TrialModal
                {...d}
                key={index}
                description={d.description as string}
                isLast={index === data.length - 1}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between absolute bottom-[10dvh] left-0 w-full max-w-6xl right-0 mx-auto pr-12 gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrev}
          disabled={step === 0}
          className="rounded-full bg-black w-12 h-12 hover:bg-black/80 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="!w-6 !h-6 text-white" />
        </Button>

        {step == 2 && innerStep == 3 && (
          <Button
            variant="outline"
            size="sm"
            onClick={done}
            className="rounded-full text-white py-4 text-2xl font-bold bg-black px-12 h-12"
            aria-label="Done"
          >
            Done
          </Button>
        )}
      </div>
    </div>
  );
}
