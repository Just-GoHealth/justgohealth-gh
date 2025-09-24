"use client";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string; // allow custom styling per question
};

export default function QuestionCard({ children, className = "" }: Props) {
    return (
        <div
            className={`
        w-full 
        h-full sm:h-auto
        flex flex-col justify-center items-center 
        rounded-xl shadow-md 
        p-4 sm:p-6 md:p-8 
        overflow-y-auto
        ${className}
      `}
        >
            {children}
        </div>
    );
}
