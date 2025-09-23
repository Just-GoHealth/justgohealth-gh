// components/mental-health-modal/PersonalizeSection.tsx
'use client';

import { QuestionCarousel } from './QuestionCarousel';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';
import { Question } from '@/types/mental-health';

export const PersonalizeSection: React.FC = () => {
  const {
    currentStep,
    campus,
    reason,
    timeframe,
    fullName,
    age,
    sex,
    gradeLevel,
    setCampus,
    setReason,
    setTimeframe,
    setFullName,
    setAge,
    setSex,
    setGradeLevel,
    personalizeQuestions,
    nextStep,
  } = useMentalHealthStore();

  const answers = {
    campus: campus || '',
    reason: reason || '',
    timeframe: timeframe || '',
    fullName: fullName || '',
    age: age || '',
    sex: sex || '',
    gradeLevel: gradeLevel?.toString() || '',
  };

  const handleAnswer = (questionId: string, answer: string) => {
    switch (questionId) {
      case 'campus':
        setCampus(answer as any);
        break;
      case 'reason':
        setReason(answer as any);
        break;
      case 'timeframe':
        setTimeframe(answer as any);
        break;
      case 'fullName':
        setFullName(answer);
        break;
      case 'age':
        setAge(answer as any);
        break;
      case 'sex':
        setSex(answer as any);
        break;
      case 'gradeLevel':
        setGradeLevel(parseInt(answer) as any);
        break;
    }
    const currentQuestion = personalizeQuestions[currentStep];
    if (currentQuestion && currentQuestion.inputType !== 'text') {
      nextStep();
    }
  };

  const handleAdvanceInput = () => {
    nextStep();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Personalize Your Mental Health
      </h2>
      <QuestionCarousel
        questions={personalizeQuestions}
        currentStep={currentStep}
        answers={answers}
        onAnswer={handleAnswer}
        onAdvanceInput={handleAdvanceInput}
      />
    </div>
  );
};