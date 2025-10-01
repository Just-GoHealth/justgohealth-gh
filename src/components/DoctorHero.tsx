/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import Image from "next/image";
import React from "react";
import Lottie from "lottie-react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";


export default function DoctorHero() {
  const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(max-width: 1023px)').matches;
  return (
    <div className={`relative  h-screen order-1 lg:order-2 overflow-hidden ${isMobile ? 'hidden' : ''}`}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
      <Image
        src="/hero/doc-boy.png"
        alt="Dr. Nathaniel Codjoe holding book"
        width={900}
        height={300}
        className="object-contain object-left ml-[500px] w-[870px] h-[665px] mt-[40px]"
        priority
      />
      </motion.div>
      
      {/* Arrow Animation - pointing to boy's head */}
      {/* For Hand-drawn arrow.json */}
      {/* <div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 scale-[2.0] -ml-[200px] -mt-14 rotate-240"> */}

      {/* For Arrow.json */}
      <motion.div className="absolute top-32 left-1/2 transform -translate-x-1/2 z-20 scale-[2.5] ml-[140px] mt-4 rotate-220" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
        <Lottie
          // animationData={require("../../public/Hand-drawn arrow.json")}
          animationData={require("../../public/Arrow.json")}
          loop={true}
          autoplay={true}
          style={{ width: 80, height: 80 }}
        />
      </motion.div>
      
      {/* Text Overlays */}
      <div className="absolute inset-0 flex items-center -left-24 justify-center mr-[100px] z-20 mt-[80px]">
        <div className="text-left">
          {/* Meet and Dr. Nathaniel Codjoe on same line */}
          <motion.div className="flex items-center -ml-20 gap-4 mt-32 scale-[0.8]" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}>
            <h2 className="text-[60px] text-black font-bold">
              meet
            </h2>
            
            {/* Dr. Nathaniel Codjoe with dark blue background */}
            <div className="bg-blue-900 px-6 -py-4 rounded-none">
              <h3 className="text-[60px] italic text-white font-bold">Dr. Nathaniel Codjoe</h3>
            </div>
          </motion.div>
          
          {/* Question */}
          <motion.p className="text-[28px] text-black font-bold mt-2 ml-12" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.5 }}>
            What does it mean to lock in?
          </motion.p>
          
          {/* Achievements List - all same width with dark blue background */}
          <div className="relative  text-nowrap text-xl font-bold  -space-y-2 mt-10 ml-30 scale-[1.4]">
            {/* White cover that wipes up */}
            <motion.div className="absolute inset-0 bg-white" initial={{ height: "90%", width: "70%" }} animate={{ height: 0 }} transition={{ delay: 1.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }} />
            <motion.div className="flex items-center justify-between px-4 py-2 w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.7, duration: 0.4 }}>
              <span>{`Attended St. Peter’s Boys’`}</span>
              <CheckCircle2 fill="#1c398e" className="text-white w-8 h-8" />
            </motion.div>
            <motion.div className="flex items-center justify-between px-4 py-2 w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.85, duration: 0.4 }}>
              <span>Got into Medical School</span>
              <CheckCircle2 fill="#1c398e" className="text-white w-8 h-8" />
            </motion.div>
            <motion.div className="flex items-center justify-between px-4 py-2 w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.0, duration: 0.4 }}>
              <span>Graduated top of his class</span>
              <CheckCircle2 fill="#1c398e" className="text-white w-8 h-8" />
            </motion.div>
            <motion.div className="flex items-center justify-between px-4 py-2 w-[400px]" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.15, duration: 0.4 }}>
              <span>Won 16 out of 22 awards</span>
              <CheckCircle2 fill="#1c398e" className="text-white w-8 h-8" />
            </motion.div>
          </div>

          {/* First Ghanaian to achieve this */}
          <motion.div className="bg-blue-900 px-16 py-2 rounded-full w-fit mt-6 -ml-6 scale-[0.9]" initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
            <p className="text-white -ml-1 -mr-10 text-4xl font-bold italic">
              First Ghanaian to achieve this
            </p>
          </motion.div>
          
          {/* JustGo Health Ambassador */}
          <motion.p className="text-red-500 text-2xl font-bold mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}>
            JustGo Health Ambassador
          </motion.p>
        </div>
      </div>
    </div>
  );
}
