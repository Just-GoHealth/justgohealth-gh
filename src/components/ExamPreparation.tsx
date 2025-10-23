"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { useTrial } from "@/contexts/trial.context";

import TrialModal from "./TrialModal";
import { IModalData } from "@/types/trial.interface";

const data: IModalData[] = [
  {
    title: "Motivation to Study",
    description:
      "How interested or motivated are you in studying the material for this exam?",
    options: ["Not at all", "Slightly", "Moderately", "Very interested "],
    property: "motivationToStudy",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Focus While Studying",
    description:
      "During studying, how often are you able to stay focused without being easily distracted?",
    options: ["Never", "Occassionally", "Often", "Always"],
    property: "focusWhileStudying",
    bgColor: "bg-[#ECF1F9]",
  },
  {
    title: "Active Studying",
    description:
      "During studying, how often do you rephrase ideas into your own words, summarize or explain the material to yourself or others? ",
    options: ["Never", "Sometimes", "Often", "Always"],
    property: "activeStudying",
    bgColor: "bg-[#F6F9E6]",
  },
  {
    title: "Active Recall",
    description:
      "During studying, how often do you test yourself with Pasco (past or practice questions) or self-quiz rather than only reading the notes? ",
    options: ["Never", "Sometimes", "Often", "Always"],
    property: "activeRecall",
    bgColor: "bg-[#FAF5F9]",
  },
  {
    title: "Last-Minute Studying",
    description:
      "How often do you usually do most of your studying the night before an exam?",
    options: ["Not At All", "A few times", "Frequently", "Almost every exam"],
    property: "lastMinuteStudying",
    bgColor: "bg-[#ECF1F9]",
  },
];

export default function ExamPreparation() {
  const { step, prev, innerStep, done } = useTrial(); // 0..2

  const handlePrev = () => {
    prev(innerStep);
  };
  return (
    <div className="w-full bg-white p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-5xl">Exam Preparation</h1>
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
                isComplete={index == data.length - 1}
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
