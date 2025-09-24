import React, { useEffect, useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";
import { useMentalHealthStore } from "@/stores/useMentalHealthStore";

export default function Question4({ onNext, onClose, onStateChange }: QuestionProps & { onStateChange?: (s: { canProceed: boolean }) => void }) {
    const storedGrade = useMentalHealthStore((s) => s.gradeLevel);
    const setGradeLevel = useMentalHealthStore((s) => s.setGradeLevel);
    const [selectedGrade, setSelectedGrade] = useState<number | null>(storedGrade as any);

    const handleGradeSelect = (grade: number) => {
        setSelectedGrade(grade);
        setGradeLevel(grade as any);
        if (onStateChange) onStateChange({ canProceed: true });
    };

    const handleDone = () => {
        if (selectedGrade !== null) {
            onClose();
        }
    };

    useEffect(() => {
        if (onStateChange) onStateChange({ canProceed: selectedGrade !== null });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const grades = [1, 2, 3, 4, 5, 6];

    return (
        <QuestionCard className="text-black bg-[#f6f9e6]">
            <div className="mb-2">
                <p className="absolute top-2 sm:top-4 left-2 sm:left-4 m-4 sm:m-10 ml-6 sm:ml-25 text-2xl sm:text-4xl font-bold">Profile: Grade/Level</p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 text-black text-center">
                Which level or form are you currently in?
            </h2>

            <div className="flex flex-wrap gap-3 sm:gap-4 max-w-md mb-12 justify-center">
                {grades.map((grade) => (
                    <button
                        key={grade}
                        onClick={() => handleGradeSelect(grade)}
                        className={`
                            w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 text-lg sm:text-xl font-bold
                            transition-all duration-200 transform
                            ${selectedGrade === grade
                                ? 'bg-green-500 border-green-500 text-white scale-110'
                                : 'bg-white border-gray-400 text-black hover:bg-green-100 hover:border-green-400 hover:scale-105'
                            }
                            active:scale-95
                        `}
                    >
                        {grade}
                    </button>
                ))}
            </div>

            {/* Done button removed; handled by main Next/Done control */}
        </QuestionCard>
    );
}