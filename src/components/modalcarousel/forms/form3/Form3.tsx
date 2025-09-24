"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";


type Props = {
    onComplete: () => void; // called when Form3 finishes
    onStateChange?: (s: { canProceed: boolean; isFinalStep?: boolean }) => void;
};

export type QuestionProps = {
    onNext: () => void;
    onClose: () => void;
};

const questions = [Question1, Question2, Question3, Question4];

export default function Form3({ onComplete, onStateChange }: Props) {
    const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            onComplete(); // finished Form3 → close modal or move to next form
        }
    };

    const variants = {
        enter: { y: "100%", opacity: 0 },
        center: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        exit: { y: "-100%", opacity: 0, transition: { duration: 0.4 } },
    };

    const CurrentQuestion = questions[step];

    // Report canProceed and final step based on store-driven selections via question components
    const handleStateChange = (s: { canProceed: boolean }) => {
        if (onStateChange) onStateChange({ canProceed: s.canProceed, isFinalStep: step === questions.length - 1 });
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={step}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute top-0 left-0 w-full h-full flex items-stretch justify-center"
                >
                    <CurrentQuestion onNext={handleNext} onClose={onComplete} onStateChange={handleStateChange} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}