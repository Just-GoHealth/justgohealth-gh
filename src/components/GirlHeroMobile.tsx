"use client";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function GirlHeroMobile({ isPlaying = true }: { isPlaying?: boolean }) {
  const lockControls = useAnimationControls();
  const text1Controls = useAnimationControls();
  const text2Controls = useAnimationControls();
  const text3Controls = useAnimationControls();

  useEffect(() => {
    if (isPlaying) {
      // Start animations in sequence
      lockControls.start({ opacity: 1, y: 0 });
      setTimeout(() => text1Controls.start({ opacity: 1, y: 0 }), 2000);
      setTimeout(() => text2Controls.start({ opacity: 1, y: 0 }), 2500);
      setTimeout(() => text3Controls.start({ opacity: 1, y: 0 }), 3000);
    } else {
      // Pause all animations
      lockControls.stop();
      text1Controls.stop();
      text2Controls.stop();
      text3Controls.stop();
    }
  }, [isPlaying, lockControls, text1Controls, text2Controls, text3Controls]);
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">
      <div className="relative h-screen">
        <Image
          src="/hero/girl.png"
          alt="Portrait of a woman"
          fill
          className="object-contain w-[100%%] scale-[1.3] -mt-14"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={lockControls}
              transition={{ duration: 1.5 }}
              className="text-[#2bb573] text-9xl font-extrabold leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
            >
              LOCK
              <div className="-mt-6">IN</div>
            </motion.h2>
            <motion.div
              className="mt-8 text-white text-2xl font-semibold underline underline-offset-4 space-y-2"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={text1Controls}
                transition={{ duration: 0.8 }}
              >
                Feeling depressed or sad?
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={text2Controls}
                transition={{ duration: 0.8 }}
              >
                Screen yourself with our App.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={text3Controls}
                transition={{ duration: 0.8 }}
              >
                Connect with care.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}



