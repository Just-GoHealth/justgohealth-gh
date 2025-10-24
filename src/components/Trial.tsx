"use client";

import Details from "./Details";
import ExamAnxiety from "./ExamAnxiety";
import { TrialProvider, useTrial } from "@/contexts/trial.context";

import { ChevronLeft, ChevronRight, X } from "lucide-react";
import MentalHealth from "./MentalHealth";
import ExamPreparation from "./ExamPreparation";
import { Button } from "./ui/button";
import { ISchool } from "@/types/school.interface";
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

export const Component = ({
  setShowTrialModal,
  schools,
}: {
  setShowTrialModal?: React.Dispatch<React.SetStateAction<boolean>>;
  schools: ISchool[];
}) => {
  const { step, trialData, innerStep, next, prev, isFullNameError } =
    useTrial();

  const trialStepKey = steps[step][innerStep] as keyof ITrial;
  const trialStepValue = trialData[trialStepKey];

  return (
    // Trial modal takes entire screen and uses px to allow space on the sides
    <div className="bg-[red] w-full h-screen fixed z-50 top-0 left-0 bg-white/50 flex items-center justify-center px-4 lg:px-24  lg:right-8 lg:bottom-8">
      <button
        onClick={() => setShowTrialModal && setShowTrialModal(false)}
        className="bg-[red] h-8 md:h-10 flex items-center justify-center w-8 md:w-10 hover:cursor-pointer hover:bg-[red]/70 absolute top-2 md:top-4 rounded-full right-2 md:right-4"
      >
        <X className="text-white" />
      </button>
      {/* <div className="bg-[red]"> */}
      {step < 3 && <Details schools={schools} />}
      {step == 3 && <MentalHealth />}
      {step == 4 && <ExamAnxiety />}
      {step == 5 && <ExamPreparation />}
      {/* </div> */}

      {/* The controls at the bottom */}
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
            onClick={() => {
              console.log(trialData);
            }}
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
    </div>
  );
};
export default function Trial({
  setShowTrialModal,
  schools,
}: {
  setShowTrialModal?: React.Dispatch<React.SetStateAction<boolean>>;
  schools: ISchool[];
}) {
  return (
    <TrialProvider>
      <Component setShowTrialModal={setShowTrialModal} schools={schools} />
    </TrialProvider>
  );
}
