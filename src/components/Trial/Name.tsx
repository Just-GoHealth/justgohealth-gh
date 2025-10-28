import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

import Image from "next/image";
import { useTrial } from "@/contexts/trial.context";

const Name = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { onTrialDataChange, trialData, setIsFullNameError, isFullNameError } =
    useTrial();

  const [name, setName] = useState(trialData.fullName || "");
  const errors = { fullname: "" };

  const isLoading = false;
  const handleNameChange = () => {
    // Handle name change logic here
    onTrialDataChange("fullName", name);
    setStep((prev) => ++prev);
  };

  useEffect(() => {
    // Validate name and add to trialData
    onTrialDataChange("fullName", name);
    setIsFullNameError(/^[A-Za-z][A-Za-z' -]{3,}$/.test(name) ? false : true);
  }, [name, onTrialDataChange, setIsFullNameError]);
  return (
    <div>
      <h3 className="text-2xl md:text-[80px] text-black/90 font-black mb-6">
        What&apos;s your official name?
      </h3>
      <div
        className={`flex rounded-2xl p-1 h-16 md:h-22 gap-2 overflow-hidden backdrop-blur-sm  ${
          isFullNameError ? "bg-red-600" : "bg-[#2bb573]"
        }  border border-white/30 shadow-lg`}
      >
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Jimmy Stephen Newton"
          className={`flex-1 px-2 md:px-6 py-5 bg-white rounded-xl text-gray-700 font-semibold text-xl md:text-3xl placeholder-gray-500 focus:outline-none ${
            isFullNameError ? "text-red-600" : "text-green-600"
          }`}
        />

        <Button
          type="submit"
          onClick={() => handleNameChange()}
          className={`hidden md:block px-2 md:px-6 h-auto hover:cursor-pointer bg-transparent duration-300 ${
            !errors?.fullname && !isLoading
              ? " text-white transform hover:black/50"
              : "bg-gray-400/50 text-gray-500 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Image
              src="/arrow-horizontal.png"
              alt="Submit"
              width={24}
              height={24}
              className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1"
            />
          )}
        </Button>
      </div>
      {isFullNameError && (
        <p className="text-xs md:text-base text-red-600 mt-2">
          Name should be at least 4 characters and not contain and foreign
          characters
        </p>
      )}
    </div>
  );
};

export default Name;
