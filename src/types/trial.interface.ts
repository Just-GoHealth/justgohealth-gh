export interface ITrial {
  campus: string;
  reasonForLockin: string;
  timeToExam: string;
  fullName: string;
  age: number;
  sex: string;
  level: string;
  lossOfInterest: string;
  feelingDepressed: string;
  feelingLonely: string;
  suicidalThoughts: string;
  suicidalPlans: string;
  examWorrying: string;
  sleepProblems: string;
  fearOfFailure: string;
  feelingNervous: string;
  sweatingOrHeartRacing: string;
  stomachUpset: string;
  motivationToStudy: string;
  focusWhileStudying: string;
  activeStudying: string;
  activeRecall: string;
  lastMinuteStudying: string;
}

export interface IModalData {
  title: string;
  description?: string;
  options: string[];
  property: keyof ITrial;
  bgColor: string;
}

export interface ITrialResponse {
  fullName: string;
  age: number;
  sex: string;
  school: string;
  generalMentalHealth: string;
  generalMentalHealthScore: string;
  generalMentalHealthColor: string;
  possibleDepressionScore: string;
  possibleDepressionDescription: string;
  possibleDepressionColor: string;
  lonelinessScore: string;
  lonelinessScoreDescription: string;
  lonelinessColor: string;
  suicidalRiskScore: string;
  suicidalRiskScoreDescription: string;
  suicidalRiskColor: string;
  examAnxiety: string;
  examAnxietyScore: string;
  examAnxietyColor: string;
  coreAnxietyScore: string;
  coreAnxietyScoreDescription: string;
  coreAnxietyColor: string;
  physicalDistressScore: string;
  physicalDistressScoreDescription: string;
  physicalDistressColor: string;
  examPrep: string;
  examPrepScore: string;
  examPrepColor: string;
  motivationScore: string;
  motivationScoreDescription: string;
  motivationColor: string;
  studySkillsScore: string;
  studySkillsScoreDescription: string;
  studySkillsColor: string;
  procrastinationScore: string;
  procrastinationScoreDescription: string;
  procrastinationColor: string;
  lockedInScore: string;
  lockedInScoreDescription: string;
  lockedInColor: string;
}
