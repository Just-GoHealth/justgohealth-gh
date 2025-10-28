"use client";
import React from "react";
import { useTrial } from "@/contexts/trial.context";

import { IModalData } from "@/types/trial.interface";
import TrialModal from "../TrialModal";
import { useIsMobile } from "../../hooks/use-mobile";

const data: IModalData[] = [
  {
    title: "Loss of Interest😐",
    description:
      "In the past 2 weeks, how often do you have little interest or pleasure in doing things?",
    options: ["Not At All", "A few days ", "Sometimes", "Almost everyday"],
    property: "lossOfInterest",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Feeling Depressed😞",
    description:
      "In the past 2 weeks, how often do you feel sad, down or hopeless? ",
    options: ["Not At All", "A few days ", "Sometimes", "Almost everyday"],
    property: "feelingDepressed",
    bgColor: "bg-[#ECF1F9]",
  },
  {
    title: "Loneliness😔",
    description: "In the past 2 weeks, how often do you feel lonely? ",
    options: ["Never", "Sometimes", "Often", "Always"],
    property: "feelingLonely",
    bgColor: "bg-[#F6F9E6]",
  },
  {
    title: "Suicidal Thoughts🚫",
    description:
      "In the last month, have you wished you were dead or actually had thoughts of killing yourself? ",
    options: ["Yes", "No"],
    property: "suicidalThoughts",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Suicide Plans/Attempts🚨",
    description:
      "In the last month, have you had plans or tried to kill yourself?",
    options: ["Yes", "No"],
    property: "suicidalPlans",
    bgColor: "bg-[#ECF1F9]",
  },
];
export default function MentalHealth() {
  const { innerStep } = useTrial(); // 0..2
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-3xl md:text-5xl">
          General Mental Health
        </h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {innerStep + 1} /{5}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[500%] md:w-[475%] h-full  flex items-stretch transition-all md:gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${innerStep * (!isMobile ? 95 : 100)}%` }}
        >
          {data.map((d, index: number) => (
            <div
              className={`rounded-[20px] w-1/5 ${d.bgColor} p-6 md:p-8`}
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
    </div>
  );
}
