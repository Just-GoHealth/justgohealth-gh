/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function GirlHero({ isPlaying = true }: { isPlaying?: boolean }) {
  const [scope, animate] = useAnimate();
  const anim = animate as unknown as (
    target: any,
    keyframes?: any,
    options?: any
  ) => any;

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 1023px)").matches;

  useEffect(() => {
    const run = async () => {
      const controls: any[] = [];

      // Image parallax
      controls.push(
        anim(
          "[data-girl-image]",
          { opacity: [0, 1], y: [20, 0] },
          { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
        )
      );

      // LOCK / IN
      controls.push(
        anim(
          "[data-lock]",
          { y: [40, 0], opacity: [0, 1] },
          { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }
        )
      );

      controls.push(
        anim(
          "[data-in]",
          { y: [40, 0], opacity: [0, 1] },
          { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.75 }
        )
      );

      // Lines
      controls.push(
        anim(
          "[data-line]",
          { opacity: [0, 1], y: [10, 0] },
          { duration: 0.4, delay: 1.0, ease: "easeOut", stagger: 0.15 }
        )
      );

      return controls;
    };

    let controls: any[] | undefined;
    run().then((c) => {
      controls = c;
      if (!isPlaying && controls) controls.forEach((ctl) => ctl?.pause?.());
    });

    return () => {
      controls?.forEach((ctl) => ctl?.cancel?.());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const animations =
      (scope.current as HTMLElement | null)?.getAnimations?.() || [];
    animations.forEach((a) => (isPlaying ? a.play() : a.pause()));
  }, [isPlaying, scope]);

  return (
    <div
      ref={scope}
      className={`relative h-screen order-1 lg:order-2 overflow-hidden ${
        isMobile ? "hidden" : ""
      }`}
    >
      {/* IMAGE — RIGHT SIDE (matching DoctorHero positioning) */}
      <Image
        src="/hero/girl.png"
        alt="Portrait of a woman"
        width={900}
        height={300}
        data-girl-image
        priority
        className="object-contain object-left ml-[574px] w-[870px] h-[665px] mt-[60px]"
      />

      {/* CENTER CONTENT — positioned in the center-left area */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="text-center -ml-[200px]">
          {/* LOCK IN */}
          <h2 className="text-[220px] font-bold leading-none text-[#2bb573]">
            <span data-lock className="block">
              LOCK
            </span>
            <span data-in className="-mt-14 block">
              IN
            </span>
          </h2>

          {/* SUPPORTING TEXT — CENTERED UNDER LOCK IN */}
          <div className="mt-8 text-red-500 text-3xl font-bold space-y-2">
            <p data-line className="underline underline-offset-4">Feeling depressed or sad?</p>
            <p data-line className="underline underline-offset-4">Screen yourself with our App.</p>
            <p data-line className="underline underline-offset-4">Connect with cares.</p>
          </div>
        </div>
      </div>
    </div>
  );
}