"use client";
import { motion, AnimatePresence } from "framer-motion";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 flex items-center justify-center bg-black/30 z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose} // closes modal when backdrop is clicked
                >
                    <motion.div
                        className="
              bg-white/80 backdrop-blur-md rounded-2xl 
              w-[96%] sm:w-[90%] md:w-[85%] lg:w-[80%] max-w-5xl 
              h-[92vh] sm:h-auto max-h-[95vh] 
              p-3 sm:p-6 relative 
              overflow-y-auto
            "
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
