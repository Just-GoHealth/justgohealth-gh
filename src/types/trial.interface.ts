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
