// components/mental-health-modal/PersonalizeSection.tsx
'use client';

import { QuestionCarousel } from './QuestionCarousel';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';

const personalizeQuestions = [
  {
    id: 'campus',
    title: 'Select your current campus:',
    color: 'pink' as const,
    options: [
      'Ashesi University',
      'KNUST',
      'Achimota High School',
      'Accra Technical University',
      'Pentecost University',
      'University of Ghana',
    ],
  },
  {
    id: 'reason',
    title: 'Why are you locking in right now?',
    color: 'yellow' as const,
    options: [
      'WASSCE', 'BECE', 'NSMQ', 'Exam/Quiz', 'GPA/CWA', 'INTERVIEW',
      'DEFENSE', 'BREAKUP', 'FAILURE', 'DEATH', 'After A Loss', 'STRESS',
      'GRIEF', 'REJECTION',
    ],
  },
  {
    id: 'timeframe',
    title: 'How long before the exam/quiz?',
    color: 'blue' as const,
    options: ['24 Hours', '7 Days', '3 Weeks'],
  },
  {
    id: 'fullName',
    title: "What's your official name?",
    color: 'pink' as const,
    inputType: 'text' as const,
    placeholder: 'Enter your full name',
  },
  {
    id: 'age',
    title: 'How old are you this year?',
    color: 'yellow' as const,
    options: ['16-17', '18', '19', '20', '21', '22', '23', '24', '25', '26+'],
  },
  {
    id: 'sex',
    title: "What's your biological sex?",
    color: 'blue' as const,
    options: ['MALE', 'FEMALE'],
  },
  {
    id: 'gradeLevel',
    title: 'Which level or form are you currently in?',
    color: 'pink' as const,
    options: ['1', '2', '3', '4', '5', '6'],
  },
];

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
      />
    </div>
  );
};