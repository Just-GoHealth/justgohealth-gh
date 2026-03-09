"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ContactsModal from "@/components/ContactsModal";
import { AnimatePresence, motion } from "framer-motion";
import Trial from "@/components/Trial/Trial";
import { Badge } from "@/components/ui/badge";
import AmbassadorPanel from "@/components/ambassador-panel";
import { useLandingPage } from "@/hooks/use-landing-page";

export default function Home() {
  const {
    activeIndex,
    isMobile,
    schools,
    setShowContacts,
    setShowTrialModal,
    showContacts,
    showTrialModal,
  } = useLandingPage();
  return (
    <div className="h-screen flex flex-col bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/setornam.jpg')] bg-cover bg-center overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-3 lg:px-6 lg:py-4 z-10 w-full">
        <Link href="/manifesto">
          <Button
            variant="ghost"
            className="text-white font-medium cursor-pointer hover:opacity-70 transition-opacity text-lg lg:text-2xl"
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
                src="/logos/logo-white.png"
                alt="JustGo Health Logo"
                width={250}
                height={40}
              />
            </Button>
          </Link>
        </div>

        <Link href="/join-us">
          <Button
            variant="ghost"
            className="text-white cursor-pointer font-medium hover:opacity-70 transition-opacity text-xl"
          >
            Join Us
          </Button>
        </Link>
      </header>

      {/* Main Content Grid */}
      <main className="flex-1 grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
        {/* Left Content Block */}
        <div className="hidden lg:flex items-center p-6">
          <div className="max-w-xs w-full">
            <div className="bg-white/80 py-10 rounded-2xl">
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
                  onClick={() =>
                    schools?.length ? setShowTrialModal(true) : null
                  }
                >
                  Try it for free
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Ambassador slot */}
        <div className="ml-auto pr-6">
          <AmbassadorPanel />
        </div>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-between px-6 py-2 z-10 w-full">
        <Button
          variant="ghost"
          className="text-white text-xl font-medium hover:opacity-70 transition-opacity"
          onClick={() => setShowContacts(true)}
        >
          Contacts
        </Button>
        <Badge className="p-1.5 px-6 gap-4 bg-primary/80">
          <Image
            src={"/sharks-quiz.png"}
            alt=""
            width={50}
            height={50}
            className="rounded-full bg-white p-1"
          />
          <p className="text-base text-white">
            Designed with experts for the{" "}
            <span className="font-bold">Sharks Quiz Season 9</span>
          </p>
        </Badge>

        <Badge className="bg-transparent p-0">
          <Image
            src={"/sharks-quiz.png"}
            alt=""
            width={60}
            height={50}
            className="rounded-full bg-white p-1"
          />
        </Badge>
      </footer>

      {/* Mobile-only bottom CTA with animation, appears after intro */}
      <AnimatePresence>
        {isMobile && activeIndex >= 1 && (
          <motion.button
            key="mobile-cta"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, y: 24, transition: { duration: 0.3 } }}
            onClick={() => (schools?.length ? setShowTrialModal(true) : null)}
            className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-8 py-4 rounded-full font-medium shadow-md z-20 scale-[0.8] text-xl"
          >
            Try it for free
          </motion.button>
        )}
      </AnimatePresence>

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={showContacts}
        onClose={() => setShowContacts(false)}
      />

      {showTrialModal && (
        <Trial setShowTrialModal={setShowTrialModal} schools={schools} />
      )}
    </div>
  );
}
