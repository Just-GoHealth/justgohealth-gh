import React, { useState, useEffect, useRef } from "react";
import { useTrial } from "@/contexts/trial.context";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

const Name = ({
  setStep,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { onTrialDataChange, setIsFullNameError, trialData, step } = useTrial();
  const [value, setValue] = useState(trialData.fullName || "");
  const [touched, setTouched] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isValid = value.trim().split(" ").filter(Boolean).length >= 2;

  // Only focus when the Profile panel is actually the active step (step === 2)
  useEffect(() => {
    if (step === 2) {
      const t = setTimeout(() => inputRef.current?.focus(), 350); // after slide animation
      return () => clearTimeout(t);
    }
  }, [step]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);
    const valid = v.trim().split(" ").filter(Boolean).length >= 2;
    setIsFullNameError(!valid);
    onTrialDataChange("fullName", v);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isValid) setStep((p) => ++p);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <User
            size={16}
            className={cn(
              "transition-colors duration-200",
              isValid ? "text-primary" : "text-[#C8C3BD]",
            )}
          />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder="e.g. Kwame Mensah"
          onChange={handleChange}
          onBlur={() => setTouched(true)}
          onKeyDown={handleKeyDown}
          autoFocus={false}
          className={cn(
            "w-full pl-11 pr-5 py-4 rounded-2xl text-base font-semibold outline-none transition-all duration-200 bg-white border-[1.5px] text-[#1C1917] placeholder:text-[#C4BDB6]",
            touched && !isValid
              ? "border-destructive shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              : isValid
                ? "border-primary/50"
                : "border-border",
          )}
        />
      </div>
      {touched && !isValid && (
        <p className="text-xs font-semibold text-[#E8365D]">
          Please enter your first and last name
        </p>
      )}
      {isValid && (
        <p className="text-xs font-semibold text-[#2bb573]">
          ✓ Looking good — tap Next to continue
        </p>
      )}
    </div>
  );
};

export default Name;
