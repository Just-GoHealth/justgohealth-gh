"use client";

type Props = {
    total: number;       // total steps (questions or forms)
    current: number;     // current active step
};

export default function ProgressDots({ total, current }: Props) {
    return (
        <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: total }).map((_, i) => (
                <span
                    key={i}
                    className={`w-3 h-3 rounded-full transition-colors ${i === current ? "bg-indigo-500" : "bg-gray-300"
                        }`}
                />
            ))}
        </div>
    );
}
