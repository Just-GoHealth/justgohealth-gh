// components/mental-health-modal/GeneralHealthSection.tsx
'use client';

import { QuestionCarousel } from './QuestionCarousel';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';

export const GeneralHealthSection: React.FC = () => {
  const {
    depressionFrequency,
    suicidalThoughts,
    setDepressionFrequency,
    setSuicidalThoughts,
    currentStep,
    generalHealthQuestions,
    nextStep,
    currentSubStep,
  } = useMentalHealthStore();

  const answers = {
    depression: depressionFrequency || '',
    suicidal: suicidalThoughts === true ? 'Yes' : suicidalThoughts === false ? 'No' : '',
  };

  const handleAnswer = (questionId: string, answer: string) => {
    switch (questionId) {
      case 'depression':
        setDepressionFrequency(answer as any);
        break;
      case 'suicidal':
        setSuicidalThoughts(answer === 'Yes');
        break;
    }
    const currentQuestion = generalHealthQuestions[currentStep];
    if (currentQuestion && currentQuestion.inputType !== 'text') {
      nextStep();
    }
  };

  const mainQuestion = generalHealthQuestions[currentStep];
  const questionToRender = 
    mainQuestion?.isMainQuestion && mainQuestion.subQuestions && currentSubStep < mainQuestion.subQuestions.length
      ? mainQuestion.subQuestions[currentSubStep]
      : mainQuestion;
  
  // If no questions available or current question is undefined, return null or a loading state
  if (!questionToRender) {
    return (
      <div className="relative h-64 overflow-hidden flex items-center justify-center">
        <p className="text-gray-500">No questions available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        General Mental Health
      </h2>
      <QuestionCarousel
        questions={[questionToRender]}
        currentStep={0} // Always 0 since we pass one question at a time
        answers={answers}
        onAnswer={handleAnswer}
      />
    </div>
  );
};