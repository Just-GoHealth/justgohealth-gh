// types/mental-health.ts
export type Campus = 
  | 'Ashesi University'
  | 'KNUST'
  | 'Achimota High School'
  | 'Accra Technical University'
  | 'Pentecost University'
  | 'University of Ghana';

export type Reason = 
  | 'WASSCE' | 'BECE' | 'NSMQ' | 'Exam/Quiz' | 'GPA/CWA' | 'INTERVIEW' 
  | 'DEFENSE' | 'BREAKUP' | 'FAILURE' | 'DEATH' | 'After A Loss' | 'STRESS' 
  | 'GRIEF' | 'REJECTION';

export type Timeframe = '24 Hours' | '7 Days' | '3 Weeks';
export type AgeRange = '16-17' | '18' | '19' | '20' | '21' | '22' | '23' | '24' | '25' | '26+';
export type Sex = 'MALE' | 'FEMALE';
export type GradeLevel = 1 | 2 | 3 | 4 | 5 | 6;
export type Frequency = 'Not at all' | 'A few days' | 'Sometimes' | 'Almost everyday';

export interface Question {
  id: string;
  title: string;
  color: 'pink' | 'yellow' | 'blue';
  options?: string[];
  inputType?: 'text' | 'options';
  placeholder?: string;
  isCampusQuestion?: boolean;
  isReasonQuestion?: boolean;
  isTimeframeQuestion?: boolean;
  isNameQuestion?: boolean;
  isAgeQuestion?: boolean;
  isSexQuestion?: boolean;
  isGradeLevelQuestion?: boolean;
  subQuestions?: Question[]; // To define nested questions
  isMainQuestion?: boolean; // To identify a question that has sub-questions
  isSubQuestion?: boolean; // To identify a question that is part of a main question
  isDepressionQuestion?: boolean; // Specific UI control for depression question
  isSuicidalQuestion?: boolean; // Specific UI control for suicidal thoughts question
}

export type PersonalizeQuestionId = Question['id'] | 'fullName' | 'age' | 'sex' | 'gradeLevel';
export type GeneralHealthQuestionId = Question['id'] | 'depression' | 'suicidal';

export interface MentalHealthState {
  // Personalize Section
  currentSection: 'personalize' | 'general';
  currentStep: number;
  currentSubStep: number; // New: To track sub-question progress
  personalizeQuestions: Question[];
  generalHealthQuestions: Question[];
  campus: Campus | null;
  reason: Reason | null;
  timeframe: Timeframe | null;
  fullName: string;
  age: AgeRange | null;
  sex: Sex | null;
  gradeLevel: GradeLevel | null;
  
  // General Health Section
  depressionFrequency: Frequency | null;
  suicidalThoughts: boolean | null;
  
  // Methods
  setCurrentSection: (section: 'personalize' | 'general') => void;
  setCurrentStep: (step: number) => void;
  setCampus: (campus: Campus) => void;
  setReason: (reason: Reason) => void;
  setTimeframe: (timeframe: Timeframe) => void;
  setFullName: (name: string) => void;
  setAge: (age: AgeRange) => void;
  setSex: (sex: Sex) => void;
  setGradeLevel: (level: GradeLevel) => void;
  setDepressionFrequency: (frequency: Frequency) => void;
  setSuicidalThoughts: (thoughts: boolean) => void;
  nextStep: () => void;
  previousStep: () => void;
  setCurrentSubStep: (subStep: number) => void; // New: To track sub-question progress
  reset: () => void;
}