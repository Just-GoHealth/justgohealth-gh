"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Question1 from "./Question1";

type Props = {
    onComplete: () => void; // called when Form1 finishes
    onStateChange?: (s: { canProceed: boolean }) => void;
};

// Define the props each Question component expects
export type QuestionProps = {
    onNext: () => void;
};

// Instead of JSX, we store the component itself
const questions = [Question1];

export default function Form1({ onComplete, onStateChange }: Props) {
    const [step, setStep] = useState(0);

    const handleNext = () => {
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            onComplete(); // finished Form1 → move to Form2
        }
    };

    const variants = {
        enter: { y: "100%", opacity: 0 },
        center: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        exit: { y: "-100%", opacity: 0, transition: { duration: 0.4 } },
    };

    const CurrentQuestion = questions[step]; // get the right component

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
                    <CurrentQuestion onNext={handleNext} onStateChange={onStateChange} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
