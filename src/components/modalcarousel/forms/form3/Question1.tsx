import React, { useState } from 'react';
import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form3";

export default function Question1({ onNext }: QuestionProps) {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (name.trim()) {
            onNext();
        }
    };

    return (
        <QuestionCard className="text-black bg-[#f6f9e6] ">
            <div className="mb-4">
                <p className="absolute top-4 left-4 m-10 ml-25 text-4xl font-bold "
                >Profile: Full Name</p>
            </div>

            <h2 className="text-6xl  font-bold mb-10 text-black">
                What's your official name?
            </h2>

            <div className="flex items-center gap-0 mb-4">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=""
                    className="flex-1 w-200 px-4 py-4 text-2xl  border-2 border-green-500 rounded-l-lg focus:outline-none focus:border-green-600 bg-white"
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit();
                        }
                    }}
                />
                <button
                    onClick={handleSubmit}
                    className="px-6 py-4 bg-green-500 text-white rounded-r-lg h-17 hover:bg-green-600 transition-colors duration-200 flex items-center justify-center border-2 border-green-500 hover:border-green-600"
                    style={{ minHeight: '60px' }}
                >
                    <svg
                        width="24"
                        height="24"
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