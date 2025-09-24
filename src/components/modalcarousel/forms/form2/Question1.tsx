import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form2";
export default function Question1({ onNext }: QuestionProps) {
    return (
        <QuestionCard className="bg-[#ecf1f9] text-black">
            <h2 className="text-2xl font-bold mb-8 text-center text-black">
                Why are you locking in right now?
            </h2>
            <div className="flex justify-center gap-8">
                {/* Exam/Quiz Circle */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={onNext}
                        className="w-100 h-100 rounded-full bg-black text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
                    >
                        <div className="text-center">
                            <div className="text-sm mb-2 space-y-1">
                                <div>WASSCE</div>
                                <div>BECE</div>
                                <div>NSMQ</div>
                            </div>
                            <div className="text-xl font-bold mb-2">Exam/Quiz</div>
                            <div className="text-sm space-y-1">
                                <div>GPA/CWA</div>
                                <div>INTERVIEW</div>
                                <div>DEFENSE</div>
                            </div>
                        </div>
                    </button>
                </div>

                {/* After A Loss Circle */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={onNext}
                        className="w-100 h-100 rounded-full bg-black text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
                    >
                        <div className="text-center">
                            <div className="text-sm mb-2 space-y-1">
                                <div>BREAKUP</div>
                                <div>FAILURE</div>
                                <div>DEATH</div>
                            </div>
                            <div className="text-xl font-bold mb-2">After A Loss</div>
                            <div className="text-sm space-y-1">
                                <div>STRESS</div>
                                <div>GRIEF</div>
                                <div>REJECTION</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </QuestionCard>
    );
}