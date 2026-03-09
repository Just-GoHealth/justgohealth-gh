"use client";
import { useTrial } from "@/contexts/trial.context";
import { ISchool } from "@/types/school.interface";
import School from "./School";
import Reason from "./Reason";
import Profile from "./Profile";

const panelBgs = ["#FAF5FF", "#FFF5F7", "#F0FBF5"];
const panelColors = [
  "rgba(153,51,153,0.15)",
  "rgba(232,54,93,0.15)",
  "rgba(43,181,115,0.15)",
];

export default function Details({ schools }: { schools: ISchool[] }) {
  const { step } = useTrial(); // 0=Campus 1=Reason 2=Profile

  return (
    <div className="w-full h-full overflow-hidden rounded-3xl">
      {/* translateX moves entire 300%-wide strip by one panel width per step */}
      <div
        className="flex h-full w-[300%] transition-transform duration-300 ease-in-out rounded-3xl"
        style={{ transform: `translateX(-${step * 33.333}%)` }}
      >
        {[
          <School key={0} schools={schools} />,
          <Reason key={1} />,
          <Profile key={2} />,
        ].map((panel, i) => (
          <div
            key={i}
            className="w-1/3 h-full overflow-y-auto rounded-3xl p-5 md:p-7"
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
}
