"use client";
import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

export default function GirlHeroMobile({ 
  isPlaying = true, 
  triggerOutro = false 
}: { 
  isPlaying?: boolean, 
  triggerOutro?: boolean 
}) {
  const lockControls = useAnimationControls();
  const text1Controls = useAnimationControls();
  const text2Controls = useAnimationControls();
  const text3Controls = useAnimationControls();

  useEffect(() => {
    if (isPlaying) {
      // Start animations in sequence with smoother timing
      lockControls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
      });
      
      setTimeout(() => text1Controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }), 1500);
      
      setTimeout(() => text2Controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }), 2000);
      
      setTimeout(() => text3Controls.start({ 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }), 2500);
    } else {
      // Pause all animations
      lockControls.stop();
      text1Controls.stop();
      text2Controls.stop();
      text3Controls.stop();
    }
  }, [isPlaying, lockControls, text1Controls, text2Controls, text3Controls]);

  return (
    <motion.div 
      initial={{ opacity: 1 }} 
      animate={triggerOutro ? { opacity: 0 } : {}} 
      transition={{ duration: 0.5 }} 
      className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100 min-h-[calc(100vh - 60px - 76px)]"
    >
      {/* Background Image - Properly positioned */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-sm mx-auto">
          <Image
            src="/hero/girl.png"
            alt="Portrait of a woman"
            fill
            className="object-contain object-center scale-110"
            priority
          />
        </div>
      </div>

      {/* Content Overlay - Positioned to avoid scrolling */}
      <div className="absolute inset-0 flex flex-col justify-center items-center px-6">
        {/* LOCK IN Text - Positioned in upper portion */}
        <div className="flex-shrink-0 mt-auto pb-4">
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={lockControls}
            className="text-[#2bb573] text-7xl sm:text-8xl font-extrabold leading-[0.8] text-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
          >
            LOCK
            <div className="-mt-2">IN</div>
          </motion.h2>
        </div>

        {/* Text Content - Positioned in lower portion */}
        <div className="flex-shrink-0 mt-auto pt-4">
          <div className="space-y-3 text-center">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={text1Controls}
              className="text-white text-xl sm:text-2xl font-bold underline underline-offset-4 decoration-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Feeling depressed or sad?
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={text2Controls}
              className="text-white text-xl sm:text-2xl font-bold underline underline-offset-4 decoration-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Screen yourself with our App.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={text3Controls}
              className="text-white text-xl sm:text-2xl font-bold underline underline-offset-4 decoration-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
            >
              Connect with care.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}