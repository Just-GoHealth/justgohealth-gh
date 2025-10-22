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
  const { step, prev, innerStep } = useTrial(); // 0..2

  const handlePrev = () => {
    prev(innerStep);
  };
  return (
    // Fixed container: bottom-right on large screens, centered and full-width on small screens
    <div className="w-full h-screen fixed z-50 top-0 left-0 bg-white/50 flex items-center justify-center px-4 md: px-24  lg:right-8 lg:bottom-8">
      <div className="w-full bg-white p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
        <div className="flex items-center justify-between mb-4">
          <h1 className="font-black text-5xl">
            Personalize Your Mental Health
          </h1>
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
              onClick={() => setTrialStep((prev) => ++prev)}
              className="rounded-full text-white py-4 text-2xl font-bold bg-black px-12 h-12"
              aria-label="Done"
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
