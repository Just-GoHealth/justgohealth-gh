import { useState } from "react";
import {
  Activity,
  Brain,
  Heart,
  Zap,
  TrendingUp,
  Target,
  Compass,
} from "lucide-react";
import { useTrial } from "@/contexts/trial.context";

// --- Utility ---
export const generateColor = (color: string) => {
  const map: Record<string, string> = {
    yellow: "#F5A623",
    green: "#2bb573",
    purple: "#993399",
    red: "#E8365D",
    "light green": "#34D399",
    black: "#1C1917",
  };
  return map[color.toLowerCase()] ?? "#78716C";
};

export const useHealthResults = () => {
  const { trialResponse: data, cleanUpTrial } = useTrial();
  const [resultIndex, setResultIndex] = useState(0);

  if (!data) {
    return {
      data: null,
      metrics: [],
      resultIndex: 0,
      setResultIndex: () => {},
      lockedInScore: 0,
      lockedInColor: "#78716C",
      cleanUpTrial,
    };
  }

  const metrics = [
    {
      name: "General Mental Health",
      description: data.generalMentalHealth,
      score: data.generalMentalHealthScore,
      color: generateColor(data.generalMentalHealthColor),
      items: [
        {
          name: "Depression",
          description: data.possibleDepressionDescription,
          value: data.possibleDepressionScore,
          color: generateColor(data.possibleDepressionColor),
          icon: Brain,
        },
        {
          name: "Loneliness",
          description: data.lonelinessScoreDescription,
          value: data.lonelinessScore,
          color: generateColor(data.lonelinessColor),
          icon: Heart,
        },
        {
          name: "Suicidal Risk",
          description: data.suicidalRiskScoreDescription,
          value: data.suicidalRiskScore,
          color: generateColor(data.suicidalRiskColor),
          icon: Activity,
        },
      ],
    },
    {
      name: "Exam Anxiety",
      score: data.examAnxietyScore,
      description: data.examAnxiety,
      color: generateColor(data.examAnxietyColor),
      items: [
        {
          name: "Physical Distress",
          description: data.physicalDistressScoreDescription,
          value: data.physicalDistressScore,
          color: generateColor(data.physicalDistressColor),
          icon: Zap,
        },
        {
          name: "Core Anxiety",
          description: data.coreAnxietyScoreDescription,
          value: data.coreAnxietyScore,
          color: generateColor(data.coreAnxietyColor),
          icon: TrendingUp,
        },
      ],
    },
    {
      name: "Exam Prep",
      score: data.examPrepScore,
      description: data.examPrep,
      color: generateColor(data.examPrepColor),
      items: [
        {
          name: "Motivation",
          description: data.motivationScoreDescription,
          value: data.motivationScore,
          color: generateColor(data.motivationColor),
          icon: Target,
        },
        {
          name: "Procrastination",
          description: data.procrastinationScoreDescription,
          value: data.procrastinationScore,
          color: generateColor(data.procrastinationColor),
          icon: Compass,
        },
        {
          name: "Study Skills",
          description: data.studySkillsScoreDescription,
          value: data.studySkillsScore,
          color: generateColor(data.studySkillsColor),
          icon: Brain,
        },
      ],
    },
  ];

  const lockedInScore =
    Math.round(+data.lockedInScore.split("/")[0] * 100) / 100;
  const lockedInColor = generateColor(data.lockedInColor);

  return {
    data,
    metrics,
    resultIndex,
    setResultIndex,
    lockedInScore,
    lockedInColor,
    cleanUpTrial,
  };
};
