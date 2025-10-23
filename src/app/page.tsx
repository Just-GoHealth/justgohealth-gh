/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@/components/ui/button";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GirlHero from "@/components/GirlHero";
import ContactsModal from "@/components/ContactsModal";
import { useEffect, useMemo, useState } from "react";
import SethHero from "@/components/SethHero";
import DoctorHero from "@/components/DoctorHero";
import { AnimatePresence, motion } from "framer-motion";
import IntroMessageHero from "@/components/IntroMessageHero";
import GirlHeroMobile from "@/components/GirlHeroMobile";
import SethHeroMobile from "@/components/SethHeroMobile";
import DoctorHeroMobile from "@/components/DoctorHeroMobile";
import { useIsMobile } from "@/components/use-mobile";

import Trial from "@/components/Trial";

export default function Home() {
  const [showContacts, setShowContacts] = useState(false);
  const isMobile = useIsMobile();
  const heroes = useMemo(
    () =>
      isMobile
        ? [IntroMessageHero, GirlHeroMobile, SethHeroMobile, DoctorHeroMobile]
        : [IntroMessageHero, GirlHero, SethHero, DoctorHero],
    [isMobile]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [showTrialModal, setShowTrialModal] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    // Faster rotation: shorter intro and overall slide durations to reduce blank time and
    // make the hero feel snappier. Desktop: 8s, Mobile intro: 2s, Mobile others: 6s.
    const id = setInterval(
      () => {
        setActiveIndex((i) => (i + 1) % heroes.length);
      },
      isMobile ? (activeIndex === 0 ? 2000 : 6000) : 8000
    );
    return () => clearInterval(id);
  }, [isPlaying, heroes.length, isMobile, activeIndex]);

  const CurrentHero = heroes[activeIndex] as React.ComponentType<any>;

  const variants = {
    fadeScale: {
      initial: { opacity: 0, scale: 0.96 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
      },
      exit: {
        opacity: 0,
        scale: 1.04,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    },
    slide: {
      initial: { x: "8%", opacity: 0 },
      animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
      },
      exit: {
        x: "-8%",
        opacity: 0,
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    },
    rotateReveal: {
      initial: { rotate: -8, opacity: 0.0, filter: "blur(4px)" },
      animate: {
        rotate: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      },
      exit: {
        rotate: 8,
        opacity: 0,
        filter: "blur(4px)",
        transition: { duration: 0.4, ease: "easeInOut" },
      },
    },
  } as const;

  const pickVariantKey = (index: number) =>
    index % 3 === 0 ? "fadeScale" : index % 3 === 1 ? "slide" : "rotateReveal";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex flex-col lg:flex-row flex-1">
        {/* Header elements as part of main content */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4 z-10">
          <Link href="/manifesto">
            <Button
              variant="ghost"
              className="text-black cursor-pointer font-medium hover:opacity-70 transition-opacity text-lg lg:text-2xl"
            >
              Manifesto
            </Button>
          </Link>

          <div className="flex items-center justify-center flex-1">
            <Link href="/">
              <Button
                variant="ghost"
                className="cursor-pointer p-0 hover:opacity-100"
              >
                <Image
                  src="/logos/logo-black.png"
                  alt="JustGo Health Logo"
                  width={220}
                  height={40}
                  className="h-8 lg:h-10 object-contain"
                />
              </Button>
            </Link>
          </div>

          <Link href="/join-us">
            <Button
              variant="ghost"
              className="text-black cursor-pointer font-medium hover:opacity-70 transition-opacity text-lg lg:text-2xl"
            >
              Join Us
            </Button>
          </Link>
        </div>
        {/* Left Content Block */}
        <div className="hidden lg:flex w-2/5 items-center justify-center p-8 lg:p-12 order-2 lg:order-1">
          <div className="max-w-md w-[300px]">
            <div className="bg-green-200 px-8 py-22 rounded-lg">
              <div className="space-y-2 text-center">
                <p className="text-black text-2xl">It all starts</p>
                <p className="text-black text-2xl">with your</p>
                <h1 className="text-black text-5xl lg:text-6xl font-bold leading-tight">
                  Mental
                  <br />
                  Health.
                </h1>
                <Button
                  className="bg-red-600 hover:cursor-pointer text-2xl text-white px-8 py-6 rounded-full font-medium hover:bg-red-700 transition-colors mt-8"
                  onClick={() => setShowTrialModal(true)}
                >
                  Try it for free
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero slot with animated transitions. Layout/positioning preserved by wrapping motion.div only. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeIndex}
            variants={variants[pickVariantKey(activeIndex)]}
            // Disable the initial variant for the very first slide so it renders
            // immediately without waiting for the "initial" animation.
            initial={activeIndex === 0 ? false : "initial"}
            animate="animate"
            exit="exit"
            className="contents"
          >
            <CurrentHero isPlaying={isPlaying} />
          </motion.div>
        </AnimatePresence>

        {/* Footer elements as part of main content */}
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
          <Button
            variant="ghost"
            className="text-black text-xl lg:text-2xl font-medium hover:opacity-70 transition-opacity"
            onClick={() => setShowContacts(true)}
          >
            Contacts
          </Button>

          <Button
            onClick={() => setIsPlaying((p) => !p)}
            className="w-[76px] h-[76px] lg:w-[70px] lg:h-[70px] -mt-8 rounded-full items-center justify-center hover:opacity-90 transition-all"
            style={{ backgroundColor: "#2b3990" }}
          >
            <PlayIcon
              fill="white"
              className={`w-22 h-22 ${isPlaying ? "" : "opacity-60"}`}
            />
          </Button>
        </div>

        {/* Mobile-only bottom CTA with animation, appears after intro */}
        <AnimatePresence>
          {isMobile && activeIndex >= 1 && (
            <motion.button
              key="mobile-cta"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, y: 24, transition: { duration: 0.3 } }}
              className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-4 rounded-full font-medium shadow-md z-20 scale-[0.8] text-xl"
            >
              Try it for free
            </motion.button>
          )}
        </AnimatePresence>
      </main>

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={showContacts}
        onClose={() => setShowContacts(false)}
      />

      {showTrialModal && <Trial setShowTrialModal={setShowTrialModal} />}
    </div>
  );
}
