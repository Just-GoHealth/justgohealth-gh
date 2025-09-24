import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form2";
import { useMentalHealthStore } from "@/stores/useMentalHealthStore";

export default function Question2({ onNext, onStateChange }: QuestionProps & { onStateChange?: (s: { canProceed: boolean }) => void }) {
    const setTimeframe = useMentalHealthStore((s) => s.setTimeframe);
    const selectedTimeframe = useMentalHealthStore((s) => s.timeframe);
    if (onStateChange) onStateChange({ canProceed: !!selectedTimeframe });
    return (
        <QuestionCard className="bg-[#ecf1f9] text-black">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-black">
                How long before the exam/quiz?
            </h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                {/* 24 Hours */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={() => { setTimeframe('24 Hours' as any); if (onStateChange) onStateChange({ canProceed: true }); onNext(); }}
                        className="w-44 h-44 sm:w-60 sm:h-60 rounded-full text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
                        style={{ backgroundColor: selectedTimeframe === ('24 Hours' as any) ? '#16a34a' : '#000' }}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">24</div>
                            <div className="text-lg">Hours</div>
                        </div>
                    </button>
                </div>

                {/* 7 Days */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={() => { setTimeframe('7 Days' as any); if (onStateChange) onStateChange({ canProceed: true }); onNext(); }}
                        className="w-44 h-44 sm:w-60 sm:h-60 rounded-full text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
                        style={{ backgroundColor: selectedTimeframe === ('7 Days' as any) ? '#16a34a' : '#000' }}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">7</div>
                            <div className="text-lg">Days</div>
                        </div>
                    </button>
                </div>

                {/* 3 Weeks */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={() => { setTimeframe('3 Weeks' as any); if (onStateChange) onStateChange({ canProceed: true }); onNext(); }}
                        className="w-44 h-44 sm:w-60 sm:h-60 rounded-full text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
                        style={{ backgroundColor: selectedTimeframe === ('3 Weeks' as any) ? '#16a34a' : '#000' }}
                    >
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-1">3</div>
                            <div className="text-lg">Weeks</div>
                        </div>
                    </button>
                </div>
            </div>
        </QuestionCard>
    );
}