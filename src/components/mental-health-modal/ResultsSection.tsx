// components/mental-health-modal/ResultsSection.tsx
'use client';

import React from 'react';
import { useMentalHealthStore } from '@/stores/useMentalHealthStore';
import { useRouter } from 'next/navigation';

interface ResultsSectionProps {
  onClose: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({
  onClose
}) => {
  const {
    fullName,
    age,
    sex,
    campus,
    depressionFrequency,
    suicidalThoughts,
    reason,
    timeframe,
    gradeLevel,
    reset,
  } = useMentalHealthStore();
  const router = useRouter();

  // Dummy logic for results - replace with actual calculation based on answers
  const generalMentalHealthScore = 8.7;
  const generalMentalHealthStatus = 'Good'; // e.g., Good, Moderate, Poor
  const examAnxiety = 'None'; // e.g., None, Mild, Moderate, Severe
  const examPrep = 'Good'; // e.g., Good, Average, Poor

  const possibleDepressionScore = 4; // out of 6
  const lonelinessScore = 2; // out of 3
  const suicidalRiskScore = 0; // out of 2

  const getDepressionText = (score: number) => {
    if (score >= 5) return 'Severe';
    if (score >= 3) return 'Moderate';
    if (score >= 1) return 'Mild';
    return 'None';
  };

  const getLonelinessText = (score: number) => {
    if (score >= 2) return 'Often';
    if (score >= 1) return 'Sometimes';
    return 'Rarely';
  };

  const getSuicidalText = (score: number) => {
    if (score >= 1) return 'High Risk';
    return 'No Risk';
  };

  const handleGoToWaitingRoom = () => {
    reset();
    router.push('/');
  };

  return (
    <div className="space-y-6 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {fullName} (Health Results)
      </h2>
      <p className="text-gray-600 mb-4">
        {age} year old {sex?.toLowerCase()}, {campus}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex items-center space-x-4 bg-green-500 text-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col items-center justify-center bg-white text-green-700 rounded-lg p-3">
            <span className="text-xl font-bold">Locked In</span>
            <span className="text-4xl font-bold">{generalMentalHealthScore}</span>
            <span className="text-sm">Score</span>
          </div>
          <div className="flex flex-col">
            <p className="text-lg font-semibold">General Mental Health: {generalMentalHealthStatus}</p>
            <p className="text-lg font-semibold">Exam Anxiety: {examAnxiety}</p>
            <p className="text-lg font-semibold">Exam Prep: {examPrep}</p>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p className="text-gray-800 text-lg font-semibold mb-2">A doctor (an expert) is waiting to see you soon.</p>
          <button 
            onClick={handleGoToWaitingRoom}
            className="w-full bg-purple-600 text-white py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-purple-700 transition-colors"
          >
            <span>Go to the</span>
            <span className="font-bold">Waiting Room</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800 mb-4">General Mental Health: {generalMentalHealthStatus} ({possibleDepressionScore} out of 8)</h3>
        <div className="flex space-x-4">
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-1/3">
            <p className="text-gray-700 font-semibold mb-2">Possible Depression</p>
            <p className="text-red-500 font-bold text-xl">{getDepressionText(possibleDepressionScore)}</p>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold mt-2">
              {possibleDepressionScore}/6
            </div>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-1/3">
            <p className="text-gray-700 font-semibold mb-2">Loneliness</p>
            <p className="text-red-500 font-bold text-xl">{getLonelinessText(lonelinessScore)}</p>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white font-bold mt-2">
              {lonelinessScore}/3
            </div>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md w-1/3">
            <p className="text-gray-700 font-semibold mb-2">Suicidal Risk</p>
            <p className="text-green-500 font-bold text-xl">{getSuicidalText(suicidalRiskScore)}</p>
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-500 text-white font-bold mt-2">
              {suicidalRiskScore}/2
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-600">
        <button className="underline hover:text-gray-800">
          Take Lock-In Screening Again &times;
        </button>
      </div>
    </div>
  );
};
