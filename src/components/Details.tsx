"use client";
import React from "react";
import School from "./Trial/School";
import Reason from "./Trial/Reason";
import Profile from "./Trial/Profile";
import { useTrial } from "@/contexts/trial.context";
import { useIsMobile } from "./use-mobile";
import { ISchool } from "@/types/school.interface";

export default function Details({ schools }: { schools: ISchool[] }) {
  const { step } = useTrial(); // 0..2
  const isMobile = useIsMobile();

  return (
    <div className="w-full bg-white p-4 md:p-6 rounded-[30px]  border-[5px] border-gray-100 h-[90dvh]">
      <div className="flex items-center justify-between mb-4">
        <h1 className="font-black text-2xl md:text-5xl">
          Personalize Your Mental Health
        </h1>
        <p className="text-white mb-4 bg-[red] tracking-tighter text-sm rounded-full w-8 h-8 flex items-center justify-center">
          {step + 1}/{3}
        </p>
      </div>
      <div className="w-full overflow-x-hidden h-[90%] mb-2">
        <div
          className="w-[300%] md:w-[285%] h-full  flex items-stretch transition-all md:gap-8 duration-300 ease-in-out justify-between overflow-y-auto"
          style={{ marginLeft: `-${step * (isMobile ? 100 : 95)}%` }}
        >
          <div className="rounded-[20px] w-1/3 bg-[#FAF5F9] p-4 md:p-16">
            <School schools={schools} />
          </div>
          <div className="rounded-[20px] w-1/3 bg-[#ECF1F9] p-4 md:p-16">
            <Reason />
          </div>
          <div className="rounded-[20px] w-1/3 bg-[#F6F9E6] p-4 md:p-16">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
}
