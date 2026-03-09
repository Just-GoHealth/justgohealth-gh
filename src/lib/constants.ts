import {
  AlarmClock,
  Calendar,
  Clock1,
  Clock5,
  Clock8,
  Clock11,
  GraduationCap,
  User,
  VenusAndMars,
  Brain,
  DollarSign,
  Hash,
  Medal,
  School,
  TrendingUp,
  Zap,
  Activity,
  AlertCircle,
  Moon,
  ShieldAlert,
  HeartPulse,
  Waves,
  Flame,
  Target,
  BookOpen,
  ClipboardCheck,
  Timer,
  Smile,
  CloudRain,
  Frown,
  UserMinus,
  AlertTriangle,
} from "lucide-react";
import { IModalData } from "@/types/trial.interface";

export const AMBASSADOR_ACHIEVEMENTS = [
  { label: "Attended St. Peter's Boys'", icon: School, italic: false },
  { label: "Won Sharks Quiz 2022", icon: Brain, italic: false },
  { label: "Won Overall Best in Numeracy", icon: Hash, italic: false },
  { label: "Won Overall Best Candidate", icon: Medal, italic: false },
  {
    label: "Scored 1590 in SAT (99th percentile)",
    icon: TrendingUp,
    italic: false,
  },
  {
    label: "Won Academic City Scholarship ($40,000)",
    icon: DollarSign,
    italic: false,
  },
  {
    label: "Soon-to-be Electrical & Electronics Engineer",
    icon: Zap,
    italic: true,
  },
];

export const STAGGER_START = 1100; // ms
export const STAGGER_STEP = 220; // ms between rows
export const HOLD_DURATION = 1600; // ms per highlight

export const TRIAL_STEPS = [
  { label: "Campus", color: "#993399" },
  { label: "Reason", color: "#E8365D" },
  { label: "Profile", color: "#2bb573" },
  { label: "Mental Health", color: "#993399" },
  { label: "Exam Anxiety", color: "#F5A623" },
  { label: "Exam Prep", color: "#2bb573" },
];

export const TRIAL_SECTION_TITLES = [
  { heading: "Personalise Your Mental Health", sub: "Tell us where you study" },
  {
    heading: "Your Reason for Locking In",
    sub: "Choose what applies to you",
  },
  { heading: "Your Profile", sub: "A few quick details" },
  {
    heading: "General Mental Health",
    sub: "Honest answers give better results",
  },
  { heading: "Exam Anxiety", sub: "How does exam stress affect you?" },
  { heading: "Exam Preparation", sub: "How do you currently study?" },
];

export const DEFAULT_CAMPUSES = [
  { id: "campus-a", name: "Campus A", type: "SHS" },
  { id: "campus-b", name: "Campus B", type: "SHS" },
  { id: "campus-c", name: "Campus C", type: "JHS" },
  { id: "campus-d", name: "Campus D", type: "JHS" },
  { id: "campus-e", name: "Campus E", type: "College" },
  { id: "campus-f", name: "Campus F", type: "College" },
];

export const LOCK_IN_REASONS = [
  {
    tags: ["WASSCE", "BECE", "NSMQ", "GPA/CWA", "INTERVIEW", "DEFENSE"],
    primary: "Exam/Quiz",
    emoji: "📚",
    color: "#993399",
    lightBg: "#FAF5FF",
    ringColor: "rgba(153,51,153,0.15)",
    desc: "Academic performance & exams",
  },
  {
    tags: ["BREAKUP", "FAILURE", "DEATH", "STRESS", "GRIEF", "REJECTION"],
    primary: "After A Loss",
    emoji: "🌱",
    color: "#E8365D",
    lightBg: "#FFF5F7",
    ringColor: "rgba(232,54,93,0.15)",
    desc: "Processing a difficult experience",
  },
];

export const EXAM_DURATIONS = [
  {
    label: "Less than 1 week",
    value: "< 1 week",
    icon: AlarmClock,
    urgency: "critical",
    color: "#E8365D",
    bg: "#FFF5F7",
  },
  {
    label: "1 – 2 weeks",
    value: "1-2 weeks",
    icon: Clock11,
    urgency: "high",
    color: "#F5A623",
    bg: "#FFFBF2",
  },
  {
    label: "About 1 month",
    value: "1 month",
    icon: Clock8,
    urgency: "medium",
    color: "#993399",
    bg: "#FAF5FF",
  },
  {
    label: "2 – 3 months",
    value: "2-3 months",
    icon: Clock5,
    urgency: "low",
    color: "#2bb573",
    bg: "#F2FBF6",
  },
  {
    label: "More than 3 months",
    value: "> 3 months",
    icon: Clock1,
    urgency: "none",
    color: "#78716C",
    bg: "#FAF8F4",
  },
];

export const TRIAL_PROFILE_STEPS = [
  {
    key: "Your Name",
    hint: "Used to personalise your results",
    icon: User,
  },
  {
    key: "Your Age",
    hint: "Helps contextualise your scores",
    icon: Calendar,
  },
  {
    key: "Your Sex",
    hint: "Used for clinical benchmarking",
    icon: VenusAndMars,
  },
  {
    key: "Your Grade",
    hint: "Helps tailor exam prep advice",
    icon: GraduationCap,
  },
];

export const TRIAL_AGE_RANGES = [
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "30",
];

