"use client";

import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string; // allow custom styling per question
};

export default function QuestionCard({ children, className = "" }: Props) {
    return (
        <div
            className={`w-full h-full flex flex-col justify-center items-center rounded-xl shadow-md p-6 ${className}`}
        >
            {children}
        </div>
    );
}
