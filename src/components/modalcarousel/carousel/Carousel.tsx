"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form1 from "../forms/form1/Form1";
import Form2 from "../forms/form2/Form2";
import Form3 from "../forms/form3/Form3";
import { useRef } from "react";
import CarouselControls from "./CarouselControls";

interface CarouselProps {
    onFinish?: () => void;
    onPageChange?: (page: number) => void;
}

export default function Carousel({ onFinish, onPageChange }: CarouselProps) {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);
    const [canProceed, setCanProceed] = useState(false);
    const [isFinalStep, setIsFinalStep] = useState(false);
    const nextHandlerRef = useRef<(() => void) | null>(null);

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection >= 3) return;
        setDirection(newDirection);
        const next = page + newDirection;
        setPage(next);
        // Reset proceed state when changing pages to avoid stale enabled Next
        setCanProceed(false);
        setIsFinalStep(false);
        if (onPageChange) onPageChange(next);
    };

    const handleFormStateChange = (state: { canProceed: boolean }) => {
        setCanProceed(state.canProceed);
        setIsFinalStep(false);
    };
    const handleForm3StateChange = (state: { canProceed: boolean; isFinalStep?: boolean }) => {
        setCanProceed(state.canProceed);
        setIsFinalStep(!!state.isFinalStep);
    };

    const forms = [
        // Cast as any to satisfy JSX prop typing across files
        (<Form1 key="form1" onComplete={() => paginate(1)} onStateChange={handleFormStateChange as any} />) as any,
        (<Form2 key="form2" onComplete={() => paginate(1)} onStateChange={handleFormStateChange as any} />) as any,
        (<Form3 key="form3" onComplete={() => { if (onFinish) { onFinish(); } }} onStateChange={handleForm3StateChange as any} />) as any,
    ];

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.4 },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-100%" : "100%",
            opacity: 0,
            transition: { duration: 0.4 },
        }),
    };

    return (
        <div
            className="
        relative w-full h-full
        min-h-[320px] sm:min-h-[400px] md:min-h-[500px]
        overflow-hidden flex items-center justify-center
      "
        >
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-3 sm:p-6"
                >
                    {forms[page]}
                </motion.div>
            </AnimatePresence>

            <CarouselControls
                page={page}
                total={forms.length}
                onNext={() => {
                    if (page === forms.length - 1) {
                        if (!isFinalStep) {
                            if (nextHandlerRef.current) {
                                nextHandlerRef.current();
                            }
                        } else {
                            if (onFinish) { onFinish(); }
                        }
                    } else {
                        paginate(1);
                    }
                }}
                onPrev={() => paginate(-1)}
                disabledNext={!canProceed}
                showDone={page === forms.length - 1 && isFinalStep}
            />
        </div>
    );
}
