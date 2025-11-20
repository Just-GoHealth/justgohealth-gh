"use client";
import React from "react";
import { useTrial } from "@/contexts/trial.context";

import TrialModal from "../TrialModal";
import { IModalData } from "@/types/trial.interface";
import { useIsMobile } from "../../hooks/use-mobile";

const data: IModalData[] = [
  {
    title: "Worrying😬",
    description: "How often do you find yourself worrying about this exam?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "examWorrying",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Sleep Problems😴",
    description:
      "How often do you have difficulty sleeping, staying asleep or sleeping too much because of the exams? ",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "sleepProblems",
    bgColor: "bg-[#ECF1F9]",
  },
  {
    title: "Fear of failure😣 ",
    description: "How often do you find yourself worrying about this exam?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "fearOfFailure",
    bgColor: "bg-[#F6F9E6]",
  },
  {
    title: "Feeling Nervous😰 ",
    description:
      "How often do you get nervous or uneasy before or during exams? ",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "feelingNervous",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Sweating or Heart racing😓",
    description:
      "How often do you find yourself sweating, shaking or your heart beating faster during or before exams? ",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "sweatingOrHeartRacing",
    bgColor: "bg-[#ECF1F9]",
  },

  {
    title: "Stomach Upset 🤢",
    description:
      "How often do you have stomach upset such as nausea, butterflies or needing to use the washroom a lot during or before exams? ",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "stomachUpset",
    bgColor: "bg-[#F6F9E6]",
  },
];

export default function ExamAnxiety() {
  const { innerStep } = useTrial(); // 0..2
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-3xl md:text-5xl">Exam Anxiety</h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {innerStep + 1} /{6}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[600%] md:w-[570%] h-full  flex items-stretch transition-all md:gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${innerStep * (isMobile ? 100 : 95)}%` }}
        >
          {data.map((d, index: number) => (
            <div
              className={`rounded-[20px] overflow-y-auto  w-1/6 ${d.bgColor} p-6 md:p-8`}
              key={index}
            >
              <TrialModal
                {...d}
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
