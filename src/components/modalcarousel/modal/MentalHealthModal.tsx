"use client";
import Modal from "./Modal";
import Carousel from "../carousel/Carousel";
import { useState } from "react";

type MentalHealthModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MentalHealthModal({ isOpen, onClose }: MentalHealthModalProps) {
    const [page, setPage] = useState(0);
    const total = 3;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="w-full h-full flex flex-col">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black text-left">
                        Personalize your mental health
                    </h2>
                    <div className="rounded-full bg-red-600 text-white text-xs sm:text-sm font-bold w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-md">
                        {page + 1}/{total}
                    </div>
                </div>
                <div className="flex-1 min-h-0">
                    <Carousel onFinish={onClose} onPageChange={(p) => setPage(p)} />
                </div>
            </div>
        </Modal>
    );
}
