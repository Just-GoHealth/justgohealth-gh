import React, { useEffect, useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";
import { useMentalHealthStore } from "@/stores/useMentalHealthStore";

export default function Question1({ onNext, onStateChange }: QuestionProps & { onStateChange?: (s: { canProceed: boolean }) => void }) {
    const storeName = useMentalHealthStore((s) => s.fullName);
    const setFullName = useMentalHealthStore((s) => s.setFullName);
    const [name, setName] = useState(storeName);

    useEffect(() => {
        if (onStateChange) onStateChange({ canProceed: !!(storeName && storeName.trim()) });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = () => {
        if (name.trim()) {
            setFullName(name);
            if (onStateChange) onStateChange({ canProceed: true });
            onNext();
        }
    };

    return (
        <QuestionCard className="text-black bg-[#f6f9e6] ">
            <div className="mb-2">
                <p className="absolute top-2 sm:top-4 left-2 sm:left-4 m-4 sm:m-10 ml-6 sm:ml-25 text-2xl sm:text-4xl font-bold">Profile: Full Name</p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl  font-bold mb-6 sm:mb-10 text-black text-center">
                What's your official name?
            </h2>

            <div className="flex items-center gap-0 mb-4 w-full max-w-xl">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (onStateChange) onStateChange({ canProceed: !!e.target.value.trim() }); }}
                    placeholder=""
                    className="flex-1 min-w-0 px-3 sm:px-4 py-3 sm:py-4 text-lg sm:text-2xl border-2 border-green-500 rounded-l-lg focus:outline-none focus:border-green-600 bg-white"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                />
                <button
                    onClick={handleSubmit}
                    className="px-4 sm:px-6 py-3 sm:py-4 bg-green-500 text-white rounded-r-lg h-[54px] sm:h-17 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center border-2 border-green-500 hover:border-green-600"
                >
                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-white"
                    >
                        <path
                            d="M5 12H19M19 12L12 5M19 12L12 19"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
            </div>
        </QuestionCard>
    );
}