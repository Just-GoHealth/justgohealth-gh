import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { useTrial } from "@/contexts/trial.context";

const HealthResults = () => {
  const { trialData } = useTrial();
  // Result index starts from2 and ends at 7 because there are 3 items at a time
  const [resultIndex, setResultIndex] = useState(2);
  return (
    <div className="h-screen w-full flex items-stretch justify-between">
      <div className="w-7/10 h-full">
        {/* User details */}
        <div className="w-full h-[55%] bg-[#F6F9E6] px-24 py-12">
          <div className="">
            <h3 className="text-5xl font-bold text-[#993399]">
              {trialData?.fullName} (Health results)
            </h3>
            <p className="font-bold text-2xl">
              {trialData?.age} year old {trialData?.sex}, {trialData?.campus}
            </p>
          </div>

          <div className="flex flex-row items-center justify-start gap-16 mt-12">
            <div className="bg-[#2bb573] p-4 px-8 rounded-[20px] text-white gap-4 flex flex-col items-center justify-center">
              <p className="font-bold text-xs">Locked In</p>
              <h3 className="font-bold text-7xl">8.7</h3>
              <p className="font-bold text-xs -mt-4">Score</p>
            </div>
            <div>
              {[
                { key: "General Mental Health", value: "Good" },
                { key: "Exam Anxiety", value: "Good" },
                { key: "Exam Prep", value: "Good" },
              ].map(({ key, value }) => (
                <p key={key} className="text-3xl font-bold mb-3">
                  {key}: <span className="text-[#2bb573]">{value}</span>
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="w-full h-[45%] bg-white">
          <div className="flex p-6 px-12 border-b-3 border-black flex items-center justify-between">
            <h3 className="text-3xl font-bold">
              General Mental Health: Good(5 out of 8)
            </h3>
            {/* ctas */}
            <div className="flex items-center gap-4">
              <button
                className={`bg-black hover:cursor-pointer text-white p-2 rounded-full ${
                  resultIndex <= 2 ? "opacity-50" : ""
                }`}
                disabled={resultIndex <= 2}
                onClick={() => setResultIndex((prev) => --prev)}
              >
                <ChevronLeft className="!w-9 !h-9" />
              </button>
              <button
                className={`bg-black hover:cursor-pointer text-white p-2 rounded-full ${
                  resultIndex >= 7 ? "opacity-50" : ""
                }`}
                disabled={resultIndex >= 7}
                onClick={() => setResultIndex((prev) => ++prev)}
              >
                <ChevronRight className="!w-9 !h-9" />
              </button>
            </div>
          </div>

          <div className="w-full h-full overflow-hidden">
            <div
              className="w-[266.667%] h-full grid grid-cols-8 items-stretch justify-between transition-all duration-300 ease-in-out"
              style={{ marginLeft: `-${33 * (resultIndex - 2)}%` }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => (
                <div
                  key={idx}
                  className={`w-full flex items-center justify-start flex-col h-full  border-black gap-2 p-8 ${
                    idx < resultIndex && idx >= resultIndex - 2
                      ? "border-r-[3px]"
                      : ""
                  }`}
                >
                  {/* <p>{idx + 1}</p> */}
                  <h1 className="text-4xl font-bold">Mental Health</h1>
                  <p className="text-2xl">Mild</p>
                  <div className="w-24 h-24 bg-[green] rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right side. Has the waiting room cta and take test again cta */}
      <div className="w-3/10 bg-white h-full p-6 py-10  flex flex-col items-center justify-between">
        <div className="">
          <Image
            src="/logos/logo-black.png"
            alt="Logo"
            width={300}
            height={300}
          />
        </div>

        <div className="mt-16">
          <p className="text-3xl text-center font-bold">
            A doctor (an expert) is waiting to see you soon.
          </p>
        </div>

        <div className="w-full mt-6">
          <p className="text-3xl text-center font-medium mb-4">Go to the</p>
          <button
            disabled
            className="bg-[#993399]/20 hover:bg-[#993399] hover:cursor-pointer h-20 w-full rounded-full flex items-center justify-between px-2"
          >
            <p className="flex-1 text-white text-2xl font-bold">Waiting room</p>
            <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <Play className="text-black mx-auto" />
            </span>
          </button>

          <div className="w-full mt-36">
            <p className="text-3xl font-medium">
              Take Lock-In{" "}
              <button className="font-bold hover:cursor-pointer underline inline-flex items-center">
                Screening again
                <Image
                  alt="Diagonal arrow"
                  src="/arrow-diagonal-black.svg"
                  width={20}
                  height={20}
                ></Image>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthResults;
