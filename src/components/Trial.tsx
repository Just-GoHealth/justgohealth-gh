"use client";

import Details from "./Trial/Details";
import ExamAnxiety from "./Trial/ExamAnxiety";
import { TrialProvider, useTrial } from "@/contexts/trial.context";
import { X } from "lucide-react";

import MentalHealth from "./Trial/MentalHealth";
import ExamPreparation from "./Trial/ExamPreparation";

import { ISchool } from "@/types/school.interface";
import HealthResults from "./Trial/HealthResults";
import TrialNavigation from "./Trial/TrialNavigation";
import { useEffect } from "react";
import { toast } from "sonner";

export const Component = ({
  setShowTrialModal,
  schools,
}: {
  setShowTrialModal?: React.Dispatch<React.SetStateAction<boolean>>;
  schools: ISchool[];
}) => {
  const { step, error } = useTrial();

  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);

  return (
    <>
      {/* Trial modal takes entire screen and uses px to allow space on the sides */}

      {/* Use this for entire questions flow: details , mental health , exam anxiety and exam preparation */}
      {step < 6 && (
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
          <TrialNavigation />
        </div>
      )}

      {/* Use this for the results page */}
      {step === 6 && (
        <div className="bg-[red] w-full h-screen fixed z-50 top-0 left-0 bg-white/50 flex items-center justify-center lg:right-8 lg:bottom-8">
          <HealthResults />
        </div>
      )}
    </>
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
