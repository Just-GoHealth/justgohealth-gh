"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function GirlHeroMobile({
  isPlaying = true,
}: {
  isPlaying?: boolean;
}) {
  const lockControls = useAnimationControls();
  const text1Controls = useAnimationControls();
  const text2Controls = useAnimationControls();
  const text3Controls = useAnimationControls();

  useEffect(() => {
    if (isPlaying) {
      lockControls.start({ opacity: 1, y: 0 });
      setTimeout(() => text1Controls.start({ opacity: 1, y: 0 }), 2000);
      setTimeout(() => text2Controls.start({ opacity: 1, y: 0 }), 2500);
      setTimeout(() => text3Controls.start({ opacity: 1, y: 0 }), 3000);
    } else {
      lockControls.stop();
      text1Controls.stop();
      text2Controls.stop();
      text3Controls.stop();
    }
  }, [isPlaying]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Grid Layout */}
      <div className="grid grid-cols-[1fr_1fr] h-screen items-center px-6">
        
        {/* LEFT: IMAGE */}
        <div className="relative h-full flex items-center justify-center">
          <Image
            src="/hero/girl.png"
            alt="Portrait of a woman"
            fill
            priority
            className="object-contain scale-[1.15]"
          />
        </div>

        {/* RIGHT: CONTENT */}
        <div className="flex flex-col items-start justify-center pl-4">
          
          {/* LOCK IN */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={lockControls}
            transition={{ duration: 1.4 }}
            className="text-[#2bb573] text-8xl font-extrabold leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
          >
            LOCK
            <div className="-mt-4">IN</div>
          </motion.h2>

          {/* TEXT BLOCK */}
          <div className="mt-10 text-white text-xl font-semibold underline underline-offset-4 space-y-3">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={text1Controls}
              transition={{ duration: 0.7 }}
            >
              Feeling depressed or sad?!!
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={text2Controls}
              transition={{ duration: 0.7 }}
            >
              Screen yourself with our App.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={text3Controls}
              transition={{ duration: 0.7 }}
            >
              Connect with care.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
