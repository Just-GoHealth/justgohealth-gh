"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import ContactsModal from "@/components/ContactsModal";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export default function ManifestoPage() {
  const isMobile = useIsMobile();
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <Button
          variant="ghost"
          className={`text-black font-medium ${
            isMobile ? "text-base" : "text-xl"
          }`}
        >
          Manifesto
        </Button>

        <Link href="/">
          <Image
            src="/logos/logo-black.png"
            alt="JustGo Health Logo"
            width={200}
            height={40}
            className="object-contain h-8 md:h-10"
          />
        </Link>

        <Link href="/join-us">
          <Button
            variant="ghost"
            className={`text-black font-medium ${
              isMobile ? "text-base" : "text-xl"
            }`}
          >
            Join Us
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-3xl w-full text-center">
          <h1
            className={`font-bold text-red-600 mb-6 ${
              isMobile ? "text-3xl" : "text-5xl"
            }`}
          >
            The Best. Ever. Anywhere.
          </h1>

          <div
            className={`space-y-5 text-black text-left ${
              isMobile ? "text-base" : "text-lg"
            }`}
          >
            <p>
              We, at JustGo Health, promise on our honor to ensureS that the
              mental health of every Ghanaian student is{" "}
              <span className="text-red-600 font-bold">
                the best ever, anywhere on earth.
              </span>
            </p>

            <p>
              Our target is clear: to build stronger mental health support in
              Ghanaian schools than even at Harvard University. On Harvard&apos;s
              campus, a student has{" "}
              <span className="text-red-600 font-bold">
                15 options for mental health care, all digital
              </span>{" "}
              and{" "}
              <span className="text-red-600 font-bold">
                available 24/7.
              </span>
            </p>

            <p className="text-red-500 font-semibold text-center">
              We have studied. We are prepared. We are committed.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-start px-6 py-4">
        <Button
          variant="ghost"
          className={`text-black font-medium ${
            isMobile ? "text-base" : "text-xl"
          }`}
          onClick={() => setShowContacts(true)}
        >
          Contacts
        </Button>
      </footer>

      {/* Contacts Modal */}
      <ContactsModal
        isOpen={showContacts}
        onClose={() => setShowContacts(false)}
      />
    </div>
  );
}
