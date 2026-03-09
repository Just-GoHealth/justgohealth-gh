"use client";

import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { getSchools } from "@/actions/trial.action";
import { ISchool } from "@/types/school.interface";

export function useLandingPage() {
  const [showContacts, setShowContacts] = useState(false);
  const [schools, setSchools] = useState<ISchool[]>([]);
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const [showTrialModal, setShowTrialModal] = useState(false);

  // Fetch schools
  useEffect(() => {
    (async function () {
      const res: ISchool[] = await getSchools();
      setSchools(res);
    })();
  }, []);

  return {
    schools,
    setShowTrialModal,
    setShowContacts,
    isMobile,
    activeIndex,
    setActiveIndex,
    showContacts,
    showTrialModal,
  };
}
