import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";
import { useMentalHealthStore } from "@/stores/useMentalHealthStore";

type Question1Props = {
    onNext: () => void;
    onStateChange?: (s: { canProceed: boolean }) => void;
};

export default function Question1({ onNext, onStateChange }: Question1Props) {
    const setCampus = useMentalHealthStore((s) => s.setCampus);
    const selectedCampus = useMentalHealthStore((s) => s.campus);
    if (onStateChange) onStateChange({ canProceed: !!selectedCampus });
    const options = [
        "Ashesi University",
        "Accra Technical University",
        "KNUST",
        "Pentecost University",
        "Achimota High School",
        "University of Ghana",
    ];

    return (
        <QuestionCard className="bg-[#fcf1e9] text-black">
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-center">
                Select your current campus:
            </h2>

            <div className="flex flex-col gap-3 w-full sm:grid sm:grid-cols-2 sm:gap-4">
                {options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => { setCampus(opt as any); if (onStateChange) onStateChange({ canProceed: true }); onNext(); }}
                        className="
              px-5 py-3 sm:px-6 sm:py-4 w-full sm:w-auto
              rounded-full font-bold
              text-base sm:text-2xl
              hover:bg-green-600 transition
            "
                        style={{
                            backgroundColor: selectedCampus === (opt as any) ? '#16a34a' : '#000',
                            color: '#fff'
                        }}
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </QuestionCard>
    );
}
