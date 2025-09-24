import QuestionCard from "@/components/modalcarousel/ui/QuestionCard";

type Question1Props = {
    onNext: () => void;
};

export default function Question1({ onNext }: Question1Props) {
    return (
        <QuestionCard className="bg-[#fcf1e9] text-black">
            <h2 className="text-4xl font-bold mt-[-20] mb-25">Select your current campus:</h2>
            <div className="grid grid-cols-2 gap-4 w-full">
                {[
                    "Ashesi University",
                    "Accra Technical University",
                    "KNUST",
                    "Pentecost University",
                    "Achimota High School",
                    "University of Ghana",
                ].map((opt) => (
                    <button
                        key={opt}
                        onClick={onNext}
                        className="px-6 py-2 mx-10 h-20 rounded-full bg-black text-white text-3xl font-bold mb-3 hover:bg-green-600"
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </QuestionCard>
    );
}
