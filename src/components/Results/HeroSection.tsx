import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import Image from "next/image";
import { ScoreRing } from "@/components/Results/ScoreRing";
import { generateColor } from "@/hooks/use-health-results";

interface HeroSectionProps {
  data: any;
  lockedInScore: number;
  lockedInColor: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  data,
  lockedInScore,
  lockedInColor,
}) => (
  <>
    {/* Hero Section */}
    <div className="relative z-10 px-8 xl:px-14 py-12 shrink-0 overflow-hidden bg-white/70 border-b border-border">
      <div className="relative flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-primary/5 text-primary"
          >
            <Activity size={14} className="animate-pulse" />
            <p className="text-xs font-bold tracking-widest uppercase">
              Health Screening Results
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl xl:text-5xl font-black tracking-tight">
              {data?.fullName}
            </h1>
            <p className="mt-2 text-sm font-medium text-muted-foreground">
              {data?.age} years old{" "}
              <span className="mx-1.5 text-muted-foreground">|</span>{" "}
              {data?.sex}{" "}
              <span className="mx-1.5 text-muted-foreground">|</span>{" "}
              {data?.school}
            </p>
          </motion.div>
          {/* Summary Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-2.5 pt-2"
          >
            {/* Pills are rendered in MetricDetail, omitted here */}
          </motion.div>
        </div>
        {/* Score Ring */}
        <div className="flex items-center gap-5 shrink-0 bg-white/60 p-4 rounded-3xl border border-border backdrop-blur-md shadow-sm">
          <div className="text-right">
            <p className="text-xs font-black tracking-widest uppercase text-muted-foreground">
              Locked In
            </p>
            <p className="text-xs mt-0.5 font-semibold text-muted-foreground">
              Overall Score
            </p>
          </div>
          <ScoreRing score={lockedInScore} color={lockedInColor} />
        </div>
      </div>
    </div>
  </>
);

export default HeroSection;
