"use client";

import { X } from "lucide-react";
import { TRIAL_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface StepHeaderProps {
  current: number;
  onClose: () => void;
}

export const StepHeader = ({ current, onClose }: StepHeaderProps) => (
  <div className="shrink-0 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white">
    {/* Breadcrumb */}
    <div className="flex items-center gap-1.5 overflow-x-auto">
      {TRIAL_STEPS.map(({ label, color }, i) => (
        <div key={i} className="flex items-center gap-1.5 shrink-0">
          <div
            className="flex items-center gap-1.5 transition-all duration-200"
            style={{ opacity: i > current ? 0.35 : 1 }}
          >
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0"
              style={{
                backgroundColor:
                  i < current
                    ? color
                    : i === current
                      ? "var(--primary)"
                      : "#F0EDE8",
                color: i <= current ? "#FFFFFF" : "#A8A29E",
              }}
            >
              {i < current ? "✓" : i + 1}
            </div>
            <span
              className={cn(
                "text-xs font-bold hidden md:block transition-colors duration-200",
                i === current
                  ? "text-[#1C1917]"
                  : i < current
                    ? "text-[#78716C]"
                    : "text-[#C4BDB6]",
              )}
            >
              {label}
            </span>
          </div>
          {i < TRIAL_STEPS.length - 1 && (
            <div
              className={cn(
                "w-4 h-px shrink-0 transition-all duration-500",
                i < current ? "bg-[#2bb573]" : "bg-[#E8E4DF]",
              )}
            />
          )}
        </div>
      ))}
    </div>

    {/* Right side */}
    <div className="flex items-center gap-2.5 shrink-0 ml-4">
      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-[#FAF8F4] text-[#78716C]">
        {current + 1} / {TRIAL_STEPS.length}
      </span>
      <button
        onClick={onClose}
        className="w-8 h-8 rounded-full flex items-center justify-center transition-all border border-[#E8E4DF] bg-[#FAF8F4] text-[#78716C] group hover:border-[#E8365D]"
        aria-label="Close"
      >
        <X size={14} className="group-hover:text-[#E8365D] transition-colors" />
      </button>
    </div>
  </div>
);
