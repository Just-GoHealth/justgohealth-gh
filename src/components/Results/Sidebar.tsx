import React from "react";
import Image from "next/image";
import { Users, Clock, ArrowUpRight, Play } from "lucide-react";
import { motion } from "framer-motion";

interface SidebarProps {
  data: any;
  cleanUpTrial: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ data, cleanUpTrial }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
    className="w-full xl:w-[23%] xl:h-full flex flex-col px-7 py-10 gap-8 bg-linear-to-b from-white to-[#FAF8F4] border-t xl:border-t-0 xl:border-l border-[#F0EDE8] shadow-[-10px_0_40px_rgba(0,0,0,0.03)] z-20"
  >
    {/* Header */}
    <div className="flex items-center justify-between mb-2">
      <Image
        src="/logos/logo-black.png"
        alt="Logo"
        width={200}
        height={200}
        className="opacity-90"
      />
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E8E4DF]" />
        ))}
      </div>
    </div>

    {/* Doctor Status Card */}
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="rounded-4xl p-8 relative overflow-hidden border border-white/60 bg-white/40 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.04)] group cursor-default"
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#2bb573] opacity-[0.05] blur-3xl group-hover:opacity-10 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-[#2bb573]/10 border border-[#2bb573]/20 shadow-inner">
            <Users size={22} className="text-[#2bb573]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2bb573] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2bb573]" />
              </span>
              <span className="text-[10px] font-black tracking-widest uppercase text-[#2bb573]">
                Online Now
              </span>
            </div>
            <span className="text-xs font-bold text-[#A8A29E]">
              Internal Medicine
            </span>
          </div>
        </div>
        <p className="text-2xl font-black leading-tight text-[#1C1917] font-['Instrument_Serif',Georgia,serif]">
          A doctor is waiting to see you soon.
        </p>
        <div className="flex items-center gap-2 mt-4 text-[#78716C]">
          <Clock size={14} className="opacity-60" />
          <p className="text-xs font-semibold">
            Estimated wait: <span className="text-[#1C1917]">~2 mins</span>
          </p>
        </div>
      </div>
    </motion.div>

    {/* Action Button */}
    <div className="space-y-4 mt-10">
      <p className="text-[11px] font-black tracking-widest uppercase text-[#A8A29E] pl-1 mb-1">
        Primary Action
      </p>
      <motion.button
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full rounded-[28px] p-6 flex items-center justify-between relative overflow-hidden group shadow-[0_15px_35px_rgba(153,51,153,0.3)] bg-primary"
      >
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        <div className="text-left relative z-10">
          <p className="text-[11px] font-bold tracking-widest uppercase text-white/70 group-hover:text-white transition-colors">
            Continue to
          </p>
          <p className="text-2xl font-black text-white mt-0.5 font-['Instrument_Serif',Georgia,serif] tracking-tight">
            Waiting Room
          </p>
        </div>
        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/20 group-hover:bg-white group-hover:border-white transition-all duration-300 relative z-10 overflow-hidden">
          <motion.div
            animate={{ x: [0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <Play
              size={20}
              className="text-white fill-white group-hover:text-[#993399] group-hover:fill-[#993399] transition-colors ml-1"
            />
          </motion.div>
        </div>
      </motion.button>
    </div>

    {/* Retake Section */}
    <div className="flex-1" />
    <div className="mt-auto pt-6 border-t border-[#F0EDE8]/60">
      <div
        className="flex items-center gap-4 group cursor-pointer"
        onClick={() => cleanUpTrial()}
      >
        <div className="w-10 h-10 rounded-full border border-[#F0EDE8] flex items-center justify-center group-hover:border-primary group-hover:bg-[#993399]/5 transition-all">
          <ArrowUpRight
            size={18}
            className="text-[#C4BDB6] group-hover:text-[#993399] transition-colors"
          />
        </div>
        <div>
          <p className="text-[10px] font-black tracking-widest uppercase text-[#A8A29E] mb-0.5">
            Retake
          </p>
          <p className="text-sm font-bold text-[#1C1917] group-hover:text-[#993399] transition-colors">
            Screening Again
          </p>
        </div>
      </div>
      <p className="text-[10px] mt-6 text-center text-[#C4BDB6] font-medium uppercase tracking-widest">
        Logged in as {data?.fullName?.split(" ")[0]}
      </p>
    </div>
  </motion.div>
);

export default Sidebar;
