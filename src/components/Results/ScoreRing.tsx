import React from "react";
import { motion } from "framer-motion";

interface ScoreRingProps {
  score: number;
  color: string;
}

export const ScoreRing: React.FC<ScoreRingProps> = ({ score, color }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - Math.min(score / 10, 1));

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="fill-none stroke-[#F0EDE8]"
          strokeWidth="8"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          className="fill-none drop-shadow-md"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
        />
      </svg>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <span className="text-2xl font-black leading-none" style={{ color }}>
          {score}
        </span>
        <span className="text-[10px] font-bold tracking-widest uppercase text-[#C4BDB6] mt-0.5">
          /10
        </span>
      </motion.div>
    </div>
  );
};

export default ScoreRing;
