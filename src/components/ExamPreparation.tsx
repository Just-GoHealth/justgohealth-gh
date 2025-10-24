"use client";
import React from "react";
import { useTrial } from "@/contexts/trial.context";

import TrialModal from "./TrialModal";
import { IModalData } from "@/types/trial.interface";
import { useIsMobile } from "./use-mobile";

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
  const { innerStep } = useTrial(); // 0..2

  const isMobile = useIsMobile();
  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-3xl md:text-5xl">Exam Preparation</h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {innerStep + 1} /{5}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[500%] md:w-[475%] h-full  flex items-stretch transition-all md:gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${innerStep * (isMobile ? 100 : 95)}%` }}
        >
          {data.map((d, index: number) => (
            <div
              className={`rounded-[20px] w-1/5 ${d.bgColor} p-6 md:p-8`}
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
    </div>
  );
}
