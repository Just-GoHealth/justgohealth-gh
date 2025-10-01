"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Form1 from "../forms/form1/Form1";
import Form2 from "../forms/form2/Form2";
import Form3 from "../forms/form3/Form3";
import CarouselControls from "./CarouselControls";

interface CarouselProps {
    onFinish?: () => void;
}

export default function Carousel({ onFinish }: CarouselProps) {
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const paginate = (newDirection: number) => {
        if (page + newDirection < 0 || page + newDirection >= 3) return;
        setDirection(newDirection);
        setPage(page + newDirection);
    };

    const forms = [
        <Form1 key="form1" onComplete={() => paginate(1)} />,
        <Form2 key="form2" onComplete={() => paginate(1)} />,
        <Form3 key="form3" onComplete={() => onFinish} />, // <-- closes modal
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
        <div className="relative w-full h-full overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute top-0 left-0 w-full h-full"
                >
                    {forms[page]}
                </motion.div>
            </AnimatePresence>

            <CarouselControls
                page={page}
                total={forms.length}
                onNext={() => paginate(1)}
                onPrev={() => paginate(-1)}
            />
        </div>
    );
}
