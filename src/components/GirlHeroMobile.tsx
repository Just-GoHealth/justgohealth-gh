"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GirlHeroMobile() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative h-screen">
        <Image
          src="/hero/girl.png"
          alt="Portrait of a woman"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
              className="text-[#2bb573] text-9xl font-extrabold leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
            >
              LOCK
              <div className="-mt-6">IN</div>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 1.2 } }}
              className="mt-8 text-white text-2xl font-semibold underline underline-offset-4 space-y-2"
            >
              <p>Feeling depressed or sad?</p>
              <p>Screen yourself with our App.</p>
              <p>Connect with care.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


