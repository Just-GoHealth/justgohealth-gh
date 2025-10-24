"use client";

import Details from "./Details";
import ExamAnxiety from "./ExamAnxiety";
import { TrialProvider, useTrial } from "@/contexts/trial.context";

import { ChevronLeft, X } from "lucide-react";
import MentalHealth from "./MentalHealth";
import ExamPreparation from "./ExamPreparation";
import { Button } from "./ui/button";

export const Component = ({
  setShowTrialModal,
}: {
  setShowTrialModal?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { step, innerStep, trialData, prev } = useTrial();

  const handlePrev = () => {
    prev(innerStep);
  };
  // const [step, setStep] = useState(1);

  return (
    // Trial modal takes entire screen and uses px to allow space on the sides
    <div className="bg-[red] w-full h-screen fixed z-50 top-0 left-0 bg-white/50 flex items-center justify-center px-4 lg:px-24  lg:right-8 lg:bottom-8">
      <button
        onClick={() => setShowTrialModal && setShowTrialModal(false)}
        className="bg-[red] h-10 flex items-center justify-center w-10 hover:cursor-pointer hover:bg-[red]/70 absolute top-4 rounded-full right-4"
      >
        <X className="text-white" />
      </button>
      {/* <div className="bg-[red]"> */}
      {step < 3 && <Details />}
      {step == 3 && <MentalHealth />}
      {step == 4 && <ExamAnxiety />}
      {step == 5 && <ExamPreparation />}
      {/* </div> */}

      {/* The controls at the bottom */}
      <div className="flex items-center justify-between absolute bottom-[10dvh] md:bottom-[10dvh] xl:bottom-[10dvh] left-0 w-full px-12 lg:px-40 lg:pr-56 gap-4">
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

        {/* {step == 5 && innerStep == 4 && trialData.lastMinuteStudying && ( */}
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
        {/* )} */}
      </div>
    </div>
  );
};
export default function Trial({
  setShowTrialModal,
}: {
  setShowTrialModal?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <TrialProvider>
      <Component setShowTrialModal={setShowTrialModal} />
    </TrialProvider>
  );
}
