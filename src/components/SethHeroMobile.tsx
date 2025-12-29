"use client";
/* eslint-disable @typescript-eslint/no-require-imports */
import Image from "next/image";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

export default function SethHeroMobile({ isPlaying = true }: { isPlaying?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll to achievements after initial animations
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollTo({
          top: containerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }, 3000); // Start scrolling after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col overflow-y-auto h-screen">
      <div className="px-6 pt-16">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }} className="flex items-center gap-3">
          <h2 className="text-3xl text-red-500 font-bold">meet</h2>
          <div className="bg-[#2bb573] px-3 py-1">
            <h3 className="text-3xl italic text-white font-bold">Jimmy Newton</h3>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full mt-4">
        <div className="relative w-full aspect-[4/5]">
          <Image src="/hero/seth.png" alt="Jimmy Newton" fill className="object-contain" priority />
        </div>
        <motion.div className="absolute top-4 right-8 z-10" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1, transition: { delay: 2.0, duration: 1.2 } }}>
          <Lottie animationData={require("../../public/Arrow.json")} loop autoplay style={{ width: 64, height: 64 }} />
        </motion.div>
      </div>

      <div className="px-6 pb-12">
        <motion.p className="text-[20px] text-red-500 font-bold mt-4" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { delay: 3.5, duration: 1.2 } }}>
          What does it mean to lock in?
        </motion.p>
        <motion.div className="mt-4 space-y-3">
          {["Presidential BECE Award winner", "Attended Augusco", "Won NSMQ", "Got into Medical School"].map((text, i) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 3.0 + i * 1.0, duration: 1.0 }}
              className="flex items-center justify-between px-4 py-3 rounded-full border-2 border-gray-200 bg-white shadow-sm"
            >
              <span className="font-semibold text-gray-900">{text}</span>
              <CheckCircle2 fill="#2bb573" className="text-white w-8 h-8" />
            </motion.div>
          ))}
        </motion.div>

        {/* Soon-to-be doctor button */}
        <motion.button 
          className="bg-[#2bb573] text-white px-8 py-3 rounded-full font-bold text-xl mt-6 w-full" 
          initial={{ y: -40, opacity: 0 }} 
          whileInView={{ y: 0, opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 7.5, duration: 1.2 }}
        >
          Soon-to-be doctor
        </motion.button>
        
        {/* JustGo Health Ambassador */}
        <motion.p 
          className="text-red-500 text-xl font-bold mt-6 text-center" 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ delay: 9.0, duration: 1.2 }}
        >
          JustGo Health Ambassador
        </motion.p>
      </div>
    </div>
  );
}


