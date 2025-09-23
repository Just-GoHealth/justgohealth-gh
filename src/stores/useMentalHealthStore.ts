// stores/useMentalHealthStore.ts
import { create } from 'zustand';
import { MentalHealthState, Campus, Reason, Timeframe, AgeRange, Sex, GradeLevel, Frequency } from '@/types/mental-health';

export const useMentalHealthStore = create<MentalHealthState>((set, get) => ({
  // Initial state
  currentSection: 'personalize',
  currentStep: 0,
  campus: null,
  reason: null,
  timeframe: null,
  fullName: '',
  age: null,
  sex: null,
  gradeLevel: null,
  depressionFrequency: null,
  suicidalThoughts: null,

  // Actions - Fixed: use the state parameter or get() function
  setCurrentSection: (section) => set({ currentSection: section }),
  setCurrentStep: (step) => set({ currentStep: step }),
  setCampus: (campus) => set({ campus, currentStep: 1 }),
  setReason: (reason) => set({ reason, currentStep: 2 }),
  setTimeframe: (timeframe) => set({ timeframe, currentStep: 3 }),
  setFullName: (fullName) => set({ fullName, currentStep: 4 }),
  setAge: (age) => set({ age, currentStep: 5 }),
  setSex: (sex) => set({ sex, currentStep: 6 }),
  setGradeLevel: (gradeLevel) => {
    // After setting grade level, move to general health section
    set({ 
      gradeLevel, 
      currentStep: 7,
      currentSection: 'general'
    });
  },
  setDepressionFrequency: (depressionFrequency) => set({ depressionFrequency, currentStep: 8 }),
  setSuicidalThoughts: (suicidalThoughts) => set({ suicidalThoughts, currentStep: 9 }),
  reset: () => set({
    currentSection: 'personalize',
    currentStep: 0,
    campus: null,
    reason: null,
    timeframe: null,
    fullName: '',
    age: null,
    sex: null,
    gradeLevel: null,
    depressionFrequency: null,
    suicidalThoughts: null,
  }),
}));