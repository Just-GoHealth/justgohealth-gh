import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { QuestionProps } from "./Form2";

export default function Question2({ onNext }: QuestionProps) {
    return (
        <QuestionCard className="bg-[#ecf1f9] text-black">
            <h2 className="text-2xl font-bold mb-8 text-center text-black">
                How long before the exam/quiz?
            </h2>
            <div className="flex justify-center gap-18">
                {/* 24 Hours */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={onNext}
                        className="w-60 h-60 rounded-full bg-black text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
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
                        onClick={onNext}
                        className="w-60 h-60 rounded-full bg-black text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
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
                        onClick={onNext}
                        className="w-60 h-60 rounded-full bg-black text-white flex flex-col items-center justify-center hover:bg-green-500 hover:border-4 hover:border-green-300 transition-all duration-300"
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