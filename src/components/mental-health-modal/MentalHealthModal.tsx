// components/mental-health-modal/MentalHealthModal.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';
import { PersonalizeSection } from './PersonalizeSection';
import { GeneralHealthSection } from './GeneralHealthSection';
import { ProgressIndicator } from './ProgressIndicator';

interface MentalHealthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MentalHealthModal: React.FC<MentalHealthModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { currentSection, currentStep, reset, setCurrentStep } = useMentalHealthStore();

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleNext = () => {
    // If we're at the last step, show results
    if (currentStep >= 9) {
      // Handle showing results - you can implement this based on your needs
      console.log('Show results');
      return;
    }
    
    // Otherwise, move to next step
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto"
      >
        <div className="p-6">
          {/* Progress Indicator */}
          <ProgressIndicator />

          {/* Content Sections */}
          <AnimatePresence mode="wait">
            {currentSection === 'personalize' ? (
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
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <div>
              {currentStep > 0 && (
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
                className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Close
              </button>
              
              <button
                onClick={handleNext}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                {currentStep >= 9 ? 'See Results' : 'Next'}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};