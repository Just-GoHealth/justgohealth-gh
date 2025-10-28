import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { useTrial } from "@/contexts/trial.context";

const generateColor = (color: string) => {
  let code = "";
  if (color == "yellow") code = "#ff9900";
  if (color == "green") code = "#2bb573";
  if (color == "purple") code = "#993399";
  if (color == "red") code = "#ff0000";
  if (color == "light green") code = "#66ff66";
  if (color == "black") code = "#000000";
  return code;
};

const HealthResults = () => {
  let { trialResponse: data } = useTrial();
  data = data;

  // data = data || dataExample;
  const metrics = [
    {
      name: "General Mental Health",
      description: data.generalMentalHealth,
      score: data.generalMentalHealthScore,
      items: [
        {
          name: "Depression",
          description: data.possibleDepressionDescription,
          value: data.possibleDepressionScore,
          color: generateColor(data.possibleDepressionColor),
        },
        {
          name: "Loneliness",
          description: data.lonelinessScoreDescription,
          value: data.lonelinessScore,
          color: generateColor(data.lonelinessColor),
        },
        {
          name: "Suicidal Risk",
          description: data.suicidalRiskScoreDescription,
          value: data.suicidalRiskScore,
          color: generateColor(data.suicidalRiskColor),
        },
      ],
    },
    {
      name: "Exam Anxiety",
      score: data.examAnxietyScore,
      description: data.examAnxiety,
      items: [
        {
          name: "Physical Distress",
          description: data.physicalDistressScoreDescription,
          value: data.physicalDistressScore,
          color: generateColor(data.physicalDistressColor),
        },
        {
          name: "Core Anxiety",
          description: data.coreAnxietyScoreDescription,
          value: data.coreAnxietyScore,
          color: generateColor(data.coreAnxietyColor),
        },
      ],
    },
    {
      name: "Exam Prep",
      score: data.examPrepScore,
      description: data.examPrep,
      items: [
        {
          name: "Motivation ",
          description: data.motivationScoreDescription,
          value: data.motivationScore,
          color: generateColor(data.motivationColor),
        },
        {
          name: "Procrastination",
          description: data.procrastinationScoreDescription,
          value: data.procrastinationScore,
          color: generateColor(data.procrastinationColor),
        },
        {
          name: "Study Skills",
          description: data.studySkillsScoreDescription,
          value: data.studySkillsScore,
          color: generateColor(data.studySkillsColor),
        },
      ],
    },
  ];

  // Result index starts from 2 and ends at metrics.length-1 because there are 3 items at a time
  const [resultIndex, setResultIndex] = useState(0);
  const { cleanUpTrial } = useTrial();
  return (
    <>
      {metrics?.length ? (
        <div className="h-screen  overflow-y-auto md:overflow-hidden md:h-screen w-full flex flex-col md:flex-row md:items-stretch justify-between">
          <div className="w-full md:w-7/10 md:h-full">
            {/* User details */}
            <div className="w-full h-auto md:h-[52%] bg-[#F6F9E6] px-6 md:px-24 py-4 md:py-12">
              <div className="">
                <h3 className="text-2xl md:text-5xl font-bold text-[#993399]">
                  {data?.fullName} (Health results)
                </h3>
                <p className="font-bold text-xl md:text-2xl">
                  {data?.age} year old {data?.sex}, {data?.school}
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-16 mt-4 md:mt-8">
                <div
                  className=" p-4 md:p-8 rounded-[20px] text-white gap-4 flex flex-col items-center justify-center"
                  style={{ backgroundColor: generateColor(data.lockedInColor) }}
                >
                  <p className="font-bold text-xs">Locked In</p>
                  <h3 className="font-bold text-5xl md:text-7xl">
                    {Math.round(+data.lockedInScore.split("/")[0] * 100) / 100}
                  </h3>
                  <p className="font-bold text-xs -mt-4">Score</p>
                </div>
                <div>
                  {[
                    {
                      key: "General Mental Health",
                      value: data.generalMentalHealth,
                      color: generateColor(data.generalMentalHealthColor),
                    },
                    {
                      key: "Exam Anxiety",
                      value: data.examAnxiety,
                      color: generateColor(data.examAnxietyColor),
                    },
                    {
                      key: "Exam Prep",
                      value: data.examPrep,
                      color: generateColor(data.examPrepColor),
                    },
                  ].map(({ key, value, color }) => (
                    <p
                      key={key}
                      className="text-2xl md:text-3xl font-bold mb-2 md:mb-3"
                    >
                      {key}:{" "}
                      <span className="" style={{ color }}>
                        {value}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="w-full h-auto md:h-[48%] bg-white">
              <div className="flex p-4 p-6 px-4 md:px-12 border-b-3 border-black flex items-center justify-between">
                <div className="flex flex-col md:flex-row md:items-center md:gap-2">
                  <h3 className="text-xl md:text-3xl font-bold">
                    {metrics[resultIndex].name}:
                  </h3>
                  <p className="text-xl md:text-3xl font-bold">
                    {metrics[resultIndex].description} (
                    {metrics[resultIndex].score})
                  </p>
                </div>
                {/* ctas */}
                <div className="flex items-center gap-4">
                  <button
                    className={`bg-black hover:cursor-pointer text-white p-2 rounded-full ${
                      resultIndex == 0 ? "opacity-50" : ""
                    }`}
                    disabled={resultIndex == 0}
                    onClick={() => setResultIndex((prev) => --prev)}
                  >
                    <ChevronLeft className="!w-6 !h-6 md:!w-9 md:!h-9" />
                  </button>
                  <button
                    className={`bg-black hover:cursor-pointer text-white p-2 rounded-full ${
                      resultIndex >= metrics.length - 1 ? "opacity-50" : ""
                    }`}
                    disabled={resultIndex >= metrics.length - 1}
                    onClick={() => setResultIndex((prev) => ++prev)}
                  >
                    <ChevronRight className="!w-6 !h-6 md:!w-9 md:!h-9" />
                  </button>
                </div>
              </div>

              {/* Slider */}
              <div className="w-full h-full md:overflow-hidden">
                <div
                  className={`grid-cols-3 h-full grid items-stretch justify-between transition-all duration-300 ease-in-out`}
                  style={{
                    marginLeft: `-${100 * resultIndex}%`,
                    width: `${metrics.length * 100}%`,
                  }}
                >
                  {metrics.map((metric, index) => {
                    return (
                      <div
                        className="w-full h-full flex flex-col md:flex-row md:items-stretch justify-start"
                        key={index}
                      >
                        {metric.items.map((item, idx) => (
                          <div
                            key={idx}
                            className={`w-full flex items-center justify-start flex-col h-full  border-black gap-2 p-6 md:p-8 ${
                              idx !== metric.items.length - 1
                                ? "md:border-r-3"
                                : ""
                            } border-b-3 md:border-b-0`}
                          >
                            <h1 className="text-2xl md:text-4xl text-center font-bold">
                              {item.name}
                            </h1>
                            <p className="text-base md:text-2xl">
                              {item.description}
                            </p>
                            <div
                              className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                              style={{ backgroundColor: item.color }}
                            >
                              {item.value.replace(/\ /g, "")}
                            </div>
                          </div>
                        ))}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right side. Has the waiting room cta and take test again cta */}
          <div className="w-full md:w-3/10 bg-white md:h-full p-6 py-10  flex flex-col items-center justify-between">
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
                <p className="flex-1 text-white text-2xl font-bold">
                  Waiting room
                </p>
                <span className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Play className="text-black mx-auto" />
                </span>
              </button>

              <div className="w-full mt-36">
                <p className="text-2xl md:text-3xl font-medium">
                  Take Lock-In{" "}
                  <button
                    className="font-bold hover:cursor-pointer underline inline-flex items-center"
                    onClick={() => cleanUpTrial()}
                  >
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
      ) : null}
    </>
  );
};

export default HealthResults;