export const TRIAL_SEX_OPTIONS = [
  { label: "Male", emoji: "♂", color: "#3B82F6" },
  { label: "Female", emoji: "♀", color: "#EC4899" },
  { label: "Prefer not to say", emoji: "·", color: "#78716C" },
];

export const TRIAL_GRADE_GROUPS = [
  { label: "JHS", items: ["JHS 1", "JHS 2", "JHS 3"] },
  { label: "SHS", items: ["SHS 1", "SHS 2", "SHS 3"] },
  {
    label: "University",
    items: ["100 Level", "200 Level", "300 Level", "400 Level+"],
  },
  { label: "Other", items: ["Postgraduate", "Other"] },
];

export const GENERAL_MENTAL_HEALTH_MODAL_DATA: IModalData[] = [
  {
    title: "Loss of Interest",
    description: "Little interest or pleasure in doing things lately?",
    options: ["Not At All", "A few days", "Sometimes", "Almost every day"],
    property: "lossOfInterest",
    bgColor: "",
  },
  {
    title: "Feeling Depressed",
    description:
      "In the past 2 weeks, how often do you feel sad, down or hopeless?",
    options: ["Not At All", "A few days", "Sometimes", "Almost every day"],
    property: "feelingDepressed",
    bgColor: "",
  },
  {
    title: "Feeling Lonely",
    description: "How often do you feel lonely or isolated?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "feelingLonely",
    bgColor: "",
  },
  {
    title: "Suicidal Thoughts",
    description:
      "Thoughts that you would be better off dead, or of hurting yourself?",
    options: ["No", "Yes"],
    property: "suicidalThoughts",
    bgColor: "",
  },
  {
    title: "Suicidal Plans",
    description: "Have you made any actual plans to take your life?",
    options: ["No", "Yes"],
    property: "suicidalPlans",
    bgColor: "",
  },
];

export const EXAM_ANXIETY_MODAL_DATA: IModalData[] = [
  {
    title: "Worrying",
    description: "How often do you find yourself worrying about this exam?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "examWorrying",
    bgColor: "",
  },
  {
    title: "Sleep Problems",
    description: "How often do you have difficulty sleeping because of exams?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "sleepProblems",
    bgColor: "",
  },
  {
    title: "Fear of Failure",
    description: "How often do you find yourself afraid of failing this exam?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "fearOfFailure",
    bgColor: "",
  },
  {
    title: "Feeling Nervous",
    description:
      "How often do you get nervous or uneasy before or during exams?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "feelingNervous",
    bgColor: "",
  },
  {
    title: "Heart Racing",
    description:
      "How often do you sweat, shake or feel your heart beating faster before exams?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "sweatingOrHeartRacing",
    bgColor: "",
  },
  {
    title: "Stomach Upset",
    description: "How often do you have nausea or butterflies before exams?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "stomachUpset",
    bgColor: "",
  },
];

export const EXAM_PREP_MODAL_DATA: IModalData[] = [
  {
    title: "Motivation to Study",
    description:
      "How interested or motivated are you in studying the material for this exam?",
    options: ["Not at all", "Slightly", "Moderately", "Very interested"],
    property: "motivationToStudy",
    bgColor: "",
  },
  {
    title: "Focus While Studying",
    description:
      "During studying, how often are you able to stay focused without being distracted?",
    options: ["Never", "Occasionally", "Often", "Always"],
    property: "focusWhileStudying",
    bgColor: "",
  },
  {
    title: "Active Studying",
    description:
      "How often do you rephrase ideas in your own words or explain material to yourself?",
    options: ["Never", "Sometimes", "Often", "Always"],
    property: "activeStudying",
    bgColor: "",
  },
  {
    title: "Active Recall",
    description:
      "How often do you test yourself with past questions rather than just reading notes?",
    options: ["Never", "Sometimes", "Often", "Always"],
    property: "activeRecall",
    bgColor: "",
  },
  {
    title: "Last-Minute Studying",
    description:
      "How often do you do most of your studying the night before an exam?",
    options: ["Not At All", "A few times", "Frequently", "Almost every exam"],
    property: "lastMinuteStudying",
    bgColor: "",
  },
];

export const GENERAL_MENTAL_HEALTH_ACCENTS = [
  "#3B82F6",
  "#993399",
  "#EC4899",
  "#E8365D",
  "#78716C",
];
export const GENERAL_MENTAL_HEALTH_BGS = [
  "#F0F5FF",
  "#FAF5FF",
  "#FFF5F7",
  "#FFF5F7",
  "#FAF8F4",
];

export const EXAM_ANXIETY_ACCENTS = [
  "#F5A623",
  "#E8365D",
  "#993399",
  "#3B82F6",
  "#2bb573",
  "#F5A623",
];
export const EXAM_ANXIETY_BGS = [
  "#FFFBF0",
  "#FFF5F7",
  "#FAF5FF",
  "#F0F5FF",
  "#F0FBF5",
  "#FFFBF0",
];

export const EXAM_PREP_ACCENTS = [
  "#2bb573",
  "#3B82F6",
  "#993399",
  "#F5A623",
  "#E8365D",
];
export const EXAM_PREP_BGS = [
  "#F0FBF5",
  "#F0F5FF",
  "#FAF5FF",
  "#FFFBF0",
  "#FFF5F7",
];
