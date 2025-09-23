/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";


export default function SethHero() {
  const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(max-width: 1023px)').matches;
  return (
    <div className={`relative h-screen order-1 lg:order-2 overflow-hidden ${isMobile ? 'hidden' : ''}`}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
      <Image
        src="/hero/seth.png"
        alt="Jimmy Newton holding trophy"
        width={900}
        height={300}
        className="object-contain object-left ml-[570px] w-[870px] h-[725px]"
        priority
      />
      </motion.div>
      
      {/* Arrow Animation - pointing to boy's head */}
      {/* For Hand-drawn arrow.json */}
      {/* <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 scale-[2.0] -ml-[200px] -mt-14 rotate-240"> */}

      {/* For Arrow.json */}
      <motion.div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 scale-[2.5] ml-[20px] -mt-14 rotate-220" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <Lottie
          // animationData={require("../../public/Hand-drawn arrow.json")}
          animationData={require("../../public/Arrow.json")}
          loop={true}
          autoplay={true}
          style={{ width: 80, height: 80 }}
        />
      </motion.div>
      
      {/* Text Overlays */}
      <div className="absolute inset-0 flex items-center -left-20 justify-center mr-[100px] z-20">
        <div className="text-left">
          {/* Meet and Jimmy Newton on same line */}
          <motion.div className="flex items-center -ml-36 gap-4 mt-32 scale-[0.8]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
            <h2 className="text-[60px] text-red-500 font-bold">
              meet
            </h2>
            
            {/* Jimmy Newton with green background */}
            <div className="bg-[#2bb573] px-4 -py-2 rounded-none">
              <h3 className="text-[60px] italic text-white font-bold">Jimmy Newton</h3>
            </div>
          </motion.div>
          
          {/* Question */}
          <motion.p className="text-[28px] text-red-500 font-bold mt-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}>
            What does it mean to lock in?
          </motion.p>
          
          {/* Achievements List - all same width with green background */}
          <div className="relative text-red-500 text-nowrap text-xl font-bold text-left -space-y-2 mt-8 -ml-9 scale-[1.2]">
            {/* White cover that wipes up to reveal items */}
            <motion.div className="absolute inset-0 bg-white" initial={{ height: "80%", width: "70%" }} animate={{ height: 0 }} transition={{ delay: 1.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
            <motion.div className="flex items-center justify-between px-4 py-2 rounded-full w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.4 }}>
              <span>Presidential BECE Award winner</span>
              <CheckCircle2 fill="#2bb573" className="text-white w-10 h-10" />
            </motion.div>
            <motion.div className="flex items-center justify-between px-4 py-2 rounded-full w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.85, duration: 0.4 }}>
              <span>Attended Augusco</span>
              <CheckCircle2 fill="#2bb573" className="text-white w-10 h-10" />
            </motion.div>
            <motion.div className="flex items-center justify-between px-4 py-2 rounded-full w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0, duration: 0.4 }}>
              <span>Won NSMQ</span>
              <CheckCircle2 fill="#2bb573" className="text-white w-10 h-10" />
            </motion.div>
            <motion.div className="flex items-center justify-between px-4 py-2 rounded-full w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.15, duration: 0.4 }}>
              <span>Got into Medical School</span>
              <CheckCircle2 fill="#2bb573" className="text-white w-10 h-10" />
            </motion.div>
          </div>
          
          {/* Soon-to-be doctor button */}
          <motion.button className="bg-[#2bb573] text-white px-20 py-2 rounded-full font-bold -ml-7 text-2xl mt-6" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            Soon-to-be doctor
          </motion.button>
          
          {/* JustGo Health Ambassador */}
          <motion.p className="text-red-500 text-2xl font-bold mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>
            JustGo Health Ambassador
          </motion.p>
        </div>
      </div>
    </div>
  );
}
