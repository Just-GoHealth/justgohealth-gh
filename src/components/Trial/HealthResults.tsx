"use client";

import { motion } from "framer-motion";
import { useHealthResults } from "@/hooks/use-health-results";
import HeroSection from "@/components/Results/HeroSection";
import MetricDetail from "@/components/Results/MetricDetail";
import Sidebar from "@/components/Results/Sidebar";

const HealthResults = () => {
  const {
    data,
    metrics,
    resultIndex,
    setResultIndex,
    lockedInScore,
    lockedInColor,
    cleanUpTrial,
  } = useHealthResults();

  if (!data || !metrics?.length) return null;

  return (
    <div
      className="h-screen w-full flex flex-col xl:flex-row overflow-hidden bg-white"
      style={{
        backgroundImage:
          "radial-gradient(circle, #E8E4DF 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* ── Left / Main Content ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col w-full xl:w-[77%] h-full overflow-y-auto xl:overflow-hidden"
      >
        <HeroSection
          data={data}
          lockedInScore={lockedInScore}
          lockedInColor={lockedInColor}
        />

        <MetricDetail
          metrics={metrics}
          resultIndex={resultIndex}
          setResultIndex={setResultIndex}
        />
      </motion.div>

      {/* ── Right Sidebar ── */}
      <Sidebar data={data} cleanUpTrial={cleanUpTrial} />
    </div>
  );
};

export default HealthResults;
