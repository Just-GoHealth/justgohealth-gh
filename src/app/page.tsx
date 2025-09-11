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

export default function Home() {
  const [showContacts, setShowContacts] = useState(false);
  const heroes = useMemo(() => [GirlHero, SethHero, DoctorHero], []);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % heroes.length);
    }, 3500);
    return () => clearInterval(id);
  }, [isPlaying, heroes.length]);

  const CurrentHero = heroes[activeIndex] as React.ComponentType<any>;

  const variants = {
    fadeScale: {
      initial: { opacity: 0, scale: 0.96 },
      animate: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
      exit: { opacity: 0, scale: 1.04, transition: { duration: 0.6, ease: "easeInOut" } },
    },
    slide: {
      initial: { x: "10%", opacity: 0 },
      animate: { x: 0, opacity: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
      exit: { x: "-10%", opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    },
    rotateReveal: {
      initial: { rotate: -8, opacity: 0.0, filter: "blur(4px)" },
      animate: { rotate: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
      exit: { rotate: 8, opacity: 0, filter: "blur(4px)", transition: { duration: 0.6, ease: "easeInOut" } },
    },
  } as const;

  const pickVariantKey = (index: number) => (index % 3 === 0 ? "fadeScale" : index % 3 === 1 ? "slide" : "rotateReveal");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex flex-col lg:flex-row flex-1">
        {/* Header elements as part of main content */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 z-10">
          <Link href="/manifesto">
            <Button 
              variant="ghost" 
              className="text-black text-2xl font-medium hover:opacity-70 transition-opacity"
            >
              Manifesto
            </Button>
          </Link>
          
          <div className="flex items-center justify-center flex-1">
          <Link href="/">
            <Image
              src="/logos/logo-black.png"
              alt="JustGo Health Logo"
              width={220}
              height={40}
              className="h-10 object-contain"
            />
            </Link>
          </div>
          
        <Link href="/join-us">
          <Button 
            variant="ghost" 
            className="text-black text-2xl font-medium hover:opacity-70 transition-opacity"
          >
            Join Us
          </Button>
        </Link>
        </div>
        {/* Left Content Block */}
        <div className="w-2/5 flex items-center justify-center p-8 lg:p-12 order-2 lg:order-1">
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
                <Button className="bg-red-600 text-2xl text-white px-8 py-6 rounded-full font-medium hover:bg-red-700 transition-colors mt-8">
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
            initial="initial"
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
            className="text-black text-2xl font-medium hover:opacity-70 transition-opacity"
            onClick={() => setShowContacts(true)}
          >
            Contacts
          </Button>
          
          <Button onClick={() => setIsPlaying((p) => !p)} className="w-[70px] h-[70px] rounded-full flex items-center justify-center hover:opacity-90 transition-all" style={{ backgroundColor: '#2b3990' }}>
            <PlayIcon fill="white" className={`w-16 h-16 scale-[2.4] ${isPlaying ? '' : 'opacity-60'}`} />
          </Button>
        </div>
      </main>

      {/* Contacts Modal */}
      <ContactsModal 
        isOpen={showContacts} 
        onClose={() => setShowContacts(false)} 
      />
    </div>
  );
}