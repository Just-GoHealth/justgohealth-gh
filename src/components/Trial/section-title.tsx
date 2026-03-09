"use client";

import { TRIAL_SECTION_TITLES } from "@/lib/constants";

export const SectionTitle = ({ step }: { step: number }) => {
  const { heading, sub } =
    TRIAL_SECTION_TITLES[step] ?? TRIAL_SECTION_TITLES[0];
  return (
    <div className="shrink-0 px-6 md:px-10 pt-7">
      <h2 className="text-2xl md:text-3xl font-black leading-tight">
        {heading}
      </h2>
      <p className="text-sm mt-1 text-muted-foreground">{sub}</p>
    </div>
  );
};
