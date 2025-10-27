import React from "react";
import { Button } from "../ui/button";
import { useTrial } from "@/contexts/trial.context";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { ITrial } from "@/types/trial.interface";

const steps = [
  ["campus"],
  ["reasonForLockin", "timeToExam"],
  ["fullName", "age", "sex", "level"],
  [
    "lossOfInterest",
    "feelingDepressed",
    "feelingLonely",
    "suicidalThoughts",
    "suicidalPlans",
  ],
  [
    "examWorrying",
    "sleepProblems",
    "fearOfFailure",
    "feelingNervous",
    "sweatingOrHeartRacing",
    "stomachUpset",
  ],
  [
    "motivationToStudy",
    "focusWhileStudying",
    "activeStudying",
    "activeRecall",
    "lastMinuteStudying",
  ],
];

const TrialNavigation = () => {
  const { step, innerStep, trialData, next, prev, isFullNameError, done } =
    useTrial();

  const trialStepKey = steps[step][innerStep] as keyof ITrial;
  const trialStepValue = trialData[trialStepKey];

  return (
    <div className="flex items-center justify-between absolute bottom-[10dvh] md:bottom-[10dvh] xl:bottom-[10dvh] left-0 w-full px-12 lg:px-40 lg:pr-56 gap-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => prev()}
        disabled={step === 0}
        className="rounded-full bg-black w-12 h-12 hover:bg-black/80 cursor-pointer"
        aria-label="Previous"
      >
        <ChevronLeft className="!w-6 !h-6 text-white" />
      </Button>
      {step == 5 && innerStep == 4 && trialData.lastMinuteStudying && (
        <Button
          variant="outline"
          size="sm"
          onClick={() => done()}
          className="rounded-full text-white py-4 text-2xl font-bold bg-black px-12 h-12"
          aria-label="Done"
        >
          Done
        </Button>
      )}
      {/* The fullName is differet from all other properties as it is a text field and the name needs validation. As such, a state called isFullNameError is used to track that the name is valid in the Name components */}
      {/* When the stepKey is fullName make sure the isFullNameError is false before showing the button , but if stepKey is not fullName check for just value and proceed */}
      {/* Also note that on step 5 , innerStep4 , there will be a done button to replace the next button hence don't show the button */}
      {/* Also note that the steps data at the top is used to get the key of the current page and used to get the value also. Steps follow the screen order so change accordingly  */}
      {!(step === 5 && innerStep === 4) &&
      ((trialStepKey !== "fullName" && trialStepValue) ||
        (trialStepKey === "fullName" && !isFullNameError)) ? (
        <Button
          variant="outline"
          size="sm"
          onClick={() => next()}
          // disabled={step === 0}
          className="rounded-full bg-black w-12 h-12 hover:bg-black/80 cursor-pointer"
          aria-label="Previous"
        >
          <ChevronRight className="!w-6 !h-6 text-white" />
        </Button>
      ) : null}
    </div>
  );
};

export default TrialNavigation;
