import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { useMentalHealthStore } from "@/stores/useMentalHealthStore";
import { QuestionProps } from "./Form2";
export default function Question1({ onNext, onStateChange }: QuestionProps & { onStateChange?: (s: { canProceed: boolean }) => void }) {
    const setReason = useMentalHealthStore((s) => s.setReason);
    const selectedReason = useMentalHealthStore((s) => s.reason);
    if (onStateChange) onStateChange({ canProceed: !!selectedReason });
    return (
        <QuestionCard className="bg-[#ecf1f9] text-black">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-black">
                Why are you locking in right now?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-12">
                {/* Exam/Quiz Circle styled like reference */}
                <button
                    onClick={() => { setReason('Exam/Quiz' as any); if (onStateChange) onStateChange({ canProceed: true }); onNext(); }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full text-white transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: selectedReason === ('Exam/Quiz' as any) ? '#16a34a' : '#111' }}
                >
                    <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm">WASSCE</span>
                    <span className="absolute top-1/3 -translate-y-1/2 left-6 text-xs sm:text-sm">BECE</span>
                    <span className="absolute top-1/3 -translate-y-1/2 right-6 text-xs sm:text-sm">NSMQ</span>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-extrabold">Exam/Quiz</span>
                    <span className="absolute bottom-1/4 left-6 text-xs sm:text-sm">GPA/CWA</span>
                    <span className="absolute bottom-1/4 right-6 text-xs sm:text-sm">INTERVIEW</span>
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm">DEFENSE</span>
                </button>

                {/* After A Loss Circle styled like reference */}
                <button
                    onClick={() => { setReason('After A Loss' as any); if (onStateChange) onStateChange({ canProceed: true }); onNext(); }}
                    className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full text-white transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: selectedReason === ('After A Loss' as any) ? '#16a34a' : '#111' }}
                >
                    <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm">BREAKUP</span>
                    <span className="absolute top-1/3 -translate-y-1/2 left-6 text-xs sm:text-sm">FAILURE</span>
                    <span className="absolute top-1/3 -translate-y-1/2 right-6 text-xs sm:text-sm">DEATH</span>
                    <span className="absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl font-extrabold">After A Loss</span>
                    <span className="absolute bottom-1/4 left-6 text-xs sm:text-sm">STRESS</span>
                    <span className="absolute bottom-1/4 right-6 text-xs sm:text-sm">GRIEF</span>
                    <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm">REJECTION</span>
                </button>
            </div>
        </QuestionCard>
    );
}