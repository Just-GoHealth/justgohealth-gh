import React, { useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";
import { useMentalHealthStore } from "@/stores/useMentalHealthStore";

export default function Question3({ onNext, onStateChange }: QuestionProps & { onStateChange?: (s: { canProceed: boolean }) => void }) {
    const storedSex = useMentalHealthStore((s) => s.sex);
    const setSex = useMentalHealthStore((s) => s.setSex);
    const [selectedSex, setSelectedSex] = useState<string | null>(storedSex);

    const handleSexSelect = (sex: string) => {
        setSelectedSex(sex);
        setSex(sex as any);
        if (onStateChange) onStateChange({ canProceed: true });
        // Auto-advance after selection
        setTimeout(() => {
            onNext();
        }, 300);
    };

    return (
        <QuestionCard className="text-black bg-[#f6f9e6]">
            <div className="mb-2">
                <p className="absolute top-2 sm:top-4 left-2 sm:left-4 m-4 sm:m-10 ml-6 sm:ml-25 text-2xl sm:text-4xl font-bold">Profile: Sex</p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-black text-center">
                What's your biological sex?
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center max-w-lg w-full">
                <button
                    onClick={() => handleSexSelect('male')}
                    className={`
                        px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold w-full sm:w-auto
                        transition-all duration-200 transform
                        ${selectedSex === 'male'
                            ? 'bg-green-500 text-white scale-105'
                            : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
                        }
                        active:scale-95 min-w-[240px] sm:min-w-[270px]
                    `}
                >
                    MALE
                </button>

                <button
                    onClick={() => handleSexSelect('female')}
                    className={`
                        px-8 sm:px-12 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-bold w-full sm:w-auto
                        transition-all duration-200 transform
                        ${selectedSex === 'female'
                            ? 'bg-green-500 text-white scale-105'
                            : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
                        }
                        active:scale-95 min-w-[240px] sm:min-w-[270px]
                    `}
                >
                    FEMALE
                </button>
            </div>
        </QuestionCard>
    );
}