// components/mental-health-modal/GeneralHealthSection.tsx
'use client';

import { QuestionCarousel } from './QuestionCarousel';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';

const generalHealthQuestions = [
  {
    id: 'depression',
    title: 'In the past two weeks, how often do you feel sad, down or hopeless?',
    color: 'pink' as const,
    options: ['Not at all', 'A few days', 'Sometimes', 'Almost everyday'],
  },
  {
    id: 'suicidal',
    title: 'In the past month, have you wished you were dead or actually had thoughts of killing yourself?',
    color: 'yellow' as const,
    options: ['Yes', 'No'],
  },
];

export const GeneralHealthSection: React.FC = () => {
  const {
    depressionFrequency,
    suicidalThoughts,
    setDepressionFrequency,
    setSuicidalThoughts,
    currentStep,
  } = useMentalHealthStore();

  // Calculate step for general health section (steps 8 and 9)
  const generalStep = currentStep - 8;
  
  // Ensure generalStep is within bounds
  const safeGeneralStep = Math.max(0, Math.min(generalStep, generalHealthQuestions.length - 1));

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
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        General Mental Health
      </h2>
      <QuestionCarousel
        questions={generalHealthQuestions}
        currentStep={safeGeneralStep}
        answers={answers}
        onAnswer={handleAnswer}
      />
    </div>
  );
};