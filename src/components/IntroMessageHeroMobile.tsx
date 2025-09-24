import { motion } from "framer-motion";
import { useState } from "react";
import MentalHealthModal from "./modalcarousel/modal/MentalHealthModal";
import { ChevronDown } from "lucide-react";

export default function IntroMessageHeroMobile({
  isPlaying = true,
  triggerOutro = false,
  onScrollToAnimations
}: { 
  isPlaying?: boolean; 
  triggerOutro?: boolean; 
  onScrollToAnimations?: () => void;
}) {
const [open,  setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={triggerOutro ? { opacity: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="relative h-screen flex flex-col items-center justify-center bg-transparent  text-black p-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isPlaying && !triggerOutro ? 1 : 0, y: isPlaying && !triggerOutro ? 0 : 20 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
          It all starts with your
          <br />
          Mental Health
        </h1>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isPlaying && !triggerOutro ? 1 : 0, y: isPlaying && !triggerOutro ? 0 : 30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
        className="mt-12 bg-white text-blue-700 px-8 py-4 rounded-full text-xl font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={()=> setOpen(true)}
      >
        Try it for free
      </motion.button>

      {isPlaying && !triggerOutro && onScrollToAnimations && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 cursor-pointer"
          onClick={onScrollToAnimations}
        >
          <ChevronDown className="h-10 w-10 text-black" />
        </motion.div>
      )}

      <MentalHealthModal
          isOpen={open}
          onClose={() => setOpen(false)}
        />
    </motion.div>
  );
}
