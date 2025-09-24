"use client";
import { Button } from "@/components/ui/button";

interface Props {
    page: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
}

export default function CarouselControls({ page, total, onNext, onPrev }: Props) {
    return (
        <div className="absolute bottom-4 left-0 w-full flex justify-between px-6 items-center">
            <Button
                variant="outline"
                disabled={page === 0}
                onClick={onPrev}
                className="rounded-xl px-6"
            >
                Previous
            </Button>

            <div className="flex gap-2">
                {Array.from({ length: total }).map((_, i) => (
                    <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === page ? "bg-blue-600" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>

            <Button
                variant="default"
                disabled={page === total - 1}
                onClick={onNext}
                className="rounded-xl px-6"
            >
                Next
            </Button>
        </div>
    );
}
