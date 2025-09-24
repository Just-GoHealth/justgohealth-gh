"use client";
/* eslint-disable @typescript-eslint/no-require-imports */
import Image from "next/image";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

export default function DoctorHeroMobile({
  isPlaying = true,
  triggerOutro = false 
}: { 
  isPlaying?: boolean,
  triggerOutro?: boolean 
}) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={triggerOutro ? { opacity: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col overflow-hidden bg-white min-h-[calc(100vh - 60px - 76px)]"
    >
      {/* Header Section */}
      <div className="flex-shrink-0 px-6 pt-4 pb-2">
        <div className="flex items-center gap-3 justify-center">
          <motion.h2
            className="text-2xl text-red-500 font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
          >
            meet
          </motion.h2>
          <motion.div
            className="bg-[#2bb573] px-3 py-1 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-2xl italic text-white font-bold">Dr. Nathaniel Codjoe</h3>
          </motion.div>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative flex-shrink-0 px-6 -mt-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
          className="relative h-64 w-full flex justify-center"
        >
          <div className="relative w-48 h-full">
            <Image
              src="/hero/doctor.png"
              alt="Dr. Nathaniel Codjoe"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* Arrow Animation */}
        <motion.div
          className="absolute top-4 right-8 z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Lottie
            animationData={require("../../public/Arrow.json")}
            loop
            autoplay
            style={{ width: 48, height: 48 }}
          />
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="flex-1 px-6 pb-4 flex flex-col justify-between">
        {/* Question */}
        <motion.p
          className="text-lg text-red-500 font-bold text-center mt-0"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          What does it mean to lock in?
        </motion.p>

        {/* Achievements List */}
        <div className="space-y-2 max-w-sm mx-auto mt-2">
          {[
            "First Ghanaian to receive award",
            "Founder of impact fund",
            "Mentor to medical students",
            "Advocate for public health",
          ].map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 2.0 + i * 0.15,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex items-center justify-between px-3 py-2 rounded-full border-2 border-gray-200 bg-white shadow-sm"
            >
              <span className="font-semibold text-gray-900 text-sm">{text}</span>
              <CheckCircle2 fill="#2bb573" className="text-white w-6 h-6 flex-shrink-0" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="space-y-3 mt-4 mb-auto">
          {/* Soon-to-be doctor button */}
          <motion.button
            className="bg-[#2bb573] text-white px-6 py-3 rounded-full font-bold text-lg w-full shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 2.8,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            First Ghanaian to achieve this
          </motion.button>

          {/* JustGo Health Ambassador */}
          <motion.p
            className="text-red-500 text-lg font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.8 }}
          >
            JustGo Health Ambassador
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}


