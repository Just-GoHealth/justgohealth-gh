"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import School from "./Trial/School";
import { Button } from "@/components/ui/button";
import Reason from "./Trial/Reason";
import Profile from "./Trial/Profile";
import { useTrial } from "@/contexts/trial.context";

export default function Details({
  setTrialStep,
}: {
  setTrialStep: React.Dispatch<React.SetStateAction<number>>;
}) {
  const { step, prev, innerStep, setInnerStep } = useTrial(); // 0..2

 
  return (
    <div className="w-full bg-white p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-5xl">Personalize Your Mental Health</h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {step + 1}/{3}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[285%] h-full  flex items-stretch transition-all gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${step * 95}%` }}
        >
          <div className="rounded-[20px] w-1/3 bg-[#FAF5F9] p-16">
            <School />
          </div>
          <div className="rounded-[20px] w-1/3 bg-[#ECF1F9] p-16">
            <Reason />
          </div>
          <div className="rounded-[20px] w-1/3 bg-[#F6F9E6] p-16">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
