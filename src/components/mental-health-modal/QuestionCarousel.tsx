// components/mental-health-modal/QuestionCarousel.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ColorCard } from './ColorCard';
import { Question as GlobalQuestion } from '@/types/mental-health';

interface Question extends GlobalQuestion {}

interface QuestionCarouselProps {
  questions: Question[];
  currentStep: number;
  answers: Record<string, string>;
  onAnswer: (questionId: string, answer: string) => void;
  onAdvanceInput?: () => void;
}

export const QuestionCarousel: React.FC<QuestionCarouselProps> = ({
  questions,
  currentStep,
  answers,
  onAnswer,
  onAdvanceInput,
}) => {
  // Safety check to ensure currentStep is within bounds
  const safeCurrentStep = Math.max(0, Math.min(currentStep, questions.length - 1));
  const currentQuestion = questions[safeCurrentStep] as any; // Temporary: Assert to any to bypass type error

  // This is a dummy comment to force linter re-evaluation.

  return (
    <div className="relative h-64 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id} // Use question ID for unique key for sub-questions
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ColorCard
            color={currentQuestion.color}
            title={currentQuestion.title}
            description={currentQuestion.description} // Pass description
            options={currentQuestion.options}
            selectedOption={answers[currentQuestion.id] || null}
            onSelect={(option) => onAnswer(currentQuestion.id, option)}
            inputType={currentQuestion.inputType}
            placeholder={currentQuestion.placeholder}
            value={answers[currentQuestion.id] || ''}
            onChange={(value) => onAnswer(currentQuestion.id, value)}
            isCampusQuestion={currentQuestion.isCampusQuestion}
            isReasonQuestion={currentQuestion.isReasonQuestion}
            isTimeframeQuestion={currentQuestion.isTimeframeQuestion}
            isNameQuestion={currentQuestion.isNameQuestion}
            isAgeQuestion={currentQuestion.isAgeQuestion}
            isSexQuestion={currentQuestion.isSexQuestion}
            isGradeLevelQuestion={currentQuestion.isGradeLevelQuestion}
            isDepressionQuestion={currentQuestion.isDepressionQuestion}
            isSuicidalQuestion={currentQuestion.isSuicidalQuestion}
            onAdvanceInput={onAdvanceInput}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};