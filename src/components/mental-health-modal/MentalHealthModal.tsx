// components/mental-health-modal/MentalHealthModal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';
import { PersonalizeSection } from './PersonalizeSection';
import { GeneralHealthSection } from './GeneralHealthSection';
import { ResultsSection } from './ResultsSection';
// import { ProgressIndicator } from './ProgressIndicator';

interface MentalHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MentalHealthModal: React.FC<MentalHealthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const {
    currentSection,
    currentStep,
    reset,
    personalizeQuestions,
    generalHealthQuestions,
    nextStep,
    previousStep,
  } = useMentalHealthStore();

  const totalQuestions = personalizeQuestions.length + generalHealthQuestions.length;
  const currentTotalStep = 
    currentSection === 'personalize'
      ? currentStep
      : personalizeQuestions.length + currentStep;

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleNext = () => {
    nextStep();
  };

  const handleBack = () => {
    previousStep();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-4xl mx-4 max-h-[100vh] overflow-y-auto"
      >
        <div className="p-6">
          {/* Progress Indicator */}
          {/* <ProgressIndicator /> */}

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {currentTotalStep < totalQuestions ? (
              currentSection === 'personalize' ? (
                <motion.div
                  key="personalize"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <PersonalizeSection />
                </motion.div>
              ) : (
                <motion.div
                  key="general"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <GeneralHealthSection />
                </motion.div>
              )
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ResultsSection />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          {currentTotalStep < totalQuestions ? (
            <div className="flex justify-between mt-8">
              <div>
                {currentTotalStep > 0 && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Back
                  </button>
                )}
              </div>
              
              <div className="flex gap-4">
                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Close
                </button>
                
                <button
                  onClick={handleNext}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleClose} // Use handleClose to reset and close
                className="underline hover:text-gray-800"
              >
                Take Lock-In Screening Again &times;
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};