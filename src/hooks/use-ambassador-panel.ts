"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  AMBASSADOR_ACHIEVEMENTS,
  HOLD_DURATION,
  STAGGER_START,
  STAGGER_STEP,
} from "@/lib/constants";

export function useAmbassadorPanel() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [barStyle, setBarStyle] = useState({ opacity: 0, top: 0, height: 0 });
  const [itemStates, setItemStates] = useState(
    AMBASSADOR_ACHIEVEMENTS.map(() => ({ visible: false, iconVisible: false })),
  );
  const [animKey, setAnimKey] = useState(0);
  const [replayRotate, setReplayRotate] = useState(false);

  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Clear all pending timers
  const clearAll = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  // Position the sliding bar onto a row
  const positionBar = useCallback((index: number) => {
    const list = listRef.current;
    const row = rowRefs.current[index];
    if (!list || !row) return;
    const listRect = list.getBoundingClientRect();
    const rowRect = row.getBoundingClientRect();
    setBarStyle({
      opacity: 1,
      top: rowRect.top - listRect.top,
      height: rowRect.height,
    });
    setActiveIndex(index);
  }, []);

  // Start infinite highlight loop
  const startLoop = useCallback(() => {
    let idx = 0;
    const tick = () => {
      positionBar(idx);
      idx = (idx + 1) % AMBASSADOR_ACHIEVEMENTS.length;
    };
    tick();
    intervalRef.current = setInterval(tick, HOLD_DURATION);
  }, [positionBar]);

  // Full entrance animation sequence
  const runAnimation = useCallback(() => {
    clearAll();

    // Reset state
    setActiveIndex(-1);
    setBarStyle({ opacity: 0, top: 0, height: 0 });
    setItemStates(
      AMBASSADOR_ACHIEVEMENTS.map(() => ({
        visible: false,
        iconVisible: false,
      })),
    );

    // Stagger rows in
    AMBASSADOR_ACHIEVEMENTS.forEach((_, i) => {
      const rowDelay = STAGGER_START + i * STAGGER_STEP;
      const iconDelay = rowDelay + 150;

      timeoutsRef.current.push(
        setTimeout(() => {
          setItemStates((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], visible: true };
            return next;
          });
        }, rowDelay),
      );

      timeoutsRef.current.push(
        setTimeout(() => {
          setItemStates((prev) => {
            const next = [...prev];
            next[i] = { ...next[i], iconVisible: true };
            return next;
          });
        }, iconDelay),
      );
    });

    // Start highlight loop after last item is fully in
    const loopDelay =
      STAGGER_START + (AMBASSADOR_ACHIEVEMENTS.length - 1) * STAGGER_STEP + 800;
    timeoutsRef.current.push(setTimeout(startLoop, loopDelay));
  }, [clearAll, startLoop]);

  // Mount
  useEffect(() => {
    runAnimation();
    return clearAll;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleReplay = () => {
    setReplayRotate(true);
    setTimeout(() => setReplayRotate(false), 500);
    setAnimKey((k) => k + 1);
    runAnimation();
  };

    return {
      AMBASSADOR_ACHIEVEMENTS, animKey,listRef,barStyle,itemStates,activeIndex,rowRefs,handleReplay,
  };
}
