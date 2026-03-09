"use client";

import { TRIAL_STEPS } from "@/lib/constants";

export const ProgressBar = ({ step }: { step: number }) => (
  <div className="shrink-0 h-1">
    <div
      className="h-full rounded-r-full transition-all duration-500 ease-in-out bg-success"
      style={{
        width: `${((step + 1) / TRIAL_STEPS.length) * 100}%`,
      }}
    />
  </div>
);
