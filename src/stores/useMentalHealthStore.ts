// stores/useMentalHealthStore.ts
import { create } from 'zustand';
import { MentalHealthState, Campus, Reason, Timeframe, AgeRange, Sex, GradeLevel, Frequency } from '@/types/mental-health';
import { Question } from '@/types/mental-health';

export const useMentalHealthStore = create<MentalHealthState>((set, get) => ({
  // Initial state
  currentSection: 'personalize',
  currentStep: 0,
  currentSubStep: 0, // Added for sub-questions
  personalizeQuestions: [
    {
      id: 'campus',
      title: 'Select your current campus:',
      color: 'pink',
      isCampusQuestion: true,
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
      color: 'yellow',
      isReasonQuestion: true,
      options: [
        'WASSCE', 'BECE', 'NSMQ', 'Exam/Quiz', 'GPA/CWA', 'INTERVIEW',
        'DEFENSE', 'BREAKUP', 'FAILURE', 'DEATH', 'After A Loss', 'STRESS',
        'GRIEF', 'REJECTION',
      ],
    },
    {
      id: 'timeframe',
      title: 'How long before the exam/quiz?',
      color: 'blue',
      isTimeframeQuestion: true,
      options: ['24 Hours', '7 Days', '3 Weeks'],
    },
    {
      id: 'fullName',
      title: "What's your official name?",
      color: 'pink',
      inputType: 'text',
      placeholder: 'Enter your full name',
      isNameQuestion: true,
    },
    {
      id: 'age',
      title: 'How old are you this year?',
      color: 'yellow',
      isAgeQuestion: true,
      options: ['16-17', '18', '19', '20', '21', '22', '23', '24', '25', '26+'],
    },
    {
      id: 'sex',
      title: "What's your biological sex?",
      color: 'blue',
      isSexQuestion: true,
      options: ['MALE', 'FEMALE'],
    },
    {
      id: 'gradeLevel',
      title: 'Which level or form are you currently in?',
      color: 'pink',
      isGradeLevelQuestion: true,
      options: ['1', '2', '3', '4', '5', '6'],
    },
  ],
  generalHealthQuestions: [
    {
      id: 'depression',
      title: 'Feeling Depressed 😔 ?',
      description: 'In the past two weeks, how often do you feel sad, down or hopeless?',
      color: 'pink',
      isMainQuestion: true,
      isDepressionQuestion: true,
      options: ['Not at all', 'A few days', 'Sometimes', 'Almost everyday'],
      subQuestions: [
        {
          id: 'suicidal',
          title: 'Suicidal Thoughts ⚠️ ?',
          description: 'In the past month, have you wished you were dead or actually had thoughts of killing yourself?',
          color: 'yellow',
          isSubQuestion: true,
          isSuicidalQuestion: true,
          options: ['Yes', 'No'],
        },
      ],
    },
    {
      id: 'anxiety',
      title: 'Anxiety Level',
      color: 'blue',
      options: ['Low', 'Medium', 'High'],
    },
  ],
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
  setCurrentSubStep: (subStep) => set({ currentSubStep: subStep }), // Added for sub-questions
  setCampus: (campus) => set({ campus }),
  setReason: (reason) => set({ reason }),
  setTimeframe: (timeframe) => set({ timeframe }),
  setFullName: (fullName) => set({ fullName }),
  setAge: (age) => set({ age }),
  setSex: (sex) => set({ sex }),
  setGradeLevel: (gradeLevel) => set({ gradeLevel }),
  setDepressionFrequency: (depressionFrequency) => set({ depressionFrequency }),
  setSuicidalThoughts: (suicidalThoughts) => set({ suicidalThoughts }),
  nextStep: () => {
    const state = get();
    const currentQuestions = state.currentSection === 'personalize' ? state.personalizeQuestions : state.generalHealthQuestions;
    const currentQuestion = currentQuestions[state.currentStep];

    if (!currentQuestion) return; // Should not happen if currentStep is managed correctly

    // Handle sub-questions first if current question has any and is a main question
    if (currentQuestion.isMainQuestion && currentQuestion.subQuestions && state.currentSubStep < currentQuestion.subQuestions.length) {
      set({ currentSubStep: state.currentSubStep + 1 });
      return;
    }

    const nextStepIndex = state.currentStep + 1;

    // If there are more questions in the current section
    if (nextStepIndex < currentQuestions.length) {
      const nextQuestion = currentQuestions[nextStepIndex];
      // If next question has a different color, just advance step
      if (nextQuestion.color !== currentQuestion.color) {
        set({ currentStep: nextStepIndex, currentSubStep: 0 }); // Reset sub-step for new main question
      } else {
        // If next question has the same color, try to find next different color
        let newStep = nextStepIndex;
        while (newStep < currentQuestions.length && currentQuestions[newStep].color === currentQuestion.color) {
          newStep++;
        }
        if (newStep < currentQuestions.length) {
          set({ currentStep: newStep, currentSubStep: 0 }); // Reset sub-step for new main question
        } else {
          // If all remaining questions in current section are same color, move to next section
          if (state.currentSection === 'personalize') {
            set({ currentSection: 'general', currentStep: 0, currentSubStep: 0 });
          } else {
            // End of all questions, trigger results
            console.log('End of all questions - Show Results');
            set({ currentStep: currentQuestions.length, currentSubStep: 0 }); // Indicate end state
          }
        }
      }
    } else {
      // End of current section
      if (state.currentSection === 'personalize') {
        set({ currentSection: 'general', currentStep: 0, currentSubStep: 0 });
      } else {
        // End of all questions, trigger results
        console.log('End of all questions - Show Results');
        set({ currentStep: currentQuestions.length, currentSubStep: 0 }); // Indicate end state
      }
    }
  },
  previousStep: () => {
    set((state) => {
      const currentQuestions = state.currentSection === 'personalize' ? state.personalizeQuestions : state.generalHealthQuestions;
      const currentQuestion = currentQuestions[state.currentStep];

      if (state.currentSubStep > 0) {
        return { currentSubStep: state.currentSubStep - 1 };
      } else if (state.currentStep > 0) {
        // If previous question was a main question with sub-questions, go to its last sub-question
        const previousQuestion = currentQuestions[state.currentStep - 1];
        if (previousQuestion.isMainQuestion && previousQuestion.subQuestions && previousQuestion.subQuestions.length > 0) {
          return { currentStep: state.currentStep - 1, currentSubStep: previousQuestion.subQuestions.length - 1 };
        } else {
          return { currentStep: state.currentStep - 1, currentSubStep: 0 };
        }
      } else if (state.currentSection === 'general') {
        // Transition from general to personalize section
        const lastPersonalizeQuestion = state.personalizeQuestions[state.personalizeQuestions.length - 1];
        const lastPersonalizeSubStep = 
          lastPersonalizeQuestion.isMainQuestion && lastPersonalizeQuestion.subQuestions 
            ? lastPersonalizeQuestion.subQuestions.length - 1 
            : 0;
        return { 
          currentSection: 'personalize', 
          currentStep: state.personalizeQuestions.length - 1, 
          currentSubStep: lastPersonalizeSubStep 
        };
      }
      return {}; // No change if at the very beginning
    });
  },
  reset: () => set({
    currentSection: 'personalize',
    currentStep: 0,
    currentSubStep: 0,
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