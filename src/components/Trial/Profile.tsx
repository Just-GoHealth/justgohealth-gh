import React from "react";
import Age from "./Age";
import Sex from "./Sex";
import Grade from "./Grade";
import Name from "./Name";
import { useTrial } from "@/contexts/trial.context";

const Profile = () => {
  const { innerStep: step, setInnerStep: setStep } = useTrial();

  const steps = [
    <Name key={0} setStep={setStep} />,
    <Age key={1} setStep={setStep} />,
    <Sex key={2} setStep={setStep} />,
    <Grade key={3} />,
  ];

  const labels = ["Full Name", "Age", "Sex", "Grade/Level"];
  return (
    <div>
      <h3 className="text-4xl font-[900] text-black/90">
        Profile: <span>{labels[step]}</span>
      </h3>

      <div className="w-full mt-16">{steps[step]}</div>
    </div>
  );
};

export default Profile;
