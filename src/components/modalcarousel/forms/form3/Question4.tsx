import React, { useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";

export default function Question4({ onNext, onClose }: QuestionProps) {
    const [selectedGrade, setSelectedGrade] = useState<number | null>(null);

    const handleGradeSelect = (grade: number) => {
        setSelectedGrade(grade);
    };

    const handleDone = () => {
        if (selectedGrade !== null) {
            onClose();
        }
    };

    const grades = [1, 2, 3, 4, 5, 6];

    return (
        <QuestionCard className="text-black bg-[#f6f9e6]">
            <div className="mb-4">
                <p className="absolute top-4 left-4 m-10 ml-25 text-4xl font-bold">Profile: Grade/Level</p>
            </div>

            <h2 className="text-7xl font-bold mb-8 text-black">
                Which level or form are you currently in?
            </h2>

            <div className="flex flex-wrap gap-3 max-w-md mb-12">
                {grades.map((grade) => (
                    <button
                        key={grade}
                        onClick={() => handleGradeSelect(grade)}
                        className={`
                            w-16 h-16 rounded-full border-2 text-xl font-bold
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

            <div className="absolute bottom-3 right-[-50] items-center w-full max-w-md">
                <button
                    onClick={handleDone}
                    disabled={selectedGrade === null}
                    className={`
                             py-3 px-2 rounded-[20] h-12 w-20 text-lg font-bold
                            transition-all duration-200 transform
                            disabled:opacity-100
                            ${selectedGrade !== null
                            ? 'bg-black text-white hover:scale-120 active:scale-95'
                            : 'bg-black text-gray-500 cursor-not-allowed'
                        }
                    `}
                >
                    Done
                </button>

            </div>
        </QuestionCard>
    );
}