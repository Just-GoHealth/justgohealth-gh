"use client";
import { Button } from "@/components/ui/button";

interface Props {
    page: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
    disabledNext?: boolean;
    showDone?: boolean;
}

export default function CarouselControls({ page, total, onNext, onPrev, disabledNext = false, showDone = false }: Props) {
    return (
        <div
            className="
        absolute bottom-2 sm:bottom-4 left-0 w-full 
        flex justify-between items-center 
        px-3 sm:px-6
      "
        >
            <Button
                variant="outline"
                disabled={page === 0}
                onClick={onPrev}
                className="
          rounded-xl 
          px-3 py-1 text-sm 
          sm:px-6 sm:py-2 sm:text-base
        "
            >
                Previous
            </Button>

            {/* Counter moved to header; no center indicator */}

            <Button
                variant="default"
                onClick={onNext}
                disabled={disabledNext}
                className="
          rounded-xl 
          px-3 py-1 text-sm 
          sm:px-6 sm:py-2 sm:text-base
        "
            >
                {showDone ? 'Done' : 'Next'}
            </Button>
        </div>
    );
}
