// components/mental-health-modal/QuestionCarousel.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ColorCard } from './ColorCard';

interface Question {
  id: string;
  title: string;
  color: 'pink' | 'yellow' | 'blue';
  options?: string[];
  inputType?: 'text' | 'options';
  placeholder?: string;
}

interface QuestionCarouselProps {
  questions: Question[];
  currentStep: number;
  answers: Record<string, string>;
  onAnswer: (questionId: string, answer: string) => void;
}

export const QuestionCarousel: React.FC<QuestionCarouselProps> = ({
  questions,
  currentStep,
  answers,
  onAnswer,
}) => {
  // Safety check to ensure currentStep is within bounds
  const safeCurrentStep = Math.max(0, Math.min(currentStep, questions.length - 1));
  const currentQuestion = questions[safeCurrentStep];

  // If no questions available, return null
  if (!currentQuestion) {
    return (
      <div className="relative h-64 overflow-hidden flex items-center justify-center">
        <p className="text-gray-500">No questions available</p>
      </div>
    );
  }

  return (
    <div className="relative h-64 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={safeCurrentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ColorCard
            color={currentQuestion.color}
            title={currentQuestion.title}
            options={currentQuestion.options}
            selectedOption={answers[currentQuestion.id] || null}
            onSelect={(option) => onAnswer(currentQuestion.id, option)}
            inputType={currentQuestion.inputType}
            placeholder={currentQuestion.placeholder}
            value={answers[currentQuestion.id] || ''}
            onChange={(value) => onAnswer(currentQuestion.id, value)}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};