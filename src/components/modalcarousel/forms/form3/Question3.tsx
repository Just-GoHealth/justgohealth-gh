import React, { useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";

export default function Question3({ onNext }: QuestionProps) {
    const [selectedSex, setSelectedSex] = useState<string | null>(null);

    const handleSexSelect = (sex: string) => {
        setSelectedSex(sex);
        // Auto-advance after selection
        setTimeout(() => {
            onNext();
        }, 300);
    };

    return (
        <QuestionCard className="text-black bg-[#f6f9e6]">
            <div className="mb-4">
                <p className="absolute top-4 left-4 m-10 ml-25 text-4xl font-bold">Profile: Sex</p>
            </div>

            <h2 className="text-6xl font-bold mb-8 text-black">
                What's your biological sex?
            </h2>

            <div className="flex flex-col sm:flex-row gap-10 justify-center max-w-lg">
                <button
                    onClick={() => handleSexSelect('male')}
                    className={`
                        px-12 py-4 rounded-full text-xl font-bold
                        transition-all duration-200 transform
                        ${selectedSex === 'male'
                            ? 'bg-black text-white scale-105'
                            : 'bg-gray-800 text-white hover:bg-gray-700 hover:scale-105'
                        }
                        active:scale-95 min-w-[270px]
                    `}
                >
                    MALE
                </button>

                <button
                    onClick={() => handleSexSelect('female')}
                    className={`
                        px-12 py-4 rounded-full text-xl font-bold
                        transition-all duration-200 transform
                        ${selectedSex === 'female'
                            ? 'bg-green-500 text-white scale-105'
                            : 'bg-green-400 text-white hover:bg-green-500 hover:scale-105'
                        }
                        active:scale-95 min-w-[270px]
                    `}
                >
                    FEMALE
                </button>
            </div>
        </QuestionCard>
    );
}