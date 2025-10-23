"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTrial } from "@/contexts/trial.context";

import TrialModal from "./TrialModal";
import { IModalData } from "@/types/trial.interface";

const data: IModalData[] = [
  {
    title: "Worrying",
    description: "How often do you find yourself worrying about this exam?",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "examWorrying",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Sleep Problems ",
    description: "How often have you been afraid of failing your exams?",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "sleepProblems",
    bgColor: "bg-[#ECF1F9]",
  },
  {
    title: "Fear of failure ",
    description: "How often do you find yourself worrying about this exam?",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "fearOfFailure",
    bgColor: "bg-[#F6F9E6]",
  },
  {
    title: "Feeling Nervous ",
    description:
      "How often do you get nervous or uneasy before or during exams? ",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "feelingNervous",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Sweating or Heart racing ",
    description:
      "How often do you find yourself sweating, shaking or your heart beating faster during or before exams? ",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "sweatingOrHeartRacing",
    bgColor: "bg-[#ECF1F9]",
  },

  {
    title: "Stomach Upset ",
    description:
      "How often do you have stomach upset such as nausea, butterflies or needing to use the washroom a lot during or before exams? ",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "stomachUpset",
    bgColor: "bg-[#F6F9E6]",
  },
];

export default function ExamAnxiety() {
  const { step, prev, innerStep, done } = useTrial(); // 0..2

  const handlePrev = () => {
    prev(innerStep);
  };
  return (
    <div className="w-full bg-white p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-5xl">Exam Anxiety</h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {innerStep + 1} /{6}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[570%] h-full  flex items-stretch transition-all gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${innerStep * 95}%` }}
        >
          {data.map((d, index: number) => (
            <div
              className={`rounded-[20px] w-1/6 ${d.bgColor} p-8`}
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
