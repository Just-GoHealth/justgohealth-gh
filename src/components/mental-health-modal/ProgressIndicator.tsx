// components/mental-health-modal/ProgressIndicator.tsx
'use client';

import { useMentalHealthStore } from '@/stores/useMentalHealthStore';

export const ProgressIndicator: React.FC = () => {
  const { currentSection, currentStep } = useMentalHealthStore();
  
  const totalSteps = 10; // 7 personalize + 3 general
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>
          {currentSection === 'personalize' ? 'Personalize Your Health' : 'General Mental Health'}
        </span>
        <span>Step {currentStep + 1} of {totalSteps}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};