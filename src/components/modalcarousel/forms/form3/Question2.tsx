import React, { useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";

export default function Question2({ onNext }: QuestionProps) {
    const [selectedAge, setSelectedAge] = useState<number | null>(null);

    const handleAgeSelect = (age: number) => {
        setSelectedAge(age);
        // Auto-advance after selection
        setTimeout(() => {
            onNext();
        }, 300);
    };

    const ageOptions = ['16-', 17, 18, 19, 20, 21, 22, 23, 24, 25, '26+'];

    return (
        <QuestionCard className="text-black bg-[#f6f9e6]">
            <div className="mb-4">
                <p className="absolute top-4 left-4 m-10 ml-25 text-4xl font-bold">Profile: Age</p>
            </div>

            <h2 className="text-6xl font-bold mb-8 text-black">
                How old are you this year?
            </h2>

            {/* Straight line ages */}
            <div className="flex flex-wrap gap-2 justify-center">
                {ageOptions.map((age) => (
                    <button
                        key={age}
                        onClick={() => handleAgeSelect(typeof age === 'number' ? age : 26)}
                        className={`
        flex-shrink rounded-full border-2 text-sm h-15 md:text-lg font-semibold px-4 py-2
        transition-all duration-200 transform
        ${selectedAge === (typeof age === 'number' ? age : 26)
                                ? 'bg-green-500 border-green-500 text-white scale-110'
                                : 'bg-white border-gray-300 text-black hover:bg-green-100 hover:border-green-400 hover:scale-105'
                            }
        active:scale-100
      `}
                    >
                        {age}
                    </button>
                ))}
            </div>

        </QuestionCard>
    );
}
